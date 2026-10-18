/* =========================================================================
   KIELT PORTFOLIO — BEHAVIOR
   Reads content from js/config.js (SITE_CONFIG, WEB_PROJECTS, EMAIL_PROJECTS,
   AUTOMATION_PROJECTS) and renders + animates the page. You shouldn't need
   to edit this file to add projects — see config.js instead.
   ========================================================================= */
(function () {
  "use strict";

  /* ---------------------------------------------------------------------
     Small icon helpers
     --------------------------------------------------------------------- */
  const ICONS = {
    external: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    github: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.8 1.18 1.83 1.18 3.09 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/></svg>`,
    arrow: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    mail: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 6h18v12H3z" stroke="currentColor" stroke-width="2"/><path d="m3 7 9 6 9-6" stroke="currentColor" stroke-width="2"/></svg>`,
    linkedin: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z"/></svg>`,
    instagram: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>`,
    zap: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z"/></svg>`,
    cpu: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"/></svg>`,
    check: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`
  };

  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html !== undefined) n.innerHTML = html;
    return n;
  };

  /* =========================================================================
     1. SITE CONTENT (from SITE_CONFIG)
     ========================================================================= */
  function renderSiteContent() {
    const cfg = SITE_CONFIG;

    document.title = `${cfg.brand} — Web, Email & Automation Design Portfolio`;

    // Logo wordmark (nav + footer) — logoAccent renders in the gradient,
    // the rest of `brand` renders in plain text right after it.
    const accent = cfg.logoAccent;
    const rest = cfg.brand.slice(accent.length);
    document.querySelectorAll(".brand-mark").forEach((n) => (n.textContent = accent));
    document.querySelectorAll(".brand-name").forEach((n) => (n.textContent = rest));

    // Hero title (prefix + rotator + suffix), built from config so it stays
    // in sync even if you only edit config.js.
    const heroTitle = document.querySelector(".hero-title");
    heroTitle.innerHTML = `${cfg.heroTitlePrefix} <span class="rotator" id="rotator"><span class="rotator-word">${cfg.rotatingWords[0]}</span></span><br>${cfg.heroTitleSuffix}`;

    document.getElementById("heroSubtitle").textContent = cfg.heroSubtitle;

    // Contact email
    const mail = `mailto:${cfg.email}`;
    const contactLink = document.getElementById("contactEmailLink");
    contactLink.href = mail;
    contactLink.querySelector("span").textContent = cfg.email;

    // Stats
    const statsGrid = document.getElementById("statsGrid");
    cfg.stats.forEach((s) => {
      const box = el("div", "stat-box reveal-up");
      box.innerHTML = `<span class="stat-value" data-target="${s.value}" data-suffix="${s.suffix || ""}">0${s.suffix || ""}</span><span class="stat-label">${s.label}</span>`;
      statsGrid.appendChild(box);
    });

    // Credentials (certifications) — small badge row, hidden if empty
    const credentialsList = document.getElementById("credentialsList");
    (cfg.credentials || []).forEach((c) => {
      const badge = el("span", null, `${ICONS.check} ${c}`);
      credentialsList.appendChild(badge);
    });
    if (!cfg.credentials || !cfg.credentials.length) credentialsList.style.display = "none";

    // Skills
    const skillsList = document.getElementById("skillsList");
    cfg.skills.forEach((s) => skillsList.appendChild(el("span", null, s)));

    // Socials (main + footer)
    const socialsHtml = [
      cfg.socials.email ? [cfg.socials.email, ICONS.mail] : null,
      cfg.socials.github ? [cfg.socials.github, ICONS.github] : null,
      cfg.socials.linkedin ? [cfg.socials.linkedin, ICONS.linkedin] : null,
      cfg.socials.instagram ? [cfg.socials.instagram, ICONS.instagram] : null
    ].filter(Boolean);

    ["socialRow", "socialRowFooter"].forEach((id) => {
      const row = document.getElementById(id);
      socialsHtml.forEach(([href, icon]) => {
        const a = el("a", null, icon);
        a.href = href;
        a.target = "_blank";
        a.rel = "noopener";
        row.appendChild(a);
      });
    });

    document.getElementById("footerYear").textContent = new Date().getFullYear();
  }

  /* =========================================================================
     2. ROTATING HERO WORDS
     ========================================================================= */
  function initRotator() {
    const cfg = SITE_CONFIG;
    if (cfg.rotatingWords.length < 2) return;
    const holder = document.getElementById("rotator");
    let i = 0;

    // The container auto-sizes to its widest child. While the outgoing and
    // incoming words briefly coexist in the DOM, that would hold the box at
    // the wider word's width for the whole transition, then snap down the
    // instant the old word is removed -- a jarring "stuck on the old
    // word's alignment, then jumps" effect. Pinning an explicit pixel width
    // up front and animating *that* (via the CSS `transition: width` on
    // .rotator) replaces the snap with a smooth glide instead.
    holder.style.width = holder.querySelector(".rotator-word").offsetWidth + "px";

    setInterval(() => {
      const current = holder.querySelector(".rotator-word");
      i = (i + 1) % cfg.rotatingWords.length;

      const next = el("span", "rotator-word enter-init", cfg.rotatingWords[i]);
      current.classList.add("leave");
      holder.appendChild(next);
      holder.style.width = next.offsetWidth + "px";

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          next.classList.add("enter");
          // Return to a clean base state once settled, so a future "leave"
          // isn't overridden by a lingering "enter" class still on this
          // element (same CSS specificity + later source order would
          // otherwise let "enter" win the cascade and block the fade-out).
          setTimeout(() => next.classList.remove("enter-init", "enter"), 650);
        });
      });

      setTimeout(() => current.remove(), 600);
    }, 3200);
  }

  /* =========================================================================
     3. FILTER-ABLE GRID BUILDER (shared by Web + Email sections)
     ========================================================================= */
  function buildFilterableGrid({ items, filtersEl, gridEl, cardFactory, allLabel = "All" }) {
    const categories = [allLabel, ...new Set(items.map((i) => i.category).filter(Boolean))];
    let active = allLabel;

    function renderGrid() {
      gridEl.innerHTML = "";
      const list = active === allLabel ? items : items.filter((i) => i.category === active);
      list.forEach((item, idx) => {
        const card = cardFactory(item, idx);
        card.classList.add("reveal-up");
        card.style.setProperty("--d", `${Math.min(idx * 0.06, 0.3)}s`);
        gridEl.appendChild(card);
      });
      observeReveal(gridEl.querySelectorAll(".reveal-up"));
    }

    if (categories.length > 2) {
      categories.forEach((cat) => {
        const btn = el("button", "filter-btn" + (cat === active ? " active" : ""), cat);
        btn.type = "button";
        btn.addEventListener("click", () => {
          active = cat;
          filtersEl.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
          renderGrid();
        });
        filtersEl.appendChild(btn);
      });
    }

    renderGrid();
  }

  /* =========================================================================
     4. WEB PROJECTS
     ========================================================================= */
  function createWebCard(project) {
    const card = el("article", "card-web");
    card.innerHTML = `
      <a class="card-thumb" href="${project.url}" aria-label="View ${project.title} project">
        <img src="${project.thumbnail}" alt="${project.title} screenshot" loading="lazy">
        <span class="card-visit">${ICONS.arrow}</span>
      </a>
      <div class="card-body">
        <p class="card-cat">${project.category || "Web"}</p>
        <h3 class="card-title">${project.title}</h3>
        <p class="card-desc">${project.description}</p>
        <div class="card-tags">${(project.tags || []).map((t) => `<span class="tag">${t}</span>`).join("")}</div>
        <div class="card-links">
          <a class="card-link" href="${project.url}">${ICONS.external} ${project.linkLabel || "Live Site"}</a>
          ${project.liveUrl ? `<a class="card-link" href="${project.liveUrl}" target="_blank" rel="noopener">${ICONS.external} Live Demo</a>` : ""}
          ${project.github ? `<a class="card-link" href="${project.github}" target="_blank" rel="noopener">${ICONS.github} Code</a>` : ""}
        </div>
      </div>`;
    return card;
  }

  function renderWebProjects() {
    buildFilterableGrid({
      items: WEB_PROJECTS,
      filtersEl: document.getElementById("webFilters"),
      gridEl: document.getElementById("webGrid"),
      cardFactory: createWebCard
    });
  }

  /* =========================================================================
     5. EMAIL PROJECTS + LIGHTBOX
     ========================================================================= */
  function createEmailCard(project, idx) {
    const card = el("button", "card-email");
    card.type = "button";
    card.setAttribute("aria-haspopup", "dialog");
    card.innerHTML = `
      <div class="email-thumb">
        <img src="${project.thumbnail}" alt="${project.title} email preview" loading="lazy">
        <span class="email-thumb-badge">600px wide</span>
        <div class="email-thumb-expand"><span>${ICONS.arrow.replace("16", "15")} View Full Design</span></div>
      </div>
      <div class="card-body">
        <p class="card-cat">${project.category || "Email"}</p>
        <h3 class="card-title">${project.title}</h3>
        <p class="card-desc">${project.description}</p>
        <div class="card-tags">${(project.tags || []).map((t) => `<span class="tag">${t}</span>`).join("")}</div>
      </div>`;
    card.addEventListener("click", () => openEmailModal(project, card));
    return card;
  }

  function renderEmailProjects() {
    buildFilterableGrid({
      items: EMAIL_PROJECTS,
      filtersEl: document.getElementById("emailFilters"),
      gridEl: document.getElementById("emailGrid"),
      cardFactory: createEmailCard
    });
  }

  let lastFocused = null;
  function openEmailModal(project, triggerEl) {
    const modal = document.getElementById("emailModal");
    const img = document.getElementById("modalImage");
    const iframe = document.getElementById("modalIframe");

    document.getElementById("modalTitle").textContent = project.title;
    document.getElementById("modalClient").textContent = project.client ? `Client: ${project.client}` : "";
    document.getElementById("modalDesc").textContent = project.description;
    document.getElementById("modalTags").innerHTML = (project.tags || []).map((t) => `<span class="tag">${t}</span>`).join("");

    if (project.html) {
      iframe.src = project.html;
      iframe.style.display = "block";
      img.style.display = "none";
      img.src = "";
    } else {
      img.src = project.fullImage || project.thumbnail;
      img.alt = `${project.title} — full email design`;
      img.style.display = "block";
      iframe.style.display = "none";
      iframe.src = "";
    }

    document.getElementById("modalScroll").scrollTop = 0;
    lastFocused = triggerEl || document.activeElement;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    modal.querySelector(".modal-close").focus();
  }

  function closeEmailModal() {
    const modal = document.getElementById("emailModal");
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  function initModal() {
    const modal = document.getElementById("emailModal");
    modal.querySelectorAll("[data-close]").forEach((elClose) => elClose.addEventListener("click", closeEmailModal));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("open")) closeEmailModal();
    });
  }

  /* =========================================================================
     6. AUTOMATION WORKFLOWS
     ========================================================================= */
  function createAutomationCard(project) {
    const card = el("article", "card-automation");
    card.innerHTML = `
      <div class="card-thumb">
        <img src="${project.thumbnail}" alt="${project.title} workflow diagram" loading="lazy">
      </div>
      <div class="card-body">
        <p class="card-cat">${project.tool || project.category || "Automation"}</p>
        <h3 class="card-title">${project.title}</h3>
        <p class="card-desc">${project.description}</p>
        <div class="card-tags">${(project.tags || []).map((t) => `<span class="tag">${t}</span>`).join("")}</div>
      </div>`;
    return card;
  }

  function renderAutomationProjects() {
    const grid = document.getElementById("automationGrid");

    if (!AUTOMATION_PROJECTS.length) {
      const block = el("div", "automation-soon reveal-up");
      block.innerHTML = `
        <span class="automation-badge">In Progress</span>
        <div class="automation-flow">
          <div class="flow-node"><div class="flow-node-icon">${ICONS.zap}</div><span>Trigger</span></div>
          <div class="flow-connector"></div>
          <div class="flow-node"><div class="flow-node-icon">${ICONS.cpu}</div><span>Logic</span></div>
          <div class="flow-connector"></div>
          <div class="flow-node"><div class="flow-node-icon">${ICONS.check}</div><span>Action</span></div>
        </div>
        <h3>Automation case studies coming soon</h3>
        <p>I'm currently studying tools like Zapier, Make, and n8n to build real workflow automations for clients. This section will showcase live case studies — check back soon.</p>`;
      grid.appendChild(block);
      observeReveal(grid.querySelectorAll(".reveal-up"));
      return;
    }

    AUTOMATION_PROJECTS.forEach((project, idx) => {
      const card = createAutomationCard(project);
      card.classList.add("reveal-up");
      card.style.setProperty("--d", `${Math.min(idx * 0.06, 0.3)}s`);
      grid.appendChild(card);
    });
    observeReveal(grid.querySelectorAll(".reveal-up"));
  }

  /* =========================================================================
     7. SCROLL REVEAL
     ========================================================================= */
  let revealObserver;
  function observeReveal(nodeList) {
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
      );
    }
    nodeList.forEach((n) => revealObserver.observe(n));
  }

  /* =========================================================================
     8. STATS COUNTER
     ========================================================================= */
  function initStatCounters() {
    const statEls = document.querySelectorAll(".stat-value");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const node = entry.target;
          const target = parseFloat(node.dataset.target);
          const suffix = node.dataset.suffix || "";
          const duration = 1400;
          const start = performance.now();

          function tick(now) {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            node.textContent = Math.round(target * eased) + suffix;
            if (p < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
          obs.unobserve(node);
        });
      },
      { threshold: 0.5 }
    );
    statEls.forEach((n) => obs.observe(n));
  }

  /* =========================================================================
     9. NAV — scroll state, active link, mobile toggle
     ========================================================================= */
  function initNav() {
    const nav = document.getElementById("siteNav");
    const toggle = document.getElementById("navToggle");
    const links = document.getElementById("navLinks");

    const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );

    // Active link highlight
    const navAnchors = document.querySelectorAll("[data-nav]");
    const sections = [...navAnchors]
      .map((a) => document.querySelector(a.getAttribute("href")))
      .filter(Boolean);

    const navObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navAnchors.forEach((a) => a.classList.remove("active"));
          const match = [...navAnchors].find((a) => a.getAttribute("href") === `#${entry.target.id}`);
          if (match) match.classList.add("active");
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => navObs.observe(s));
  }

  /* =========================================================================
     10. SCROLL PROGRESS BAR
     ========================================================================= */
  function initScrollProgress() {
    const bar = document.getElementById("scrollProgress");
    let ticking = false;
    window.addEventListener(
      "scroll",
      () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          const h = document.documentElement;
          const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
          bar.style.width = `${scrolled}%`;
          ticking = false;
        });
      },
      { passive: true }
    );
  }

  /* =========================================================================
     11. CURSOR GLOW (desktop / hover-capable only)
     ========================================================================= */
  function initCursorGlow() {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const glow = document.getElementById("cursorGlow");
    let raf = null;
    window.addEventListener("mousemove", (e) => {
      glow.classList.add("active");
      if (raf) return;
      raf = requestAnimationFrame(() => {
        glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
        raf = null;
      });
    });
    window.addEventListener("mouseleave", () => glow.classList.remove("active"));
  }

  /* =========================================================================
     12. HERO PARTICLES (lightweight canvas)
     ========================================================================= */
  function initParticles() {
    const canvas = document.getElementById("particles");
    const hero = document.querySelector(".hero");
    if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let w, h, dpr;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = hero.clientWidth;
      h = hero.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(70, Math.floor((w * h) / 18000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.6 + 0.4,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        a: Math.random() * 0.5 + 0.15,
        tw: Math.random() * Math.PI * 2
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.tw += 0.02;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
        const alpha = p.a * (0.6 + 0.4 * Math.sin(p.tw));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.fill();
      });
      requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    draw();
  }

  /* =========================================================================
     13. CONTACT FORM (Netlify AJAX submit)
     ========================================================================= */
  function initContactForm() {
    const form = document.getElementById("contactForm");
    const status = document.getElementById("formStatus");
    const submitBtn = document.getElementById("contactSubmit");
    const cfg = SITE_CONFIG;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      submitBtn.disabled = true;
      status.className = "form-status";
      status.textContent = "Sending…";

      const body = new URLSearchParams(new FormData(form)).toString();

      fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body })
        .then((res) => {
          if (!res.ok) throw new Error("Network response was not ok");
          status.textContent = "Thanks — your message is in! I'll reply soon.";
          status.className = "form-status success";
          form.reset();
        })
        .catch(() => {
          status.innerHTML = `Something went wrong. Please email me directly at <a href="mailto:${cfg.email}" style="color:inherit;text-decoration:underline;">${cfg.email}</a>.`;
          status.className = "form-status error";
        })
        .finally(() => {
          submitBtn.disabled = false;
        });
    });
  }

  /* =========================================================================
     INIT
     ========================================================================= */
  document.addEventListener("DOMContentLoaded", () => {
    renderSiteContent();
    initRotator();
    renderWebProjects();
    renderEmailProjects();
    renderAutomationProjects();
    initModal();
    initStatCounters();
    initNav();
    initScrollProgress();
    initCursorGlow();
    initParticles();
    initContactForm();

    // Observe the static reveal-up elements already in the HTML (hero, headers, etc.)
    observeReveal(document.querySelectorAll(".reveal-up:not(.in-view)"));
  });
})();
