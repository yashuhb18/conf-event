# RTECE 2026 — National Conference Website
**Department of Electronics & Communication Engineering (ECE)**  
**Maharaja Institute of Technology Mysore (MIT Mysore)**  
*(An Autonomous Institution affiliated to VTU Belagavi, approved by AICTE New Delhi, recognized by Government of Karnataka)*  
In Association with **eMITERS**

---

## 🚀 Live Site
- **Local URL**: [http://localhost:3000](http://localhost:3000)
- **Directory**: `/home/rises/Desktop/conf-site`

---

## 🛠️ Tech Stack
- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Design System**: Premium White & Academic Royal Blue palette (IIT/NIT style)
- **Typography**: Inter (Body) + Space Grotesk (Headings)

---

## 📦 Running the Project

```bash
# Development server (runs on port 3000)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

---

## 📁 Component Architecture

```
src/
├── App.jsx                     # Root component composing all sections
├── main.jsx                    # React 19 entry point
├── index.css                   # Tailwind v4 import & font definitions
├── data/
│   └── conference.js           # Single source of truth for all conference data
└── components/
    ├── Navbar.jsx              # Sticky navbar with scroll blur & mobile drawer
    ├── Hero.jsx                # Full-screen hero with live countdown timer
    ├── About.jsx               # Tabbed about section (Conference, MIT Mysore, ECE)
    ├── Tracks.jsx              # 11 Technical tracks grid with keyword tags
    ├── Dates.jsx               # Horizontal & vertical timeline + Calendar downloads (.ics & Google Cal)
    ├── Publication.jsx         # IARJSET journal & Google Scholar indexing cards
    ├── Registration.jsx        # Fee structure cards & HD QR code scanner
    ├── Committee.jsx           # Leadership hierarchy (Chief Patrons, Patrons, Coordinators, Tech Team)
    ├── Contact.jsx             # Faculty contact cards, venue map iframe, inquiry form
    └── Footer.jsx              # Professional academic footer with quick links & affiliations
```
