'use client'

import { useEffect, useState } from 'react'

const links = [
  { label: 'Направления', href: '#destinations' },
  { label: 'Недвижимость', href: '#properties' },
  { label: 'Аналитика', href: '#insights' },
  { label: 'О нас', href: '#approach' },
  { label: 'Контакты', href: '#contacts' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? 'bg-navy/95 py-4 backdrop-blur-md'
          : 'bg-transparent py-6 lg:py-8'
      }`}
    >
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 lg:px-12">
        <a
          href="#top"
          className="font-serif text-2xl font-light tracking-[0.38em] text-milk"
          aria-label="AURELMAR — на главную"
        >
          AURELMAR
        </a>

        <nav aria-label="Основная навигация" className="hidden lg:block">
          <ul className="flex items-center gap-12">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative text-[11px] font-medium uppercase tracking-[0.28em] text-milk/85 transition-colors hover:text-champagne"
                >
                  {link.label}
                  <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-champagne transition-all duration-500 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          className="relative flex h-10 w-10 items-center justify-center lg:hidden"
        >
          <span
            className={`absolute h-px w-6 bg-milk transition-transform duration-300 ${
              open ? 'rotate-45' : '-translate-y-1.5'
            }`}
          />
          <span
            className={`absolute h-px w-6 bg-milk transition-transform duration-300 ${
              open ? '-rotate-45' : 'translate-y-1.5'
            }`}
          />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-y-auto transition-[max-height] duration-500 lg:hidden ${
          open
            ? 'max-h-[calc(100svh-5rem)] visible'
            : 'max-h-0 invisible overflow-hidden'
        }`}
      >
        <ul className="flex flex-col gap-6 px-6 pb-8 pt-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-serif text-3xl font-light text-milk"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
