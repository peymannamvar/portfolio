import { useEffect, useState } from 'react'

const links = [
  { href: '#skills', label: 'مهارت‌ها' },
  { href: '#tools', label: 'ابزارها' },
  { href: '#articles', label: 'مقالات' },
  { href: '#game', label: 'بازی' },
  { href: '#order', label: 'سفارش' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-void/80 backdrop-blur-xl border-b border-line/70' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/40 text-xs tracking-[0.2em] text-gold">
            PN
          </span>
          <span className="text-sm font-medium text-sand">Peyman Namvar</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-mist md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-gold-soft">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#order"
          className="hidden rounded-full border border-gold/40 px-4 py-2 text-sm text-gold transition hover:bg-gold hover:text-void md:inline-flex"
        >
          ثبت سفارش
        </a>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-line md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="منو"
        >
          <span className="flex w-4 flex-col gap-1.5">
            <i className={`block h-px bg-sand transition ${open ? 'translate-y-[5px] rotate-45' : ''}`} />
            <i className={`block h-px bg-sand transition ${open ? 'opacity-0' : ''}`} />
            <i className={`block h-px bg-sand transition ${open ? '-translate-y-[5px] -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-ink/95 px-5 py-6 md:hidden">
          <div className="flex flex-col gap-4 text-sand">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
