import Image from 'next/image'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh items-end overflow-hidden bg-navy"
    >
      <Image
        src="/images/hero.png"
        alt="Современная вилла с панорамным бассейном на берегу моря на закате"
        fill
        priority
        sizes="100vw"
        className="animate-slow-zoom object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy/30 to-navy/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/55 via-transparent to-transparent" />

      <div className="relative mx-auto w-full max-w-[1500px] px-6 pb-24 pt-40 lg:px-12 lg:pb-28">
        <p
          className="animate-fade-up mb-8 flex items-center gap-5 text-[11px] font-medium uppercase tracking-[0.38em] text-champagne-soft"
          style={{ animationDelay: '0.5s' }}
        >
          <span className="h-px w-12 bg-champagne" />
          International Real Estate
        </p>
        <h1
          className="animate-fade-up max-w-5xl text-balance font-serif text-[clamp(2.75rem,7.4vw,7rem)] font-light leading-[0.95] tracking-tight text-milk"
          style={{ animationDelay: '0.7s' }}
        >
          Недвижимость
          <br />
          <span className="italic text-champagne-soft">без границ</span>
        </h1>
        <div className="mt-12 flex flex-col gap-10 xl:flex-row xl:items-end xl:justify-between">
          <p
            className="animate-fade-up max-w-md text-pretty text-base leading-relaxed text-milk/80 lg:text-lg"
            style={{ animationDelay: '0.95s' }}
          >
            Международная недвижимость. Инвестиционные возможности. Локальная
            экспертиза.
          </p>
          <div
            className="animate-fade-up flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:gap-10 xl:mr-16"
            style={{ animationDelay: '1.15s' }}
          >
            <a
              href="#properties"
              className="group inline-flex items-center gap-6 whitespace-nowrap border border-champagne bg-navy-deep/30 px-9 py-5 text-[11px] font-medium uppercase tracking-[0.3em] text-champagne backdrop-blur-sm transition-colors duration-500 hover:bg-champagne hover:text-navy"
            >
              Подобрать недвижимость
              <span
                aria-hidden="true"
                className="transition-transform duration-500 group-hover:translate-x-2"
              >
                →
              </span>
            </a>
            <a
              href="#destinations"
              className="group inline-flex w-fit items-center gap-5 whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.3em] text-milk"
            >
              Открыть направления
              <span className="relative block h-px w-16 bg-champagne transition-all duration-500 group-hover:w-24" />
            </a>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 right-6 hidden h-24 w-px bg-milk/20 lg:right-12 lg:block"
        aria-hidden="true"
      >
        <span className="animate-scroll-line block h-full w-px bg-champagne" />
      </div>
    </section>
  )
}
