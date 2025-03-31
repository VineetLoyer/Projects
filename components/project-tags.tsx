"use client"

import { cn } from "@/lib/utils"
import { allTags } from "@/data/projects"

interface ProjectTagsProps {
  selectedTag: string
  onSelectTag: (tag: string) => void
}

export function ProjectTags({ selectedTag, onSelectTag }: ProjectTagsProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
      <button
        onClick={() => onSelectTag("All")}
        className={cn(
          "px-4 py-2 rounded-full text-sm font-medium transition-colors",
          selectedTag === "All" ? "bg-indigo-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700",
        )}
      >
        All
      </button>
      {allTags.map((tag) => (
        <button
          key={tag}
          onClick={() => onSelectTag(tag)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-colors",
            selectedTag === tag ? "bg-indigo-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700",
          )}
        >
          {tag}
        </button>
      ))}
    </div>
  )
}

