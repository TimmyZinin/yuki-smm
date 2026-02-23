import { useReveal } from '../hooks/useReveal'

const pains = [
  {
    emoji: '🕐',
    title: 'Работаете до ночи. На посты — ноль сил',
    desc: 'Вы принимаете клиентов с 9 до 21. Вечером открываете Instagram, смотрите на пустой пост... и закрываете. Аккаунт молчит неделю.',
  },
  {
    emoji: '😤',
    title: 'SMM-щик не отличает кератин от ламинирования',
    desc: 'Нанимали фрилансера за 25 000. Он постил стоковые розы и писал «заботьтесь о себе». Ноль записей. Ноль понимания вашего бизнеса.',
  },
  {
    emoji: '😩',
    title: 'ChatGPT → Canva → Instagram → VK → Telegram',
    desc: 'Написали промпт. Скопировали. Открыли Canva. Сделали картинку. Зашли в Instagram. Вставили. Потом в VK. Потом в Telegram. Каждый. Божий. День.',
  },
  {
    emoji: '👀',
    title: 'У конкуренток — идеальная лента. А у вас?',
    desc: 'Они путешествуют и пишут «бизнес на автопилоте». Запись на 3 недели вперёд. А вы делаете всё сами и думаете: как у них это получается? (Спойлер: не руками.)',
  },
]

export default function PainPoints() {
  const ref = useReveal()

  return (
    <section className="section-standard">
      <div ref={ref} className="max-w-5xl mx-auto reveal-up">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-5">Вы не одна такая</h2>
          <p className="text-text-secondary max-w-lg mx-auto leading-relaxed">
            109 000 салонов в России. У большинства соцсети ведёт сам владелец — после полного рабочего дня. Или не ведёт никто.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {pains.map((p) => (
            <div key={p.title} className="border-l-2 border-rose-gold/40 pl-7 py-6">
              <div className="text-2xl mb-4">{p.emoji}</div>
              <h3 className="font-serif text-xl font-semibold mb-3 leading-snug">{p.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="quote-italic text-base md:text-lg max-w-md mx-auto">
            &laquo;Я мечтала о свободе, а получила новую работу — только без выходных&raquo;
          </p>
        </div>
      </div>
    </section>
  )
}
