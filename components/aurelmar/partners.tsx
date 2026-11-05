import Image from 'next/image'
import { Reveal } from './reveal'

export function Partners() {
  return (
    <section id="partners" className="relative overflow-hidden bg-navy-deep">
      <Image
        src="/images/hero.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/40" />

      <div className="relative mx-auto max-w-[1500px] px-6 py-28 lg:px-12 lg:py-44">
        <Reveal className="max-w-3xl">
          <p className="mb-8 flex items-center gap-5 text-[11px] font-medium uppercase tracking-[0.38em] text-champagne">
            <span className="h-px w-12 bg-champagne" />
            Партнёрам
          </p>
          <h2 className="mb-8 text-balance font-serif text-[2.5rem] font-light leading-[1.05] text-milk md:text-6xl">
            Создадим
            <br />
            <span className="italic text-champagne-soft">общее будущее</span>
          </h2>
          <p className="mb-12 max-w-xl text-pretty text-lg leading-relaxed text-milk/70">
            Приглашаем к сотрудничеству девелоперов, агентства и консультантов,
            разделяющих наши стандарты качества и уважение к клиенту.
          </p>
          <a
            href="#contacts"
            className="group inline-flex items-center gap-6 border border-champagne px-9 py-5 text-[11px] font-medium uppercase tracking-[0.3em] text-champagne transition-colors duration-500 hover:bg-champagne hover:text-navy"
          >
            Стать партнёром
            <span
              aria-hidden="true"
              className="transition-transform duration-500 group-hover:translate-x-2"
            >
              →
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
