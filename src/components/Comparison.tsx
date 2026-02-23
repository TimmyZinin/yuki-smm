import { useReveal } from '../hooks/useReveal'

const rows = [
  {
    old: 'Открываете ChatGPT, думаете над промптом',
    yuki: 'Говорите «пост про балаяж» — готово',
  },
  {
    old: 'Копируете в Instagram, потом в VK, потом в Telegram',
    yuki: 'Одна кнопка — всё опубликовано',
  },
  {
    old: 'ChatGPT не знает ваш салон и мастеров',
    yuki: 'Помнит прайс, имена, стиль',
  },
  {
    old: 'Один текст для всех площадок',
    yuki: 'Адаптирует под каждую',
  },
  {
    old: 'Вечером нет сил — аккаунт молчит',
    yuki: 'Работает пока вы спите',
  },
]

export default function Comparison() {
  const ref = useReveal()

  return (
    <section className="section-tight bg-cream-warm">
      <div ref={ref} className="max-w-3xl mx-auto reveal-up">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-serif font-medium mb-5">
            Было — стало
          </h2>
          <p className="text-text-secondary">Перестаньте бегать между пятью приложениями</p>
        </div>

        <div className="elegant-card overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-2 border-b border-card-border">
            <div className="p-5 md:p-6 text-center border-r border-card-border">
              <span className="text-text-muted font-medium text-sm">Как сейчас</span>
            </div>
            <div className="p-5 md:p-6 text-center">
              <span className="accent-text font-medium text-sm">С Yuki</span>
            </div>
          </div>

          {rows.map((r, i) => (
            <div key={i} className="grid grid-cols-2 border-b border-card-border last:border-b-0">
              <div className="p-4 md:p-5 border-r border-card-border flex items-center gap-3">
                <span className="text-red-400 shrink-0 text-xs">&#10005;</span>
                <span className="text-sm text-text-muted">{r.old}</span>
              </div>
              <div className="p-4 md:p-5 flex items-center gap-3">
                <span className="text-emerald-600 shrink-0 text-xs">&#10003;</span>
                <span className="text-sm text-text-primary">{r.yuki}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Time saved */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-3 elegant-card !rounded-full px-6 py-3">
            <span className="font-serif text-2xl font-semibold text-espresso">~15 часов</span>
            <span className="text-text-secondary text-sm">экономии в месяц</span>
          </div>
        </div>

        {/* Mid-page CTA */}
        <div className="text-center mt-10">
          <a href="https://t.me/yuki_smm_bot" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Попробовать с моим салоном
          </a>
        </div>
      </div>
    </section>
  )
}
