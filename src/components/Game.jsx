import { useEffect, useRef, useState } from 'react'

const TOKENS = ['UI', 'JS', 'WP', 'SEO', 'AI']

export default function Game() {
  const canvasRef = useRef(null)
  const stateRef = useRef(null)
  const [score, setScore] = useState(0)
  const [lives, setLives] = useState(3)
  const [running, setRunning] = useState(false)
  const [over, setOver] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let frame
    let last = 0

    const resize = () => {
      const width = Math.min(canvas.parentElement.clientWidth, 720)
      const height = Math.min(window.innerHeight * 0.46, 420)
      canvas.width = width * window.devicePixelRatio
      canvas.height = height * window.devicePixelRatio
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0)
      if (stateRef.current) {
        stateRef.current.w = width
        stateRef.current.h = height
        stateRef.current.paddle.y = height - 28
      }
    }

    const reset = () => {
      const width = canvas.clientWidth || 320
      const height = canvas.clientHeight || 320
      stateRef.current = {
        w: width,
        h: height,
        paddle: { x: width / 2, y: height - 28, width: 86 },
        drops: [],
        spawn: 0,
        score: 0,
        lives: 3,
        playing: false,
      }
    }

    reset()
    resize()
    window.addEventListener('resize', resize)

    const spawnDrop = (state) => {
      state.drops.push({
        x: 24 + Math.random() * (state.w - 48),
        y: -20,
        v: 1.6 + Math.random() * 1.8 + state.score * 0.03,
        label: TOKENS[Math.floor(Math.random() * TOKENS.length)],
        r: 16,
      })
    }

    const loop = (time) => {
      const state = stateRef.current
      const dt = Math.min(32, time - last)
      last = time
      ctx.clearRect(0, 0, state.w, state.h)

      ctx.fillStyle = '#101114'
      ctx.fillRect(0, 0, state.w, state.h)
      ctx.strokeStyle = 'rgba(201,163,106,0.12)'
      for (let x = 0; x < state.w; x += 32) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, state.h)
        ctx.stroke()
      }

      if (state.playing) {
        state.spawn += dt
        if (state.spawn > 780) {
          spawnDrop(state)
          state.spawn = 0
        }

        state.drops.forEach((drop) => {
          drop.y += drop.v * (dt / 16)
        })

        const caught = []
        const missed = []
        state.drops.forEach((drop) => {
          const hit =
            drop.y + drop.r > state.paddle.y - 8 &&
            drop.x > state.paddle.x - state.paddle.width / 2 &&
            drop.x < state.paddle.x + state.paddle.width / 2
          if (hit) caught.push(drop)
          else if (drop.y > state.h + 20) missed.push(drop)
        })
        if (caught.length) {
          state.score += caught.length
          setScore(state.score)
        }
        if (missed.length) {
          state.lives -= missed.length
          setLives(Math.max(0, state.lives))
          if (state.lives <= 0) {
            state.playing = false
            setRunning(false)
            setOver(true)
          }
        }
        state.drops = state.drops.filter((drop) => !caught.includes(drop) && !missed.includes(drop))
      }

      state.drops.forEach((drop) => {
        ctx.beginPath()
        ctx.fillStyle = '#c9a36a'
        ctx.arc(drop.x, drop.y, drop.r, 0, Math.PI * 2)
        ctx.fill()
        ctx.fillStyle = '#08090b'
        ctx.font = '700 11px Vazirmatn, sans-serif'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(drop.label, drop.x, drop.y)
      })

      ctx.fillStyle = '#e8e2d6'
      ctx.fillRect(state.paddle.x - state.paddle.width / 2, state.paddle.y, state.paddle.width, 10)
      ctx.fillStyle = '#c9a36a'
      ctx.fillRect(state.paddle.x - 8, state.paddle.y - 6, 16, 6)

      frame = requestAnimationFrame(loop)
    }

    frame = requestAnimationFrame(loop)

    const moveTo = (clientX) => {
      const rect = canvas.getBoundingClientRect()
      const x = clientX - rect.left
      const state = stateRef.current
      state.paddle.x = Math.max(state.paddle.width / 2, Math.min(state.w - state.paddle.width / 2, x))
    }

    const onPointer = (event) => moveTo(event.clientX)
    canvas.addEventListener('pointermove', onPointer)
    canvas.addEventListener('pointerdown', onPointer)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('pointermove', onPointer)
      canvas.removeEventListener('pointerdown', onPointer)
    }
  }, [])

  const start = () => {
    const state = stateRef.current
    if (!state) return
    state.drops = []
    state.score = 0
    state.lives = 3
    state.playing = true
    state.spawn = 0
    setScore(0)
    setLives(3)
    setOver(false)
    setRunning(true)
  }

  return (
    <section id="game" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs tracking-[0.3em] text-gold">PLAY</p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">بازی توکن‌گیر</h2>
          <p className="mt-2 max-w-md text-sm leading-7 text-mist">
            پَدل را با انگشت یا موس حرکت بده و توکن‌های UI، JS، وردپرس، سئو و AI را بگیر. سه شانس داری.
          </p>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <span className="rounded-full border border-line px-3 py-1">امتیاز {score}</span>
          <span className="rounded-full border border-line px-3 py-1">شانس {lives}</span>
          <button
            type="button"
            onClick={start}
            className="rounded-full bg-gold px-4 py-2 text-void"
          >
            {running ? 'از نو' : 'شروع'}
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[1.8rem] border border-line">
        <canvas ref={canvasRef} className="block w-full touch-none" />
        {(!running || over) && (
          <div className="pointer-events-none absolute inset-0 grid place-items-center bg-void/30 text-sm">
            {over ? 'تموم شد — دوباره امتحان کن' : 'برای شروع دکمه را بزن'}
          </div>
        )}
      </div>
    </section>
  )
}
