const plans = [
  {
    name: 'Старт',
    desc: '1 автор, 2 платформы, 30 постов/мес',
    oldPrice: '3 900',
    newPrice: '1 900',
    features: [
      'AI-генерация контента',
      '2 соцсети на выбор',
      '30 публикаций в месяц',
      'Автопубликация по расписанию',
      'Brand voice настройка',
    ],
    cta: 'Занять место',
    popular: false,
  },
  {
    name: 'Про',
    desc: '3 автора, все платформы, безлимит',
    oldPrice: '7 900',
    newPrice: '3 900',
    features: [
      'Всё из Старт +',
      'Все платформы (TG, VK, LI, TH, IG)',
      'Безлимитные публикации',
      'Генерация картинок',
      'Learning Loop (обучение на оценках)',
      '3 отдельных автора',
      'Приоритетная поддержка',
    ],
    cta: 'Занять место',
    popular: true,
  },
  {
    name: 'Агентство',
    desc: '10+ авторов, API, white-label',
    oldPrice: '14 900',
    newPrice: null,
    features: [
      'Всё из Про +',
      '10+ авторов',
      'API доступ',
      'White-label возможности',
      'Персональный менеджер',
      'Кастомные интеграции',
    ],
    cta: 'Обсудить',
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-navy-light/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Цены после запуска</h2>
          <p className="text-text-secondary text-lg">
            Для первых 50 участников — цена <span className="text-accent-light font-semibold">фиксируется навсегда</span>
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
                  Популярный
                </div>
              )}

              <h3 className="text-xl font-bold mb-1">{p.name}</h3>
              <p className="text-sm text-text-muted mb-6">{p.desc}</p>

              <div className="mb-6">
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
          Все цены в рублях. Можно отменить в любой момент. Без скрытых платежей.
        </p>
      </div>
    </section>
  )
}
