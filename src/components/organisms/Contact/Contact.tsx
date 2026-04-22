import SectionLabel from '@/src/components/atoms/SectionLabel/SectionLabel'
import { meta } from '@/src/config/meta'
import Button from '../../atoms/button/button'  

const links = [
  { label: '✉ email me', href: `mailto:${meta.links.email}`  },
  { label: '⌥ github',   href: meta.links.Github,   variant: 'secondary' as const },
  { label: '◈ linkedin',  href: meta.links.Linkedin, variant: 'secondary' as const },
]

export default function Contact() {
  return (
    <section id="contact" className="px-4 md:px-6 py-10 md:py-14">
      <SectionLabel>contact.init</SectionLabel>

      <div className="relative border-[3px] border-(--yellow) bg-retro-bg2 p-8 md:p-14 text-center">

        {/* Top badge */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-(--yellow) px-4 py-1">
          <span className="font-['VT323'] text-[1.45rem] text-black tracking-widest whitespace-nowrap">
            ★ OPEN FOR OPPORTUNITIES ★
          </span>
        </div>

        {/* Headline — smaller on mobile */}
        <h2
          className="font-['VT323'] text-white sm:text-2xl md:text-4xl leading-loose mb-2"
        >
          GOT SOMETHING<br />
          <span className="text-(--pink)" style={{ textShadow: '2px 2px 0 #800020' }}>
            WORTH BUILDING?
          </span>
        </h2>

        <p className="font-mono text-xs text-white/30 mb-8 leading-loose">
          freelance · full-time · weird side projects · all of the above
        </p>

        {/* CTAs — stacked on mobile, row on sm+ */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {links.map(l => (
            <Button
              key={l.label}
              href={l.href}
              variant={l.variant ?? 'primary'}
            >
              {l.label}
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}