import Button from "@/src/components/atoms/Button";

export default function HomePage(){
  return (
    <main className="p-10 flex gap-4">
      <Button href="#work">▶ See my work</Button>
      <Button variant="secondary">Read more</Button>
    </main>
  )
}