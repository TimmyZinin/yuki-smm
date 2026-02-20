const plans = [
  {
    name: 'Мастер',
    desc: 'Для частного мастера или кабинета',
    oldPrice: '3 900',
    newPrice: '1 900',
    features: [
      'AI-контент для 1 салона',
      'Instagram + VK',
      '30 публикаций в месяц',
      'Автопубликация по расписанию',
      'Подписи к фото до/после',
      'Советы по уходу, акции',
    ],
    cta: 'Попробовать бесплатно',
    popular: false,
    anchor: 'Дешевле одного поста у фрилансера',
  },
  {
    name: 'Салон',
    desc: 'Для салона с командой мастеров',
    oldPrice: '5 900',
    newPrice: '2 900',
    features: [
      'Всё из тарифа Мастер +',
      'Instagram + VK + Telegram',
      'Безлимитные публикации',
      'Профили мастеров (до 10)',
      'Контент-план на неделю',
      'Обучение на ваших оценках',
      'Приоритетная поддержка',
    ],
    cta: 'Попробовать бесплатно',
    popular: true,
    anchor: 'В 10 раз дешевле SMM-менеджера',
  },
  {
    name: 'Сеть',
    desc: 'Для сети салонов или франшизы',
    oldPrice: '14 900',
    newPrice: null,
    features: [
      'Всё из тарифа Салон +',
      'Несколько точек / брендов',
      'Единый стиль сети',
      'Персональный менеджер',
      'Интеграция с YCLIENTS',
      'White-label возможности',
    ],
    cta: 'Обсудить',
    popular: false,
    anchor: null,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-navy-light/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Дешевле фрилансера. Лучше ChatGPT.</h2>
          <p className="text-text-secondary text-lg">
            Для первых 50 салонов — цена <span className="text-accent-light font-semibold">фиксируется навсегда</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`glass-card p-6 md:p-8 flex flex-col relative ${
                p.popular ? 'border-accent/50 md:scale-105' : ''
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-accent to-cyan text-white text-xs font-bold px-4 py-1 rounded-full">
                  Для большинства салонов
                </div>
              )}

              <h3 className="text-xl font-bold mb-1">{p.name}</h3>
              <p className="text-sm text-text-muted mb-6">{p.desc}</p>

              <div className="mb-2">
                {p.newPrice ? (
                  <>
                    <span className="text-text-muted line-through text-lg mr-2">{p.oldPrice} &#8381;</span>
                    <span className="text-3xl font-extrabold gradient-text">{p.newPrice} &#8381;</span>
                    <span className="text-text-muted text-sm">/мес</span>
                  </>
                ) : (
                  <>
                    <span className="text-text-muted line-through text-lg mr-2">{p.oldPrice} &#8381;</span>
                    <span className="text-2xl font-bold text-text-primary">По запросу</span>
                  </>
                )}
              </div>

              {p.anchor && (
                <p className="text-xs text-emerald-400 mb-6">{p.anchor}</p>
              )}
              {!p.anchor && <div className="mb-6" />}

              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-text-secondary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-light shrink-0 mt-0.5">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#waitlist"
                className={p.popular ? 'btn-primary text-center' : 'btn-secondary text-center'}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-text-muted text-sm mt-8">
          Все цены в рублях. Можно отменить в любой момент. Первые 7 дней — бесплатно.
        </p>
      </div>
    </section>
  )
}
