import { useState } from 'react'

const empty = {
  name: '',
  email: '',
  phone: '',
  type: 'وردپرس',
  budget: '',
  message: '',
}

export default function OrderForm() {
  const [form, setForm] = useState(empty)
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  const update = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }))
  }

  const submit = (event) => {
    event.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('نام، ایمیل و توضیح پروژه لازم است.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('ایمیل معتبر وارد کنید.')
      return
    }
    setError('')
    setSent(true)
    setForm(empty)
  }

  return (
    <section id="order" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div className="grid gap-10 overflow-hidden rounded-[2rem] border border-line bg-panel md:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-64 p-8 md:p-10">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-transparent" />
          <div className="relative">
            <p className="text-xs tracking-[0.3em] text-gold">COMMISSION</p>
            <h2 className="mt-3 text-3xl font-bold">فرم سفارش طراحی سایت</h2>
            <p className="mt-4 max-w-sm text-sm leading-7 text-mist">
              جزئیات برند، هدف و ددلاین را بنویسید. ظرف یک روز کاری با پیشنهاد مسیر طراحی برمی‌گردم.
            </p>
          </div>
        </div>

        <form onSubmit={submit} className="grid gap-4 p-6 md:p-10">
          {sent && (
            <p className="rounded-2xl border border-sage/40 bg-sage/10 px-4 py-3 text-sm text-sage">
              درخواست ثبت شد. به‌زودی تماس می‌گیرم.
            </p>
          )}
          {error && <p className="text-sm text-red-300">{error}</p>}

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm">
              نام
              <input
                name="name"
                value={form.name}
                onChange={update}
                className="rounded-2xl border border-line bg-ink px-4 py-3 outline-none focus:border-gold/50"
              />
            </label>
            <label className="grid gap-2 text-sm">
              ایمیل
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={update}
                className="rounded-2xl border border-line bg-ink px-4 py-3 outline-none focus:border-gold/50"
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm">
              تلفن
              <input
                name="phone"
                value={form.phone}
                onChange={update}
                className="rounded-2xl border border-line bg-ink px-4 py-3 outline-none focus:border-gold/50"
              />
            </label>
            <label className="grid gap-2 text-sm">
              نوع پروژه
              <select
                name="type"
                value={form.type}
                onChange={update}
                className="rounded-2xl border border-line bg-ink px-4 py-3 outline-none focus:border-gold/50"
              >
                <option>وردپرس</option>
                <option>رابط کاربری اختصاصی</option>
                <option>ری‌اکت / وب‌اپ</option>
                <option>سئو و بهینه‌سازی</option>
              </select>
            </label>
          </div>

          <label className="grid gap-2 text-sm">
            بودجه تقریبی
            <input
              name="budget"
              value={form.budget}
              onChange={update}
              placeholder="مثلاً ۲۰ تا ۴۰ میلیون"
              className="rounded-2xl border border-line bg-ink px-4 py-3 outline-none focus:border-gold/50"
            />
          </label>

          <label className="grid gap-2 text-sm">
            توضیح سفارش
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={update}
              className="resize-none rounded-2xl border border-line bg-ink px-4 py-3 outline-none focus:border-gold/50"
            />
          </label>

          <button
            type="submit"
            className="mt-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-void transition hover:bg-gold-soft"
          >
            ارسال درخواست
          </button>
        </form>
      </div>
    </section>
  )
}
