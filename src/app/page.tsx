
import StatusBadge from "@/src/components/atoms/StatusBadge/StatusBadge"
import Button from "../components/atoms/button/button"
import Tag from "../components/atoms/Tag/Tag"

export default function HomePage() {
  return (
    <main className="min-h-screen p-10 flex gap- flex-col justify-center items-start">

      <div className=" p-10 gap 2  flex-col justify-center items-start" >
        <h1 className="text-4xl font-bold text-white" >Atoms</h1>
        <StatusBadge available={true} /> 
        <Button href="#work" >▶ See my work</Button>
        <Button  href="#contact" variant="secondary" >✉ Contact me</Button>
        <Tag label="Full-stack developer" />
      </div>
     
      <div className="p-10 gap 2  flex-col justify-center items-start"> 
        <h1 className="text-4xl font-bold text-white">Molecules</h1>

      </div>


    
    </main>
  )
}