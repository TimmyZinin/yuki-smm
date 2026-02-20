const features = [
  {
    title: 'Пишет в вашем стиле',
    desc: 'Self-Refine система анализирует ваш tone of voice. 180+ шаблонных фраз автоматически фильтруются — только уникальный контент.',
    size: 'col-span-1 md:col-span-2 row-span-1',
    accent: true,
  },
  {
    title: 'Публикует сам',
    desc: 'Telegram, VK, LinkedIn, Threads, Instagram — одна кнопка. Агент адаптирует формат под каждую платформу.',
    size: 'col-span-1 row-span-1',
    platforms: true,
  },
  {
    title: 'Генерирует картинки',
    desc: '36 визуальных сцен в ISOTYPE-стиле. Профессиональная графика без дизайнера.',
    size: 'col-span-1 row-span-1',
  },
  {
    title: 'Помнит всё о бренде',
    desc: '4-слойная память: стиль, опыт, привычки, факты. Агент становится умнее с каждым постом.',
    size: 'col-span-1 row-span-1',
    memory: true,
  },
  {
    title: 'Учится на оценках',
    desc: 'Ставите 1-5 звёзд. Агент анализирует feedback и улучшает следующие тексты.',
    size: 'col-span-1 row-span-1',
  },
  {
    title: 'Календарь контента',
    desc: 'Планируйте посты на неделю вперёд. Автопубликация по расписанию.',
    size: 'col-span-1 md:col-span-2 row-span-1',
  },
]

export default function Features() {
  return (
    <section id="features" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Что умеет агент</h2>
          <p className="text-text-secondary text-lg">Не инструмент. Не генератор текста. Агент.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((f) => (
            <div key={f.title} className={`glass-card p-6 md:p-8 ${f.size}`}>
              {f.accent && (
                <div className="flex gap-3 mb-4 flex-wrap">
                  <span className="text-xs bg-accent/20 text-accent-light px-3 py-1 rounded-full">Tone of Voice</span>
                  <span className="text-xs bg-cyan/20 text-cyan-light px-3 py-1 rounded-full">Self-Refine</span>
                  <span className="text-xs bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full">Anti-Template</span>
                </div>
              )}
              {f.platforms && (
                <div className="flex gap-2 mb-4">
                  {['TG', 'VK', 'LI', 'TH', 'IG'].map((p) => (
                    <div key={p} className="w-8 h-8 rounded-lg bg-white/5 border border-glass-border flex items-center justify-center text-xs font-bold text-text-secondary">
                      {p}
                    </div>
                  ))}
                </div>
              )}
              {f.memory && (
                <div className="flex gap-2 mb-4 flex-wrap">
                  {['Стиль', 'Опыт', 'Привычки', 'Факты'].map((m) => (
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
