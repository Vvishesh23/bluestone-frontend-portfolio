import { lazy, Suspense, useEffect, useRef } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import { resume } from './data/paths'
import { github, projects } from './data/projects'
import './styles/site.css'

const CaseStudy = lazy(() => import('./pages/CaseStudy'))
const sections = ['Work', 'Approach', 'About', 'Contact']

function App() {
  const location = useLocation()
  const pathname = location.pathname.replace(/\/+$/, '') || '/'
  const { hash } = location
  const main = useRef<HTMLElement>(null)
  const previousPath = useRef(pathname)

  useEffect(() => {
    const project = projects.find(item => pathname === '/work/' + item.slug)
    document.title = project ? project.name + ' | Vishesh' : pathname === '/' ? 'Vishesh | Frontend Engineering' : 'Page unavailable | Vishesh'
    document.querySelector('meta[name="description"]')?.setAttribute('content', project?.summary ?? "Vishesh’s frontend portfolio, with case studies on financial research, asynchronous OCR, and crypto market research.")

    const routeChanged = previousPath.current !== pathname
    previousPath.current = pathname
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target && (routeChanged || hash !== '#main')) target.scrollIntoView({ behavior: 'instant' })
      if (routeChanged) {
        target?.setAttribute('tabindex', '-1')
        target?.focus({ preventScroll: true })
      }
    } else if (routeChanged) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      main.current?.focus({ preventScroll: true })
    }
  }, [pathname, hash])

  return <>
    <a className="skip" href="#main">Skip to content</a>
    <header className="site-header"><div className="wrap header-inner">
      <Link to="/" className="brand" aria-label="Vishesh Vishwakarma home">Vishesh<span>.</span></Link>
      <nav aria-label="Main navigation">{sections.map(label => pathname === '/' ? <a key={label} href={'#' + label.toLowerCase()}>{label}</a> : <Link key={label} to={'/#' + label.toLowerCase()}>{label}</Link>)}<a href={resume}>Résumé</a></nav>
    </div></header>
    <main id="main" ref={main} tabIndex={-1}>
      <Suspense fallback={<p className="wrap section" role="status">Loading case study…</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="*" element={<section className="wrap section"><h1>Page unavailable</h1><Link to="/">Return to the portfolio</Link></section>} />
        </Routes>
      </Suspense>
    </main>
    <footer className="site-footer"><div className="wrap footer-inner"><span>Vishesh · Independent portfolio</span><a className="text-link" href={github}>GitHub <span className="external-arrow" aria-hidden="true" /></a></div></footer>
  </>
}

createRoot(document.getElementById('root')!).render(<BrowserRouter basename={import.meta.env.BASE_URL}><App /></BrowserRouter>)
