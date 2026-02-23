import { useReveal } from '../hooks/useReveal'

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
    cta: 'Начать бесплатно',
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
    cta: 'Подключить салон',
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
    cta: 'Обсудить условия',
    popular: false,
    anchor: null,
  },
]

export default function Pricing() {
  const ref = useReveal()

  return (
    <section id="pricing" className="section-grand bg-cream-warm">
      <div ref={ref} className="max-w-5xl mx-auto reveal-up">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-5">
            Дешевле фрилансера.
            <br />
            <span className="text-text-secondary">Умнее ChatGPT.</span>
          </h2>
          <p className="text-text-secondary">
            <span className="text-gold-bright font-semibold">Founding-программа:</span> первые 50 салонов получают скидку навсегда
          </p>
        </div>

        {/* Scarcity counter */}
        <div className="w-full max-w-xs mx-auto mb-16">
          <div className="h-2 bg-beige/50 rounded-full overflow-hidden">
            <div className="h-full bg-rose-gold rounded-full transition-all duration-1000" style={{ width: '46%' }} />
          </div>
          <p className="text-xs text-text-muted mt-2 text-center">23 из 50 мест занято</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col relative rounded-[20px] p-7 md:p-8 transition-all duration-300 ${
                p.popular
                  ? 'bg-espresso text-cream md:scale-[1.03] border-none shadow-lg'
                  : 'elegant-card'
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-bright text-espresso text-xs font-semibold px-4 py-1.5 rounded-full">
                  Для большинства салонов
                </div>
              )}

              <h3 className={`font-serif text-2xl font-semibold mb-1 ${p.popular ? 'text-cream' : ''}`}>{p.name}</h3>
              <p className={`text-sm mb-6 ${p.popular ? 'text-rose-light' : 'text-text-muted'}`}>{p.desc}</p>

              <div className="mb-1">
                {p.newPrice ? (
                  <>
                    <span className={`line-through text-base mr-2 ${p.popular ? 'text-rose-light/60' : 'text-text-muted'}`}>{p.oldPrice} &#8381;</span>
                    <span className={`font-serif text-3xl font-semibold ${p.popular ? 'text-gold-bright' : 'text-espresso'}`}>{p.newPrice} &#8381;</span>
                    <span className={`text-sm ${p.popular ? 'text-rose-light/80' : 'text-text-muted'}`}>/мес</span>
                  </>
                ) : (
                  <>
                    <span className="text-text-muted line-through text-base mr-2">{p.oldPrice} &#8381;</span>
                    <span className="font-serif text-2xl font-semibold">По запросу</span>
                  </>
                )}
              </div>

              {p.anchor && (
                <p className={`text-xs mb-6 ${p.popular ? 'text-gold-bright' : 'accent-text'}`}>{p.anchor}</p>
              )}
              {!p.anchor && <div className="mb-6" />}

              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2.5 text-sm ${p.popular ? 'text-cream/90' : 'text-text-secondary'}`}>
                    <span className={`mt-0.5 shrink-0 ${p.popular ? 'text-gold-bright' : 'accent-text'}`}>&#10003;</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="https://t.me/yuki_smm_bot"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-center w-full inline-flex items-center justify-center px-6 py-4 rounded-full font-semibold text-[15px] transition-all duration-300 ${
                  p.popular
                    ? 'bg-cream text-espresso hover:bg-cream-warm hover:shadow-lg'
                    : 'btn-secondary'
                }`}
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
