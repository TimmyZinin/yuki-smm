import { useReveal } from '../hooks/useReveal'

const features = [
  {
    title: 'Пишет как мастер, а не как студент с биржи',
    desc: 'Знает разницу между ламинированием и кератином. Между ELOS и фотоэпиляцией. Пишет на языке вашей аудитории, а не генерик-шаблонами.',
    size: 'col-span-1 md:col-span-2',
    tags: ['Tone of voice', 'Ваши услуги', 'Имена мастеров'],
    accent: true,
    image: '/images/happy-phone.webp',
  },
  {
    title: 'Публикует везде — одной кнопкой',
    desc: 'Instagram, VK, Telegram. Текст адаптирован: короче для сторис, подробнее для VK. Больше не нужно копировать руками.',
    size: 'col-span-1',
  },
  {
    title: 'Подписи к фото до/после',
    desc: 'Загрузили фото работы — Yuki напишет: что сделали, какие материалы, сколько заняло. Клиенты понимают ценность и записываются.',
    size: 'col-span-1',
  },
  {
    title: 'Помнит всё о вашем салоне',
    desc: 'Прайс, мастера, график, отзывы клиентов. Использует реальные данные — не выдумывает.',
    size: 'col-span-1',
    memoryItems: ['Услуги', 'Мастера', 'Цены', 'Отзывы'],
  },
  {
    title: 'Акции и сезонные посты за 30 секунд',
    desc: 'Скидка на маникюр к 8 марта? Новая процедура? Назовите тему — пост готов. С правильным CTA и вашим номером для записи.',
    size: 'col-span-1',
  },
  {
    title: 'Контент-план на неделю — без вашего участия',
    desc: 'Понедельник — совет по уходу. Среда — акция. Пятница — знакомство с мастером. Yuki предлагает темы, вы одобряете или корректируете.',
    size: 'col-span-1 md:col-span-2',
    accent: true,
    image: '/images/beauty-flat-lay.webp',
  },
]

export default function Features() {
  const ref = useReveal()

  return (
    <section id="features" className="section-standard">
      <div ref={ref} className="max-w-5xl mx-auto reveal-up">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-5">Что умеет Yuki</h2>
          <p className="text-text-secondary max-w-lg mx-auto">
            Не ChatGPT. Не SMMplanner. Yuki понимает бьюти.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className={`elegant-card overflow-hidden ${f.size} ${f.accent ? 'border-t-2 border-t-rose-gold/40' : ''}`}
            >
              {f.image && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={f.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-7 md:p-8">
                {f.tags && (
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {f.tags.map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-cream-warm border border-card-border text-text-secondary font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                {f.memoryItems && (
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {f.memoryItems.map((m) => (
                      <div key={m} className="text-xs bg-cream-warm text-rose-gold px-3 py-1.5 rounded-full border border-card-border font-medium">
                        {m}
                      </div>
                    ))}
                  </div>
                )}
                <h3 className="font-serif text-xl font-semibold mb-3 leading-snug">{f.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
