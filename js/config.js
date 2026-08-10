/* =========================================================================
   KIELT PORTFOLIO — CONTENT CONFIG
   =========================================================================
   This is the ONLY file you need to edit to add / remove / change projects.
   No coding knowledge required — just copy a block, change the text, and
   point "thumbnail" / "fullImage" / "url" at your own files or links.

   HOW TO ADD AN IMAGE:
   1. Drop your image file inside the matching folder in /assets
      (assets/web, assets/email, assets/automation).
   2. Type its filename into the config below, e.g. "assets/web/my-app.jpg"
      Use .jpg or .webp for photos/screenshots (smaller file size = faster site).

   TIP: Compress images before uploading (squoosh.app or tinypng.com) so the
   site stays fast on free hosting.
   ========================================================================= */

const SITE_CONFIG = {
  brand: "ZekCreates",
  // Colored portion of the logo wordmark (nav + footer) — the rest of
  // `brand` renders in plain white right after it. Must be a prefix of
  // `brand`, e.g. "Zek" + "Creates" = "ZekCreates".
  logoAccent: "Zek",
  fullName: "Ezekiel Tolentino",
  email: "kielt@yahoo.com",
  location: "Available worldwide · Remote",

  // Rotating words in the hero headline — add/remove as you like.
  rotatingWords: ["Web Experiences", "Email Campaigns", "Automated Workflows"],

  heroTitlePrefix: "I design",
  heroTitleSuffix: "that get results.",
  heroSubtitle:
    "Freelance designer & developer crafting conversion-focused websites and pixel-perfect email marketing campaigns — now leveling up into workflow automation.",

  // Shown as small badges under the About bio. Leave the array empty to
  // hide the row entirely.
  credentials: ["Certified Data Science Associate", "Certified Data Science Professional"],

  // Shown in the About section as animated counters. Edit freely.
  stats: [
    { value: 20, suffix: "+", label: "Projects Delivered" },
    { value: 15, suffix: "+", label: "Email Campaigns Designed" },
    { value: 5, suffix: "+", label: "Happy Clients" },
    { value: 100, suffix: "%", label: "Deadlines Met" }
  ],

  skills: [
    "Web Design", "React", "Webflow", "HTML / CSS / JS",
    "Email Design", "Klaviyo", "Mailchimp", "HTML Email Coding",
    "Figma", "UI/UX", "Automation (learning)", "Zapier / Make (soon)"
  ],

  socials: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    instagram: "https://instagram.com/yourusername",
    email: "mailto:kielt@yahoo.com"
  }
};

/* =========================================================================
   WEB DESIGNS / WEB APPS
   -------------------------------------------------------------------------
   thumbnail : image shown on the card (recommended 800x500 or 16:10)
   url       : where the thumbnail click takes visitors — your LIVE site
   github    : link to the repo (leave "" to hide the GitHub button)
   category  : used by the filter buttons — reuse categories across projects
   ========================================================================= */

const WEB_PROJECTS = [
  {
    title: "OMNHS Canteen Web System",
    description: "Role-based ordering & POS system for a school canteen — students/teachers order ahead, canteen staff manage fulfillment and daily sales, admins manage menus and accounts. Demo logins: Student 308100-00001 / Evangelista308100-00001!, Staff EMP-001 / HernandezEMP-001!, SuperAdmin superadmin / superadmin123! (data resets periodically — it's a live demo, not production).",
    thumbnail: "assets/web/canteen-thumb.png",
    url: "https://websystem-final-project-szjx.onrender.com/login",
    github: "https://github.com/Zekimmer/WebSystem-Final-Project",
    category: "Web App",
    tags: ["Laravel", "PHP", "SQLite"]
  },
  {
    title: "Project Name Two",
    description: "Short one-line description of what this site/app does and the problem it solves.",
    thumbnail: "assets/web/web-2.svg",
    url: "https://example.com",
    github: "https://github.com/yourusername/project-two",
    category: "Website",
    tags: ["Webflow", "CMS"]
  },
  {
    title: "Project Name Three",
    description: "Short one-line description of what this site/app does and the problem it solves.",
    thumbnail: "assets/web/web-3.svg",
    url: "https://example.com",
    github: "",
    category: "Landing Page",
    tags: ["HTML/CSS", "JavaScript"]
  }
];

/* =========================================================================
   EMAIL MARKETING DESIGNS
   -------------------------------------------------------------------------
   thumbnail : cropped preview shown on the card (recommended 600x360)
   fullImage : the COMPLETE email design, actual width 600px, any height
               (this is what opens in the scrollable lightbox)
   OR, if you coded the email in HTML, set "html" to a path of an .html
   file instead of fullImage and it will load inside a live iframe.
   ========================================================================= */

const EMAIL_PROJECTS = [
  {
    title: "Black Friday Campaign",
    client: "Sample Brand",
    description: "Promotional email design built for a Black Friday sitewide sale, focused on urgency and a bold above-the-fold CTA.",
    thumbnail: "assets/email/email-1-thumb.svg",
    fullImage: "assets/email/email-1-full.svg",
    html: "",
    category: "Promotional",
    tags: ["Klaviyo", "E-commerce"]
  },
  {
    title: "Spring Collection Launch",
    client: "Sample Brand",
    description: "Product launch email with a soft, seasonal palette and a two-column featured product layout.",
    thumbnail: "assets/email/email-2-thumb.svg",
    fullImage: "assets/email/email-2-full.svg",
    html: "",
    category: "Product Launch",
    tags: ["Mailchimp", "Fashion"]
  },
  {
    title: "Weekly Newsletter",
    client: "Sample Brand",
    description: "Recurring newsletter template with a modular content-block layout, built to be reused every week.",
    thumbnail: "assets/email/email-3-thumb.svg",
    fullImage: "assets/email/email-3-full.svg",
    html: "",
    category: "Newsletter",
    tags: ["HTML Email", "Template"]
  }
];

/* =========================================================================
   AUTOMATION WORKFLOWS
   -------------------------------------------------------------------------
   Leave this array EMPTY for now — the site automatically shows a
   "Coming Soon" animated placeholder when there are no items here.
   Once you build your first Zapier / Make / n8n workflow, add a screenshot
   or export of the flow and add an entry using the shape below:

   {
     title: "Lead Follow-Up Automation",
     description: "Automatically emails a new lead and creates a CRM task.",
     thumbnail: "assets/automation/my-workflow.png",
     tool: "Make.com",
     category: "Lead Gen",
     tags: ["Make", "Gmail", "Airtable"]
   }
   ========================================================================= */

const AUTOMATION_PROJECTS = [];
