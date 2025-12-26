import Image from "next/image"
import { MapPin, Trophy, Users, Code } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { siteConfig } from "@/lib/data"

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            React/Next.js engineer with {siteConfig.stats.yearsExperience}+ years experience turning ambiguous ideas into performant, maintainable products.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Image - Large */}
          <Card className="md:col-span-2 overflow-hidden card-hover">
            <CardContent className="p-0 h-full">
              <div className="relative h-64 md:h-80 bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
                <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                  <Image
                    src="https://res.cloudinary.com/mscommerce/image/upload/v1757014312/IMG_8135_01_wvdxvd.jpg"
                    alt={`${siteConfig.name} profile photo`}
                    fill
                    sizes="(max-width: 768px) 160px, 224px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Differentiators */}
          <Card className="card-hover">
            <CardContent className="p-6 h-full">
              <h3 className="text-lg font-semibold mb-4">What Sets Me Apart</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                  Production-ready React patterns (RSC, server actions, caching)
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                  Design-system mindset (Radix/Tailwind, accessible by default)
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                  Performance first: measurable impact on key metrics
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Stats */}
          <Card className="card-hover">
            <CardContent className="p-6 h-full">
              <div className="grid grid-cols-2 gap-6 h-full items-center">
                <div className="text-center">
                  <Code className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-3xl font-bold text-primary">{siteConfig.stats.projects}+</div>
                  <p className="text-xs text-muted-foreground">Projects Delivered</p>
                </div>
                <div className="text-center">
                  <Users className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-3xl font-bold text-primary">{siteConfig.stats.clients}+</div>
                  <p className="text-xs text-muted-foreground">Happy Clients</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Location */}
          <Card className="card-hover">
            <CardContent className="p-6 h-full flex flex-col items-center justify-center text-center">
              <MapPin className="h-8 w-8 text-green-500 mb-3" />
              <h3 className="font-semibold">{siteConfig.location.split(",")[0]}</h3>
              <p className="text-sm text-muted-foreground">{siteConfig.location.split(",")[1]?.trim()}</p>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card className="card-hover">
            <CardContent className="p-6 h-full flex flex-col items-center justify-center text-center">
              <Trophy className="h-8 w-8 text-primary mb-3" />
              <div className="text-3xl font-bold text-primary">{siteConfig.stats.yearsExperience}+</div>
              <p className="text-sm text-muted-foreground">Years of Experience</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
