const articles = [
  {
    id: "minimal-ui",
    title: "چرا UI مینیمال هنوز برنده است",
    excerpt:
      "فضای خالی، سلسله‌مراتب و تصمیم‌های رنگی که تجربه را آرام و حرفه‌ای می‌کنند.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=900&q=80",
    ],
    body: "مینیمالیسم یعنی حذف نویز، نه حذف شخصیت. در پروژه‌های محصول، کاربر باید در سه ثانیه بفهمد کجاست، چه کاری می‌تواند بکند و چرا باید اعتماد کند. پالت محدود، تایپوگرافی قوی و فاصله‌گذاری دقیق همان چیزهایی هستند که یک سایت را از شلوغ به حرفه‌ای می‌رسانند. من در طراحی‌هایم ابتدا مسیر کاربر را می‌چینم، بعد رنگ و جزئیات را اضافه می‌کنم تا زیبایی مزاحم عملکرد نشود.",
  },
  {
    id: "wp-seo",
    title: "سئو برای سایت‌های وردپرسی",
    excerpt: "ساختار صفحات، سرعت و محتوا؛ سه ستونی که رتبه را واقعی می‌کنند.",
    image:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    ],
    body: "وردپرس اگر درست پیکربندی شود، بستر عالی برای سئو است. مشکل معمولاً قالب سنگین، تصاویر بدون فشرده‌سازی و ساختار لینک مبهم است. من روی هسته فنی کار می‌کنم: سلسله‌مراتب هدینگ، اسکیما، سرعت موبایل، و محتوای هدفمند برای کلماتی که واقعاً مشتری جستجو می‌کند.",
  },
  {
    id: "ai-design",
    title: "هوش مصنوعی در فرآیند طراحی محصول",
    excerpt:
      "از ایده‌پردازی سریع تا تولید واریانت؛ AI کمک می‌کند، جایگزین فکر طراح نمی‌شود.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80",
    ],
    body: "ابزارهای هوش مصنوعی برای من مثل یک استودیوی کمکی هستند: موکاپ سریع، کپی اولیه، واریانت رنگ، و تست ایده‌ها قبل از ورود به فیگما. اما تصمیم نهایی همیشه انسانی است؛ برند، احساس و محدودیت کسب‌وکار را مدل نمی‌فهمد مگر اینکه طراح هدایت کند.",
  },
  {
    id: "ux-path",
    title: "از وایرفریم تا تجربهٔ واقعی کاربر",
    excerpt:
      "مسیر طراحی وقتی درست است که تست، بازنویسی و جزئیات ریز در آن جا داشته باشند.",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1587440871875-191322ee8b80?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=80",
    ],
    body: "یک رابط خوب از فرض شروع می‌شود، نه از رنگ. وایرفریم مشخص می‌کند اطلاعات کجا می‌نشیند. پروتوتایپ نشان می‌دهد انگشت کاربر کجا گیر می‌کند. بعد از تست، جزئیات بصری می‌آید: میکروانییمیشن، حالت خالی، خطا، و نسخه‌های موبایل.",
  },
];

function setupCursor() {
  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");
  if (!dot || !ring || !window.matchMedia("(pointer: fine)").matches) return;

  window.addEventListener("mousemove", (event) => {
    dot.style.left = `${event.clientX}px`;
    dot.style.top = `${event.clientY}px`;
    ring.style.left = `${event.clientX}px`;
    ring.style.top = `${event.clientY}px`;
  });

  window.addEventListener("mouseover", (event) => {
    const hoverable = event.target.closest("a, button, [data-cursor]");
    ring.classList.toggle("is-hover", Boolean(hoverable));
  });
}

function setupNav() {
  const header = document.getElementById("site-header");
  const toggle = document.getElementById("menu-toggle");
  const mobile = document.getElementById("mobile-menu");

  window.addEventListener(
    "scroll",
    () => {
      header.classList.toggle("bg-[#08090b]/80", window.scrollY > 16);
      header.classList.toggle("backdrop-blur-xl", window.scrollY > 16);
      header.classList.toggle("border-b", window.scrollY > 16);
      header.classList.toggle("border-[#2a2b31]/70", window.scrollY > 16);
    },
    { passive: true },
  );

  toggle.addEventListener("click", () => {
    const open = mobile.classList.toggle("hidden") === false;
    toggle.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  });

  mobile.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobile.classList.add("hidden");
      toggle.classList.remove("menu-open");
    });
  });
}

function setupArticles() {
  const grid = document.getElementById("articles-grid");
  const modal = document.getElementById("article-modal");
  const closeBtn = document.getElementById("modal-close");
  const backdrop = document.getElementById("modal-backdrop");

  grid.innerHTML = articles
    .map(
      (article) => `
      <button type="button" data-article="${article.id}" data-cursor
        class="group overflow-hidden rounded-[1.7rem] border border-[#2a2b31] bg-[#17181c] text-right">
        <div class="relative h-52 overflow-hidden md:h-64">
          <img src="${article.image}" alt="" class="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
          <div class="absolute inset-0 bg-gradient-to-t from-[#08090b] via-transparent to-transparent"></div>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-semibold">${article.title}</h3>
          <p class="mt-2 text-sm leading-7 text-[#a39e94]">${article.excerpt}</p>
          <span class="mt-4 inline-block text-xs text-[#c9a36a]">باز کردن مقاله</span>
        </div>
      </button>`,
    )
    .join("");

  const open = (article) => {
    document.getElementById("modal-image").src = article.image;
    document.getElementById("modal-title").textContent = article.title;
    document.getElementById("modal-body").textContent = article.body;
    document.getElementById("modal-gallery").innerHTML = article.gallery
      .map(
        (src) =>
          `<img src="${src}" alt="" class="h-40 w-full rounded-2xl object-cover" />`,
      )
      .join("");
    modal.classList.remove("hidden");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  grid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-article]");
    if (!button) return;
    const article = articles.find((item) => item.id === button.dataset.article);
    if (article) open(article);
  });

  closeBtn.addEventListener("click", close);
  backdrop.addEventListener("click", close);
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") close();
  });
}

function setupForm() {
  const form = document.getElementById("order-form");
  const error = document.getElementById("form-error");
  const success = document.getElementById("form-success");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    success.classList.add("hidden");
    error.classList.add("hidden");

    if (!data.name.trim() || !data.email.trim() || !data.message.trim()) {
      error.textContent = "نام، ایمیل و توضیح پروژه لازم است.";
      error.classList.remove("hidden");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      error.textContent = "ایمیل معتبر وارد کنید.";
      error.classList.remove("hidden");
      return;
    }

    form.reset();
    success.classList.remove("hidden");
  });
}

function setupGame() {
  const canvas = document.getElementById("game-canvas");
  const scoreEl = document.getElementById("game-score");
  const livesEl = document.getElementById("game-lives");
  const overlay = document.getElementById("game-overlay");
  const startBtn = document.getElementById("game-start");
  const ctx = canvas.getContext("2d");
  const tokens = ["UI", "JS", "WP", "SEO", "AI"];

  const state = {
    w: 320,
    h: 320,
    paddle: { x: 160, y: 292, width: 86 },
    drops: [],
    spawn: 0,
    score: 0,
    lives: 3,
    playing: false,
  };

  const resize = () => {
    const width = Math.min(canvas.parentElement.clientWidth, 920);
    const height = Math.min(window.innerHeight * 0.46, 420);
    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(
      window.devicePixelRatio,
      0,
      0,
      window.devicePixelRatio,
      0,
      0,
    );
    state.w = width;
    state.h = height;
    state.paddle.y = height - 28;
  };

  const spawnDrop = () => {
    state.drops.push({
      x: 24 + Math.random() * (state.w - 48),
      y: -20,
      v: 1.6 + Math.random() * 1.8 + state.score * 0.03,
      label: tokens[Math.floor(Math.random() * tokens.length)],
      r: 16,
    });
  };

  const start = () => {
    state.drops = [];
    state.score = 0;
    state.lives = 3;
    state.playing = true;
    state.spawn = 0;
    scoreEl.textContent = "0";
    livesEl.textContent = "3";
    overlay.textContent = "";
    overlay.classList.add("hidden");
    startBtn.textContent = "از نو";
  };

  const moveTo = (clientX) => {
    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    state.paddle.x = Math.max(
      state.paddle.width / 2,
      Math.min(state.w - state.paddle.width / 2, x),
    );
  };

  let last = 0;
  const loop = (time) => {
    const dt = Math.min(32, time - last || 16);
    last = time;
    ctx.clearRect(0, 0, state.w, state.h);
    ctx.fillStyle = "#101114";
    ctx.fillRect(0, 0, state.w, state.h);
    ctx.strokeStyle = "rgba(201,163,106,0.12)";
    for (let x = 0; x < state.w; x += 32) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, state.h);
      ctx.stroke();
    }

    if (state.playing) {
      state.spawn += dt;
      if (state.spawn > 780) {
        spawnDrop();
        state.spawn = 0;
      }
      state.drops.forEach((drop) => {
        drop.y += drop.v * (dt / 16);
      });

      const next = [];
      state.drops.forEach((drop) => {
        const hit =
          drop.y + drop.r > state.paddle.y - 8 &&
          drop.x > state.paddle.x - state.paddle.width / 2 &&
          drop.x < state.paddle.x + state.paddle.width / 2;
        if (hit) {
          state.score += 1;
          scoreEl.textContent = String(state.score);
          return;
        }
        if (drop.y > state.h + 20) {
          state.lives -= 1;
          livesEl.textContent = String(Math.max(0, state.lives));
          if (state.lives <= 0) {
            state.playing = false;
            overlay.classList.remove("hidden");
            overlay.textContent = "تموم شد — دوباره امتحان کن";
          }
          return;
        }
        next.push(drop);
      });
      state.drops = next;
    }

    state.drops.forEach((drop) => {
      ctx.beginPath();
      ctx.fillStyle = "#c9a36a";
      ctx.arc(drop.x, drop.y, drop.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#08090b";
      ctx.font = "700 11px Vazirmatn, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(drop.label, drop.x, drop.y);
    });

    ctx.fillStyle = "#e8e2d6";
    ctx.fillRect(
      state.paddle.x - state.paddle.width / 2,
      state.paddle.y,
      state.paddle.width,
      10,
    );
    ctx.fillStyle = "#c9a36a";
    ctx.fillRect(state.paddle.x - 8, state.paddle.y - 6, 16, 6);

    requestAnimationFrame(loop);
  };

  resize();
  window.addEventListener("resize", resize);
  canvas.addEventListener("pointermove", (event) => moveTo(event.clientX));
  canvas.addEventListener("pointerdown", (event) => moveTo(event.clientX));
  startBtn.addEventListener("click", start);
  requestAnimationFrame(loop);
}

setupCursor();
setupNav();
setupArticles();
setupForm();
setupGame();
