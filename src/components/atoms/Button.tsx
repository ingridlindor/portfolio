'use client'
import { Button as ShadcnButton } from "@/components/ui/button"

interface ButtonProps {
  children: React.ReactNode
  href?:    string
  variant?: 'primary' | 'secondary'
}

export default function Button({ children, href, variant = 'primary' }: ButtonProps) {
  const styles = {
    primary:   "font-mono text-xs uppercase tracking-widest bg-[#ffe600] text-black hover:bg-[#ffe600] hover:translate-x-0.5 hover:translate-y-0.5 rounded-none shadow-[4px_4px_0px_#996600] border-none",
    secondary: "font-mono text-xs uppercase tracking-widest bg-transparent text-[#00ffee] border-2 border-[#00ffee] hover:bg-[#00ffee] hover:text-black hover:translate-x-0.5 hover:translate-y-0.5 rounded-none shadow-[4px_4px_0px_#006660]",
  }
  return (
    <ShadcnButton
      className={styles[variant]}
      {...(href ? { onClick: () => window.location.href = href } : {})}
    >
      {children}
    </ShadcnButton>
  )
}