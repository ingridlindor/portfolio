interface NavLinkProps {
    children?: React.ReactNode
  label: string
  href: string
  hover: string
}

export default function NavLink({ label, href, hover }: NavLinkProps) {
  return (
    <li className="border border-white/10 list-none">
      <a
        href={href}
        className={` font-['VT323'] flex items-center h-full px-4 md:px-5 font-crt text-lg text-white/40 uppercase tracking-widest ${hover}`}
      >
        {label}
      </a>
    </li>
  )
}