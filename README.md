# Portfolio

Personal portfolio of Nicolas Cipriano S. Oliveira, Full-Stack Developer. Single-page site with About, Stack, Projects and Experience sections, bilingual (EN/PT) and with light/dark theme.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- lucide-react (icons)
- Oxlint

## Getting started

```bash
npm install
npm run dev
```

## Project structure

```
src/
├── components/   # Section components (Hero, Stack, Projects, Experience, Header, Sidebar)
├── contexts/     # Language context
├── core/
│   ├── constants/  # Profile data and section list
│   ├── i18n/       # Localized types and UI strings
│   ├── ui/         # Shared UI (Text, Badge, Section, LanguageSwitch, BrandIcons)
│   └── utils/      # Helpers (cn)
├── features/     # Content data: experience, projects, stack
├── hooks/        # useTheme, useActiveSection, useLocalStorageState
├── layouts/      # AppLayout
├── pages/        # Home
└── providers/    # LanguageProvider
```
