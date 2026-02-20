const steps = [
  {
    num: '01',
    title: 'Подключите соцсети',
    desc: 'Instagram, VK, Telegram — все площадки вашего салона в одном месте. Занимает 5 минут.',
  },
  {
    num: '02',
    title: 'Расскажите о салоне',
    desc: 'Услуги, мастера, ваш стиль. Один раз — агент запоминает навсегда и не путает балаяж с мелированием.',
  },
  {
    num: '03',
    title: 'Агент создаёт контент',
    desc: 'Советы по уходу, акции, подписи к до/после, знакомство с мастерами — каждый пост адаптирован под вашу площадку.',
  },
  {
    num: '04',
    title: 'Вы одобряете — он публикует',
    desc: 'Посмотрели, нажали кнопку. Или поставили на автопилот — агент публикует по расписанию, пока вы с клиентами.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-cream-warm">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="divider mb-6" />
          <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-5">Как это работает</h2>
          <p className="text-text-secondary">От регистрации до первого поста — 10 минут</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((s) => (
            <div key={s.num} className="elegant-card p-8">
              <span className="font-serif text-5xl font-semibold text-beige select-none">{s.num}</span>
              <h3 className="font-serif text-xl font-semibold mt-4 mb-3">{s.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
