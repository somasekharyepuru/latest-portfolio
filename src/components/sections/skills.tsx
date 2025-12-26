import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { skillDomains, careerTimeline } from "@/lib/data"
import { Bot, Code2, Server, Database, GitBranch, Zap } from "lucide-react"

const iconMap: Record<string, React.ReactNode> = {
  pink: <Bot className="h-6 w-6 text-pink-500" />,
  blue: <Code2 className="h-6 w-6 text-blue-500" />,
  green: <Server className="h-6 w-6 text-green-500" />,
  purple: <Database className="h-6 w-6 text-purple-500" />,
  orange: <GitBranch className="h-6 w-6 text-orange-500" />,
  yellow: <Zap className="h-6 w-6 text-yellow-500" />,
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-purple-500 rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A journey through 7+ years of continuous learning and mastery in modern web development
          </p>
        </div>

        {/* Skill Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skillDomains.map((domain) => (
            <Card key={domain.title} className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  {iconMap[domain.color]}
                  <CardTitle className="text-lg">{domain.title}</CardTitle>
                </div>
                <CardDescription>{domain.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {domain.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Career Timeline */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-12">Career Journey</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {careerTimeline.map((item, index) => (
                <div
                  key={item.period}
                  className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <Card className="card-hover">
                      <CardContent className="p-6">
                        <span className="text-sm font-mono text-primary">{item.period}</span>
                        <h4 className="text-xl font-semibold mt-2 mb-3">{item.title}</h4>
                        <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
