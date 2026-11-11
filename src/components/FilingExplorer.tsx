import { useSearchParams } from 'react-router-dom'
import { filings } from '../data/filings'

const issuers = [...new Set(filings.map(filing => filing.issuer))].sort()
const categories = [...new Set(filings.map(filing => filing.category))].sort()
const date = new Intl.DateTimeFormat('en-IN', { dateStyle: 'medium', timeZone: 'Asia/Kolkata' })
const orderedFilings = [...filings].sort((a, b) => b.published.localeCompare(a.published))

export function FilingExplorer() {
  const [params, setParams] = useSearchParams()
  const issuer = issuers.find(item => item === params.get('issuer')) ?? ''
  const category = categories.find(item => item === params.get('category')) ?? ''
  const results = orderedFilings.filter(item => (!issuer || item.issuer === issuer) && (!category || item.category === category))

  function updateFilter(key: 'issuer' | 'category', value: string) {
    const next = new URLSearchParams(params)
    if (value) next.set(key, value)
    else next.delete(key)
    setParams(next, { replace: true, preventScrollReset: true })
  }

  function resetFilters() {
    setParams({}, { replace: true, preventScrollReset: true })
  }

  return <section id="filing-explorer" className="filing-explorer" aria-labelledby="explorer-title">
    <div className="explorer-heading">
      <p className="kicker">React + TypeScript demo</p>
      <h2 id="explorer-title">Explore a filing snapshot</h2>
      <p>Filter a small sample from FINN’s bundled September–October 2026 data, then open the original NSE filing. The URL saves your filters.</p>
    </div>
    <div className="explorer-controls">
      <label>Company<select value={issuer} onChange={event => updateFilter('issuer', event.target.value)}><option value="">All companies</option>{issuers.map(item => <option key={item}>{item}</option>)}</select></label>
      <label>Filing category<select value={category} onChange={event => updateFilter('category', event.target.value)}><option value="">All categories</option>{categories.map(item => <option key={item}>{item}</option>)}</select></label>
      <button className="action" type="button" onClick={resetFilters} disabled={!issuer && !category}>Clear filters</button>
    </div>
    <p className="explorer-count" role="status">{results.length} {results.length === 1 ? 'filing' : 'filings'}</p>
    {results.length ? <ul className="filing-results">{results.map(item => <li key={item.id}>
      <div><p className="filing-meta">{item.issuer} · {item.category} · <time dateTime={item.published}>{date.format(new Date(item.published))}</time></p><p>{item.title}</p></div>
      <a className="text-link" href={item.url} aria-label={'Original NSE filing: ' + item.title}>Original filing <span className="external-arrow" aria-hidden="true" /></a>
    </li>)}</ul> : <p className="explorer-empty">No filings match those filters. Choose another company or category, or clear the filters.</p>}
  </section>
}
