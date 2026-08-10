# ZekCreates — Portfolio Website (Ezekiel Tolentino)

A dark, animated, single-page portfolio for **Web Design / Web Apps**, **Email Marketing Design**, and **Automation Workflows**. Pure HTML/CSS/JS — no build step, no framework, no server required. Free to host on Netlify (recommended), GitHub Pages, or Vercel.

## What's inside

```
kielt-portfolio/
├── index.html          ← page structure (sections, modal, contact form)
├── css/style.css        ← all styling, gradients, animations
├── js/config.js         ← ★ EDIT THIS to add/change your projects ★
├── js/script.js         ← rendering + interactions (rarely needs editing)
├── assets/
│   ├── web/              ← screenshots for Web Design / Web App cards
│   ├── email/             ← thumbnail + full-size images for email designs
│   └── automation/        ← screenshots for automation workflow cards
├── netlify.toml          ← Netlify config (headers, publish folder)
└── README.md
```

Everything currently in `assets/` is a **placeholder SVG** clearly labeled "Replace this file" so the site looks complete out of the box. Swap them for your real screenshots whenever you're ready — nothing will break in the meantime.

---

## 1. Preview it locally

You can just double-click `index.html` to open it in a browser. For the best experience (some browsers restrict local file access), run a tiny local server instead:

```bash
# from inside the kielt-portfolio folder
npx serve .
# or, with Python installed:
python -m http.server 8080
```

Then open `http://localhost:8080`.

---

## 2. Deploy for free — Netlify (recommended)

**Option A — Drag & drop (fastest, no account setup beyond signing in):**
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag the whole `kielt-portfolio` folder onto the page.
3. Netlify gives you a live URL in seconds (e.g. `random-name-123.netlify.app`).
4. You can rename the site (and later attach a custom domain) from **Site settings → Change site name / Domain management**, both free.

**Option B — Connect a Git repo (best for ongoing updates):**
1. Push this folder to a new GitHub repository.
2. In Netlify: **Add new site → Import an existing project → GitHub** → pick the repo.
3. Build command: leave blank. Publish directory: `.` (already set in `netlify.toml`).
4. Every time you `git push`, Netlify redeploys automatically.

**Contact form:** The form on the Contact section already has `data-netlify="true"` wired up — Netlify auto-detects it on deploy and starts collecting submissions under **Site → Forms** in your dashboard, no extra setup, 100 submissions/month free. No backend code needed.

---

## 3. Alternative free hosts

The site is 100% static, so it will run anywhere. The only thing that changes is the **contact form**, since Netlify Forms is Netlify-only.

- **GitHub Pages / Vercel:** deploy as-is (drag the repo in for Vercel, or enable Pages in repo settings for GitHub). Then swap the contact form to [Formspree](https://formspree.io) (free tier, no backend):
  1. Create a free Formspree account and a new form → copy your endpoint URL (`https://formspree.io/f/xxxxxxx`).
  2. In `index.html`, change the `<form>` tag's `action` to that URL, remove `data-netlify="true"` and `netlify-honeypot`.
  3. In `js/script.js`, inside `initContactForm()`, change the `fetch("/", ...)` URL to `form.action` and add `headers: { Accept: "application/json" }`.

---

## 4. Adding / editing projects (do this in `js/config.js`)

Open `js/config.js` — it's split into four clearly-commented blocks:

| Block | What it controls |
|---|---|
| `SITE_CONFIG` | Your name, tagline, stats, skills, social links |
| `WEB_PROJECTS` | Cards in the "Web Designs & Web Apps" section |
| `EMAIL_PROJECTS` | Cards in the "Email Designs" section (opens the scroll-preview modal) |
| `AUTOMATION_PROJECTS` | Cards in "Automation Workflows" (leave empty for the animated "Coming Soon" state) |

To add a new **web project**: copy one of the objects inside `WEB_PROJECTS`, paste it as a new entry, and update `title`, `description`, `thumbnail` (put the image in `assets/web/` first), `url` (your live site), `github` (leave `""` to hide the button), and `tags`.

To add a new **email design**: same idea inside `EMAIL_PROJECTS`. Two image slots matter:
- `thumbnail` — a short crop (~600×360) used on the card grid.
- `fullImage` — the **entire email at true send width, 600px wide**, whatever height it needs (1000px, 2000px, no limit). This is what opens in the lightbox and scrolls top to bottom exactly like a real inbox preview.

  Tip: export your email design (Figma/Photoshop/Klaviyo/Canva) as one tall PNG or JPG at exactly 600px width. If you hand-coded the email in HTML instead, set `html: "assets/email/my-email.html"` and leave `fullImage` blank — it'll load live inside an iframe instead of a static image.

To add an **automation workflow** (once you have one to show): add an object to `AUTOMATION_PROJECTS` following the commented example at the bottom of the file — a screenshot of the Zapier/Make/n8n canvas works great as the `thumbnail`.

**No image ready yet?** Leave the placeholder SVGs in place — they're intentionally labeled so you remember to swap them, but the site works fine either way.

---

## 5. Customizing the look

All colors, spacing, and radii are CSS variables at the top of `css/style.css` under `:root`:

```css
--bg: #05050a;          /* base background */
--accent-1: #7c3aed;     /* violet  */
--accent-2: #ec4899;     /* pink    */
--accent-3: #06b6d4;     /* cyan    */
--accent-4: #f59e0b;     /* amber, used in the Automation section */
```

Change those five values to re-theme the entire site — buttons, gradient text, blobs, glows, and hover states all reference them.

---

## 6. Performance notes

- Images use `loading="lazy"` already — just keep file sizes reasonable (compress with [squoosh.app](https://squoosh.app) or [tinypng.com](https://tinypng.com); aim under ~300KB per image).
- The animated background (blobs + particle canvas) automatically respects `prefers-reduced-motion` for accessibility and disables the heavier effects for users who've turned that on.
- No external JS frameworks are loaded — only Google Fonts (Space Grotesk + Inter), so the site stays fast on free hosting tiers.
