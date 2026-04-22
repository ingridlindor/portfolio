import React from 'react'
import SectionLabel from '@/src/components/atoms/SectionLabel/SectionLabel'
import ProjectCard from '@/src/components/molecules/ProjectCard/ProjectCard'
import { projects } from '@/src/config/meta'

export default function Projects() {
  return (
    <section id="work" className="border-b border-white/10 px-4 md:px-6 py-10 md:py-14">
      <SectionLabel>projects.log</SectionLabel>

      {/* Single col on mobile, 2 cols on md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {projects.map(p => (
          <ProjectCard key={p.num} {...p} />
        ))}
      </div>
    </section>
  )
}
