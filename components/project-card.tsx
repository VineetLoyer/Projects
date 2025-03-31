import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Code } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Project } from "@/types/project"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden flex flex-col h-full">
      <div className="relative h-48 bg-gray-800">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4 flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-gray-800 text-gray-300">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex gap-3">
          <Button asChild variant="outline" size="sm" className="flex-1">
            <Link href={project.demoUrl}>
              <ExternalLink className="mr-2 h-4 w-4" />
              Demo
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm" className="flex-1">
            <Link href={project.codeUrl}>
              <Code className="mr-2 h-4 w-4" />
              Code
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

