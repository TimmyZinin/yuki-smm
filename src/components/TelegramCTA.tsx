export default function TelegramCTA() {
  return (
    <section id="waitlist" className="section-padding bg-mocha-dark text-cream">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-12 h-[1px] bg-rose-light mx-auto mb-8" />

        <p className="font-serif italic text-lg text-rose-light mb-8">
          &laquo;Соцсети работают — я отдыхаю&raquo;
        </p>

        <h2 className="font-serif text-3xl md:text-5xl font-semibold mb-6 leading-tight">
          Попробуйте бесплатно.
          <br />
          7 дней. Без обязательств.
        </h2>

        <p className="text-rose-light text-base mb-10 max-w-md mx-auto leading-relaxed">
          Подключите салон за 10 минут. Первая неделя бесплатно.
          Для первых 50 салонов — founding-цена навсегда.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://t.me/yuki_smm_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-cream text-mocha-dark px-8 py-4 rounded-full font-semibold text-base transition-all hover:bg-cream-warm hover:shadow-lg"
          >
            Подключить салон
          </a>
          <a
            href="mailto:tim@zinin.co"
            className="inline-flex items-center justify-center gap-2 border border-rose-light/30 text-cream px-8 py-4 rounded-full font-semibold text-base transition-all hover:border-rose-light/60"
          >
            Задать вопрос
          </a>
        </div>

        <p className="text-sm text-rose-light/60 mt-8">
          Уже 23 салона в листе ожидания
        </p>
      </div>
    </section>
  )
}
