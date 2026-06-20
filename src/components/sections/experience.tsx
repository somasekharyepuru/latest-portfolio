import { Badge } from "@/components/ui/badge"
import { experiences } from "@/lib/data"

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
            Professional Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-12 top-0 bottom-0 w-px bg-border" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp) => (
              <div key={exp.period} className="relative pl-8 md:pl-24">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-12 top-1.5 w-2 h-2 -translate-x-1/2 rounded-full bg-foreground" />

                {/* Year badge - desktop */}
                <div className="hidden md:block absolute left-0 top-0 w-10 text-right">
                  <span className="text-xs font-mono text-muted-foreground">
                    {exp.period.split(" - ")[0]}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="text-lg font-semibold">{exp.title}</h3>
                      <span className="text-muted-foreground">at {exp.company}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mt-1">
                      <span>{exp.location}</span>
                      <span aria-hidden="true" className="text-muted-foreground/50">•</span>
                      <span>{exp.type}</span>
                      <span aria-hidden="true" className="text-muted-foreground/50">•</span>
                      <span className="md:hidden">{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-foreground/75 leading-relaxed text-pretty">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {exp.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="text-xs font-normal"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
