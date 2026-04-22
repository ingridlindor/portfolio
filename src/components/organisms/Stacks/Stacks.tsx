import { stack } from '@/src/config/meta'
import SectionLabel from '@/src/components/atoms/SectionLabel/SectionLabel';
import StackItem from '@/src/components/molecules/StackItem/StackItem'; 

export default function Stack() {
  return (
    <section id="stack" className="border-b border-white/10 px-4 md:px-6 py-10 md:py-14">
      <SectionLabel>stack.json</SectionLabel>

      {/* Mobile: 2 cols, md: 4 cols */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 mb-5">
        {stack.map(s => (
          <StackItem key={s.name} name={s.name} fav={s.fav} />
        ))}
      </div>

      <p className="font-mono text-xs text-white/20 leading-loose">
        <span className="text-white/40">★ = what I reach for first.</span>{' '}
        The rest I'm comfortable with.<br />
        I care more about solving problems than stacking acronyms on a resume.
      </p>
    </section>
  )
}
