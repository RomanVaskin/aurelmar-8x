import Image from 'next/image'
import { Reveal } from './reveal'

const articles = [
  {
    category: 'Рынки',
    title: 'Средиземноморье: что определяет ценность недвижимости в ближайшие годы',
    time: '8 мин чтения',
    image: '/images/article-1.png',
    alt: 'Средиземноморский прибрежный город с белой архитектурой',
  },
  {
    category: 'Инвестиции',
    title: 'Как оценивать доходность зарубежного объекта: пять вопросов до сделки',
    time: '6 мин чтения',
    image: '/images/article-2.png',
    alt: 'Архитектурные планы и компас на льняной скатерти',
  },
  {
    category: 'Релокация',
    title: 'Жизнь у океана: на что смотреть при выборе тропической резиденции',
    time: '7 мин чтения',
    image: '/images/article-3.png',
    alt: 'Современный прибрежный комплекс на рассвете',
  },
]

export function Insights() {
  return (
    <section id="insights" className="bg-milk px-6 py-28 lg:px-12 lg:py-44">
      <div className="mx-auto max-w-[1500px]">
        <Reveal className="mb-16 grid gap-8 lg:mb-24 lg:grid-cols-12">
          <p className="text-[11px] font-medium uppercase tracking-[0.38em] text-champagne lg:col-span-3">
            Аналитика
          </p>
          <h2 className="text-balance font-serif text-[2.5rem] font-light leading-[1.05] text-navy md:text-6xl lg:col-span-9">
            Взгляд <span className="italic text-navy/60">изнутри рынка</span>
          </h2>
        </Reveal>

        <div className="grid gap-x-10 gap-y-16 md:grid-cols-3">
          {articles.map((a, i) => (
            <Reveal key={a.title} delay={i * 150}>
              <article className="group">
                <a href="#insights" className="block">
                  <div className="relative mb-7 aspect-[3/2] overflow-hidden bg-sand">
                    <Image
                      src={a.image}
                      alt={a.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="mb-4 flex items-center gap-4 text-[11px] uppercase tracking-[0.28em]">
                    <span className="text-champagne">{a.category}</span>
                    <span className="h-px w-8 bg-navy/20" />
                    <span className="text-navy/50">{a.time}</span>
                  </div>
                  <h3 className="text-balance font-serif text-2xl font-light leading-snug text-navy transition-colors duration-500 group-hover:text-champagne md:text-3xl">
                    {a.title}
                  </h3>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
