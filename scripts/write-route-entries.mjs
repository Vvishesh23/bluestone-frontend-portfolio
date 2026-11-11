import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { projects } from '../src/data/projects.ts'

const shell = await readFile('dist/index.html', 'utf8')

for (const { slug, name, summary } of projects) {
  const title = name + ' | Vishesh'
  const html = shell
    .replace(/<title>[^<]+<\/title>/, '<title>' + title + '</title>')
    .replace(/(<meta property="og:title" content=")[^"]+/, '$1' + title)
    .replace(/(<meta (?:name="description"|property="og:description") content=")[^"]+/g, '$1' + summary)
  const directory = 'dist/work/' + slug
  await mkdir(directory, { recursive: true })
  await writeFile(directory + '/index.html', html)
}

await writeFile('dist/404.html', shell.replace(/<title>[^<]+<\/title>/, '<title>Page unavailable | Vishesh</title>'))
