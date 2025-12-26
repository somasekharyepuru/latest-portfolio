"use client"

import { useActionState } from "react"
import { submitContactForm, type ContactFormState } from "@/app/actions"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Send, Sparkles } from "lucide-react"
import { siteConfig, availableFor } from "@/lib/data"

const initialState: ContactFormState = {
  success: false,
  message: "",
}

export default function Contact() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-primary" />
            <h2 className="text-3xl md:text-5xl font-bold">Get In Touch</h2>
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-purple-500 rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <Card className="lg:col-span-2">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-8 w-1 bg-gradient-to-b from-primary to-purple-500 rounded-full" />
                <div>
                  <h3 className="text-xl font-bold">Send me a message</h3>
                  <p className="text-sm text-muted-foreground">I&apos;ll get back to you as soon as possible</p>
                </div>
              </div>

              {state.message && (
                <div
                  className={`p-4 rounded-lg mb-6 ${
                    state.success
                      ? "bg-green-500/10 text-green-500 border border-green-500/20"
                      : "bg-destructive/10 text-destructive border border-destructive/20"
                  }`}
                >
                  {state.message}
                </div>
              )}

              <form action={formAction} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      className={state.errors?.name ? "border-destructive" : ""}
                    />
                    {state.errors?.name && (
                      <p className="text-sm text-destructive">{state.errors.name[0]}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      className={state.errors?.email ? "border-destructive" : ""}
                    />
                    {state.errors?.email && (
                      <p className="text-sm text-destructive">{state.errors.email[0]}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Project Inquiry"
                    className={state.errors?.subject ? "border-destructive" : ""}
                  />
                  {state.errors?.subject && (
                    <p className="text-sm text-destructive">{state.errors.subject[0]}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    className={state.errors?.message ? "border-destructive" : ""}
                  />
                  {state.errors?.message && (
                    <p className="text-sm text-destructive">{state.errors.message[0]}</p>
                  )}
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isPending}>
                  {isPending ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
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
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card>
            <CardContent className="p-6 md:p-8 h-full">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-8 w-1 bg-gradient-to-b from-primary to-purple-500 rounded-full" />
                <h3 className="text-xl font-bold">Contact Information</h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-muted-foreground">{siteConfig.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-muted-foreground">{siteConfig.location}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="font-medium mb-4">Available for:</h4>
                <ul className="space-y-2">
                  {availableFor.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
