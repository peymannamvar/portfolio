import { useEffect } from 'react'

export default function ArticleModal({ article, onClose }) {
  useEffect(() => {
    if (!article) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [article, onClose])

  if (!article) return null

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center bg-void/70 p-0 backdrop-blur-sm md:items-center md:p-6">
      <button type="button" className="absolute inset-0" aria-label="بستن" onClick={onClose} />
      <article className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-[1.8rem] border border-line bg-ink md:rounded-[1.8rem]">
        <img src={article.image} alt="" className="h-52 w-full object-cover md:h-72" />
        <button
          type="button"
          onClick={onClose}
          className="absolute left-4 top-4 rounded-full border border-white/20 bg-void/60 px-3 py-1 text-sm"
        >
          بستن
        </button>
        <div className="p-6 md:p-8">
          <h3 className="text-2xl font-bold md:text-3xl">{article.title}</h3>
          <p className="mt-4 leading-8 text-mist">{article.body}</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {article.gallery.map((src) => (
              <img key={src} src={src} alt="" className="h-40 w-full rounded-2xl object-cover" />
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}
