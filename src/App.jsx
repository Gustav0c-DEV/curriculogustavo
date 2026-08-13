import { useEffect, useRef } from 'react'
import {
  FaChartBar,
  FaCode,
  FaFilePdf,
  FaGraduationCap,
  FaRobot,
  FaServer,
  FaTools,
} from 'react-icons/fa'
import {
  SiCss,
  SiFigma,
  SiGithub,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiReact,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

const dataSkills = [
  { name: 'SQL', icon: SiMysql, color: '#4479A1' },
  { name: 'Power BI', icon: FaChartBar, color: '#F2C811' },
]

const evolvingSkills = [
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'GitHub', icon: SiGithub, color: '#F5F5F5' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'C++', icon: FaCode, color: '#00599C' },
  { name: 'Machine Learning & IA', icon: FaRobot, color: '#57BBF6' },
]

const devSkills = [
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: SiCss, color: '#1572B6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'VS Code', icon: VscVscode, color: '#007ACC' },
]

const courses = [
  {
    title: 'Análise de Dados no Google Ads',
    institution: 'Senac — Orango',
    area: 'Data Analytics / Marketing Analytics',
  },
  {
    title: 'Desvendando o Machine Learning: Ferramentas para Inovar nos Negócios',
    institution: 'Senac — Orango',
    area: 'Data Science / Machine Learning',
  },
  {
    title: 'Desvendando a Inteligência Artificial',
    institution: 'Senac — Orango',
    area: 'Inteligência Artificial / Data Science',
  },
  {
    title: 'IAs Conversacionais para Inovar',
    institution: 'Senac — Orango',
    area: 'Inteligência Artificial',
  },
  {
    title: 'Gestão Ágil de Projetos com Scrum e Kanban',
    institution: 'Senac — Orango',
    area: 'Gestão / Tecnologia',
  },
]

const projects = [
  {
    index: '01',
    title: 'Pipeline Financeira',
    tag: 'ETL / Data Engineering — Python',
    description:
      'Pipeline ETL para extração, transformação e carregamento de dados financeiros de ações. Realiza limpeza de dados, cálculos de variação diária, conversão de tipos e carregamento em banco PostgreSQL.',
    stack: ['Python', 'Pandas', 'PostgreSQL', 'ETL'],
    href: 'https://github.com/Gustav0c-DEV/Pipeline-financeiro',
  },
  {
    index: '02',
    title: 'Dashboard de Manutenção — Autopeças',
    tag: 'Dashboard / BI — Power BI',
    description:
      'Painel com dados fictícios para acompanhamento de estoque, pedidos, manutenção preventiva e desempenho operacional de uma empresa de autopeças.',
    stack: ['Power BI', 'Dados fictícios', 'KPIs', 'Excel'],
    href: 'https://app.powerbi.com/links/EDcuDChmnk?ctid=e7fd764d-46ff-41ee-8c8c-e41e8a4968ed&pbi_source=linkShare',
    image: `${import.meta.env.BASE_URL}dashboard-autopeças.jpg`,
  },
  {
    index: '03',
    title: 'Receita Divertida',
    tag: 'Aplicativo / Site — UX & Requisitos',
    description:
      'Plataforma de receitas voltada para cuidadores de crianças no espectro autista. Atuação em análise competitiva, requisitos não funcionais (LGPD e acessibilidade) e prototipação em Figma, em equipe.',
    stack: ['Figma', 'LGPD', 'Acessibilidade'],
    href: 'https://glassy-whoop-08538120.figma.site',
  },
]

const projectCount = projects.length

const certificateBasePath = `${import.meta.env.BASE_URL}certificados/`

const certificates = [
  {
    title: 'Assistente de Tecnologias da Informação',
    institution: 'Senac Paraná',
    hours: '200 horas',
    year: '2023',
    description:
      'Formação voltada para suporte técnico, manutenção de computadores, instalação de sistemas operacionais, hardware, software e redes locais de computadores.',
    file: `${certificateBasePath}Assistente_Tecnologias_da_Informacao.pdf`,
    icon: FaServer,
    iconColor: '#57BBF6',
  },
  {
    title: 'Assistente Administrativo',
    institution: 'Senac Paraná',
    hours: '160 horas',
    year: '2024',
    description:
      'Formação em rotinas administrativas, organização de documentos, processos empresariais e apoio às atividades administrativas.',
    file: `${certificateBasePath}Assistente_Administrativo.pdf`,
    icon: FaTools,
    iconColor: '#57BBF6',
  },
  {
    title: 'Front-end com IA',
    institution: 'Alura',
    hours: 'Certificado',
    year: '2026',
    description:
      'Certificação com foco no desenvolvimento front-end e na aplicação de inteligência artificial na criação de interfaces.',
    file: `${certificateBasePath}Front_End_com_IA_Alura.pdf`,
    icon: FaRobot,
    iconColor: '#57BBF6',
  },
]

const completedCoursesCount = certificates.length

function App() {
  const certificatesRef = useRef(null)

  useEffect(() => {
    const cards = certificatesRef.current?.querySelectorAll('[data-reveal]')

    if (!cards?.length || !('IntersectionObserver' in window)) {
      cards?.forEach((card) => card.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )

    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <nav className="nav">
        <span className="nav__brand">GC/O</span>
        <div className="nav__links">
          <a href="#sobre">Sobre</a>
          <a href="#skills">Skills</a>
          <a href="#projetos">Projetos</a>
          <a href="#formacao">Formação</a>
          <a href="#cursos">Cursos</a>
          <a href="#certificados">Certificados</a>
          <a href="#contato">Contato</a>
        </div>
        <a className="nav__cta" href="mailto:ytavinhoy@gmail.com">
          Disponível para trabalho
        </a>
      </nav>

      <header className="hero" id="sobre">
        <div className="hero__bg" aria-hidden="true">DADOS</div>

        <svg className="hero__trend" aria-hidden="true" viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg">
          <polyline points="20,100 60,75 100,65 140,50 180,60 220,35 260,45 300,20 340,30 380,15" 
                    fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" />
          <circle cx="20" cy="100" r="3" fill="currentColor" />
          <circle cx="380" cy="15" r="3" fill="currentColor" />
        </svg>

        <div className="hero__top">
          <span className="eyebrow">ESTUDANTE · ADS</span>
          <span className="eyebrow eyebrow--muted">CURITIBA, PR</span>
        </div>

        <div className="hero__main">
          <div className="hero__intro">
            <p className="hello">Olá, eu sou</p>
            <h1>
              Gustavo Costa
            </h1>
            <p className="role">Data Analytics · Data Science</p>
            <p className="pitch">
              Estudante de Análise e Desenvolvimento de Sistemas no Senac Portão, com foco em
              SQL e Business Intelligence evoluindo em direção a Data Science, Inteligencia Artificial e Machine Learning, com
              conhecimentos complementares de desenvolvimento de software.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#projetos">
                Ver projetos
              </a>
              <a
                className="btn btn--ghost"
                href="https://github.com/Gustav0c-DEV"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          <div className="terminal">
            <div className="terminal__bar">
              <span className="dot dot--red" />
              <span className="dot dot--yellow" />
              <span className="dot dot--green" />
              <span className="terminal__title">gustavo@ads:~</span>
            </div>
            <div className="terminal__body">
              <p className="terminal__line">
                <span className="prompt">$</span> Nome
              </p>
              <p className="terminal__line terminal__line--output">Gustavo Costa de Oliveira</p>
              <p className="terminal__line">
                <span className="prompt">$</span> formação
              </p>
              <p className="terminal__line terminal__line--output">Senac Portão — ADS, 2026–2028</p>
              <p className="terminal__line terminal__line--command">
                <span className="prompt">$</span> <span className="typed">ls dados/</span>
              </p>
              <p className="terminal__line terminal__line--output">Sql  Power-Bi  Power-Query</p>
              <p className="terminal__line terminal__line--command">
                <span className="prompt">$</span> <span className="typed">ls evoluindo/</span>
              </p>
              <p className="terminal__line terminal__line--output">Machine-Learning  Inteligência Artificial</p>
              <p className="terminal__line terminal__line--prompt">
                <span className="prompt">$</span> <span className="cursor">_</span>
              </p>
            </div>
          </div>
        </div>

        <div className="hero__stats">
          <div className="stat">
            <span className="stat__num">2026</span>
            <span className="stat__label">Início do curso</span>
          </div>
          <div className="stat">
            <span className="stat__num">3FN</span>
            <span className="stat__label">Normalização de dados</span>
          </div>
          <div className="stat">
            <span className="stat__num">{projectCount}</span>
            <span className="stat__label">Projetos </span>
          </div>
          <div className="stat">
            <span className="stat__num">{completedCoursesCount}</span>
            <span className="stat__label">Cursos concluídos</span>
          </div>
          <div className="stat">
            <span className="stat__num">05</span>
            <span className="stat__label">Cursos de Dados/IA em andamento</span>
          </div>
        </div>
      </header>

      <section className="section section--about" id="sobre-mim">
        <div className="section__head">
          <h2>Sobre mim</h2>
        </div>
        <div className="about">
          <p>
            Sou estudante de Análise e Desenvolvimento de Sistemas no Senac Portão, construindo minha
            base em Dados a partir de SQL e Power BI, com prática em modelagem, normalização e
            visualização de indicadores para Business Intelligence.
          </p>
          <p>
            Estou evoluindo para Data Science e Data Engineering atualmente em cursos de Machine
            Learning e Inteligência Artificial e mantenho conhecimentos
            complementares de desenvolvimento de software (HTML, CSS, JavaScript, React, C++), o que me
            ajuda a entender desde a origem e estrutura dos dados até sua análise e visualização.
          </p>
          <p>
            Meu objetivo atual é uma oportunidade de trabalho em Data Analytics ou Data Science.
          </p>
        </div>
      </section>

      <section className="section" id="projetos">
        <div className="section__head">
          <h2>Projetos</h2>
          <a className="section__link" href="https://github.com/Gustav0c-DEV" target="_blank" rel="noopener noreferrer">
            Ver todos no GitHub →
          </a>
        </div>

        <div className="projects">
          {projects.map((project) => (
            <a
              className="project-card"
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              key={project.index}
            >
              {project.image && (
                <div className="project-card__image">
                  <img src={project.image} alt={project.title} loading="lazy" />
                </div>
              )}
              <span className="project-card__index">{project.index}</span>
              <div className="project-card__body">
                <span className="project-card__tag">{project.tag}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-card__stack">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
              <span className="project-card__arrow">→</span>
            </a>
          ))}

          <div className="project-card project-card--next">
            <span className="project-card__index">04</span>
            <div className="project-card__body">
              <span className="project-card__tag">Em breve</span>
              <h3>Próximo projeto de Dados</h3>
              <p>Novos projetos de Analytics, BI e Dados entram aqui conforme forem concluídos na graduação.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="skills">
        <div className="section__head">
          <h2>Skills</h2>
          <span className="section__link section__link--static">Tecnologias e ferramentas</span>
        </div>

        <div className="skills-group">
          <div className="skills-group__head">
            <span className="skills-group__eyebrow">Dados &amp; IA</span>
            <h3>Foco principal</h3>
          </div>
          <div className="skills-grid">
            {dataSkills.map((skill) => {
              const Icon = skill.icon

              return (
                <article className="skill-card skill-card--primary" key={skill.name}>
                  <Icon className="skill-card__icon" style={{ color: skill.color }} aria-hidden="true" />
                  <h3>{skill.name}</h3>
                </article>
              )
            })}
          </div>
        </div>

        <div className="learning-skills">
          <div className="learning-skills__head">
            <span className="learning-skills__eyebrow">Em evolução</span>
            <h3>Aprendendo atualmente (Data Science / IA)</h3>
          </div>
          <div className="learning-skills__grid">
            {evolvingSkills.map((skill) => {
              const Icon = skill.icon

              return (
                <article className="skill-card skill-card--learning" key={skill.name}>
                  <Icon className="skill-card__icon" style={{ color: skill.color }} aria-hidden="true" />
                  <h4>{skill.name}</h4>
                </article>
              )
            })}
          </div>
        </div>

        <div className="learning-skills">
          <div className="learning-skills__head">
            <span className="learning-skills__eyebrow">Diferencial</span>
            <h3>Desenvolvimento de software</h3>
          </div>
          <div className="learning-skills__grid">
            {devSkills.map((skill) => {
              const Icon = skill.icon

              return (
                <article className="skill-card skill-card--learning" key={skill.name}>
                  <Icon className="skill-card__icon" style={{ color: skill.color }} aria-hidden="true" />
                  <h4>{skill.name}</h4>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section" id="formacao">
        <div className="section__head">
          <h2>Formação</h2>
          <span className="section__link section__link--static">Graduação em andamento</span>
        </div>
        <article className="formation-card">
          <div className="formation-card__icon">
            <FaGraduationCap aria-hidden="true" />
          </div>
          <div>
            <h3>Análise e Desenvolvimento de Sistemas</h3>
            <p className="formation-card__institution">Senac Portão — 2026–2028 (em andamento)</p>
            <p className="formation-card__description">
              Formação com disciplinas de banco de dados, modelagem de dados, Data Warehouse &amp; BI,
              programação em C++, design de interação (UX) e redes de computadores.
            </p>
          </div>
        </article>
      </section>

      <section className="section" id="cursos">
        <div className="section__head">
          <h2>Cursos em andamento</h2>
          <span className="section__link section__link--static">Senac Orango</span>
        </div>
        <div className="courses-grid">
          {courses.map((course) => (
            <article className="course-card" key={course.title}>
              <span className="course-card__status">● Em andamento</span>
              <h3>{course.title}</h3>
              <p className="course-card__institution">{course.institution}</p>
              <p className="course-card__area">{course.area}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="certificados">
        <div className="section__head">
          <h2>Certificados</h2>
          <span className="section__link section__link--static">Formação e especialização</span>
        </div>

        <div className="certificates" ref={certificatesRef}>
          {certificates.map((certificate, index) => {
            const Icon = certificate.icon

            return (
              <article
                className="certificate-card"
                data-reveal
                key={certificate.title}
                style={{ '--reveal-delay': `${index * 100}ms` }}
              >
                <div className="certificate-card__top">
                  <span className="certificate-card__year">{certificate.year}</span>
                  <span className="certificate-card__hours">{certificate.hours}</span>
                </div>

                <div className="certificate-card__icon" style={{ color: certificate.iconColor }}>
                  <Icon aria-hidden="true" />
                </div>

                <h3>{certificate.title}</h3>
                <p className="certificate-card__institution">{certificate.institution}</p>
                <p className="certificate-card__description">{certificate.description}</p>

                <a
                  className="certificate-card__button"
                  href={certificate.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visualizar certificado ${certificate.title}`}
                >
                  <FaFilePdf aria-hidden="true" />
                  Visualizar Certificado
                </a>
              </article>
            )
          })}
        </div>
      </section>

      <footer className="contact" id="contato">
        <div className="contact__main">
          <h2>Vamos trabalhar juntos</h2>
          <p>Aberto para vagas de estágio em Data Analytics, Data Science e áreas correlatas.</p>
          <a className="btn btn--primary" href="mailto:ytavinhoy@gmail.com">
            Enviar e-mail
          </a>
        </div>
        <ul className="contact__list">
          <li>
            <span>E-mail</span>
            <a href="mailto:ytavinhoy@gmail.com">ytavinhoy@gmail.com</a>
          </li>
          <li>
            <span>Telefone</span>
            <a href="tel:+5541995199695">(41) 99519-9695</a>
          </li>
          <li>
            <span>LinkedIn</span>
            <a href="https://www.linkedin.com/in/gustavo-costa-462b51376/" target="_blank" rel="noopener noreferrer">
              Gustavo Costa
            </a>
          </li>
          <li>
            <span>GitHub</span>
            <a href="https://github.com/Gustav0c-DEV" target="_blank" rel="noopener noreferrer">
              Gustav0c-DEV
            </a>
          </li>
          <li>
            <span>Local</span>
            <span>Curitiba, PR</span>
          </li>
        </ul>
      </footer>
    </>
  )
}

export default App
