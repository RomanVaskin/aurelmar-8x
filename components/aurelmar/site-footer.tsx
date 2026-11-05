const nav = [
  { label: 'Направления', href: '#destinations' },
  { label: 'Недвижимость', href: '#properties' },
  { label: 'Аналитика', href: '#insights' },
  { label: 'О нас', href: '#approach' },
  { label: 'Услуги', href: '#services' },
]

const socials = ['Telegram', 'Instagram', 'LinkedIn']

export function SiteFooter() {
  return (
    <footer
      id="contacts"
      className="bg-navy px-6 pb-10 pt-24 text-milk lg:px-12 lg:pt-32"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-16 border-b border-milk/15 pb-20 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="font-serif text-[2.5rem] font-light tracking-[0.3em] md:text-5xl">
              AURELMAR
            </p>
            <p className="mt-6 max-w-sm text-pretty leading-relaxed text-milk/60">
              Международный бренд зарубежной недвижимости. Недвижимость без
              границ.
            </p>
          </div>

          <nav aria-label="Навигация в подвале" className="lg:col-span-2">
            <p className="mb-6 text-[11px] uppercase tracking-[0.3em] text-champagne">
              Навигация
            </p>
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-milk/75 transition-colors hover:text-champagne"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <p className="mb-6 text-[11px] uppercase tracking-[0.3em] text-champagne">
              Контакты
            </p>
            <ul className="space-y-3 text-milk/75">
              <li>aurelmar.ru</li>
              <li>Телефон</li>
              <li>E-mail</li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="mb-6 text-[11px] uppercase tracking-[0.3em] text-champagne">
              Соцсети
            </p>
            <ul className="space-y-3 text-milk/75">
              {socials.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 pt-8 text-xs text-milk/45 md:flex-row">
          <p>© AURELMAR. Все права защищены.</p>
          <p className="uppercase tracking-[0.25em]">aurelmar.ru</p>
        </div>
      </div>
    </footer>
  )
}
