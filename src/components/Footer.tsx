export default function Footer() {
  return (
    <footer className="border-t border-card-border py-10 px-6 bg-cream">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-mocha-dark flex items-center justify-center">
            <span className="text-cream font-serif text-xs font-semibold">Y</span>
          </div>
          <span className="font-serif font-semibold text-text-primary">Yuki</span>
          <span className="text-text-muted text-xs">AI для салонов красоты</span>
        </div>

        <div className="flex items-center gap-6 text-sm text-text-muted">
          <a href="https://t.me/yuki_smm_bot" target="_blank" rel="noopener noreferrer" className="hover:text-text-secondary transition-colors">
            Telegram
          </a>
          <a href="mailto:tim@zinin.co" className="hover:text-text-secondary transition-colors">
            Связаться
          </a>
          <span>&copy; 2026</span>
        </div>
      </div>
    </footer>
  )
}
