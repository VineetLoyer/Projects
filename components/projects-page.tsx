"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { ProjectCard } from "@/components/project-card"
import { ProjectTags } from "@/components/project-tags"
import { projects } from "@/data/projects"

export function ProjectsPage() {
  const [selectedTag, setSelectedTag] = useState("All")

  // Filter projects based on selected tag and search query
  const filteredProjects = projects.filter((project) => {
    return selectedTag === "All" || project.tags.includes(selectedTag)
  })

  return (
    <div className="min-h-screen text-white">
      {/* Dynamic Background */}
      <div className="dynamic-bg-wrapper">
        <div className="dynamic-bg" />
      </div>

      <Header />

      <main className="relative z-10 max-w-[1200px] mx-auto px-4 py-8 pt-24 pb-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal italic text-white mb-4">Projects</h1>
        </div>

        <div className="mb-8">
          <ProjectTags selectedTag={selectedTag} onSelectTag={setSelectedTag} />
        </div>

        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

