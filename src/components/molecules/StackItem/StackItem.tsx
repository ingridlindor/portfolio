interface StackItemProps {
  name: string
  fav:  boolean
}

export default function StackItem({ name, fav }: StackItemProps) {
  return (
    <div className={`
      flex flex-col items-center gap-1.5 p-4 text-center
      transition-colors cursor-default
      ${fav
        ? 'bg-retro-yellow/5 hover:bg-retro-yellow/10'
        : 'bg-retro-bg hover:bg-retro-bg2'
      }
    `}>
      <span className={`font-crt text-3xl ${fav ? 'text-retro-yellow' : 'text-white/30'}`}>
        ◈
      </span>
      <span className={`font-mono text-[0.65rem] tracking-wider ${fav ? 'text-retro-yellow' : 'text-white/30'}`}>
        {name}{fav ? ' ★' : ''}
      </span>
    </div>
  )
}
