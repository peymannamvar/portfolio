import { skills } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs tracking-[0.3em] text-gold">SKILLS</p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">مهارت‌هایی که با آن‌ها کار می‌کنم</h2>
        </div>
        <p className="max-w-sm text-sm leading-7 text-mist">
          هر پروژه ترکیبی از طراحی، کد و بهینه‌سازی است. این چهار ستون، هستهٔ استودیوی من هستند.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {skills.map((skill, index) => (
          <article
            key={skill.title}
            data-cursor
            className="group relative overflow-hidden rounded-[1.6rem] border border-line bg-panel p-6 transition duration-500 hover:-translate-y-1 hover:border-gold/40"
          >
            <div className="absolute -left-10 top-0 h-full w-24 rotate-12 bg-gradient-to-b from-gold/10 to-transparent opacity-0 transition group-hover:opacity-100" />
            <div className="mb-8 flex items-center justify-between">
              <span className="text-xs text-mist">۰{index + 1}</span>
              <span className="rounded-full border border-line px-3 py-1 text-xs text-gold">{skill.tag}</span>
            </div>
            <h3 className="text-2xl font-semibold">{skill.title}</h3>
            <p className="mt-3 text-sm leading-7 text-mist">{skill.copy}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
