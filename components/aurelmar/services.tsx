import { Reveal } from './reveal'

const services = [
  {
    index: '01',
    title: 'Недвижимость',
    text: 'Подбор, проверка и сопровождение покупки жилой и инвестиционной недвижимости за рубежом.',
  },
  {
    index: '02',
    title: 'ВНЖ и релокация',
    text: 'Помощь с получением вида на жительство и организацией переезда семьи на новом месте.',
  },
  {
    index: '03',
    title: 'Международные инвестиционные возможности',
    text: 'Доступ к отобранным проектам и стратегиям размещения капитала в разных юрисдикциях.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-sand px-6 py-28 lg:px-12 lg:py-44">
      <div className="mx-auto max-w-[1500px]">
        <Reveal className="mb-16 grid gap-8 lg:mb-20 lg:grid-cols-12">
          <p className="text-[11px] font-medium uppercase tracking-[0.38em] text-champagne lg:col-span-3">
            Услуги
          </p>
          <h2 className="text-balance font-serif text-[2.5rem] font-light leading-[1.05] text-navy md:text-6xl lg:col-span-9">
            Всё, что нужно
            <br />
            <span className="italic text-navy/60">для жизни без границ</span>
          </h2>
        </Reveal>

        <div className="border-b border-navy/20">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <article className="group grid items-center gap-4 border-t border-navy/20 py-10 transition-colors duration-500 hover:bg-navy/[0.03] md:grid-cols-12 md:gap-8 md:py-14">
                <span className="font-serif text-xl italic text-champagne md:col-span-1 md:pl-2">
                  {s.index}
                </span>
                <h3 className="text-balance font-serif text-3xl font-light leading-tight text-navy transition-transform duration-500 group-hover:translate-x-3 md:col-span-6 md:text-[2.5rem]">
                  {s.title}
                </h3>
                <p className="max-w-md text-pretty leading-relaxed text-navy/65 md:col-span-4">
                  {s.text}
                </p>
                <span
                  aria-hidden="true"
                  className="hidden text-2xl text-navy transition-transform duration-500 group-hover:translate-x-2 md:col-span-1 md:block md:text-right"
                >
                  →
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
