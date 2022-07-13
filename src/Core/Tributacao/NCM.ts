export default class NCM {
  private codigo: string;
  private descricao: string;
  private aliquota: number;

  constructor(codigo: string, descricao: string, aliquota: number) {
    this.codigo = codigo;
    this.descricao = descricao;
    this.aliquota = aliquota;
  }
  static Conversor(d: any): NCM {
    return new NCM(d.codigo, d.descricao, d.aliquota);
  }
  // converter produto para objeto
  static ConversorToObj(p: NCM): any {
    const tributacao = {
      codigo: p.codigo,
      descricao: p.descricao,
      aliquota: p.aliquota,
    };
    return tributacao;
  }
  static vazio() {
    return new NCM("", "", 0);
  }

  public getCodigo(): string {
    return this.codigo;
  }

  public setCodigo(codigo: string): void {
    this.codigo = codigo;
  }

  public getDescricao(): string {
    return this.descricao;
  }

  public setDescricao(descricao: string): void {
    this.descricao = descricao;
  }

  public getAliquota(): number {
    return this.aliquota;
  }

  public setAliquota(aliquota: number): void {
    this.aliquota = aliquota;
  }
}
