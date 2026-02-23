import { useReveal } from '../hooks/useReveal'

const steps = [
  {
    num: '01',
    title: 'Подключите соцсети',
    desc: 'Instagram, VK, Telegram — все площадки вашего салона в одном месте. Занимает 5 минут.',
  },
  {
    num: '02',
    title: 'Расскажите о салоне',
    desc: 'Услуги, мастера, ваш стиль. Один раз — Yuki запоминает навсегда и не путает балаяж с мелированием.',
  },
  {
    num: '03',
    title: 'Yuki создаёт контент',
    desc: 'Советы по уходу, акции, подписи к до/после, знакомство с мастерами — каждый пост адаптирован под вашу площадку.',
  },
  {
    num: '04',
    title: 'Вы одобряете — Yuki публикует',
    desc: 'Посмотрели, нажали кнопку. Или поставили на автопилот — Yuki публикует по расписанию, пока вы с клиентами.',
  },
]

export default function HowItWorks() {
  const ref = useReveal()

  return (
    <section id="how-it-works" className="section-tight bg-cream-warm">
      <div ref={ref} className="max-w-5xl mx-auto reveal-up">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-serif font-medium mb-5">Как это работает</h2>
          <p className="text-text-secondary">От регистрации до первого поста — 10 минут</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((s) => (
            <div key={s.num} className="elegant-card p-8 relative overflow-hidden">
              <span className="absolute top-3 right-5 font-serif text-7xl md:text-8xl font-semibold text-beige/30 select-none leading-none">{s.num}</span>
              <div className="relative">
                <h3 className="font-serif text-xl font-semibold mt-4 mb-3">{s.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
