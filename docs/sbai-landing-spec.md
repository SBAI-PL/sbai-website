# SBAI Landing Page – Full Design & Content Specification

## 📌 Project Overview

This document defines the design, content, and style specifications for the **SBAI** landing page.  
The goal is to create a **modern, minimalistic, and responsive one-pager** that communicates SBAI’s unique value proposition clearly and professionally.

### Project Goal
To present SBAI as a modern AI solutions company, focusing on:
- No-code copilots & headless UI
- Conversation-driven AI system creation
- Data intelligence & transformation

---

## 🧭 Core Principles

- ✅ **Step-by-step development** — each major section is reviewed and approved before implementation.  
- 🧱 **Use CSS variables** for colors, spacing, and typography — no magic numbers.  
- 🧼 **No workarounds** — solutions must address root issues.  
- 📝 **All major design decisions are documented** in this file.

---

## 🧰 Assets

Assets used on the website:

| Asset | Path | Description |
|-------|------|-------------|
| Logo | `assets/sbai_logo.svg` | Full orange logo. Works on both navy and white backgrounds. |
| Hero Image | `assets/sbai_hero.png` | Main hero banner (dark office with city skyline and glowing SBAI text). |
| Found Lady Logo | `assets/found_lady.png` | Logo for the "Success Story" section. |

---

## 🌐 Top Bar (Header)

- **Logo** on the left (sbai_logo.svg), with text next to it:  
  **SBAI** — _Smart Business AI_
- Right-side navigation (desktop):  
  - What We Do  
  - Technology  
  - Success Story  
  - Contact
- Mobile: collapses into a hamburger menu.

---

## 🦾 Hero Section

**Headline:**  
> **Turn Ideas Into Working AI Systems — Without Writing Code**

**Subheadline:**  
> SBAI builds no-code AI copilots, intelligent workflows, and data agents that integrate seamlessly into your business — from conversation to production.

**CTA Buttons:**  
> [🚀 Book a Consultation](#contact)  [📚 See What We Can Do](#what-we-do)

**Background:**  
- Hero image: `assets/sbai_hero.png`.  
- Centered text and CTA, white typography.  

---

## 🧱 Three Key Pillars

### 💡 **No-Code Copilots & Headless UI**  
Build and embed powerful AI copilots into your apps — **without writing code**.  
Use our headless UI components to drop copilots directly into your product, then teach them your data and workflows through our agentic platform.

---

### 🗣️ **From Conversation to Working AI Systems**  
Describe what you need — and our agents, with a human in the loop, will **design and build complete AI copilots, workflows, and backend services** for you.  
We transform spoken language into fully functioning, tailored AI solutions.

---

### 📊 **Data Intelligence & Transformation**  
Turn unstructured information into **actionable insights**.  
We build pipelines and agents that extract, clean, classify, and analyze data — including real-time customer sentiment monitoring.

**Layout:**  
- Three columns in a row on desktop.  
- Stacked vertically on mobile.

---

## 📝 What We Can Do for You

> **SBAI sp. z o.o.** builds practical, production-ready AI solutions that adapt to your business — not the other way around.  
> You can use our platform to create your own **no-code copilots** and **AI servers**, or let us design and deliver complete solutions for you.

Our expertise includes:
- 🧠 **Custom Agentic Workflows**  
- 🔄 **Data Transformation & Intelligence**  
- 💻 **Headless Copilot UI Components**  
- 🤖 **Integration with Your Stack**

---

## 🌀 Technology Stack Carousel

**Header:**  
> **Our Technology Stack**  
> _We build on top of modern, production-grade AI and developer tools._

**Logos:**  
OpenAI • Claude • LangGraph • CopilotKit • Python • React • MCP • Postgres • Azure

**Layout:**  
- CSS marquee / lightweight slider  
- Logos in white monochrome, dimmed by default, bright on hover.

---

## 🧍‍♂️ Customer Success Story (Two Columns)

**Title:**  
> 🏢 **Logistics Company Automates Invoice Processing**

**Left Column (Text):**  
Case placeholder text with bullet points and measurable outcomes.

**Right Column (Image):**  
Business portrait or client team photo - /assets/found_lady.png.  
Desktop: 60% text / 40% image; Mobile: stacked.

---

## 📬 Contact Section

Fields: Name, Company, Email, Message  
CTA: _Let’s talk about how AI can transform your business._

---

## 🦶 Footer

**SBAI sp. z o.o.**  
Poland 🇵🇱  
📧 info@sbai.pl  
© 2025 SBAI sp. z o.o. — All Rights Reserved.

---

## 🎨 Color Palette

| Name | HEX | Use |
|------|-----|-----|
| **Primary Navy** | `#0B1420` | Background, headers, dark sections |
| **Accent Orange** | `#F16521` | Logo, CTA, interactive elements |
| **White** | `#FFFFFF` | Text on dark, backgrounds for light sections |
| **Gray 100** | `#F5F7FA` | Light backgrounds, separators |
| **Gray 300** | `#DDE2E7` | Borders, UI elements |
| **Gray 600** | `#7A828E` | Secondary text, muted icons |

---

## ✍️ Typography & Layout

| Role | Font | CSS Variable |
|------|------|--------------|
| Headings | Inter / sans-serif | `--font-family-sans` |
| Body | Inter / sans-serif | `--font-family-sans` |

### Font Sizes

| Role | Mobile | Desktop |
|------|--------|---------|
| Base | 1rem | 1.1rem |
| h1 | 2rem | 3rem |
| h2 | 1.5rem | 2rem |
| h3 | 1.25rem | 1.5rem |

### Spacing

| Role | Variable | Value |
|------|----------|-------|
| XS | `--space-xs` | 0.5rem |
| SM | `--space-sm` | 1rem |
| MD | `--space-md` | 1.5rem |
| LG | `--space-lg` | 2rem |
| XL | `--space-xl` | 3rem |
| XXL | `--space-xxl` | 5rem |

---

## 💻 Global CSS

```css
:root {
  --color-primary-navy: #0B1420;
  --color-accent-orange: #F16521;
  --color-white: #FFFFFF;
  --color-gray-100: #F5F7FA;
  --color-gray-300: #DDE2E7;
  --color-gray-600: #7A828E;
  --font-family-sans: 'Inter', 'Helvetica Neue', Arial, sans-serif;
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2rem;
  --space-xl: 3rem;
  --space-xxl: 5rem;
}

body {
  background-color: var(--color-primary-navy);
  color: var(--color-white);
  font-family: var(--font-family-sans);
  line-height: 1.6;
}

/* Hero */
.hero {
  background: var(--color-primary-navy) url('/assets/sbai_hero.png') center/cover no-repeat;
  text-align: center;
  padding: var(--space-xxl) var(--space-sm);
}

/* Pillars, tech carousel, success story — as previously defined */
