import type { ImageAsset, Project } from '../types/project'

export function ProjectImage({ image }: { image: ImageAsset }) {
  return <figure className={'media screenshot media-' + image.name}>
    <div className="image-frame">
      <img src={import.meta.env.BASE_URL + 'projects/' + image.name + '.webp'} alt={image.alt} width={image.width} height={image.height} loading="lazy" decoding="async" />
    </div>
    <figcaption>{image.caption}</figcaption>
  </figure>
}

export function QuoteGuardResults() {
  return <figure className="media result-media">
    <div className="result-sheet">
      <table>
        <caption>Forecast error <span>RMSE, basis points · lower is better</span></caption>
        <thead><tr><th scope="col">Horizon</th><th scope="col">Zero return</th><th scope="col">Frozen model</th></tr></thead>
        <tbody>
          <tr><th scope="row">1 second</th><td>0.260491</td><td>0.269235</td></tr>
          <tr><th scope="row">5 seconds</th><td>0.716083</td><td>0.738618</td></tr>
        </tbody>
      </table>
    </div>
    <figcaption>BTCUSDT · later-session holdout</figcaption>
  </figure>
}

export function ProjectMedia({ project }: { project: Project }) {
  if (project.image) return <ProjectImage image={project.image} />

  return <figure className="media diagram diagram-finn">
    <div className="diagram-body">
      <ol className="evidence-path">
        <li><strong>Disclosure brief</strong><span>Issuer · category · date window</span></li>
        <li><strong>Evidence view</strong><span>Filing details · source status</span></li>
        <li><strong>Original filing</strong><span>Exchange document</span></li>
      </ol>
    </div>
    <figcaption>FINN · filing workflow schematic</figcaption>
  </figure>
}
