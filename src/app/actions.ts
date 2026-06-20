"use server"

import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().min(1, "Email is required").email("Invalid email address").max(254, "Email is too long"),
  subject: z.string().min(1, "Subject is required").max(200, "Subject is too long"),
  message: z.string().min(1, "Message is required").max(5000, "Message is too long (5000 chars max)"),
})

export type ContactFormState = {
  success: boolean
  message: string
  errors?: {
    name?: string[]
    email?: string[]
    subject?: string[]
    message?: string[]
  }
}

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Honeypot  -  real users never fill the hidden "company" field. Fail silent (looks like success to the bot).
  if (formData.get("company")) {
    return { success: true, message: "Message sent successfully! I'll get back to you soon." }
  }

  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  }

  const validatedFields = contactSchema.safeParse(rawData)

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Please fix the errors below.",
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  try {
    // Server-only  -  must NOT be NEXT_PUBLIC_ (that leaks the webhook URL into the client bundle).
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL

    if (!webhookUrl) {
      return {
        success: false,
        message: "Contact form is not configured. Please try again later.",
      }
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(validatedFields.data),
    })

    if (!response.ok) {
      throw new Error(`Webhook responded ${response.status}`)
    }

    return {
      success: true,
      message: "Message sent successfully! I'll get back to you soon.",
    }
  } catch {
    return {
      success: false,
      message: "Failed to send message. Please try again later.",
    }
  }
}
