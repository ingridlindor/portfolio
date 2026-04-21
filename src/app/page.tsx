
import StatusBadge from "@/src/components/atoms/StatusBadge/StatusBadge"
import Button from "../components/atoms/button/button"
import Tag from "../components/atoms/Tag/Tag"
import ProjectCard from "../components/molecules/ProjectCard/ProjectCard"
import NavLink from "../components/molecules/NavLink/NavLink"
import StackItem from "../components/molecules/StackItem/StackItem"
import Nav from "../components/organisms/Nav/Nav"


export default function HomePage() {
  return (
    <main className="min-h-screen p-10 flex  flex-col justify-center items-start">
        <div className="w-full" > 
        <Nav  />   
        </div>

      <div className=" p-10 gap 2  flex-col justify-center items-start" >
        <h1 className="text-4xl font-bold text-white" >Atoms</h1>
        <StatusBadge available={true} /> 
        <Button href="#work" >▶ See my work</Button>
        <Button  href="#contact" variant="secondary" >✉ Contact me</Button>
        <Tag label="Full-stack developer" />
      </div>
     
      <div className="p-10 gap 2  flex-col justify-center items-start"> 

        <h1 className="text-4xl font-bold text-white">Molecules</h1>
        <ProjectCard
          num="01"
          title="Sistema de Leads"
          desc="Automação completa de captura e envio de leads."
          tags={['Next.js', 'Tailwind', 'API']}
          url="https://meusite.com"
          accent="yellow"
        />



      </div>

      <div className="flex p-10  justify-center items-start">
        <StackItem name="React" fav={false} />
        <StackItem name="Node.js" fav={false} />
        <StackItem name="Python" fav={false} />

      </div>

      <div className="flex p-10  justify-center items-start">
         <NavLink  label="[About]" href="#" hover="hover:text-black hover:bg-[var(--yellow)]"> </NavLink>
         <NavLink  label="[Work]" href="#" hover="hover:text-black hover:bg-[var(--yellow)]"> </NavLink>
         <NavLink  label="[Stack]" href="#" hover="hover:text-black hover:bg-[var(--yellow)]"> </NavLink>
         <NavLink  label="[Contact]" href="#" hover="hover:text-black hover:bg-[var(--yellow)]"> </NavLink>
     </div>

        

    </main>
  )
}