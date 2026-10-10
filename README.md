# Viskool Homepage - Frontend Prototype & Developer Handoff

This directory contains a standalone, frontend-only prototype of the **Viskool** homepage built with React and Tailwind CSS.

## 🎯 Purpose
- UI/UX exploration and visual verification.
- Clean design reference for developers implementing the homepage into the production application.
- 100% frontend only — no backend, APIs, database, or payment gateways needed.

---

## 🚀 Quick Preview

To view the interactive prototype immediately in your browser:
- Simply open [`index.html`](file:///C:/Users/Lenovo/.gemini/antigravity/scratch/viskool-prototype/index.html) directly in any web browser (Chrome, Edge, Firefox, Safari).

---

## 📁 Project Architecture

```
viskool-prototype/
├── index.html                      # Standalone zero-build runnable prototype
├── README.md                       # Developer handoff documentation
└── src/
    ├── App.jsx                     # Root component orchestrating all sections
    ├── data/
    │   └── mockData.js             # Realistic sample data (courses, reviews, faqs, announcements)
    └── components/
        ├── AnnouncementBar.jsx     # Infinite marquee announcement ticker
        ├── Header.jsx              # Responsive navbar with dropdown & mobile drawer
        ├── Hero.jsx                # Hero banner with slider & stats
        ├── ProcessSteps.jsx        # Value proposition & 3-step cards
        ├── CourseSection.jsx       # Featured courses with category filter tabs
        ├── WhyChooseUs.jsx         # 3-card benefit layout with media
        ├── SuccessCTA.jsx          # High-conversion gradient CTA banner
        ├── FAQSection.jsx          # Collapsible accordion FAQ
        ├── Achievements.jsx        # Glassmorphic student score cards
        ├── Testimonials.jsx        # Student review carousel
        ├── Footer.jsx              # Multi-column footer & app store badges
        ├── FloatingActions.jsx     # Floating WhatsApp & callback triggers
        └── ContactModal.jsx        # Demo booking & inquiry modal
```

---

## 🎨 Design System & Tokens

### Color Palette
- **Primary Burgundy**: `#8B1538`
- **Dark Burgundy**: `#73152C`, `#540D22`
- **Light Rose / Burgundy Backgrounds**: `#FAF5F7`, `#F8F0F2`, `#FCF8F9`, `#F1E0E5`
- **Text Primary**: `#1A1A1A`
- **Text Muted**: `#6B7280`
- **Accents**: `#16A34A` (Community/WhatsApp Green), `#25D366`, `#F59E0B` (Rating Stars)

### Typography
- **Headings & Body**: `Plus Jakarta Sans`, `Inter`, `sans-serif`
- **Brand Emphasis Words**: `Playfair Display`, `serif`, `italic` (e.g., *School Tuition*, *Future*, *Viskool*, *Answers*, *Achievements*, *STUDENTS*)

---

## 💡 Developer Implementation Notes
1. **Responsive Breakpoints**: Configured for mobile (`<640px`), tablet (`640px - 1024px`), and desktop (`>1024px`).
2. **State & Interactions**:
   - Courses dropdown opens on hover/click.
   - Course filter pills filter the course list dynamically.
   - Accordions toggle smoothly with single-open or multi-open flexibility.
   - Inquiry modals accept course data when clicking "Enroll Now" or "Get Details".
3. **Plugging into Production**:
   - Replace `mockData.js` imports with your API endpoints or CMS queries.
   - Point image paths to your CDN asset storage.
