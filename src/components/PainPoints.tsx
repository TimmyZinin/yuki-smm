const pains = [
  {
    icon: '💇',
    title: 'Весь день — клиенты. На посты нет сил',
    desc: 'Вы работаете с 9 до 21. Садитесь вечером писать пост — и понимаете, что не знаете, о чём. Откладываете. Аккаунт молчит неделю.',
  },
  {
    icon: '💸',
    title: 'SMM-менеджер — это 25-40К/мес',
    desc: 'Фрилансер пишет шаблонные тексты и не понимает вашу специфику. Нанимать в штат — дорого. Результат — никакой.',
  },
  {
    icon: '🔄',
    title: 'ChatGPT → Canva → Instagram → VK → Telegram',
    desc: 'Открыли ChatGPT, написали промпт, скопировали текст, открыли Canva, сделали картинку, зашли в Instagram, вставили... И так на каждую площадку.',
  },
  {
    icon: '😐',
    title: 'Посты как у всех',
    desc: '«Заботьтесь о своих волосах!» — пишет ChatGPT каждому салону одинаково. Клиенты пролистывают. Ваш салон теряется в ленте.',
  },
]

export default function PainPoints() {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Знакомо, если у вас салон?</h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            109 000 салонов в России. У большинства соцсети ведёт сам владелец. Или не ведёт никто.
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
