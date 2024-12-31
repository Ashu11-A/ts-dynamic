import { glob } from 'glob'

export default class Bundle {
  public readonly files: string[]
  public readonly scheme: string

  constructor (public readonly path: string) {
    this.files = this.getFiles()
    this.scheme = this.getScheme()
  }

  getFiles() {
    const files: string[] = []
    const glob = new glob(this.path)
        
    for (const file of glob.scanSync()) {
      files.push(file)
      console.log(file)
    }

    return files
  }

  getScheme() {
    let code: string = ''

    for (const file of this.files) {
      code += `import '${file}'\n`
    }

    return code
  }
}