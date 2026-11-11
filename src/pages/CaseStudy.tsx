import { Link, useParams } from 'react-router-dom'
import { FilingExplorer } from '../components/FilingExplorer'
import { ProjectImage, ProjectMedia, QuoteGuardResults } from '../components/ProjectMedia'
import { ProjectLinks } from '../components/ProjectLinks'
import { projects } from '../data/projects'

export default function CaseStudy() {
  const { slug } = useParams()
  const project = projects.find(item => item.slug === slug)
  if (!project) return <section className="wrap section"><h1>Case study unavailable</h1><Link to="/#work">Back to selected work</Link></section>

  const next = projects[(projects.indexOf(project) + 1) % projects.length]
  return <article>
    <header className="case-header"><div className="wrap">
      <Link className="text-link" to="/#work"><span aria-hidden="true">←</span> Selected work</Link>
      <p className="kicker">{project.category}</p>
      <h1>{project.name}</h1>
      <p className="lede">{project.summary}</p>
      <p className="stack">{project.stack}</p>
      <ProjectLinks project={project} />
      {project.slug === 'finn' && <a className="text-link case-explorer-link" href="#filing-explorer">Try the filing explorer <span aria-hidden="true">↓</span></a>}
    </div></header>
    <div className={'wrap case-layout case-layout-' + project.slug}>
      {project.slug === 'quoteguard' && <QuoteGuardResults />}
      <ProjectMedia project={project} />
      <div className="case-copy">{project.slug === 'finn' && <section><h2>Try the live brief</h2><p>Choose a company in The Brief, open an item with Review evidence, and follow the original filing. Check the cutoff shown above the feed.</p><a className="text-link" href="https://github.com/Vvishesh23/finn-backend/blob/main/ARCHITECTURE.md">Architecture and ownership notes</a></section>}{project.sections.map(section => <section key={section.title}><h2>{section.title}</h2><p>{section.body}</p></section>)}</div>
      {project.gallery && <div className="gallery">{project.gallery.map(image => <ProjectImage key={image.name} image={image} />)}</div>}
      {project.slug === 'finn' && <FilingExplorer />}
      <div className="next-case"><Link className="action" to={'/work/' + next.slug}>Next project · {next.name} <span aria-hidden="true">→</span></Link></div>
    </div>
  </article>
}
