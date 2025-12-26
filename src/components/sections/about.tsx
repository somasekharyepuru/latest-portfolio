import Image from "next/image"
import { siteConfig } from "@/lib/data"

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="md:col-span-2">
            <div className="relative aspect-square max-w-xs mx-auto md:max-w-none">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-muted to-muted/50" />
              <Image
                src="https://res.cloudinary.com/mscommerce/image/upload/v1757014312/IMG_8135_01_wvdxvd.jpg"
                alt={`${siteConfig.name} profile photo`}
                fill
                sizes="(max-width: 768px) 280px, 320px"
                className="object-cover rounded-2xl"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-3 space-y-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2 tracking-wide uppercase">
                About Me
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Building products that matter
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a React/Next.js specialist with {siteConfig.stats.yearsExperience}+ years of experience
                turning ambiguous ideas into performant, maintainable products. Based in {siteConfig.location},
                I work with startups and enterprises to build web applications that drive real results.
              </p>
              <p>
                My focus is on creating production-ready solutions using modern technologies like
                React Server Components, server actions, and strategic caching. I believe in
                design systems, accessibility by default, and measurable performance improvements.
              </p>
            </div>

            {/* Stats - Minimal */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold">{siteConfig.stats.yearsExperience}+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold">{siteConfig.stats.projects}+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold">{siteConfig.stats.clients}+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
