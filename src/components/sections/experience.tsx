import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { experiences } from "@/lib/data"
import { Building2, MapPin, Calendar } from "lucide-react"

const colorMap: Record<string, string> = {
  blue: "text-blue-500",
  green: "text-green-500",
  purple: "text-purple-500",
  orange: "text-orange-500",
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-purple-500 rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            7+ years of building digital solutions and growing as a developer
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />

          {/* Timeline Items */}
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.period} className="relative pl-12">
                {/* Dot */}
                <div className={`absolute left-2.5 top-6 w-3 h-3 rounded-full border-2 border-background ${colorMap[exp.color] ? `bg-${exp.color}-500` : "bg-primary"}`}
                     style={{ backgroundColor: exp.color === "blue" ? "#3b82f6" : exp.color === "green" ? "#22c55e" : exp.color === "purple" ? "#a855f7" : "#f97316" }} />

                <Card className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Building2 className={`h-6 w-6 ${colorMap[exp.color]}`} />
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Building2 className="h-4 w-4" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.type}
                      </span>
                    </div>

                    <span className="inline-block text-sm font-mono text-primary mb-3">{exp.period}</span>

                    <p className="text-sm text-muted-foreground mb-4">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
