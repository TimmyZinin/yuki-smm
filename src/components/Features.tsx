const features = [
  {
    title: 'Пишет как ваш лучший SMM-щик',
    desc: 'Агент запоминает стиль вашего салона, имена мастеров, прайс. Генерирует тексты, которые звучат как вы, а не как робот. 180+ шаблонных фраз отфильтрованы.',
    size: 'col-span-1 md:col-span-2 row-span-1',
    tags: ['Tone of Voice', 'Ваш прайс', 'Имена мастеров'],
    tagColors: ['bg-accent/20 text-accent-light', 'bg-cyan/20 text-cyan-light', 'bg-emerald-500/20 text-emerald-400'],
  },
  {
    title: 'Публикует везде сразу',
    desc: 'Instagram, VK, Telegram — один клик. Агент адаптирует текст под каждую площадку: короче для сторис, длиннее для VK.',
    size: 'col-span-1 row-span-1',
    platforms: ['IG', 'VK', 'TG'],
  },
  {
    title: 'Подписи к фото до/после',
    desc: 'Загружаете фото работы — агент пишет продающее описание: что сделали, какие материалы, сколько заняло.',
    size: 'col-span-1 row-span-1',
  },
  {
    title: 'Помнит всё о салоне',
    desc: 'Услуги, цены, мастера, график работы, отзывы клиентов. Агент использует реальные данные, не выдумывает.',
    size: 'col-span-1 row-span-1',
    memoryItems: ['Услуги', 'Мастера', 'Цены', 'Отзывы'],
  },
  {
    title: 'Акции и сезонные посты',
    desc: 'Скидка на маникюр? Новая процедура? Праздничная акция? Назовите тему — пост готов за 30 секунд.',
    size: 'col-span-1 row-span-1',
  },
  {
    title: 'Контент-план на неделю',
    desc: 'Советы по уходу в понедельник, акция в среду, знакомство с мастером в пятницу. Агент сам предлагает темы и публикует по расписанию.',
    size: 'col-span-1 md:col-span-2 row-span-1',
  },
]

export default function Features() {
  return (
    <section id="features" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Что умеет агент</h2>
          <p className="text-text-secondary text-lg">Как SMM-менеджер, который знает бьюти-индустрию</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((f) => (
            <div key={f.title} className={`glass-card p-6 md:p-8 ${f.size}`}>
              {f.tags && (
                <div className="flex gap-3 mb-4 flex-wrap">
                  {f.tags.map((tag, i) => (
                    <span key={tag} className={`text-xs px-3 py-1 rounded-full ${f.tagColors?.[i]}`}>{tag}</span>
                  ))}
                </div>
              )}
              {f.platforms && (
                <div className="flex gap-2 mb-4">
                  {f.platforms.map((p) => (
                    <div key={p} className="w-8 h-8 rounded-lg bg-white/5 border border-glass-border flex items-center justify-center text-xs font-bold text-text-secondary">
                      {p}
                    </div>
                  ))}
                </div>
              )}
              {f.memoryItems && (
                <div className="flex gap-2 mb-4 flex-wrap">
                  {f.memoryItems.map((m) => (
                    <div key={m} className="text-xs bg-accent/10 text-accent-light px-2.5 py-1 rounded-lg border border-accent/20">
                      {m}
                    </div>
                  ))}
                </div>
              )}
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
