import LibraryInterface from './LibraryInterface'
import { Expose } from 'class-transformer'

export default class Library implements LibraryInterface {
  @Expose() id = 0
  @Expose() name = ''
  @Expose() url = ''
  @Expose() owner: any = {}
  @Expose() forks = 0
  @Expose() open_issues = 0
  @Expose() watchers = 0

  get owner_name () {
    return this.owner?.login
  }

  get link (): string {
    return this.url.replace('api.', '').replace('/repos', '')
  }

  get table_values (): Array<string | number> {
    return [this.name, this.link, this.owner_name, this.forks, this.open_issues, this.watchers]
  }

  get table_columns (): string[] {
    return ['name', 'url', 'owner', 'forks', 'open_issues', 'watchers']
  }

  constructor (data: Partial<Library> = {}) {
    Object.assign(this, data)
  }
}
