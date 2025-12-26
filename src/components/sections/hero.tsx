import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/data"

const socialLinks = [
  { icon: Github, href: siteConfig.social.github, label: "GitHub" },
  { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: siteConfig.social.twitter, label: "Twitter" },
  { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-grid-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="container relative z-10 px-4 text-center">
        {/* Available Badge */}
        <div className="animate-fade-in mb-8">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse-soft" />
            Available for work
          </span>
        </div>

        {/* Name */}
        <h1 className="animate-fade-in-delay-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
          <span className="gradient-text">{siteConfig.name}</span>
        </h1>

        {/* Role */}
        <h2 className="animate-fade-in-delay-2 text-xl sm:text-2xl md:text-3xl font-semibold text-primary mb-6">
          {siteConfig.role}
        </h2>

        {/* Tagline */}
        <p className="animate-fade-in-delay-3 text-2xl sm:text-3xl md:text-4xl font-medium text-muted-foreground mb-6 max-w-3xl mx-auto">
          {siteConfig.tagline}
        </p>

        {/* Description */}
        <p className="animate-fade-in-delay-4 text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          {siteConfig.description}
        </p>

        {/* CTA */}
        <div className="animate-fade-in-delay-5 mb-12">
          <Button size="lg" asChild className="text-lg px-8 py-6">
            <Link href="#projects">See My Work</Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="animate-fade-in-delay-5 flex flex-wrap items-center justify-center gap-6 sm:gap-8 mb-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            <span>Trusted by {siteConfig.stats.companies}+ companies</span>
          </div>
          <div className="flex items-center gap-2">
            <Github className="h-4 w-4" />
            <span>{siteConfig.stats.projects}+ projects</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full" />
            <span>{siteConfig.stats.yearsExperience}+ years experience</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="animate-fade-in-delay-5 flex items-center justify-center gap-4">
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <Link
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="p-3 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-card/80 transition-all"
                aria-label={social.label}
              >
                <Icon className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              </Link>
            )
          })}
        </div>
      </div>

      {/* Scroll Indicator */}
      <Link
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors animate-bounce-soft"
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ArrowDown className="h-5 w-5" />
      </Link>
    </section>
  )
}
