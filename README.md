# Ambigo — Emergency Medical Services Platform

Ambigo is a modern web application for **Ambigo Health Care Pvt Ltd**, providing ambulance booking, teleconsultation, home healthcare, and emergency medical services across Andhra Pradesh, India.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| Build Tool | [Vite](https://vitejs.dev/) |
| Routing | [React Router v7](https://reactrouter.com/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) + Custom CSS Design System |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Deployment | [Netlify](https://www.netlify.com/) |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd ambigo_website

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

The production-ready files will be generated in the `dist/` directory.

## Project Structure

```
ambigo_website/
├── public/                  # Static assets (images, logos, QR codes)
│   └── images/              # Organized image assets
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/              # Primitive UI components (Lamp effect, etc.)
│   │   ├── Navbar.tsx       # Navigation bar
│   │   ├── Footer.tsx       # Site footer
│   │   ├── AmbulanceServices.tsx
│   │   ├── AppShowcase.tsx
│   │   ├── AchievementsMarquee.tsx
│   │   ├── TrustedPartners.tsx
│   │   ├── WhyChooseAmbigo.tsx
│   │   └── ...
│   ├── layouts/             # Page layout wrappers
│   │   └── MainLayout.tsx
│   ├── lib/                 # Utility functions
│   │   └── utils.ts
│   ├── pages/               # Route-level page components
│   │   ├── Home.tsx
│   │   ├── AboutUs.tsx
│   │   ├── Individual.tsx
│   │   ├── Hospital.tsx
│   │   ├── Enterprise.tsx
│   │   ├── Training.tsx
│   │   ├── Careers.tsx
│   │   ├── ContactUs.tsx
│   │   ├── Terms.tsx
│   │   └── ...
│   ├── App.tsx              # Root component with route definitions
│   ├── main.tsx             # Application entry point
│   ├── index.css            # Main stylesheet (imports all CSS)
│   ├── old_styles.css       # Legacy styles from original site
│   └── ambigo-visual-language.css  # Design system overrides
├── index.html               # HTML entry point
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Dependencies and scripts
└── eslint.config.js         # Linting configuration
```

## Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with hero, services, app showcase |
| `/AboutUs` | About Us | Company history, mission, and team |
| `/individual` | Individual | Emergency services for individuals |
| `/hospital` | Hospital | Hospital partnership and coordination |
| `/enterprise` | Enterprise | Enterprise emergency solutions |
| `/training` | Training | Paramedical training programs |
| `/Careers` | Careers | Job listings and career opportunities |
| `/ourteam` | Our Team | Team member profiles |
| `/contactus` | Contact Us | Contact forms and partnership info |
| `/terms` | Terms | Terms & Conditions, Privacy Policy, Legal |
| `/firstaid` | First Aid | First aid tips and guidance |
| `/blogs` | Blog | Blog section |

## License

© 2026 Ambigo Health Care Pvt Ltd. All Rights Reserved.
