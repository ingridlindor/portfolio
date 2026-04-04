interface TagProps {
  label: string
}

export default function Tag({ label }: TagProps) {
  return (
  <span className="text-sm px-2 py-0.5 border border-white/10 text-white/30 uppercase tracking-wider ">

      {label}
    </span>
  )
}


