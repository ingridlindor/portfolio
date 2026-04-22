interface SectionLabelProps {
  children: string
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="font-pixel text-[0.55rem] text-retro-green">&gt;</span>
      <span className="font-pixel text-[0.55rem] text-retro-pink tracking-widest uppercase">
        {children}
      </span>
      <div className="flex-1 h-px" style={{
        background: 'repeating-linear-gradient(90deg,rgba(255,255,255,0.08) 0,rgba(255,255,255,0.08) 4px,transparent 4px,transparent 8px)'
      }} />
    </div>
  )
}
