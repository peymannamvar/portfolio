export default function Hero() {
  const letters = 'پیمان نامور'.split('')

  return (
    <section id="top" className="relative isolate overflow-hidden pt-28 md:pt-36">
      <div className="pointer-events-none absolute inset-0 grid-fade" />
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-sage/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-20 md:grid-cols-[1.15fr_0.85fr] md:items-center md:pb-28">
        <div>
          <p className="reveal mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-panel/70 px-3 py-1 text-xs text-mist">
            <span className="h-1.5 w-1.5 rounded-full bg-sage" />
            طراح وبسایت و UI/UX
          </p>
          <h1 className="hero-title max-w-xl text-5xl font-extrabold leading-[1.15] tracking-tight text-sand sm:text-6xl md:text-7xl">
            {letters.map((letter, index) => (
              <span key={`${letter}-${index}`} style={{ animationDelay: `${index * 60}ms` }}>
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </h1>
          <p className="reveal mt-6 max-w-lg text-base leading-8 text-mist md:text-lg" style={{ animationDelay: '0.4s' }}>
            خوش آمدید. من تجربهٔ دیجیتال می‌سازم: از هویت بصری تا کدنویسی رابط، از وردپرس تا جاوااسکریپت،
            با تمرکز روی زیبایی مینیمال، سرعت و سئو.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#order"
              className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-void transition hover:bg-gold-soft"
            >
              سفارش طراحی سایت
            </a>
            <a
              href="#articles"
              className="rounded-full border border-line px-6 py-3 text-sm text-sand transition hover:border-gold/50"
            >
              خواندن مقالات
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="floaty relative overflow-hidden rounded-[2rem] border border-line bg-panel p-6 shadow-[0_0_80px_rgba(201,163,106,0.08)]">
            <div className="mb-6 flex items-center justify-between text-xs text-mist">
              <span>Studio Snapshot</span>
              <span>۲۰۲۶</span>
            </div>
            <div className="aspect-[4/5] overflow-hidden rounded-[1.4rem]">
              <img
                src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80"
                alt="فضای طراحی محصول"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3 text-center text-xs">
              {['وردپرس', 'ری‌اکت', 'فیگما'].map((item) => (
                <div key={item} className="rounded-2xl border border-line py-3 text-sand">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-5 -left-3 rounded-2xl border border-gold/30 bg-void/90 px-4 py-3 text-xs text-gold backdrop-blur md:-left-8">
            طراحی استاندارد · موبایل‌اول
          </div>
        </div>
      </div>
    </section>
  )
}
