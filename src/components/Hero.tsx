export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Soft warm glow */}
      <div className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] rounded-full bg-blush opacity-20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-beige opacity-30 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Elegant divider */}
        <div className="divider mb-8" />

        {/* Quote-style intro */}
        <p className="quote-italic text-lg md:text-xl mb-8">
          &laquo;Я открывала салон ради свободы. Получила работу без выходных.&raquo;
        </p>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-serif font-semibold leading-[1.1] mb-8 tracking-tight">
          Соцсети работают.
          <br />
          <span className="gradient-gold">Вы отдыхаете.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-base md:text-lg text-text-secondary max-w-xl mx-auto mb-10 leading-relaxed">
          AI-агент, который знает разницу между балаяжем и мелированием.
          Пишет посты, публикует в Instagram, VK и Telegram —
          пока вы с клиентами. Или пьёте просекко в Италии.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <a href="#waitlist" className="btn-primary">
            Попробовать бесплатно
          </a>
          <a href="#how-it-works" className="btn-secondary">
            Как это работает
          </a>
        </div>

        <p className="text-sm text-text-muted">
          Бесплатно 7 дней. Без кредитной карты. Для первых 50 салонов — навсегда дешевле.
        </p>

        {/* Elegant mock — salon feed preview */}
        <div className="mt-20 elegant-card p-5 md:p-8 max-w-2xl mx-auto animate-float">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose to-mocha flex items-center justify-center">
              <span className="text-cream font-serif text-sm font-semibold">Y</span>
            </div>
            <div className="text-left">
              <div className="text-sm font-medium text-text-primary">Yuki подготовила посты</div>
              <div className="text-xs text-text-muted">Сегодня, 10:00</div>
            </div>
          </div>

          <div className="space-y-3">
            {[
              { platform: 'Instagram', emoji: '📸', text: 'Балаяж на тёмные волосы: почему именно весной стоит решиться на перемены...', status: 'Готов к публикации' },
              { platform: 'VK', emoji: '💬', text: 'До 28 февраля — маникюр + покрытие со скидкой 20%. Мастер Алина, опыт 8 лет...', status: 'Запланирован на 14:00' },
              { platform: 'Telegram', emoji: '✨', text: '3 совета по уходу за бровями после ламинирования от нашего мастера...', status: 'Готов к публикации' },
            ].map((post) => (
              <div key={post.platform} className="flex items-start gap-3 p-4 rounded-2xl bg-cream-warm/60 border border-card-border">
                <span className="text-lg shrink-0">{post.emoji}</span>
                <div className="flex-1 min-w-0 text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-text-primary">{post.platform}</span>
                    <span className="text-xs text-rose-gold">{post.status}</span>
                  </div>
                  <p className="text-sm text-text-secondary truncate">{post.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-card-border flex justify-between items-center">
            <span className="text-xs text-text-muted">3 поста на сегодня</span>
            <div className="bg-mocha-dark text-cream text-xs px-4 py-2 rounded-full font-medium">
              Опубликовать все
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
