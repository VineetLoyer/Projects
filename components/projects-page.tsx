"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { ProjectCard } from "@/components/project-card"
import { ProjectTags } from "@/components/project-tags"
import { projects } from "@/data/projects"
import { ProjectSlider } from "@/components/project-slider"

export function ProjectsPage() {
  const [selectedTag, setSelectedTag] = useState("All")

  // Filter projects based on selected tag and search query
  const filteredProjects = projects.filter((project) => {
    return selectedTag === "All" || project.tags.includes(selectedTag)
  })

  // Get featured projects
  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-indigo-400 mb-4">Projects</h1>
          <p className="text-xl text-gray-300">
            Explore my portfolio of data science and software engineering projects
          </p>
        </div>

        <div className="mb-8">
          <ProjectTags selectedTag={selectedTag} onSelectTag={setSelectedTag} />
        </div>

        {featuredProjects.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
            <ProjectSlider projects={featuredProjects} />
          </section>
        )}

        <section>
          <h2 className="text-3xl font-bold mb-8">All Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800 mt-20 py-6 px-4">
        <div className="container mx-auto">
          <p className="text-gray-400">© 2025 Vineet Kumar Loyer. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}

