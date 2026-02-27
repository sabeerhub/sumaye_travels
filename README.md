# ✈️ Sumaye Travels & Tours — Official Website

> *"Give Us A Try And Discover Your New Trip."*
> — Alhaji Tasiu Muhammad Danmalam, Founder

---

## 🕌 Dedication

This website is lovingly dedicated to the founder of **Sumaye Travels & Tours**,

### **Alhaji Tasiu Muhammad Danmalam**

A man of vision, faith, and unwavering dedication to his community.

Alhaji Tasiu built Sumaye Travels & Tours from the ground up in Dutse, Jigawa State, with one clear mission — to make the sacred journeys of Hajj and Umrah, and all travel experiences, accessible, affordable, and beautifully organised for the people of Northern Nigeria.

His leadership, his values, and his love for serving others are the foundation on which every page of this website stands. This project is a tribute to everything he has built and continues to build.

> *May Allah bless his efforts, protect his family, and grant long life to him and all those who benefit from his work. Ameen.*

---

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [Live Preview](#live-preview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [File Structure](#file-structure)
- [How the Enquiry System Works](#how-the-enquiry-system-works)
- [WhatsApp Message Format](#whatsapp-message-format)
- [Colour System](#colour-system)
- [Typography](#typography)
- [Sections Breakdown](#sections-breakdown)
- [How to Use](#how-to-use)
- [Customisation Guide](#customisation-guide)
- [Contact & Support](#contact--support)
- [Credits](#credits)

---

## 📖 About the Project

The **Sumaye Travels & Tours** website is a modern, professional, mobile-first web presence built for one of Dutse's most trusted travel agencies. It serves as both a digital brochure and a live lead generation platform — directing potential customers to book Hajj packages, Umrah packages, flight tickets, visa services, hotel accommodation, and tour coordination directly through WhatsApp.

The website was designed and built with deep care for the agency's values: trust, faith, professionalism, and genuine service to the people of Northern Nigeria and beyond.

---

## 🌐 Live Preview

| Platform | Link |
|----------|------|
| Website | [sumayetravel.com.ng](https://sumayetravel.com.ng) |
| WhatsApp | [+234 911 810 0328](https://wa.me/2349118100328) |
| Email | sumayetravel@gmail.com |

---

## ✨ Features

### Design & UX
- **Modern 2026 aesthetic** — Editorial luxury layout inspired by Islamic geometric architecture
- **Deep Sky Blue & White** colour palette — clean, trustworthy, and professional
- **Custom dot cursor** — grows into a ring on interactive elements (desktop)
- **Animated hero headline** — staggered line-by-line entrance animation
- **Scrolling marquee strip** — services ticker in deep sky blue between sections
- **Geometric SVG background patterns** — subtle Arabic diamond lattice textures
- **Scroll-triggered reveal animations** — elements fade up as the user scrolls
- **Sticky header** — transparent over the hero, transitions to white with blur on scroll
- **Mobile sticky bar** — fixed Call Now + Enquire buttons at the bottom on all phones

### Functionality
- **WhatsApp Enquiry System** — form submissions are formatted and sent directly to the business WhatsApp
- **Unique Enquiry ID** — every submission generates a traceable reference number (e.g. `SMT-250227-1432847`)
- **Package Tabs** — Nigeria and Niger Republic passport packages switchable without page reload
- **Smooth scroll navigation** — all anchor links scroll smoothly to their sections
- **Hamburger mobile menu** — clean slide-down navigation for mobile users
- **Form success state** — confirmation screen with the customer's Enquiry ID shown after submission

### SEO & Performance
- **LocalBusiness + TravelAgency schema markup** — helps Google understand and display the business
- **Meta title and description** — optimised for "travel agency Dutse", "Hajj packages Nigeria" and related searches
- **Semantic HTML5** — proper heading hierarchy, landmark regions, and ARIA labels
- **Web font preloading** — fonts connect early for faster render

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| Markup | HTML5 (semantic) |
| Styling | CSS3 (custom properties, grid, flexbox, animations) |
| Logic | Vanilla JavaScript (ES6) |
| Fonts | Google Fonts — Cormorant Garamond + Plus Jakarta Sans |
| Icons | Emoji + inline SVG |
| Enquiry Delivery | WhatsApp Web API (`wa.me` deep link) |
| Hosting | Any static host (Netlify, Vercel, cPanel, GitHub Pages) |

No frameworks. No dependencies. No build tools required.

---

## 📁 File Structure

```
sumaye-travels/
│
├── index.html          # Full page structure and content
├── style.css           # All visual styling — colours, layout, animations
├── script.js           # All interactivity — nav, tabs, form, scroll, cursor
└── README.md           # This file
```

The project is intentionally kept as **three clean files** for maximum simplicity. No npm, no node_modules, no build step. Open `index.html` in a browser and it works.

---

## 📬 How the Enquiry System Works

When a visitor fills in the enquiry form and clicks **Send Enquiry ✈**:

1. JavaScript collects all five fields — Name, Phone, Email, Service, Message
2. A unique **Enquiry ID** is generated (format: `SMT-YYMMDD-HHMM###`)
3. The current date and time are captured and formatted
4. All data is assembled into a beautifully structured WhatsApp message
5. The browser opens WhatsApp Web (or the WhatsApp app on mobile) pre-filled with the message directed to **+234 911 810 0328**
6. The visitor sees a success screen on the website showing their Enquiry ID
7. The business owner receives a clean, organised enquiry directly in WhatsApp

> **Important:** The visitor must tap Send inside WhatsApp to complete delivery. The website opens WhatsApp with the message ready — it does not send automatically.

---

## 📱 WhatsApp Message Format

Every enquiry arrives formatted like this:

```
╔══════════════════════════╗
✈️  SUMAYE TRAVELS & TOURS
     NEW ENQUIRY RECEIVED
╚══════════════════════════╝

🔖 Enquiry ID
    SMT-250227-1432847

🕐 Submitted
    Friday, 27 Feb 2025 — 2:32 PM

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
👤  CLIENT INFORMATION
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

  Name   ›  Musa Abubakar
  Phone  ›  08012345678
  Email  ›  musa@email.com

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
✈️  SERVICE REQUESTED
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

  Service ›  Hajj Package

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
💬  CLIENT MESSAGE
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

  I need details on the Premium B package please.

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
📌 Ref:     SMT-250227-1432847
🌐 Source:  sumayetravel.com.ng
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
```

---

## 🎨 Colour System

All colours are defined as CSS custom properties in `style.css`:

| Variable | Hex | Usage |
|----------|-----|-------|
| `--sky` | `#00BFFF` | Primary brand colour — buttons, accents, links |
| `--sky-mid` | `#009FD4` | Hover states on sky elements |
| `--sky-deep` | `#007AAA` | Darker text accents |
| `--sky-10` | `rgba(0,191,255,0.10)` | Subtle tinted backgrounds |
| `--sky-20` | `rgba(0,191,255,0.20)` | Tag borders and soft highlights |
| `--sky-glow` | `rgba(0,191,255,0.35)` | Button box-shadows |
| `--white` | `#FFFFFF` | Clean backgrounds |
| `--off` | `#F7FBFE` | Slightly tinted section backgrounds |
| `--ink` | `#060E1A` | Primary text — deep navy-black |
| `--ink-2` | `#1A2B3C` | Secondary headings |
| `--ink-3` | `#3D5166` | Body text paragraphs |
| `--ink-4` | `#7A8FA4` | Muted labels and captions |
| `--line` | `#E0EDF5` | Borders, dividers, card strokes |

---

## 🔤 Typography

| Role | Font | Weight | Usage |
|------|------|--------|-------|
| Display / Italic accent | Cormorant Garamond | 400, 600, 700 | Hero headline italic word, section title accents, testimonial quotes |
| Body / UI | Plus Jakarta Sans | 300, 400, 500, 600, 700 | All navigation, body copy, buttons, labels, form fields |

The italic serif contrast against the clean sans-serif creates a luxury editorial feel — modern but warm.

---

## 🗂 Sections Breakdown

| Section | Description |
|---------|-------------|
| **Header** | Fixed navigation. Transparent on hero, white blur on scroll. Mobile hamburger menu. |
| **Hero** | Full-viewport dark section. Animated headline. Info cards cluster. Geometric SVG background. |
| **Marquee Strip** | Sky blue animated ticker showing all six services. |
| **Services** | Six service cards in a bordered grid layout. Numbers 01–06. Arrow hover effects. |
| **Packages** | Dark section. Nigeria / Niger tab switcher. Three package cards with checkmark lists. |
| **About** | Split layout. Stats block + tags cloud on left. Story, highlights, and CTA on right. |
| **Testimonials** | Three review cards with italic quotes and Cormorant Garamond styling. |
| **Contact** | Left: contact info rows with icons. Right: enquiry form with sky blue header panel. |
| **Footer** | Four-column dark footer with brand, services, links, and contact columns. |
| **Mobile Bar** | Fixed bottom bar on phones — Call Now (sky blue) + Enquire (outlined). |

---

## 🚀 How to Use

### Option 1 — Open Locally

1. Download all three files into one folder: `index.html`, `style.css`, `script.js`
2. Double-click `index.html` — it opens directly in any browser
3. No server, no setup, no installation required

### Option 2 — Upload to Web Hosting

1. Log into your cPanel or hosting file manager
2. Navigate to `public_html`
3. Upload all three files (`index.html`, `style.css`, `script.js`)
4. Visit your domain — the website is live immediately

### Option 3 — Deploy to Netlify (Free)

1. Go to [netlify.com](https://netlify.com) and create a free account
2. Drag and drop your project folder into the Netlify deploy area
3. Your site is live in seconds with a free URL (upgradeable to your own domain)

---

## ⚙️ Customisation Guide

### Change the WhatsApp Number

Open `script.js` and find:

```javascript
const waNumber = '2349118100328';
```

Replace with your number in international format without the `+` sign. For Nigerian numbers: remove the leading `0` and add `234`. Example: `08012345678` becomes `2348012345678`.

### Update Business Information

All business content is in `index.html`. Search for and replace:

| What to find | What to change |
|--------------|----------------|
| `Sumaye Travels and Tours` | Your agency name |
| `Dutse, Nigeria` | Your city |
| `+234 803 537 8973` | Your phone number |
| `sumayetravel@gmail.com` | Your email |
| `Plot C20A, Opp Old Galadima House, Dutse` | Your address |
| `2022` | Your founding year |

### Change Colours

Open `style.css`. At the very top inside `:root { }`, change:

```css
--sky: #00BFFF;   /* Change this to any colour you want */
```

All buttons, accents, and highlights update automatically because the entire design uses this one variable.

### Add a New Service Card

Inside the `.svc-grid` div in `index.html`, copy any existing `<div class="svc-item reveal">` block and update the number, icon, heading, and description.

---

## 📞 Contact & Support

For questions about the website, bookings, or travel services:

| Channel | Details |
|---------|---------|
| 📞 Phone | [+234 803 537 8973](tel:+2348035378973) |
| 📱 WhatsApp | [+234 911 810 0328](https://wa.me/2349118100328) |
| ✉️ Email | [sumayetravel@gmail.com](mailto:sumayetravel@gmail.com) |
| 📍 Office | Plot C20A, Opp Old Galadima House, Dutse, Jigawa State, Nigeria |
| 🕐 Hours | Monday – Saturday: 8:00 AM – 6:00 PM |

---

## 🏅 Credits

| Role | Details |
|------|---------|
| **Founded by** | Alhaji Tasiu Muhammad Danmalam |
| **Dedicated to** | Alhaji Tasiu Muhammad Danmalam — with respect, admiration, and gratitude |
| **Built with** | HTML5, CSS3, Vanilla JavaScript |
| **Fonts** | [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) + [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) via Google Fonts |
| **Icons** | Unicode emoji + handcrafted inline SVG |
| **Enquiry Delivery** | WhatsApp Web API |

---

## 📜 Licence

This website was built exclusively for **Sumaye Travels & Tours**, Dutse, Nigeria.

All rights belong to the business. The code may be freely modified by the agency or its designated developer. Redistribution or resale of this codebase to third parties is not permitted without explicit permission.

---

<div align="center">

Built with ❤️ for **Alhaji Tasiu Muhammad Danmalam** and the people of Dutse.

*May every traveller who books through Sumaye Travels & Tours have a safe, blessed, and beautiful journey.*

✈️ **Sumaye Travels & Tours** — *Dutse, Jigawa State, Nigeria*

</div>
