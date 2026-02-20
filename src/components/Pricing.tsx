const plans = [
  {
    name: 'Мастер',
    desc: 'Для частного мастера или кабинета',
    oldPrice: '3 900',
    newPrice: '1 900',
    features: [
      'Instagram + VK',
      '30 публикаций в месяц',
      'Подписи к фото до/после',
      'Советы по уходу, акции',
      'Автопубликация по расписанию',
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
      'Instagram + VK + Telegram',
      'Безлимитные публикации',
      'Профили мастеров (до 10)',
      'Контент-план на неделю',
      'Обучается на ваших оценках',
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
      'Несколько точек и брендов',
      'Единый стиль сети',
      'Персональный менеджер',
      'Интеграция с YCLIENTS',
      'White-label',
    ],
    cta: 'Обсудить',
    popular: false,
    anchor: null,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-cream-warm">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="divider mb-6" />
          <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-5">
            Дешевле фрилансера.
            <br />
            <span className="text-text-secondary">Умнее ChatGPT.</span>
          </h2>
          <p className="text-text-secondary">
            Для первых 50 салонов — <span className="accent-text font-medium">цена фиксируется навсегда</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`elegant-card p-7 md:p-8 flex flex-col relative ${
                p.popular ? '!border-rose/30 md:scale-[1.03]' : ''
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-mocha-dark text-cream text-xs font-medium px-4 py-1.5 rounded-full">
                  Для большинства салонов
                </div>
              )}

              <h3 className="font-serif text-2xl font-semibold mb-1">{p.name}</h3>
              <p className="text-sm text-text-muted mb-6">{p.desc}</p>

              <div className="mb-1">
                {p.newPrice ? (
                  <>
                    <span className="text-text-muted line-through text-base mr-2">{p.oldPrice} &#8381;</span>
                    <span className="font-serif text-3xl font-semibold text-mocha-dark">{p.newPrice} &#8381;</span>
                    <span className="text-text-muted text-sm">/мес</span>
                  </>
                ) : (
                  <>
                    <span className="text-text-muted line-through text-base mr-2">{p.oldPrice} &#8381;</span>
                    <span className="font-serif text-2xl font-semibold">По запросу</span>
                  </>
                )}
              </div>

              {p.anchor && (
                <p className="text-xs accent-text mb-6">{p.anchor}</p>
              )}
              {!p.anchor && <div className="mb-6" />}

              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-text-secondary">
                    <span className="accent-text mt-0.5 shrink-0">&#10003;</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#waitlist"
                className={p.popular ? 'btn-primary text-center w-full' : 'btn-secondary text-center w-full'}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-text-muted text-sm mt-8">
          Первые 7 дней бесплатно. Отмена в один клик. Без скрытых платежей.
        </p>
      </div>
    </section>
  )
}
