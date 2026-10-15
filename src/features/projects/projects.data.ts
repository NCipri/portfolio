import type { Project } from '~/features/projects/project.types'

export const PROJECTS: Project[] = [
  {
    id: 'hello-thomas',
    title: 'Hello-Thomas - on Sygnal Group',
    description: {
      en: 'A system built for the North American public to manage their business. Creation of a Company, addition of products and services, organization of the employee and customer base, sales and revenue reports, and much more.',
      pt: 'Um sistema feito para o publico Norte americano para o gerenciamento do seu empreendimento. Criação de uma Company, adição de produtos e serviços, organização do corpo de funcionarios e clientes, Report de vendas e faturamento, e muito mais.',
    },
    stack: ['React & Native', 'TypeScript', 'Tailwind CSS', 'Astro', 'Ruby on Rails', 'MySQL', 'Docker', 'Postman', 'Claude Code'],
    links: [
      { label: 'Web Site', url: 'https://www.hello-thomas.com/' },
      { label: 'App IOS', url: 'https://apps.apple.com/br/app/hello-thomas/id6761067838' },
      { label: 'App Android', url: 'https://play.google.com/store/apps/details?id=hello.thomas.app&hl=pt_BR' },
      ],
  },
  {
    id: 'donamaid',
    title: 'Donamaid - on Donamaid',
    description: {
      en: 'A mobile app for professionals to connect with clients and sell their cleaning services and other services.',
      pt: 'Um app mobile para profissionais se conectarem com clientes e vender seus serviços de limpeza entre outros.',
    },
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Astro', 'Ruby on Rails', 'PostgreSQL', 'Docker', 'Postman'],
    links: [
      { label: 'Web Site', url: 'https://www.donamaid.com/' },
      { label: 'App IOS', url: 'https://apps.apple.com/br/app/donamaid/id1519670575' },
      { label: 'App Android', url: 'https://play.google.com/store/apps/details?id=com.donamaid.profissionais&hl=pt_BR' },

    ],
  },
  {
    id: 'rastro-verde-embrapi',
    title: 'Rastro Verde - on INOVAAGRO UFPel',
    description: {
      en: 'A system for tracking the origin and journey of agroforestry seedlings, identifying each one, locating it geographically, and recording its history and photos.',
      pt: 'Sistema de rastreabilidade de mudas agroflorestais que identifica cada muda, a localiza geograficamente e registra seu histórico e suas fotos',
    },
    stack: ['PHP', 'HTML & CSS', 'Docker', 'HTTP', 'MySQL', 'IA Modeling'],
    links: [],
  },
  {
    id: 'avba-proto',
    title: 'AVBA Proto - on AVBA',
    description: {
      en: 'An internal system for a volleyball club store: snack bar and team items, prepaid customer balance, court scheduling, monthly fees with email reminders, and a password-protected finance area.',
      pt: 'Sistema interno da loja de um clube de vôlei: lanchonete e itens do time, saldo pré-pago por cliente, agenda das quadras, mensalidades com lembrete por e-mail e área financeira protegida por senha.',
    },
    stack: ['React', 'TypeScript', 'Java', 'Spring Boot', 'MySQL', 'Flyway', 'Docker'],
    links: [],
  },
  {
    id: 'honey-phiz',
    title: 'HoneyPhiz - Personal project',
    description: {
      en: 'A family personal finance app. Data stays only on your own computer (local SQLite) and the phone is just a screen talking to it. Front end embedded in the Go binary.',
      pt: 'App de finanças pessoais para uso familiar. Os dados ficam só no seu computador (SQLite local) e o celular é só uma tela que fala com ele. Front embutido no binário Go.',
    },
    stack: ['Go', 'SQLite', 'React Native (Expo)', 'NativeWind', 'TypeScript'],
    links: [],
  },
]

{/*
    id: 'project-one',
    title: 'Project name',
    description: {
      en: 'One line about what it does and the technical decision behind it.',
      pt: 'Uma linha sobre o que faz e a decisão técnica por trás.',
    },
    stack: ['Go', 'PostgreSQL', 'Docker', 'AWS'],
    links: [{ label: 'GitHub', url: 'https://github.com/NCipri' }],
    placeholder: true,
  */}
