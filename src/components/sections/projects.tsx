import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/lib/data"
import { ArrowUpRight } from "lucide-react"

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
            Featured Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group relative bg-card rounded-xl overflow-hidden border border-border/50 card-hover"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 [transition-timing-function:var(--ease-out)] [@media(hover:hover)]:group-hover:scale-105"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-muted-foreground">{project.year}</span>
                      <span className="text-muted-foreground/50">•</span>
                      <span className="text-xs text-muted-foreground">{project.category}</span>
                    </div>
                    <h3 className="text-xl font-semibold break-words">{project.title}</h3>
                  </div>
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex size-11 items-center justify-center -m-2 text-muted-foreground hover:text-foreground transition-[transform,color] duration-200 [transition-timing-function:var(--ease-out)] active:scale-[0.9]"
                      aria-label={`Visit ${project.title}`}
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </Link>
                  )}
                </div>

                <p className="text-sm text-foreground/75 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs font-normal"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="secondary" className="text-xs font-normal">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>

                <div className="text-xs text-muted-foreground pt-2 border-t border-border/50">
                  {project.role}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
