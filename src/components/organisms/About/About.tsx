import SectionLabel from '@/src/components/atoms/SectionLabel/SectionLabel'
import { meta } from '@/src/config/meta'

const stats = [
  { n: '2',  unit: 'yrs',  label: 'years in',    color: 'text-(--yellow)' },
  { n: '6+', unit: '',     label: 'tech stack',  color: 'text-(--cyan)'   },
  { n: '∞',  unit: '',     label: 'curiosity',   color: 'text-(--pink)'   },
  { n: '1',  unit: 'goal', label: 'enjoy it',    color: 'text-(--green)'  },
]

export default function About() {
  return (
    <section id="about" className="border-b border-white/10 px-4 md:px-6 py-10 md:py-14">
      <SectionLabel>about.exe</SectionLabel>

      {/* Stack on mobile, side-by-side on md+ */}
      <div className="flex flex-col md:grid md:grid-cols-2 gap-6">

        {/* Terminal */}
        <div className="bg-black  border border-(--green) p-5 font-mono text-xs leading-loose">
          <div className='text-(--green)'><span className="text-white/30">$ </span >whoami</div>
          <div className="pl-4 text-white/50">full-stack generalist, <span className="text-(--yellow)">{meta.location}</span></div>
          <div className='text-(--green)'><span className="text-white/30">$ </span>cat philosophy.txt</div>
          <div className="pl-4 text-white/50">code that ships &gt; code that is perfect</div>
          <div className="pl-4 text-white/50">if users enjoy it, we won the game</div>
          <div><span className="text-white/30">$ </span>cat status.txt</div>
          <div className="pl-4 text-(--green)">available &amp; excited<span className="blink">_</span></div>
        </div>

        {/* Stats grid — 2x2 */}
        <div className="grid grid-cols-2 gap-px bg-white/10">
          {stats.map(s => (
            <div key={s.label} className="bg-retro-bg2 p-5 flex flex-col items-center gap-1 text-center">
              <span className={`font-['Press_Start_2P'] text-2xl md:text-3xl ${s.color}`}>
                {s.n}<span className="text-base">{s.unit}</span>
              </span>
              <span className="font-['Press_Start_2P'] text-sm text-white/30 uppercase tracking-widest">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
