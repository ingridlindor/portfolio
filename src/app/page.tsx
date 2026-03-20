import Button from "@/src/components/atoms/Button"
import  Badge  from "@/src/components/atoms/Badge"
import StatusBadge from "@/src/components/atoms/StatusBadge"
import ProjectCard from "../components/molecules/ProjectCard"

export default function HomePage() {
  return (
    <main className="min-h-screen p-10 flex gap-4 ">
     
      <Button variant="primary" href="#work">▶ See my work</Button>
     
      <Button variant="secondary">Read more</Button>

      <Badge label="TS" />
      <Badge label="Postgres" />

      <StatusBadge available={true} />

      <ProjectCard label="// Project_01">
       teste
      </ProjectCard>


      
    
    </main>
  )
}