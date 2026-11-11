import { Link } from 'react-router-dom'
import type { Project } from '../types/project'

export function ProjectLinks({ project, includeCase = false }: { project: Project; includeCase?: boolean }) {
  return <div className="links">
    {includeCase && <Link className="action" to={'/work/' + project.slug} aria-label={'View case study for ' + project.name}>View case study <span aria-hidden="true">→</span></Link>}
    {project.links.map(link => <a className="text-link" href={link.href} key={link.href} aria-label={link.label + ' for ' + project.name}>{link.label} <span className="external-arrow" aria-hidden="true" /></a>)}
  </div>
}
