import Link from "next/link"
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react"
import { siteConfig } from "@/lib/data"

const socialLinks = [
  { icon: Github, href: siteConfig.social.github, label: "GitHub" },
  { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background" />

      <div className="container relative z-10 px-6 max-w-5xl mx-auto">
        <div className="space-y-8">
          {/* Status indicator - subtle and professional */}
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Available for new opportunities
            </span>
          </div>

          {/* Name & Role */}
          <div className="space-y-4">
            <h1 className="animate-fade-in-delay-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              {siteConfig.name}
            </h1>
            <p className="animate-fade-in-delay-2 text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light">
              {siteConfig.role}
            </p>
          </div>

          {/* Description */}
          <p className="animate-fade-in-delay-3 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {siteConfig.description}
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-delay-4 flex flex-col sm:flex-row items-start gap-4 pt-4">
            <Link
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              View My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full font-medium hover:bg-muted transition-colors"
            >
              Get in Touch
            </Link>
          </div>

          {/* Social Links */}
          <div className="animate-fade-in-delay-4 flex items-center gap-4 pt-8">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
