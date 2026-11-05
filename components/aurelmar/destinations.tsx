import Image from 'next/image'
import { Reveal } from './reveal'

const destinations = [
  {
    index: '01',
    name: 'Кипр',
    note: 'Средиземноморье · Европейская юрисдикция',
    image: '/images/cyprus.png',
    alt: 'Скалистое побережье Кипра и каменная вилла у бухты',
    offset: '',
  },
  {
    index: '02',
    name: 'Таиланд',
    note: 'Пхукет · Самуи · Тропические резиденции',
    image: '/images/thailand.png',
    alt: 'Тропическая вилла с бассейном на Пхукете на закате',
    offset: 'lg:mt-24',
  },
  {
    index: '03',
    name: 'Грузия',
    note: 'Батуми · Тбилиси · Чёрное море',
    image: '/images/georgia.png',
    alt: 'Современная набережная Батуми и горы Кавказа',
    offset: 'lg:mt-12',
  },
]

export function Destinations() {
  return (
    <section
      id="destinations"
      className="bg-milk px-6 py-28 lg:px-12 lg:py-44"
    >
      <div className="mx-auto max-w-[1500px]">
        <Reveal className="mb-20 grid gap-8 lg:mb-28 lg:grid-cols-12">
          <p className="text-[11px] font-medium uppercase tracking-[0.38em] text-champagne lg:col-span-3">
            Направления
          </p>
          <h2 className="text-balance font-serif text-[2.5rem] font-light leading-[1.05] text-navy md:text-6xl lg:col-span-9">
            Три побережья,
            <br />
            <span className="italic text-navy/60">одна философия выбора</span>
          </h2>
        </Reveal>

        <div className="grid gap-x-8 gap-y-16 md:grid-cols-3">
          {destinations.map((d, i) => (
            <Reveal key={d.name} delay={i * 150} className={d.offset}>
              <a href="#properties" className="group block">
                <div className="relative aspect-[3/4] overflow-hidden bg-sand">
                  <Image
                    src={d.image}
                    alt={d.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent" />
                  <span className="absolute left-6 top-6 font-serif text-lg italic text-milk/90">
                    {d.index}
                  </span>
                  <div className="absolute inset-x-6 bottom-6 flex items-end justify-between">
                    <h3 className="font-serif text-[2.5rem] font-light text-milk lg:text-5xl">
                      {d.name}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="mb-2 flex h-11 w-11 items-center justify-center rounded-full border border-milk/50 text-milk transition-all duration-500 group-hover:border-champagne group-hover:bg-champagne group-hover:text-navy"
                    >
                      →
                    </span>
                  </div>
                </div>
                <p className="mt-5 text-xs uppercase tracking-[0.2em] text-navy/60">
                  {d.note}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
