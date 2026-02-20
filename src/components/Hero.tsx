export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Glow effects */}
      <div className="hero-glow w-[500px] h-[500px] bg-accent opacity-15 -top-40 -left-40 absolute" />
      <div className="hero-glow w-[400px] h-[400px] bg-cyan opacity-10 -bottom-20 -right-20 absolute" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass-card !rounded-full px-4 py-2 mb-8">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm text-text-secondary">Ранний доступ открыт</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
          AI-агент ведёт ваш SMM.{' '}
          <span className="gradient-text">Вы занимаетесь бизнесом.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
          Подключаете аккаунты — агент генерирует контент, публикует по расписанию,
          учится на вашем стиле. Telegram, VK, LinkedIn, Threads.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <a href="#waitlist" className="btn-primary text-lg">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            Занять место в листе ожидания
          </a>
          <a href="#how-it-works" className="btn-secondary text-lg">
            Как это работает
          </a>
        </div>

        <p className="text-sm text-text-muted">
          Бесплатно для первых 50 участников. Без кредитной карты.
        </p>

        {/* Mock dashboard */}
        <div className="mt-16 glass-card p-4 md:p-6 max-w-3xl mx-auto animate-float">
          <div className="bg-navy-light rounded-xl p-6 space-y-4">
            {/* Mock header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-cyan" />
                <div>
                  <div className="text-sm font-semibold">Yuki Agent</div>
                  <div className="text-xs text-text-muted">Готовит публикации...</div>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <div className="text-xs text-emerald-400">Online</div>
              </div>
            </div>

            {/* Mock posts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                { platform: 'LinkedIn', color: 'from-blue-500 to-blue-700', text: '5 инсайтов о найме в 2026...' },
                { platform: 'Telegram', color: 'from-sky-400 to-sky-600', text: 'Почему soft skills важнее...' },
                { platform: 'VK', color: 'from-blue-400 to-indigo-600', text: 'Как я нанял 3х разработчиков...' },
              ].map((post) => (
                <div key={post.platform} className="bg-navy/50 rounded-lg p-3 border border-glass-border">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-5 h-5 rounded bg-gradient-to-br ${post.color}`} />
                    <span className="text-xs font-medium text-text-secondary">{post.platform}</span>
                    <span className="text-xs text-emerald-400 ml-auto">Готов</span>
                  </div>
                  <p className="text-xs text-text-secondary line-clamp-2">{post.text}</p>
                </div>
              ))}
            </div>

            {/* Mock action bar */}
            <div className="flex justify-between items-center pt-2 border-t border-glass-border">
              <span className="text-xs text-text-muted">3 поста готовы к публикации</span>
              <div className="bg-gradient-to-r from-accent to-cyan text-white text-xs px-3 py-1.5 rounded-lg font-medium">
                Опубликовать все
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
