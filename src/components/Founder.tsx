import { useReveal } from '../hooks/useReveal'

export default function Founder() {
  const ref = useReveal()

  return (
    <section className="section-tight">
      <div ref={ref} className="max-w-3xl mx-auto text-center reveal-up">
        <p className="text-sm text-text-muted uppercase tracking-widest mb-8">Кто за этим стоит</p>

        <div className="elegant-card p-8 md:p-12">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-rose to-mocha mx-auto mb-6 flex items-center justify-center">
            <span className="text-cream font-serif text-2xl font-semibold">TZ</span>
          </div>

          <h3 className="font-serif text-2xl font-semibold mb-2">Тим Зинин</h3>
          <p className="text-sm text-text-muted mb-6">Делает AI, который понимает бьюти</p>

          <p className="text-text-secondary leading-relaxed mb-4 max-w-lg mx-auto">
            Мы сами ведём 5 аккаунтов — и каждый вечер падали от усталости.
            Сделали AI, чтобы не тратить 3 часа в день на контент.
            А потом поняли: у владелиц салонов — та же боль, только острее.
          </p>
          <p className="text-text-secondary leading-relaxed max-w-lg mx-auto">
            Yuki уже год работает в production. Каждый день.
            Это не стартап из акселератора — это инструмент, который мы сами используем.
          </p>
        </div>
      </div>
    </section>
  )
}
