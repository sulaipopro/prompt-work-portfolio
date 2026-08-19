/* =========================================================
   prompt/work — AI開発の成果物ポートフォリオ
   ========================================================= */
(() => {
  "use strict";

  /* -------------------------------------------------------
     0. Works data (single source of truth)
     ------------------------------------------------------- */
  const WORKS = [
    {
      id: "amusement-park",
      file: "work-amusement-park.jpg",
      title: "遊園地 予約LP",
      tagline: "バナー1枚でなく、予約までの導線をページ単位で設計する。",
      type: { value: "lp", label: "LP" },
      industry: { value: "leisure", label: "レジャー" },
      tone: "ポップ",
      featured: true,
      gridOrder: 1,
      galleryOrder: 7,
      group: null,
      request:
        "「遊園地のチケット予約LPを、ワクワク感を保ったまま必要な情報量もしっかり見せたい」という依頼。",
      pullquote:
        "バナーでは伝えきれない“体験の流れ”を、スクロールという時間軸に載せて設計した。",
      credit: { tool: "fal.ai (gpt-image-2) + HTML/CSS実装", time: "約2時間" },
    },
    {
      id: "fal-api",
      file: "work-fal-api.png",
      title: "fal APIの使い方",
      tagline: "複雑なAPIの使い方を、誰でも迷わず理解できる1枚に。",
      type: { value: "infographic", label: "インフォグラフィック" },
      industry: { value: "education", label: "教育" },
      tone: "かわいい",
      featured: false,
      gridOrder: 2,
      galleryOrder: 1,
      group: null,
      request:
        "「fal.aiのAPI利用フローを、専門知識がない人でも理解できるように図解してほしい」という社内向けの依頼。",
      pullquote:
        "専門用語をそのまま並べず、“かわいいキャラクターの導線”に翻訳することで、読む前から理解できそうと思わせる設計にした。",
      credit: { tool: "fal.ai (gpt-image-2)", time: "約40分" },
    },
    {
      id: "recruit-v1",
      file: "work-recruit-v1.png",
      title: "製造業 新卒採用バナー（案1）",
      tagline: "「安心して働ける会社」を、写真に頼らず伝える。",
      type: { value: "banner", label: "バナー" },
      industry: { value: "recruit", label: "採用" },
      tone: "信頼感",
      featured: false,
      gridOrder: 3,
      galleryOrder: 2,
      group: "recruit",
      variantLabel: "案1",
      request:
        "「製造業の新卒採用サイトに掲載するメインバナーを、モデル写真を使わずに信頼感を出して作ってほしい」という依頼。",
      pullquote:
        "現場の“手に職”感をフラットイラストで象徴化し、採用担当者が一番伝えたい安心感を色と構図で先に届ける設計にした。",
      credit: { tool: "fal.ai (gpt-image-2)", time: "案2種を約1時間で提案" },
    },
    {
      id: "recruit-v2",
      file: "work-recruit-v2.png",
      title: "製造業 新卒採用バナー（案2）",
      tagline: "同じ依頼から、もう一つの見せ方を短時間で。",
      type: { value: "banner", label: "バナー" },
      industry: { value: "recruit", label: "採用" },
      tone: "信頼感",
      featured: false,
      gridOrder: 4,
      galleryOrder: 3,
      group: "recruit",
      variantLabel: "案2",
      request:
        "案1と同じ依頼に対して、配色バランスと構図を変えたもう1案を並行して検討してほしいという要望。",
      pullquote:
        "1案に絞らず複数の切り口を短時間で提示できることが、AIを使った制作の強み。比較検討の時間そのものを圧縮できる。",
      credit: { tool: "fal.ai (gpt-image-2)", time: "案1と合わせて約1時間" },
    },
    {
      id: "realestate-v1",
      file: "work-realestate-v1.png",
      title: "実家売却を考える3つのトレンド",
      tagline: "不安になりがちなテーマを、ミニマルな図解で冷静に伝える。",
      type: { value: "infographic", label: "インフォグラフィック" },
      industry: { value: "realestate", label: "不動産" },
      tone: "ミニマル",
      featured: false,
      gridOrder: 5,
      galleryOrder: 4,
      group: "realestate",
      variantLabel: "第1弾",
      request:
        "「実家売却を検討し始めた層に向けて、煽らず・分かりやすく市場動向を伝えたい」という依頼。",
      pullquote:
        "不安を煽る赤や警告色を使わず、情報を“淡々と整理する”ことこそが信頼につながると考えた。",
      credit: { tool: "fal.ai (gpt-image-2)", time: "約50分" },
    },
    {
      id: "realestate-v2",
      file: "work-realestate-v2.jpg",
      title: "実家売却と売却後の暮らし方",
      tagline: "「売る」その先の暮らしまで想像させる続編。",
      type: { value: "infographic", label: "インフォグラフィック" },
      industry: { value: "realestate", label: "不動産" },
      tone: "ミニマル",
      featured: false,
      gridOrder: 6,
      galleryOrder: 5,
      group: "realestate",
      variantLabel: "第2弾",
      request:
        "第1弾に続き、「売却後の暮らし方」まで踏み込んだ続編インフォグラフィックの依頼。",
      pullquote:
        "トーンとレイアウトのルールを前作から引き継ぐことで、シリーズとして読める一貫性を保った。",
      credit: { tool: "fal.ai (gpt-image-2)", time: "約50分" },
    },
    {
      id: "lifeplan",
      file: "work-lifeplan.webp",
      title: "ライフプラン解説インフォグラフィック",
      tagline: "お金の話を、堅苦しくなく・でも軽薄にもならずに。",
      type: { value: "infographic", label: "インフォグラフィック" },
      industry: { value: "finance", label: "金融" },
      tone: "ポップ",
      featured: false,
      gridOrder: 7,
      galleryOrder: 6,
      group: null,
      request:
        "「ライフプランニングの基礎を、若年層にも読んでもらえるよう親しみやすく図解してほしい」という依頼。",
      pullquote:
        "金融特有の“難しそう”という壁を、ポップな色使いと余白の広さで最初に崩す設計にした。",
      credit: { tool: "fal.ai (gpt-image-2)", time: "約45分" },
    },
  ];

  const byId = (id) => WORKS.find((w) => w.id === id);
  const IMG_PATH = "images/";

  /* -------------------------------------------------------
     1. Header: scroll shadow + mobile nav toggle
     ------------------------------------------------------- */
  const header = document.getElementById("site-header");
  const onScrollHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  onScrollHeader();
  window.addEventListener("scroll", onScrollHeader, { passive: true });

  const navToggle = document.getElementById("nav-toggle");
  const mainNav = document.querySelector(".main-nav");
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    mainNav.classList.toggle("is-open", !isOpen);
  });
  mainNav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      mainNav.classList.remove("is-open");
    });
  });

  /* -------------------------------------------------------
     2. Footer year
     ------------------------------------------------------- */
  document.getElementById("footer-year").textContent = new Date().getFullYear();

  /* -------------------------------------------------------
     3. Value strip marquee (industry icons)
     ------------------------------------------------------- */
  const ICONS = {
    recruit:
      '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="12" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 12h18"/></svg>',
    realestate:
      '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-7 9 7"/><path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9"/></svg>',
    finance:
      '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 8l4 5 4-5M12 13v5"/></svg>',
    education:
      '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9l10-5 10 5-10 5-10-5z"/><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/></svg>',
    leisure:
      '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none"/><path d="M12 4v16M4 12h16M6.3 6.3l11.4 11.4M17.7 6.3L6.3 17.7"/></svg>',
  };
  const MARQUEE_ITEMS = [
    { icon: "recruit", label: "採用" },
    { icon: "realestate", label: "不動産" },
    { icon: "finance", label: "金融" },
    { icon: "education", label: "教育" },
    { icon: "leisure", label: "レジャー" },
  ];
  const marqueeTrack = document.getElementById("marquee-track");
  const marqueeItemHTML = MARQUEE_ITEMS.map(
    (item) =>
      `<span class="marquee-item">${ICONS[item.icon]}${item.label}</span>`
  ).join("");
  // Repeat the base set enough times that one half of the track is always
  // wider than the viewport, then duplicate that half once for a seamless loop.
  const marqueeHalf = marqueeItemHTML.repeat(4);
  marqueeTrack.innerHTML = marqueeHalf + marqueeHalf;

  /* -------------------------------------------------------
     4. Style range gallery (Obys-style horizontal panels)
     ------------------------------------------------------- */
  const galleryTrack = document.getElementById("style-gallery-track");
  const galleryWorks = [...WORKS].sort((a, b) => a.galleryOrder - b.galleryOrder);
  const total = galleryWorks.length;

  galleryTrack.innerHTML = galleryWorks
    .map(
      (w) => `
      <div class="gallery-slide">
        <span class="gallery-corner gallery-corner-tl pill pill-muted">${w.type.label}</span>
        <span class="gallery-corner gallery-corner-tr pill pill-fill-secondary">${w.tone}</span>
        <img src="${IMG_PATH}${w.file}" alt="${w.title}。${w.tagline}" loading="lazy">
        <div class="gallery-slide-caption">
          <h3>${w.title}</h3>
          <p>${w.tagline}</p>
        </div>
        <span class="gallery-corner gallery-corner-bl"><a href="#works">全Worksを見る</a></span>
        <span class="gallery-corner gallery-corner-br">${w.galleryOrder} / ${total}</span>
      </div>`
    )
    .join("");

  const galleryPrev = document.getElementById("gallery-prev");
  const galleryNext = document.getElementById("gallery-next");
  const scrollGallery = (dir) => {
    const slide = galleryTrack.querySelector(".gallery-slide");
    if (!slide) return;
    galleryTrack.scrollBy({ left: dir * slide.getBoundingClientRect().width, behavior: "smooth" });
  };
  galleryPrev.addEventListener("click", () => scrollGallery(-1));
  galleryNext.addEventListener("click", () => scrollGallery(1));

  /* -------------------------------------------------------
     5. Works grid + filters
     ------------------------------------------------------- */
  const worksGrid = document.getElementById("works-grid");
  const gridWorks = [...WORKS].sort((a, b) => a.gridOrder - b.gridOrder);

  const workCardHTML = (w) => `
    <button type="button" class="work-card${w.featured ? " is-featured" : ""}" data-id="${w.id}" aria-haspopup="dialog">
      <div class="work-card-media">
        ${w.featured ? '<span class="work-card-featured-badge">Featured</span>' : ""}
        <img src="${IMG_PATH}${w.file}" alt="${w.title}。${w.tagline}" loading="lazy">
      </div>
      <div class="work-card-body">
        <p class="work-card-title">${w.title}</p>
        <p class="work-card-tagline">${w.tagline}</p>
        <div class="work-card-tags">
          <span class="pill pill-fill-primary">${w.type.label}</span>
          <span class="pill pill-muted">${w.industry.label}</span>
          <span class="pill pill-fill-secondary">${w.tone}</span>
        </div>
      </div>
    </button>`;

  worksGrid.innerHTML = gridWorks.map(workCardHTML).join("");

  const filterState = { type: "all", industry: "all" };
  const filterEmpty = document.getElementById("filter-empty");

  function applyFilters() {
    let visibleCount = 0;
    worksGrid.querySelectorAll(".work-card").forEach((card) => {
      const w = byId(card.dataset.id);
      const matchType = filterState.type === "all" || w.type.value === filterState.type;
      const matchIndustry = filterState.industry === "all" || w.industry.value === filterState.industry;
      const visible = matchType && matchIndustry;
      card.hidden = !visible;
      if (visible) visibleCount += 1;
    });
    filterEmpty.hidden = visibleCount !== 0;
  }

  function setFilterGroup(axis, value) {
    filterState[axis] = value;
    const group = document.getElementById(axis === "type" ? "filter-type" : "filter-industry");
    group.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.value === value);
    });
    applyFilters();
  }

  document.querySelectorAll(".filter-buttons").forEach((group) => {
    const axis = group.dataset.filterAxis;
    group.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      setFilterGroup(axis, btn.dataset.value);
    });
  });

  /* -------------------------------------------------------
     6. Guide by use-case cards
     ------------------------------------------------------- */
  const GUIDE_ITEMS = [
    {
      role: "採用担当の方",
      problem: "新卒応募が伸びない",
      solution: "安心感を伝える採用バナーで、応募のハードルを下げる",
      workId: "recruit-v1",
      industry: "recruit",
    },
    {
      role: "不動産会社の方",
      problem: "実家売却の相談窓口を増やしたい",
      solution: "不安を煽らない図解で、問い合わせのハードルを下げる",
      workId: "realestate-v1",
      industry: "realestate",
    },
    {
      role: "金融・保険の方",
      problem: "商品説明が難しく伝わらない",
      solution: "ポップな図解で、若年層にもわかりやすく届ける",
      workId: "lifeplan",
      industry: "finance",
    },
    {
      role: "教育・研修担当の方",
      problem: "マニュアルを最後まで読んでもらえない",
      solution: "キャラクター導線のインフォグラフィックで、最後まで読ませる",
      workId: "fal-api",
      industry: "education",
    },
    {
      role: "レジャー・エンタメの方",
      problem: "予約導線から離脱されやすい",
      solution: "ワクワクを保ったまま情報を届けるLP設計で、離脱を防ぐ",
      workId: "amusement-park",
      industry: "leisure",
    },
  ];

  const guideGrid = document.getElementById("guide-grid");
  guideGrid.innerHTML = GUIDE_ITEMS.map((g) => {
    const w = byId(g.workId);
    return `
    <a href="#works" class="guide-card" data-industry="${g.industry}">
      <div class="guide-card-media">
        <img src="${IMG_PATH}${w.file}" alt="${w.title}。${w.tagline}" loading="lazy">
      </div>
      <div class="guide-card-body">
        <p class="guide-card-role">${g.role}</p>
        <p class="guide-card-problem">${g.problem}</p>
        <p class="guide-card-solution">${g.solution}</p>
      </div>
    </a>`;
  }).join("");

  guideGrid.addEventListener("click", (e) => {
    const card = e.target.closest(".guide-card");
    if (!card) return;
    setFilterGroup("industry", card.dataset.industry);
    setFilterGroup("type", "all");
  });

  /* -------------------------------------------------------
     7. Case study modal
     ------------------------------------------------------- */
  const modal = document.getElementById("case-modal");
  const modalScroll = document.getElementById("modal-scroll");
  const modalClose = document.getElementById("modal-close");
  const modalPrev = document.getElementById("modal-prev");
  const modalNext = document.getElementById("modal-next");
  let currentWorkId = null;
  let lastFocused = null;

  function renderCase(w) {
    const variations =
      w.group &&
      WORKS.filter((v) => v.group === w.group)
        .sort((a, b) => a.gridOrder - b.gridOrder);

    const variationsHTML =
      variations && variations.length > 1
        ? `
      <div class="case-block">
        <p class="case-block-label">Variations — 案の比較</p>
        <div class="case-variations">
          ${variations
            .map(
              (v) => `
            <div class="case-variation">
              <img src="${IMG_PATH}${v.file}" alt="${v.title}。${v.tagline}" loading="lazy">
              <p class="case-variation-label">${v.variantLabel || v.title}｜${v.title}</p>
            </div>`
            )
            .join("")}
        </div>
      </div>`
        : "";

    modalScroll.innerHTML = `
      <div class="case-hero">
        <img src="${IMG_PATH}${w.file}" alt="${w.title}。${w.tagline}" loading="lazy">
      </div>
      <div class="case-body">
        <div class="case-tags">
          <span class="pill pill-fill-primary">${w.type.label}</span>
          <span class="pill pill-muted">${w.industry.label}</span>
          <span class="pill pill-fill-secondary">${w.tone}</span>
        </div>
        <h2 class="case-title" id="case-modal-title">${w.title}</h2>
        <p class="case-tagline">${w.tagline}</p>

        <div class="case-block">
          <p class="case-block-label">Request — 依頼内容</p>
          <p class="case-request">${w.request}</p>
        </div>

        <div class="case-block">
          <p class="case-block-label">Approach — プロンプト設計の工夫</p>
          <p class="case-pullquote">${w.pullquote}</p>
        </div>

        ${variationsHTML}

        <div class="case-block">
          <p class="case-block-label">Credit</p>
          <dl class="case-credit">
            <div><dt>使用ツール</dt><dd>${w.credit.tool}</dd></div>
            <div><dt>制作時間</dt><dd>${w.credit.time}</dd></div>
          </dl>
        </div>
      </div>`;
  }

  function openModal(id) {
    const w = byId(id);
    if (!w) return;
    currentWorkId = id;
    renderCase(w);
    lastFocused = document.activeElement;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    modalClose.focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  function stepModal(dir) {
    const sorted = [...WORKS].sort((a, b) => a.gridOrder - b.gridOrder);
    const idx = sorted.findIndex((w) => w.id === currentWorkId);
    const nextIdx = (idx + dir + sorted.length) % sorted.length;
    currentWorkId = sorted[nextIdx].id;
    renderCase(sorted[nextIdx]);
    modalScroll.scrollTop = 0;
  }

  worksGrid.addEventListener("click", (e) => {
    const card = e.target.closest(".work-card");
    if (!card) return;
    openModal(card.dataset.id);
  });

  modalClose.addEventListener("click", closeModal);
  modalPrev.addEventListener("click", () => stepModal(-1));
  modalNext.addEventListener("click", () => stepModal(1));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (modal.hidden) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowRight") stepModal(1);
    if (e.key === "ArrowLeft") stepModal(-1);
  });

  /* -------------------------------------------------------
     8. Init
     ------------------------------------------------------- */
  applyFilters();
})();
