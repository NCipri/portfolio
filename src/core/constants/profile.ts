import type { Localized } from '~/core/i18n/i18n.types'

type Profile = {
  name: string
  photoUrl: string
  role: Localized
  location: Localized
  phone: string
  email: string
  linkedinUrl: string
  githubUrl: string
  summary: Localized
  lookingFor: Localized
}

export const PROFILE: Profile = {
  name: 'Nicolas Cipriano S. Oliveira',
  photoUrl: '/profile_me.png',
  role: { en: 'Full-Stack Developer', pt: 'Desenvolvedor Full-Stack' },
  location: {
    en: 'Pelotas, Brazil (UTC-3) · Open to remote work',
    pt: 'Pelotas, Brasil (UTC-3) · Aberto a trabalho remoto',
  },
  phone: '+55 (12) 98303-3976',
  email: 'nicolascipriano68@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/ncipri',
  githubUrl: 'https://github.com/NCipri',
  summary: {
    en: 'Full-Stack Developer with 2+ years of production experience in Ruby on Rails, React and relational databases.I build RESTful APIs and responsive interfaces, write automated tests and work in agile teams. I use AI tools to discuss architecture, debug and review code. Computer Engineering student with research in cryptographic hardware security.',
    pt: 'Desenvolvedor Full-Stack com mais de 2 anos de experiência em produção com Ruby on Rails, React e bancos de dados relacionais. Construo APIs RESTful e interfaces responsivas, escrevo testes automatizados e trabalho em times ágeis. Uso ferramentas de IA para discutir arquitetura, depurar e revisar código. Estudante de Engenharia de Computação com pesquisa em segurança de hardware criptográfico.',
  },
  lookingFor: {
    en: 'Looking for full-stack roles where I can keep growing on back-end and cloud. Currently building projects with Go, RAG and AWS.',
    pt: 'Buscando vagas full-stack onde eu possa continuar crescendo em back-end e cloud. Atualmente construindo projetos com Go, RAG e AWS.',
  },
}
