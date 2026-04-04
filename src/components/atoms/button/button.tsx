import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  href?: string
  onClick?: () => void
  className?: string
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
}: ButtonProps) {

  const primary = "font-['Press_Start_2P'] text-[0.7rem] px-[2rem] py-[1rem] tracking-widest uppercase cursor-pointer transition-transform active:scale-95 inline-flex items-center w-fit gap-3 bg-[var(--yellow)] text-black shadow-[4px_4px_0px_#996600] hover:[transform:translate(2px,2px)]"

  const secondary = "font-['Press_Start_2P'] text-[0.7rem] px-[2rem] py-[1rem]  text-[#00ffee] tracking-widest uppercase cursor-pointer transition-all active:scale-95 inline-flex items-center w-fit gap-3 bg-transparent border-2 border-[var(--cyan)] shadow-[4px_4px_0px_#006660] hover:bg-[var(--cyan)] hover:[color:black]"
  const style = variant === 'primary' ? primary : secondary

  if (href) {
    return (
      <a href={href} className={`${style} ${className}`} style={{ textDecoration: 'none'}}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={`${style} ${className}`}>
      {children}
    </button>
  )
}