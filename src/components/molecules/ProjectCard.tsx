'use client'
import {Card  as ShadcnCard } from "@/components/ui/card"
interface ButProjectCardProps{
  label: string
}

export default function ProjectCard({ label }: ButProjectCardProps) {
  return (
    <ShadcnCard className="font-mono text-xs px-2 py-0.5 border border-white/10 text-white/30 uppercase tracking-wider bg-transparent rounded-none !hover:bg-transparent !hover:text-white/50">
      {label}
    </ShadcnCard>
  )
}
