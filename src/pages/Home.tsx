import { Link } from 'react-router-dom'
import { ProjectMedia, QuoteGuardResults } from '../components/ProjectMedia'
import { ProjectLinks } from '../components/ProjectLinks'
import { resume } from '../data/paths'
import { github, linkedin, projects } from '../data/projects'

const principles = [
  ['Keep the source close.', 'A brief is easier to trust when the date, scope, and original filing are one step away.'],
  ['Give waiting a state.', 'Show when a job has been accepted, when it is running, and what someone can do if it fails.'],
  ['Put results in context.', 'Show the baseline and sample size beside an error rate. Keep the evidence readable on a small screen.'],
]

export default function Home() {
  return <>
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="kicker hero-kicker">Vishesh Vishwakarma / Frontend engineering</p>
          <h1>Interfaces for<br /><em>complex data.</em></h1>
          <p className="lede">I build tools that make filings easier to read, background jobs easier to follow, and research results easier to interpret.</p>
          <div className="links hero-links">
            <a className="action light" href="#work">Explore selected work <span aria-hidden="true">↓</span></a>
            <a className="text-link" href={github}>GitHub <span className="external-arrow" aria-hidden="true" /></a>
          </div>
        </div>
        <nav className="hero-index" aria-label="Project index">
          {projects.map(project => <Link to={'/work/' + project.slug} key={project.slug}>
            <span><small>{project.category}</small><strong>{project.name}</strong></span>
            <span aria-hidden="true">→</span>
          </Link>)}
        </nav>
      </div>
    </section>
    <section className="wrap section work" id="work" aria-labelledby="work-title">
      <div className="section-heading"><h2 id="work-title">Selected work</h2></div>
      <div className="project-grid">
        {projects.map(project => <article className={'project project-' + project.slug} key={project.slug}>
          <div className="project-copy">
            <p className="kicker">{project.category}</p>
            <h3>{project.name}</h3>
            <p className="project-summary">{project.summary}</p>
            <p className="stack">{project.stack}</p>
            <ul>{project.features.map(feature => <li key={feature}>{feature}</li>)}</ul>
            <ProjectLinks project={project} includeCase />
          </div>
          {project.slug === 'quoteguard' ? <QuoteGuardResults /> : <ProjectMedia project={project} />}
        </article>)}
      </div>
    </section>
    <section className="approach section" id="approach" aria-labelledby="approach-title">
      <div className="wrap">
        <h2 id="approach-title">Approach</h2>
        <div className="principles">{principles.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div>
      </div>
    </section>
    <section className="wrap section about" id="about" aria-labelledby="about-title">
      <div><h2 id="about-title">About Vishesh</h2><p className="about-intro">I’m a fourth-year Chemical Engineering undergraduate at IIT Kanpur (B.Tech, 2023–2027). My experience in quantitative research informs how I build interfaces for data, especially when sources, dates and uncertainty matter.</p><a className="text-link about-resume" href={resume}>View résumé (PDF) <span className="external-arrow" aria-hidden="true" /></a></div>
      <dl className="skills">
        <div><dt>Frontend</dt><dd>JavaScript, HTML, CSS, responsive layouts, React and TypeScript</dd></div>
        <div><dt>API integration</dt><dd>Python, FastAPI, REST, Redis and background jobs</dd></div>
        <div><dt>Delivery and quality</dt><dd>Git, Vite, Vercel, pytest and GitHub Actions</dd></div>
      </dl>
    </section>
    <section className="wrap background-section" aria-labelledby="background-title">
      <h2 id="background-title">Experience &amp; recognition</h2>
      <div className="background-grid">
        <div><h3>Experience</h3><dl>
          <div><dt>Frontend Development Intern · Pyshpere</dt><dd>Apr–Sep 2024 · Built the Sonoflux frontend with Next.js and collaborated with the team using Jira and GitHub.</dd></div>
          <div><dt>Machine Learning Intern · Quant Singularity</dt><dd>Jun–Aug 2026 · Built components for backtesting, feature lineage, and repeatable experiments.</dd></div>
          <div><dt>Quantitative Research Intern · BeyondIRR</dt><dd>May–Jul 2025 · Researched equity strategies and improved database-fetch latency through caching.</dd></div>
        </dl></div>
        <div><h3>Recognition</h3><dl>
          <div><dt>WorldQuant BRAIN Grandmaster</dt><dd>Global rank 30 · Q4 2024</dd></div>
          <div><dt>Alphaverse Premier League · AlphaGrep</dt><dd>Global rank 24</dd></div>
        </dl></div>
      </div>
    </section>
    <section className="contact section" id="contact" aria-labelledby="contact-title">
      <div className="wrap contact-grid"><h2 id="contact-title">Contact</h2><div className="links"><a className="action light" href={linkedin}>Connect on LinkedIn <span className="external-arrow" aria-hidden="true" /></a><a className="text-link" href={github}>GitHub <span className="external-arrow" aria-hidden="true" /></a></div></div>
    </section>
  </>
}
