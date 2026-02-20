export default function Founder() {
  return (
    <section className="section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <div className="divider mb-6" />
        <p className="text-sm text-text-muted uppercase tracking-widest mb-8">Кто за этим стоит</p>

        <div className="elegant-card p-8 md:p-12">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-rose to-mocha mx-auto mb-6 flex items-center justify-center">
            <span className="text-cream font-serif text-2xl font-semibold">TZ</span>
          </div>

          <h3 className="font-serif text-2xl font-semibold mb-2">Тим Зинин</h3>
          <p className="text-sm text-text-muted mb-6">Основатель Yuki</p>

          <p className="text-text-secondary leading-relaxed mb-4 max-w-lg mx-auto">
            Мы создали AI-агента для себя — вести 5 аккаунтов одновременно было невозможно.
            24 спринта разработки, 2 740 тестов, работает в production каждый день.
          </p>
          <p className="text-text-secondary leading-relaxed max-w-lg mx-auto">
            Потом поняли: у владельцев салонов та же проблема, только острее —
            весь день с клиентами, а аккаунт молчит. Мы сделали Yuki для вас.
          </p>
        </div>
      </div>
    </section>
  )
}
