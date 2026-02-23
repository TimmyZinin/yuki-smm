import { useReveal } from '../hooks/useReveal'

const metrics = [
  { value: '1 200+', label: 'постов создано' },
  { value: '47', label: 'салонов в листе ожидания' },
  { value: '10 мин', label: 'на подключение' },
]

const testimonials = [
  {
    text: 'Раньше я тратила 2 часа в день на посты. Теперь открываю Telegram утром — всё уже готово. Просто нажимаю «опубликовать».',
    name: 'Марина',
    salon: 'Салон «Карамель», Краснодар',
  },
  {
    text: 'Наконец-то посты не выглядят как из Canva-шаблона. Yuki пишет так, будто знает наших клиентов лично.',
    name: 'Алёна',
    salon: 'Студия «Bloom», Москва',
  },
]

export default function SocialProof() {
  const ref = useReveal()

  return (
    <section className="section-standard">
      <div ref={ref} className="max-w-5xl mx-auto reveal-up">
        <div className="grid grid-cols-3 gap-6 mb-16">
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <div className="font-serif text-3xl md:text-5xl font-semibold text-espresso mb-2">{m.value}</div>
              <div className="text-sm text-text-secondary">{m.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="elegant-card p-7 md:p-9">
              <p className="font-serif italic text-text-secondary text-base leading-relaxed mb-6">
                &laquo;{t.text}&raquo;
              </p>
              <div>
                <div className="text-sm font-medium text-text-primary">{t.name}</div>
                <div className="text-xs text-text-muted">{t.salon}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
