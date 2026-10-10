import { tools } from '../data'

export default function Tools() {
  const loop = [...tools, ...tools]

  return (
    <section id="tools" className="py-10">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-xs tracking-[0.3em] text-gold">TOOLKIT</p>
        <h2 className="mt-2 text-3xl font-bold md:text-4xl">نرم‌افزارها و ابزارها</h2>
      </div>

      <div className="mt-8 overflow-hidden border-y border-line bg-ink py-6">
        <div className="marquee">
          {loop.map((tool, index) => (
            <div key={`${tool.name}-${index}`} className="flex items-center gap-4 px-4">
              <span className="text-2xl font-semibold text-sand md:text-3xl">{tool.name}</span>
              <span className="text-xs text-mist">{tool.kind}</span>
              <span className="h-1 w-1 rounded-full bg-gold" />
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 grid max-w-6xl grid-cols-2 gap-3 px-5 sm:grid-cols-3 md:grid-cols-5">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="rounded-[1.4rem] border border-line bg-panel p-5 transition hover:border-gold/40"
          >
            <div className="mb-8 h-10 w-10 rounded-full border border-gold/30" />
            <h3 className="font-medium">{tool.name}</h3>
            <p className="mt-1 text-xs text-mist">{tool.kind}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
