
import StatusBadge from "@/src/components/atoms/StatusBadge/StatusBadge"
import Button from "../components/atoms/button/button"
import Tag from "../components/atoms/Tag/Tag"
import ProjectCard from "../components/molecules/ProjectCard/ProjectCard"
import NavLink from "../components/molecules/NavLink/NavLink"
import StackItem from "../components/molecules/StackItem/StackItem"
import Nav from "../components/organisms/Nav/Nav"
import SectionLabel from "../components/atoms/SectionLabel/SectionLabel"
import About from "../components/organisms/About/About"
import Contact from "../components/organisms/Contact/Contact"
import Footer from "../components/organisms/Footer/Footer"
import Hero from "../components/organisms/Hero/Hero"
import Projects from "../components/molecules/Projects/Projects"
import Stack from "../components/organisms/Stacks/Stacks"


export default function HomePage() {
  return (
    <>
    <Nav />
    <main >
      <Hero/>
   
    </main>
 </> )
}