import { render, screen } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  it('renders the text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('renders as a link when href is passed', () => {
    render(<Button href="/work">See work</Button>)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/work')
  })

  it('renders as a button when no href', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('applies primary style by default', () => {
    render(<Button>Primary</Button>)
    const btn = screen.getByRole('button')
    expect(btn).toHaveClass('bg-yellow-400')
  })

  it('applies secondary style when variant is secondary', () => {
    render(<Button variant="secondary">Secondary</Button>)
    const btn = screen.getByRole('button')
    expect(btn).toHaveClass('border-cyan-400')
  })
})
