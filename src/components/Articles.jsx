import { articles } from '../data'

export default function Articles({ onOpen }) {
  return (
    <section id="articles" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div className="mb-10">
        <p className="text-xs tracking-[0.3em] text-gold">JOURNAL</p>
        <h2 className="mt-2 text-3xl font-bold md:text-4xl">مقالات؛ با پاپ‌آپ و تصاویر مرتبط</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {articles.map((article) => (
          <button
            key={article.id}
            type="button"
            onClick={() => onOpen(article)}
            className="group overflow-hidden rounded-[1.7rem] border border-line bg-panel text-right"
          >
            <div className="relative h-52 overflow-hidden md:h-64">
              <img
                src={article.image}
                alt=""
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">{article.title}</h3>
              <p className="mt-2 text-sm leading-7 text-mist">{article.excerpt}</p>
              <span className="mt-4 inline-block text-xs text-gold">باز کردن مقاله</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}
