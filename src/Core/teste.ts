export default class Teste {
  private teste: string;
  private borges: string;

  constructor(teste: string, borges: string) {
    this.teste = teste;
    this.borges = borges;
  }

  public getBorges(): string {
    return this.borges;
  }

  public setBorges(borges: string): void {
    this.borges = borges.toUpperCase();
  }
  public getTeste(): string {
    return this.teste;
  }

  public setTeste(teste: string): void {
    this.teste = teste;
  }
}
