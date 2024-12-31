import Bundle from './bundle'
import { build } from 'esbuild'
import { join } from 'path'

export default class Build {
  public bundle: Bundle

  constructor(public path: string) {
    this.bundle = new Bundle(this.path)    
  }

  async build () {
    const code = await build({
      entryPoints: ['src/index.ts'],
      outfile: '/dist/index.js',
      sourcemap: 'external',
      external:['/node_modules/*'],
      platform: 'node',
      target: 'ESNext',
      format: 'esm',
      tsconfig: join(process.cwd(), 'tsconfig.json'),
      bundle: true,
      minify: true,
      minifyIdentifiers: true,
      minifySyntax: true,
      minifyWhitespace: true,
      splitting: false,
      plugins: []
    })

    console.log(code)
  }
}