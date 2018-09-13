export class Addon {
  constructor(
  public npmid: string,
  public version: string,
  public hook: string,
  public face: string,
  public linkGit: string,
  public notes: string,
  public who: string,
  public what: string,
  public config ?: {multiple: number, form: any[]},
  public systemExclusive ?: string) { }
}
