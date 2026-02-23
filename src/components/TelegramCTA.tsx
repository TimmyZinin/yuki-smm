import { useReveal } from '../hooks/useReveal'

export default function TelegramCTA() {
  const ref = useReveal()

  return (
    <section id="waitlist" className="section-grand relative overflow-hidden">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <img
          src={`${import.meta.env.BASE_URL}images/freedom-lifestyle.webp`}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-espresso/85" />
      </div>

      <div ref={ref} className="max-w-2xl mx-auto text-center relative z-10 text-cream reveal-up">
        <div className="w-12 h-[1px] bg-rose-light mx-auto mb-8" />

        <p className="font-serif italic text-lg text-rose-light mb-8">
          &laquo;Соцсети работают — я отдыхаю&raquo;
        </p>

        <h2 className="font-serif text-3xl md:text-[3.5rem] font-bold mb-6 leading-tight text-cream">
          Попробуйте бесплатно.
          <br />
          7 дней. Без обязательств.
        </h2>

        <p className="text-rose-light text-base mb-8 max-w-md mx-auto leading-relaxed">
          Подключите салон за 10 минут. Первая неделя бесплатно.
          Для первых 50 салонов — founding-цена навсегда.
        </p>

        {/* Mini-steps */}
        <div className="flex items-center justify-center gap-4 md:gap-6 mb-10 text-sm text-rose-light/80">
          <div className="flex items-center gap-1.5">
            <span className="w-5 h-5 rounded-full border border-rose-light/40 flex items-center justify-center text-xs">1</span>
            <span>Откройте бота</span>
          </div>
          <div className="w-4 h-[1px] bg-rose-light/30" />
          <div className="flex items-center gap-1.5">
            <span className="w-5 h-5 rounded-full border border-rose-light/40 flex items-center justify-center text-xs">2</span>
            <span>Подключите соцсети</span>
          </div>
          <div className="w-4 h-[1px] bg-rose-light/30" />
          <div className="flex items-center gap-1.5">
            <span className="w-5 h-5 rounded-full border border-rose-light/40 flex items-center justify-center text-xs">3</span>
            <span>Yuki начнёт работать</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://t.me/yuki_smm_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-cream text-espresso px-8 py-4 rounded-full font-semibold text-base transition-all hover:bg-cream-warm hover:shadow-lg"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
              <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.53 8.16l-1.83 8.62c-.14.62-.5.77-1.01.48l-2.8-2.06-1.35 1.3c-.15.15-.28.28-.57.28l.2-2.85 5.18-4.68c.22-.2-.05-.31-.35-.12l-6.4 4.03-2.76-.86c-.6-.19-.61-.6.13-.89l10.78-4.15c.5-.18.94.12.78.9z"/>
            </svg>
            Подключить салон за 10 минут
          </a>
          <a
            href="mailto:tim@zinin.co"
            className="inline-flex items-center justify-center gap-2 border border-rose-light/30 text-cream px-8 py-4 rounded-full font-semibold text-base transition-all hover:border-rose-light/60"
          >
            Написать нам
          </a>
        </div>

        <p className="text-sm text-rose-light/60 mt-8">
          47 салонов уже в листе ожидания
        </p>
      </div>
    </section>
  )
}
