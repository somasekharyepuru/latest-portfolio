"use client"

import { useActionState } from "react"
import { submitContactForm, type ContactFormState } from "@/app/actions"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Send, Loader2 } from "lucide-react"
import { siteConfig, availableFor } from "@/lib/data"

const initialState: ContactFormState = {
  success: false,
  message: "",
}

export default function Contact() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)

  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-16">
          <p className="text-sm font-medium text-muted-foreground mb-2 tracking-wide uppercase">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Let&apos;s Work Together
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-3">
            {state.message && (
              <div
                className={`p-4 rounded-lg mb-6 text-sm ${state.success
                    ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                    : "bg-destructive/10 text-destructive border border-destructive/20"
                  }`}
              >
                {state.message}
              </div>
            )}

            <form action={formAction} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className={`bg-background ${state.errors?.name ? "border-destructive" : ""}`}
                  />
                  {state.errors?.name && (
                    <p className="text-xs text-destructive">{state.errors.name[0]}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className={`bg-background ${state.errors?.email ? "border-destructive" : ""}`}
                  />
                  {state.errors?.email && (
                    <p className="text-xs text-destructive">{state.errors.email[0]}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  className={`bg-background ${state.errors?.subject ? "border-destructive" : ""}`}
                />
                {state.errors?.subject && (
                  <p className="text-xs text-destructive">{state.errors.subject[0]}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  className={`bg-background resize-none ${state.errors?.message ? "border-destructive" : ""}`}
                />
                {state.errors?.message && (
                  <p className="text-xs text-destructive">{state.errors.message[0]}</p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isPending}
                className="w-full md:w-auto px-8"
              >
                {isPending ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-muted">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-1">Email</h4>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-muted">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-1">Location</h4>
                  <p className="text-sm text-muted-foreground">{siteConfig.location}</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <h4 className="text-sm font-medium mb-4">Available for</h4>
              <ul className="space-y-2">
                {availableFor.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
