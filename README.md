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

| Script | What it does |
|---|---|
| `npm run dev` | Starts the dev server with HMR |
| `npm run build` | Type-checks (`tsc -b`) and builds to `dist/` |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Runs Oxlint |

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

The `~` alias points to `src/` (e.g. `import { Text } from '~/core/ui/Text'`).

## Editing content

- **Profile** (name, role, summary, contacts): `src/core/constants/profile.ts`
- **Projects**: `src/features/projects/projects.data.ts`. Add an object to `PROJECTS` and it shows up on the page. Use `links: []` for a project without links, and remove `placeholder: true` once the project is real.
- **Experience**: `src/features/experience/experience.data.ts`
- **Stack**: `src/features/stack/stack.data.ts`

Texts that change per language use the `Localized` shape (`{ en: '...', pt: '...' }`) and are read with `t(...)` from `useLanguage()`. Plain strings, like the name, must not go through `t()`.

## Text component

Typography lives in `src/core/ui/Text.tsx`. Use it instead of raw `<p>`/`<h3>` with size classes:

```tsx
<Text variant="muted">{t(description)}</Text>
<Text as="h3" variant="heading">{title}</Text>
```

Variants: `title`, `subtitle`, `heading`, `body`, `text`, `muted`, `label`, `caption`. Change a size in one place (`VARIANTS`) and it applies everywhere.
