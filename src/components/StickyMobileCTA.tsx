import { useEffect, useState } from 'react'

export default function StickyMobileCTA() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!show) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-cream/95 backdrop-blur-md border-t border-card-border px-4 py-3">
      <a
        href="https://t.me/yuki_smm_bot"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary w-full text-center !py-3.5"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
          <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.53 8.16l-1.83 8.62c-.14.62-.5.77-1.01.48l-2.8-2.06-1.35 1.3c-.15.15-.28.28-.57.28l.2-2.85 5.18-4.68c.22-.2-.05-.31-.35-.12l-6.4 4.03-2.76-.86c-.6-.19-.61-.6.13-.89l10.78-4.15c.5-.18.94.12.78.9z"/>
        </svg>
        Подключить салон бесплатно
      </a>
    </div>
  )
}
