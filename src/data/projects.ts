import type { Project } from '../types/project'

export const github = 'https://github.com/Vvishesh23'
export const linkedin = 'https://www.linkedin.com/in/vishesh-vishwakarma/'

export const projects: Project[] = [
  {
    slug: 'finn',
    name: 'FINN',
    category: 'Product interface',
    summary: 'Read Indian equity disclosures, narrow the brief, and follow each item back to its filing.',
    stack: 'JavaScript · HTML · CSS · FastAPI',
    features: ['Company, category and date filters for the disclosure brief', 'Evidence views with original filing links and source status', 'Research results scoped to issuer, fiscal period and reporting basis'],
    links: [
      { label: 'Live demo', href: 'https://finn-frontend-six.vercel.app/' },
      { label: 'Frontend source', href: github + '/finn-frontend' },
      { label: 'Backend source', href: github + '/finn-backend' },
    ],
    sections: [
      { title: 'The problem', body: 'Exchange announcements are plentiful and uneven in detail. FINN gives a reader a brief to scan, a way to narrow it, and a path back to the filing before drawing a conclusion.' },
      { title: 'Contribution', body: 'I defined the evidence-first brief: show dated observations, link to the filing and disclose data gaps. I also chose deterministic financial comparisons and bounded AI interpretation. Implementation used coding-agent assistance, recorded in the project’s build history.' },
      { title: 'How it works', body: 'A vanilla JavaScript frontend requests the brief and alerts from FastAPI. Date windows, issuer and category filters control the brief. The separate research flow resolves reporting periods and basis against a bounded corpus. Arithmetic is deterministic, with optional server-side Gemini interpretation over selected passages.' },
      { title: 'Interface decisions', body: 'The brief shows a filing cutoff, an end-of-day date and source availability alongside the results. Short summaries make the feed scannable while the evidence view keeps filing links and details available. The interface has loading and request failure states. Responsive CSS reflows the controls and panels for narrower screens.' },
      { title: 'Tradeoffs and limits', body: 'The challenging part is showing partial data without implying completeness. Rule-based review priorities, missing price series and unresolved evidence are labelled separately. The research corpus covers 11 issuers, mainly FY25/FY24. The live brief observed on 11 November 2026 showed a 3 November filing cutoff and 2 November end-of-day data. Refresh is owner-operated, so consult the dates shown in the app.' },
    ],
  },
  {
    slug: 'ocrflow',
    name: 'OCRFlow',
    category: 'Asynchronous processing',
    summary: 'Upload an image and follow the OCR job from the queue to the extracted text.',
    stack: 'JavaScript · FastAPI · Redis · RQ · Tesseract',
    features: ['Drag-and-drop or file picker with image preview', 'Queued, processing, completed and failed task states', 'Extracted text and task metadata in the result view'],
    links: [{ label: 'Source', href: github + '/ocrflow' }],
    image: { name: 'ocrflow', width: 983, height: 1100, alt: 'OCRFlow demo displaying completed job metadata and extracted text beneath the upload area.', caption: 'OCRFlow demo · completed extraction' },
    gallery: [
      { name: 'ocrflow-upload', width: 1018, height: 1100, alt: 'OCRFlow upload screen with drop zone and file input.', caption: 'OCRFlow demo · image upload' },
      { name: 'ocrflow-queued', width: 1035, height: 1100, alt: 'OCRFlow showing an uploaded image and the queued task state.', caption: 'OCRFlow demo · queued task' },
    ],
    sections: [
      { title: 'The problem', body: 'OCR can take longer than an ordinary request. The interface needs to confirm that an upload became a job and show whether the job is waiting, running, complete or failed.' },
      { title: 'Contribution', body: 'I built the OCR pipeline as a self-directed project, including preprocessing, inference and post-processing. I added automated tests and a reproducible Docker Compose workflow. The browser demo makes the worker lifecycle visible.' },
      { title: 'How it works', body: 'The FastAPI endpoint validates the image, stores its bytes in Redis and returns a task ID after enqueueing. An RQ worker performs OCR through a pluggable engine. The browser polls for task status and stops on completion or failure.' },
      { title: 'Interface decisions', body: 'The demo previews the selected image and shows file metadata before submission. After enqueueing, the task ID remains visible as the state changes. At 640px and below, the CSS reduces padding and adjusts the status and result layout.' },
      { title: 'Tradeoffs and limits', body: 'Interval polling keeps the client simple, but slow requests can overlap. The demo accepts PNG and JPEG, and accuracy depends on the image and OCR engine. The repository includes API, worker, validation and repository tests, and CI enforces a 90% app coverage floor.' },
    ],
  },

  {
    slug: 'quoteguard',
    name: 'QuoteGuard',
    category: 'Crypto market research',
    summary: 'A reproducible study of whether BTCUSDT quote and trade activity predicts the next midprice move.',
    stack: 'Python · WebSocket · NumPy · Matplotlib',
    features: ['Recorded public Binance Spot quotes and trades', 'Froze the model before evaluating a later session', 'Published errors, sample counts and quality diagnostics'],
    links: [
      { label: 'Source', href: github + '/quoteguard' },
      { label: 'Research report', href: github + '/quoteguard/blob/b324733/reports/frozen-holdout/holdout.md' },
    ],
    image: { name: 'quoteguard', width: 1600, height: 1108, alt: 'QuoteGuard’s published frozen holdout plot. The combined model has higher RMSE than the zero-return baseline at one and five seconds.', caption: 'Original research plot · frozen BTCUSDT holdout' },
    sections: [
      { title: 'The question', body: 'Do changes at the best bid and ask, together with aggressive trades, help forecast the BTCUSDT midprice one or five seconds ahead?' },
      { title: 'Contribution', body: 'I publish the collector, evaluation pipeline, frozen model and aggregate reports in the QuoteGuard repository. The public checkout includes a synthetic fixture for running the workflow offline.' },
      { title: 'How the test works', body: 'The Python collector records public Binance Spot quote and trade messages with receipt times. Feature scaling and model coefficients are frozen before a later recording. The evaluation rejects overlapping recordings and compares forecasts with simple baselines.' },
      { title: 'What the results show', body: 'The frozen combined model had higher RMSE than the zero-return baseline at both horizons. At one second, a 93.33% directional hit rate counted only the 90 nonflat targets out of 597. The portfolio presents the baseline, errors and sample size together so the subset result can be read in context.' },
      { title: 'Limits', body: 'The recordings are from the same day. The result cannot establish performance across independent days or after fees. Raw exchange recordings are excluded from the public repository; the aggregate reports, model and synthetic workflow are included.' },
    ],
  },
]
