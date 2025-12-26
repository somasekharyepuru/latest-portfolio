import { Badge } from "@/components/ui/badge"
import { skillDomains } from "@/lib/data"

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-16">
          <p className="text-sm font-medium text-muted-foreground mb-2 tracking-wide uppercase">
            Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Skills & Technologies
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillDomains.map((domain) => (
            <div key={domain.title} className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-1">{domain.title}</h3>
                <p className="text-sm text-muted-foreground">{domain.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {domain.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-xs font-normal"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
