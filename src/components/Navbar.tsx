import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-xl border-b border-card-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-mocha-dark flex items-center justify-center">
            <span className="text-cream font-serif font-semibold text-sm">Y</span>
          </div>
          <span className="font-serif font-semibold text-xl text-text-primary tracking-wide">Yuki</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Как работает</a>
          <a href="#features" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Возможности</a>
          <a href="#pricing" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Цены</a>
          <a href="#waitlist" className="btn-primary !py-2.5 !px-6 !text-sm">Попробовать</a>
        </div>

        <button
          className="md:hidden text-text-secondary p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-card-border px-6 py-4 flex flex-col gap-4">
          <a href="#how-it-works" className="text-text-secondary" onClick={() => setMenuOpen(false)}>Как работает</a>
          <a href="#features" className="text-text-secondary" onClick={() => setMenuOpen(false)}>Возможности</a>
          <a href="#pricing" className="text-text-secondary" onClick={() => setMenuOpen(false)}>Цены</a>
          <a href="#waitlist" className="btn-primary text-center !text-sm" onClick={() => setMenuOpen(false)}>Попробовать</a>
        </div>
      )}
    </nav>
  )
}
