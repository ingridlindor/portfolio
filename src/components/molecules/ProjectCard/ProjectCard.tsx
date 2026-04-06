import Tag from '@/src/components/atoms/Tag/Tag'
export type AccentColor = 'yellow' | 'cyan' | 'pink' | 'green'

interface ProjectCardProps {
  num:    string
  title:  string
  desc:   string
  tags:   string[]
  url:    string
  accent: AccentColor
}

const accentTop: Record<AccentColor, string> = {
  yellow: 'bg-[var(--yellow)]',
  cyan:   'bg-[var(--cyan)]',
  pink:   'bg-[var(--pink)]',
  green:  'bg-[var(--green)]',

  }
export default function ProjectCard({ num, title, desc, tags, url, accent }: ProjectCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block border-2 border-white/10 bg-retro-bg2 p-5 md:p-6 hover:border-white/20 transition-colors"
    >
      {/* Accent bar top — mobile first: full width */}
      <div className={`absolute top-0 left-0 right-0 h-[3px] ${accentTop[accent]}`} />

      <p className="font-['Press_Start_2P'] text-[0.45rem] text-white/40 text-[0.30rem]  tracking-widest mb-3">
      PROJECT_{num}
      </p>

      <p className="font-['VT323'] text-[2.00rem] text-white/100 leading-loose mb-3">
        {title}
      </p>

      <p className="font-mono text-[0.65rem] text-white/40 leading-relaxed mb-4">
        {desc}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {tags.map(t => <Tag key={t} label={t} />)}
      </div>

      {/* Arrow — hidden on mobile, visible on md+ */}
      <span className="absolute bottom-4 right-4 font-crt text-xl text-white/15 group-hover:text-[var(--yellow)] transition-colors">
        ↗
      </span>
    </a>
  )
}