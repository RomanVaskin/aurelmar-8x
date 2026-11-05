import { Reveal } from './reveal'

const items = [
  {
    index: 'I',
    title: 'Аналитика рынков',
    text: 'Изучаем динамику спроса, юридические условия и доходность каждого направления, чтобы решения опирались на данные, а не на ожидания.',
  },
  {
    index: 'II',
    title: 'Международная сеть партнёров',
    text: 'Работаем с проверенными девелоперами, юристами и управляющими компаниями на местах — от первого просмотра до передачи ключей.',
  },
  {
    index: 'III',
    title: 'Персональный подбор',
    text: 'Формируем подборку под цели клиента: жизнь, отдых или капитал. Без шаблонных каталогов и навязанных предложений.',
  },
]

export function Approach() {
  return (
    <section
      id="approach"
      className="bg-navy px-6 py-28 text-milk lg:px-12 lg:py-44"
    >
      <div className="mx-auto grid max-w-[1500px] gap-16 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-5">
          <p className="mb-8 text-[11px] font-medium uppercase tracking-[0.38em] text-champagne">
            Подход AURELMAR
          </p>
          <h2 className="text-balance font-serif text-[2.5rem] font-light leading-[1.05] md:text-6xl">
            Сдержанная
            <br />
            <span className="italic text-champagne-soft">экспертиза</span>
            <br />
            вместо громких обещаний
          </h2>
        </Reveal>

        <div className="lg:col-span-6 lg:col-start-7">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 120}>
              <article className="grid gap-4 border-t border-champagne/30 py-10 md:grid-cols-[5rem_1fr] md:gap-8 lg:py-12">
                <span className="font-serif text-2xl italic text-champagne">
                  {item.index}
                </span>
                <div>
                  <h3 className="mb-4 font-serif text-3xl font-light md:text-4xl">
                    {item.title}
                  </h3>
                  <p className="max-w-lg text-pretty leading-relaxed text-milk/70">
                    {item.text}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
          <div className="border-t border-champagne/30" />
        </div>
      </div>
    </section>
  )
}
