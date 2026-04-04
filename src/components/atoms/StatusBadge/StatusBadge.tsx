interface StatusBadgeProps {
  available: boolean
}

export default function StatusBadge({ available }: StatusBadgeProps) {
  return (
    <div className="flex items-center gap-2 font-mono text-sm tracking-widest">
      <span
        className={`w-2 h-2 rounded-full ${available ? 'bg-[var(--green)] animate-pulse' : 'bg-white/20'}`}
      />
      <span className={available ? 'text-[var(--green)]' : 'text-white/30'}>
        {available ? 'available' : 'unavailable'}
      </span>
    </div>
  )
}