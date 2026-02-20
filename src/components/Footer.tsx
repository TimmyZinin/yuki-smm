export default function Footer() {
  return (
    <footer className="border-t border-glass-border py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-cyan flex items-center justify-center">
            <span className="text-white font-extrabold text-sm">Y</span>
          </div>
          <div>
            <span className="font-bold text-text-primary">Yuki</span>
            <span className="text-text-muted text-sm ml-2">AI для салонов красоты</span>
          </div>
        </div>

        <div className="flex items-center gap-6 text-sm text-text-muted">
          <a href="https://t.me/yuki_smm_bot" target="_blank" rel="noopener noreferrer" className="hover:text-text-secondary transition-colors">
            Telegram
          </a>
          <a href="mailto:tim@zinin.co" className="hover:text-text-secondary transition-colors">
            Связаться
          </a>
          <span>Zinin Corporation &copy; 2026</span>
        </div>
      </div>
    </footer>
  )
}
