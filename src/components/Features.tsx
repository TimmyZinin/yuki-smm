const features = [
  {
    title: 'Пишет как мастер, а не как студент с биржи',
    desc: 'Знает разницу между ламинированием и кератином. Между ELOS и фотоэпиляцией. Пишет на языке вашей аудитории, а не генерик-шаблонами.',
    size: 'col-span-1 md:col-span-2',
    tags: ['Tone of voice', 'Ваши услуги', 'Имена мастеров'],
  },
  {
    title: 'Публикует везде — одной кнопкой',
    desc: 'Instagram, VK, Telegram. Текст адаптирован: короче для сторис, подробнее для VK. Больше не нужно копировать руками.',
    size: 'col-span-1',
  },
  {
    title: 'Подписи к фото до/после',
    desc: 'Загрузили фото работы — агент напишет: что сделали, какие материалы, сколько заняло. Клиенты понимают ценность и записываются.',
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
    desc: 'Понедельник — совет по уходу. Среда — акция. Пятница — знакомство с мастером. Агент предлагает темы, вы одобряете или корректируете.',
    size: 'col-span-1 md:col-span-2',
  },
]

export default function Features() {
  return (
    <section id="features" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="divider mb-6" />
          <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-5">Что умеет Yuki</h2>
          <p className="text-text-secondary max-w-lg mx-auto">
            Не ChatGPT. Не SMMplanner. Агент, который понимает бьюти.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((f) => (
            <div key={f.title} className={`elegant-card p-7 md:p-8 ${f.size}`}>
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
          ))}
        </div>
      </div>
    </section>
  )
}
