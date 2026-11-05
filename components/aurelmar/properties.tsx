import Image from 'next/image'
import { Reveal } from './reveal'

const properties = [
  {
    type: 'Вилла',
    place: 'Кипр · Лимасол',
    title: 'Резиденция с видом на открытое море',
    specs: ['5 спален', 'Бассейн', 'Сад'],
    image: '/images/property-1.png',
    alt: 'Современная белая вилла с бассейном в сумерках',
  },
  {
    type: 'Пентхаус',
    place: 'Грузия · Батуми',
    title: 'Апартаменты на высоком этаже у набережной',
    specs: ['3 спальни', 'Терраса', 'Панорама'],
    image: '/images/property-2.png',
    alt: 'Интерьер пентхауса с панорамными окнами на море',
  },
  {
    type: 'Тропическая вилла',
    place: 'Таиланд · Пхукет',
    title: 'Дом в тропическом саду у океана',
    specs: ['4 спальни', 'Бассейн', 'Вид на океан'],
    image: '/images/property-3.png',
    alt: 'Тропическая вилла с деревянной кровлей и бассейном',
  },
]

export function Properties() {
  return (
    <section
      id="properties"
      className="bg-sand px-6 py-28 lg:px-12 lg:py-44"
    >
      <div className="mx-auto max-w-[1500px]">
        <Reveal className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end lg:mb-24">
          <div>
            <p className="mb-8 text-[11px] font-medium uppercase tracking-[0.38em] text-champagne">
              Недвижимость
            </p>
            <h2 className="text-balance font-serif text-[2.5rem] font-light leading-[1.05] text-navy md:text-6xl">
              Избранные
              <br />
              <span className="italic text-navy/60">объекты</span>
            </h2>
          </div>
          <a
            href="#contacts"
            className="group inline-flex w-fit items-center gap-5 text-[11px] font-medium uppercase tracking-[0.3em] text-navy"
          >
            Весь каталог
            <span className="block h-px w-12 bg-champagne transition-all duration-500 group-hover:w-20" />
          </a>
        </Reveal>

        <div className="grid gap-x-8 gap-y-16 md:grid-cols-3">
          {properties.map((p, i) => (
            <Reveal key={p.title} delay={i * 150}>
              <article className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-sand">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
                  />
                  <span className="absolute left-5 top-5 bg-milk/95 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.25em] text-navy">
                    {p.type}
                  </span>
                </div>
                <div className="pt-7">
                  <p className="mb-3 text-[11px] uppercase tracking-[0.28em] text-champagne">
                    {p.place}
                  </p>
                  <h3 className="mb-5 text-balance font-serif text-3xl font-light leading-tight text-navy">
                    {p.title}
                  </h3>
                  <ul className="mb-6 flex flex-wrap gap-x-5 gap-y-1 text-sm text-navy/60">
                    {p.specs.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between border-t border-navy/15 pt-5">
                    <span className="font-serif text-lg italic text-navy/70">
                      Цена по запросу
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-navy transition-transform duration-500 group-hover:translate-x-2"
                    >
                      →
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
