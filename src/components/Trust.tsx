import { useReveal } from '../hooks/useReveal'

const items = [
  {
    emoji: '🔒',
    title: 'Ваши данные в безопасности',
    desc: 'Серверы в России. Мы не обучаем AI на вашем контенте. Ваш стиль — только ваш.',
  },
  {
    emoji: '🙅‍♀️',
    title: 'Никаких курсов и вебинаров',
    desc: 'Yuki — это инструмент, а не инфопродукт. Подключили — работает. Без обучения на 40 часов.',
  },
  {
    emoji: '👋',
    title: 'Отмена в один клик',
    desc: 'Без звонков «а почему уходите». Одна кнопка — подписка отменена.',
  },
]

export default function Trust() {
  const ref = useReveal()

  return (
    <section className="section-tight">
      <div ref={ref} className="max-w-4xl mx-auto reveal-up">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.title} className="text-center">
              <div className="text-2xl mb-4">{item.emoji}</div>
              <h3 className="font-serif text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
