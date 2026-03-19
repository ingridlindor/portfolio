interface ButtonProps {
  children: React.ReactNode
  href?:    string
  variant?: 'primary' | 'secondary'
}

export default function Button({ children, href, variant = 'primary' }: ButtonProps) {
  const base = 'font-mono text-xs px-5 py-3 uppercase tracking-widest cursor-pointer transition-all inline-block'
  const styles = {
    primary:   `${base} bg-yellow-400 text-black hover:translate-x-0.5 hover:translate-y-0.5`,
    secondary: `${base} border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black`,
  }
  if (href) return <a href={href} className={styles[variant]}>{children}</a>
  return <button className={styles[variant]}>{children}</button>
}