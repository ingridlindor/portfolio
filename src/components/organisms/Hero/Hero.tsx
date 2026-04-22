'use client'

import Button from '@/src/components/atoms/button/button'
import { meta } from '@/src/config/meta'
import { use } from 'react'
const marqueeItems = [
  'REACT', '///', 'NEXT.JS', '///', 'NODE.JS', '///',
  'TYPESCRIPT', '///', 'PYTHON', '///', 'DJANGO', '///',
  'POSTGRESQL', '///', 'DOCKER', '///',
]
const hotItems = new Set(['REACT', 'NEXT.JS', 'NODE.JS', 'TYPESCRIPT'])

export default function Hero() {
  return (
    <section className="px-4 md:px-6 pt-10 pb-10 md:pt-16 md:pb-14 relative overflow-hidden">

      {/* Corner info — hidden on small mobile, visible sm+ */}
      <div className="hidden sm:block absolute top-6 right-4 md:right-6 font-crt text-sm text-(--pink) text-right leading-relaxed tracking-wider">
        SYS: ONLINE<br />
        LOC: {meta.location.toUpperCase()}<br />
        <span className="text-(--green)">STATUS: READY</span>
      </div>

      {/* Marquee */}
      <div className="border border-white/10 bg-white overflow-hidden mb-8 py-1.5">
        <div className="flex gap-8 whitespace-nowrap" style={{ animation: 'scroll 18s linear infinite' }}>
          {[...marqueeItems, ...marqueeItems].map((s, i) => (
            <span key={i} className={`font-crt text-base tracking-widest uppercase ${hotItems.has(s) ? 'text-(--cyan)' : 'text-white/15'}`}>
              {s}
            </span>
          ))}
        </div>
      </div>

      <p className="font-crt text-base text-(--green) tracking-widest mb-3">
        &gt; LOADING DEVELOPER...
      </p>

      {/* Headline — smaller on mobile, bigger on md+ */}
      <h1
        className="font-pixel text-xl sm:text-2xl md:text-4xl leading-loose max-w-2xl"
        style={{ textShadow: '3px 3px 0 #ff2d78, 6px 6px 0 rgba(255,45,120,0.2)' }}
      >
        FULL-STACK DEV.<br />
        ZERO{' '}
        <span className="text-(--yellow) text-shadow-yellow">BORING</span>{' '}
        PRODUCTS.<br />
        <span className="text-(--cyan) text-shadow-cyan">SHIPS. WORKS. FUN.</span>
      </h1>

      <p className="font-mono text-white/40 pl-8 pr-8 border-l border-white/40 mt-6 max-w-2xl">
        {meta.bio}
       
  
      </p>
      <p className="font-mono text-white/40   border-l border-white/40   max-w-2xl">      {meta.bio2} </p>
      <p className="font-mono text-white/40   border-l border-white/40  mb-8 max-w-2xl">      {meta.bio3} </p>

      {/* CTAs — stacked on mobile, row on sm+ */}
      <div className="flex flex-col sm:flex-row gap-4 " >
        <Button href="#work" variant="primary">▶ SEE MY WORK</Button>
        <Button href="#about" variant="secondary">READ MORE</Button>
      </div>

      <style jsx>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
