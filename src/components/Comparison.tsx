const rows = [
  {
    old: 'Открываете ChatGPT, пишете промпт',
    yuki: 'Говорите «пост про балаяж» — готово',
  },
  {
    old: 'Копируете текст, вставляете в каждую соцсеть',
    yuki: 'Публикует во все площадки одной кнопкой',
  },
  {
    old: 'ChatGPT не знает ваш салон',
    yuki: 'Помнит мастеров, цены, услуги, стиль',
  },
  {
    old: 'Один текст для всех платформ',
    yuki: 'Адаптирует: короче для IG, длиннее для VK',
  },
  {
    old: 'Пишете каждый день заново',
    yuki: 'Контент-план на неделю + автопубликация',
  },
  {
    old: 'Нет времени — аккаунт молчит',
    yuki: 'Работает 24/7 даже когда вы с клиентом',
  },
]

export default function Comparison() {
  return (
    <section className="section-padding bg-navy-light/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Было <span className="text-text-muted">вручную</span> — стало <span className="gradient-text">автоматически</span>
          </h2>
          <p className="text-text-secondary text-lg">Устали бегать между ChatGPT, Canva и Instagram?</p>
        </div>

        <div className="glass-card overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-2 border-b border-glass-border">
            <div className="p-4 md:p-6 text-center border-r border-glass-border">
              <span className="text-text-muted font-semibold">Как сейчас</span>
            </div>
            <div className="p-4 md:p-6 text-center">
              <span className="gradient-text font-semibold">С Yuki</span>
            </div>
          </div>

          {/* Rows */}
          {rows.map((r, i) => (
            <div key={i} className="grid grid-cols-2 border-b border-glass-border last:border-b-0">
              <div className="p-4 md:p-5 border-r border-glass-border flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-red-400 shrink-0">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
                <span className="text-sm text-text-secondary">{r.old}</span>
              </div>
              <div className="p-4 md:p-5 flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-400 shrink-0">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-text-primary">{r.yuki}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Time saved */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-4 glass-card !rounded-full px-6 py-3">
            <span className="text-2xl font-extrabold gradient-text">~15 часов/мес</span>
            <span className="text-text-secondary text-sm">экономии на создании контента</span>
          </div>
        </div>
      </div>
    </section>
  )
}
