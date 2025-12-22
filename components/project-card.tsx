import Image from "next/image"
import Link from "next/link"
import { Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Project } from "@/types/project"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg overflow-hidden flex flex-col h-full transition-all hover:bg-white/15 hover:border-white/30">
      <div className="relative h-48 bg-black/20">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-normal mb-2 text-white">{project.title}</h3>
        <p className="text-black text-base mb-4 flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <Badge 
              key={tag} 
              variant="secondary" 
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm px-3 py-1"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex gap-3">
          <Button 
            asChild 
            variant="outline" 
            size="sm" 
            className="flex-1 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:text-white"
          >
            <Link href={project.codeUrl} target="_blank">
              <Github className="mr-2 h-4 w-4" />
              Code
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
