export default function Founder() {
  return (
    <section className="section-padding">
      <div className="max-w-3xl mx-auto">
        <div className="glass-card p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
          {/* Avatar placeholder */}
          <div className="shrink-0">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-accent to-cyan flex items-center justify-center text-4xl md:text-5xl font-extrabold text-white select-none">
              TZ
            </div>
          </div>

          <div>
            <div className="text-sm text-accent-light font-medium mb-2">Основатель</div>
            <h3 className="text-xl md:text-2xl font-bold mb-4">Тим Зинин</h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              Мы создали AI-агента для своей команды — вести 5 аккаунтов в соцсетях
              одному невозможно. 24 спринта разработки, 2 740 тестов, работает в production
              каждый день.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Потом поняли: у владельцев салонов красоты та же боль, только острее —
              весь день с клиентами, а аккаунт молчит. Сделали Yuki для вас.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
