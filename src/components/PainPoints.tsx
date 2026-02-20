const pains = [
  {
    icon: '⏰',
    title: 'Каждый пост — 2 часа',
    desc: 'Бриф, написание, правки, согласование, публикация. И так каждый день.',
  },
  {
    icon: '🤒',
    title: 'Копирайтер заболел',
    desc: 'Контент-план горит. Аккаунты молчат. Охваты падают.',
  },
  {
    icon: '🔀',
    title: '5 инструментов',
    desc: 'Генератор текста, планировщик, аналитика, дизайн, CRM — а работаете в WhatsApp.',
  },
  {
    icon: '🤖',
    title: 'ChatGPT-стиль',
    desc: 'Посты выглядят как у всех. Генерик-тексты, которые не цепляют аудиторию.',
  },
]

export default function PainPoints() {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Знакомо?</h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            SMM сжирает время, деньги и нервы. Каждый день одно и то же.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {pains.map((p) => (
            <div key={p.title} className="glass-card p-6 md:p-8">
              <div className="text-3xl mb-4">{p.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
