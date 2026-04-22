import NavLink from '@/src/components/molecules/NavLink/NavLink'
import StatusBadge from '@/src/components/atoms/StatusBadge/StatusBadge'
import { meta } from '@/src/config/meta'

const links = [
  { href: '#about',   label: '[about]'   },
  { href: '#work',    label: '[work]'    },
  { href: '#stack',   label: '[stack]'   },
  { href: '#contact', label: '[contact]' },
]

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-var(--bg)) flex justify-between items-stretch px-4 md:px-6">
      {/* Logo */}
      <div className="flex items-center py-4">
        <span className="font-['VT323'] text-[1.7rem] text-(--yellow) tracking-wider" style={{ textShadow: '2px 2px 0 #996600' }}>
          {meta.name.toUpperCase()}
          <span className="blink">_</span>
        </span>
      </div>

      {/* Links — hidden on mobile, visible md+ */}
      <ul className="flex">
        {links.map(l =>  <NavLink key={l.href} label={l.label} href={l.href} hover="hover:text-black hover:bg-[var(--yellow)]"></NavLink>
        )}
      </ul>

      {/* Status badge — always visible */}
      {/* <div className="flex items-center px-2 md:px-4">
        <StatusBadge available={meta.available} />
      </div> */}
    </nav>
  )
}
