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
              Мы сделали Юки для себя — вести 5 аккаунтов одному невозможно.
              Агент генерирует контент для двух авторов, публикует в LinkedIn, Telegram,
              Threads и VK. 2 740 тестов, 24 спринта разработки, работает в production.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Теперь делимся с вами. Юки — не очередной генератор текста.
              Это агент с памятью, стилем и автоматизацией.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
