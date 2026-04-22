import { meta } from '@/src/config/meta'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/10 px-4 md:px-6 py-4 flex flex-col sm:flex-row justify-between gap-2 font-crt text-sm text-white/15 uppercase tracking-widest">
      <span>© {year} {meta.name.toUpperCase()} — ALL RIGHTS RESERVED</span>
      <span>
        BUILT WITH <span className="text-retro-green">LOVE &amp; CAFFEINE</span>  NEXT.JS + VERCEL
      </span>
    </footer>
  )
}
