import type { ExperienceEntry } from '~/features/experience/experience.types'

export const WORK_EXPERIENCE: ExperienceEntry[] = [
  {
    id: 'sygnal',
    title: { en: 'Full-Stack Developer', pt: 'Desenvolvedor Full-Stack' },
    organization: 'Sygnal Group',
    location: { en: 'Pelotas, Brazil (on-site)', pt: 'Pelotas, Brasil (presencial)' },
    period: { en: '2026', pt: '2026' },
    bullets: [
      {
        en: 'Built and maintained RESTful APIs in Ruby on Rails with MySQL, working in an agile team.',
        pt: 'Construí e mantive APIs RESTful em Ruby on Rails com MySQL, em um time ágil.',
      },
      {
        en: 'Developed responsive interfaces with React, TypeScript, Vite, Astro and Tailwind CSS.',
        pt: 'Desenvolvi interfaces responsivas com React, TypeScript, Vite, Astro e Tailwind CSS.',
      },
      {
        en: 'Wrote automated RSpec tests and integrated them into the GitHub CI/CD pipeline.',
        pt: 'Escrevi testes automatizados com RSpec e os integrei ao pipeline de CI/CD do GitHub.',
      },
      {
        en: 'Standardized development environments and isolated services with Docker.',
        pt: 'Padronizei ambientes de desenvolvimento e isolei serviços com Docker.',
      },
      {
        en: 'Used AI agents (Claude Code) for architecture discussions, debugging and code review.',
        pt: 'Usei agentes de IA (Claude Code) para discutir arquitetura, depurar e revisar código.',
      },
      {
        en: 'Worked with third-party APIs such as Cardpointe to handle payment processing.',
        pt: 'Trabalhar com APIs de terceiros como Cardpointe para pagamentos.'
      }
    ],
  },
  {
    id: 'donamaid',
    title: { en: 'Full-Stack Developer', pt: 'Desenvolvedor Full-Stack' },
    organization: 'Donamaid',
    location: { en: 'Remote', pt: 'Remoto' },
    period: { en: 'Dec. 2024 – Mar. 2026', pt: 'Dez. 2024 – Mar. 2026' },
    bullets: [
      {
        en: 'Developed and extended internal APIs and RESTful endpoints with Ruby on Rails.',
        pt: 'Desenvolvi e estendi APIs internas e endpoints RESTful com Ruby on Rails.',
      },
      {
        en: 'Built responsive user interfaces with React, Vite, Astro and Tailwind CSS.',
        pt: 'Construí interfaces responsivas com React, Vite, Astro e Tailwind CSS.',
      },
      {
        en: 'Optimized SQL queries and fixed bugs in a production environment.',
        pt: 'Otimizei consultas SQL e corrigi bugs em ambiente de produção.',
      },
      {
        en: 'Worked with agile methodologies, Git and CI/CD workflows on GitHub.',
        pt: 'Trabalhei com metodologias ágeis, Git e fluxos de CI/CD no GitHub.',
      },
      {
        en: 'Used Docker for isolated development and testing environments.',
        pt: 'Usei Docker para ambientes isolados de desenvolvimento e testes.',
      },
      {
        en: 'Worked with third-party APIs such as Google Maps to operate geolocation.',
        pt: 'Trabalhei com APIs de terceiros como Google Maps para operar geolocalização.',
      }
    ],
  },
]

export const ACADEMIC_EXPERIENCE: ExperienceEntry[] = [
  {
    id: 'ufpel-degree',
    title: { en: 'B.Sc. in Computer Engineering', pt: 'Bacharelado em Engenharia de Computação' },
    organization: 'Federal University of Pelotas (UFPel)',
    location: { en: 'Pelotas, Brazil', pt: 'Pelotas, Brasil' },
    period: { en: '2022 – Expected 2028', pt: '2022 – Previsão 2028' },
  },
  {
    id: 'ufpel-research',
    title: { en: 'Research Fellow, Rastro Verde - INOVAAGRO UFPel', pt: 'Bolsista de Pesquisa, Rastro Verde - INOVAAGRO UFPel' },
    organization: 'Federal University of Pelotas (UFPel)',
    location: { en: 'Pelotas, Brazil', pt: 'Pelotas, Brasil' },
    period: { en: 'Jan. 2024', pt: 'Jan. 2024' },
    bullets: [
      {
        en: 'Researched the development of a RESTful API for image capture and processing with AI modeling.',
        pt: 'Desenvolvi uma API para a captação de imagens tratadas com modelagem de IA com foco de detecção de dados para reflorestamento.',
      },
      {
        en: 'Implemented API in PHP, Dockers and HTML & CSS.',
        pt: 'Implementei API em PHP, Dockers e HTML & CSS.',
      },
    ],
  },
  {
    id: 'ufpel-research',
    title: { en: 'Research Fellow, PROBITI/FAPERGS', pt: 'Bolsista de Pesquisa, PROBITI/FAPERGS' },
    organization: 'Federal University of Pelotas (UFPel)',
    location: { en: 'Pelotas, Brazil', pt: 'Pelotas, Brasil' },
    period: { en: 'Jan. 2024', pt: 'Jan. 2024' },
    bullets: [
      {
        en: 'Researched secure cryptographic architectures and their resistance to side-channel attacks.',
        pt: 'Pesquisei arquiteturas criptográficas seguras e sua resistência a ataques de canal lateral.',
      },
      {
        en: 'Implemented and modeled designs in VHDL, C, Matlab and Python.',
        pt: 'Implementei e modelei projetos em VHDL, C, Matlab e Python.',
      },
    ],
  },
  {
    id: 'ufpel-teaching',
    title: { en: 'Teaching Assistant', pt: 'Monitor' },
    organization: 'Federal University of Pelotas (UFPel)',
    period: { en: 'Feb. 2022', pt: 'Fev. 2022' },
    bullets: [
      {
        en: 'Supported students, created exercises and answered course questions.',
        pt: 'Apoiei alunos, criei exercícios e tirei dúvidas da disciplina.',
      },
    ],
  },
]
