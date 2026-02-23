import { useReveal } from '../hooks/useReveal'

export default function Hero() {
  const ref = useReveal()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-woman.webp`}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/85 to-cream/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/40 via-transparent to-cream/80" />
      </div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center reveal-up">
        {/* Left: Text content */}
        <div className="text-left">
          <div className="divider !mx-0 mb-8" />

          <p className="quote-italic text-lg md:text-xl mb-8">
            &laquo;Я открывала салон ради свободы. Получила работу без выходных.&raquo;
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-serif font-bold leading-[1.05] mb-8 tracking-tight">
            Соцсети работают.
            <br />
            <span className="gradient-gold">Вы отдыхаете.</span>
          </h1>

          <p className="text-base md:text-lg text-text-secondary max-w-lg mb-10 leading-relaxed">
            Yuki ведёт Instagram, VK и Telegram вашего салона —
            пока вы с клиентами. Или на берегу моря.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <a href="https://t.me/yuki_smm_bot" target="_blank" rel="noopener noreferrer" className="btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.53 8.16l-1.83 8.62c-.14.62-.5.77-1.01.48l-2.8-2.06-1.35 1.3c-.15.15-.28.28-.57.28l.2-2.85 5.18-4.68c.22-.2-.05-.31-.35-.12l-6.4 4.03-2.76-.86c-.6-.19-.61-.6.13-.89l10.78-4.15c.5-.18.94.12.78.9z"/>
              </svg>
              Подключить мой салон
            </a>
            <a href="#how-it-works" className="btn-secondary">
              Как это работает
            </a>
          </div>

          <p className="text-sm text-text-muted">
            Бесплатно 7 дней. Без кредитной карты.
          </p>
          <p className="text-xs text-rose-gold mt-2 font-medium">
            47 салонов уже в листе ожидания
          </p>
        </div>

        {/* Right: Mock dashboard */}
        <div className="hidden md:block">
          <div className="elegant-card p-5 md:p-8 animate-float">
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
                { platform: 'Instagram', emoji: '📸', text: 'Балаяж на тёмные волосы: почему именно весной...', status: 'Готов' },
                { platform: 'VK', emoji: '💬', text: 'Маникюр + покрытие со скидкой 20%. Мастер Алина...', status: '14:00' },
                { platform: 'Telegram', emoji: '✨', text: '3 совета по уходу за бровями после ламинирования...', status: 'Готов' },
              ].map((post) => (
                <div key={post.platform} className="flex items-start gap-3 p-3 rounded-xl bg-cream-warm/60 border border-card-border">
                  <span className="text-base shrink-0">{post.emoji}</span>
                  <div className="flex-1 min-w-0 text-left">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-xs font-medium text-text-primary">{post.platform}</span>
                      <span className="text-xs text-rose-gold">{post.status}</span>
                    </div>
                    <p className="text-xs text-text-secondary truncate">{post.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-card-border flex justify-between items-center">
              <span className="text-xs text-text-muted">3 поста на сегодня</span>
              <div className="bg-espresso text-cream text-xs px-4 py-1.5 rounded-full font-medium">
                Опубликовать все
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
