import { useReveal } from '../hooks/useReveal'

export default function Hero() {
  const ref = useReveal()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Soft warm glow */}
      <div className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] rounded-full bg-blush opacity-20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-beige opacity-30 blur-[100px] pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-3xl mx-auto px-6 text-center reveal-up">
        {/* Elegant divider */}
        <div className="divider mb-8" />

        {/* Quote-style intro */}
        <p className="quote-italic text-lg md:text-xl mb-8">
          &laquo;Я открывала салон ради свободы. Получила работу без выходных.&raquo;
        </p>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-serif font-bold leading-[1.05] mb-8 tracking-tight">
          Соцсети работают.
          <br />
          <span className="gradient-gold">Вы отдыхаете.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-base md:text-lg text-text-secondary max-w-xl mx-auto mb-10 leading-relaxed">
          Yuki ведёт Instagram, VK и Telegram вашего салона —
          пока вы с клиентами. Или на берегу моря.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <a href="https://t.me/yuki_smm_bot" target="_blank" rel="noopener noreferrer" className="btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
              <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.53 8.16l-1.83 8.62c-.14.62-.5.77-1.01.48l-2.8-2.06-1.35 1.3c-.15.15-.28.28-.57.28l.2-2.85 5.18-4.68c.22-.2-.05-.31-.35-.12l-6.4 4.03-2.76-.86c-.6-.19-.61-.6.13-.89l10.78-4.15c.5-.18.94.12.78.9z"/>
            </svg>
            Подключить мой салон
          </a>
          <a href="#how-it-works" className="btn-secondary">
            Посмотреть, как это работает
          </a>
        </div>

        <p className="text-sm text-text-muted">
          Бесплатно 7 дней. Без кредитной карты. Для первых 50 салонов — навсегда дешевле.
        </p>

        {/* Waitlist social proof nudge */}
        <p className="text-xs text-rose-gold mt-3 font-medium">
          47 салонов уже в листе ожидания
        </p>

        {/* Elegant mock — salon feed preview */}
        <div className="mt-16 elegant-card p-5 md:p-8 max-w-2xl mx-auto animate-float">
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
            <div className="bg-espresso text-cream text-xs px-4 py-2 rounded-full font-medium">
              Опубликовать все
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
