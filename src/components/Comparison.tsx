const rows = [
  { chatgpt: 'Вы пишете промпт каждый раз', yuki: 'Агент сам знает ваш стиль' },
  { chatgpt: 'Копируете текст вручную', yuki: 'Публикует автоматически' },
  { chatgpt: 'Забывает контекст', yuki: 'Помнит всю историю бренда' },
  { chatgpt: 'Один формат на все', yuki: 'Адаптирует под каждую платформу' },
  { chatgpt: 'Нет расписания', yuki: 'Календарь + автопубликация' },
  { chatgpt: 'Нет обратной связи', yuki: 'Учится на ваших оценках' },
]

export default function Comparison() {
  return (
    <section className="section-padding bg-navy-light/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Почему не <span className="text-text-muted">ChatGPT</span>?
          </h2>
          <p className="text-text-secondary text-lg">ChatGPT пишет. Yuki — делает.</p>
        </div>

        <div className="glass-card overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-2 border-b border-glass-border">
            <div className="p-4 md:p-6 text-center border-r border-glass-border">
              <span className="text-text-muted font-semibold">ChatGPT</span>
            </div>
            <div className="p-4 md:p-6 text-center">
              <span className="gradient-text font-semibold">Yuki Agent</span>
            </div>
          </div>

          {/* Rows */}
          {rows.map((r, i) => (
            <div key={i} className="grid grid-cols-2 border-b border-glass-border last:border-b-0">
              <div className="p-4 md:p-5 border-r border-glass-border flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-red-400 shrink-0">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
                <span className="text-sm text-text-secondary">{r.chatgpt}</span>
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
      </div>
    </section>
  )
}
