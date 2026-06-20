import { Badge } from "@/components/ui/badge"
import { skillDomains } from "@/lib/data"
import { Sparkles, Layout, Server, Database, type LucideIcon } from "lucide-react"

const domainIcons: Record<string, LucideIcon> = {
  "AI Engineering": Sparkles,
  Frontend: Layout,
  Backend: Server,
  Data: Database,
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
            Skills &amp; Technologies
          </h2>
        </div>

        {/* Asymmetric bento - 4 cells, col-span rhythm, no row-span */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {skillDomains.map((domain) => {
            const Icon = domainIcons[domain.title] ?? Layout
            const featured = domain.featured
            const span = featured ? "md:col-span-2" : domain.wide ? "md:col-span-2" : ""
            return (
              <article
                key={domain.title}
                className={[
                  "group relative flex flex-col rounded-2xl border p-6 md:p-8 transition-colors",
                  span,
                  featured
                    ? "bg-card border-border card-hover"
                    : "bg-card/60 border-border/60 hover:border-border",
                ].join(" ")}
              >
                <header className="flex items-center gap-3">
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground/80">
                    <Icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <h3 className={featured ? "text-xl font-semibold" : "text-lg font-semibold"}>
                    {domain.title}
                  </h3>
                </header>

                <p
                  className={[
                    "mt-3 text-muted-foreground leading-relaxed text-pretty",
                    featured ? "text-base max-w-xl" : "text-sm",
                  ].join(" ")}
                >
                  {domain.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2 pt-6">
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
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
