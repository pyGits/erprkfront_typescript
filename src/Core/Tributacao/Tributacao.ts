export default class Tributacao {
  #tenant_id: string;
  #id: number;
  #codigo: string;
  #tributacao: string;
  #icms: number;
  #cfop: number;
  #csosn: number;

  constructor(
    tenant_id: string,
    id: number,
    codigo: string,
    tributacao: string,
    icms: number,
    cfop: number,
    csosn: number
  ) {
    this.#tenant_id = tenant_id;
    this.#id = id;
    this.#codigo = codigo;
    this.#tributacao = tributacao;
    this.#icms = icms;
    this.#cfop = cfop;
    this.#csosn = csosn;
  }
  static Conversor(d: any): Tributacao {
    return new Tributacao(
      d.tenant_id,
      d.id,
      d.codigo,
      d.tributacao,
      d.icms,
      d.cfop,
      d.csosn
    );
  }
  // converter produto para objeto
  static ConversorToObj(p: Tributacao): any {
    const tributacao = {
      tenant_id: p.tenant_id,
      id: p.id,
      codigo: p.codigo,
      tributacao: p.tributacao,
      icms: p.icms,
      cfop: p.cfop,
      csosn: p.csosn,
    };
    return tributacao;
  }
  static vazio() {
    return new Tributacao("", 0, "", "", 0, 0, 0);
  }
  get tenant_id(): string {
    return this.#tenant_id;
  }
  set tenant_id(value: string) {
    this.#tenant_id = value;
  }
  get id(): number {
    return this.#id;
  }
  set id(value: number) {
    this.#id = value;
  }
  get codigo(): string {
    return this.#codigo;
  }
  set codigo(value: string) {
    this.#codigo = value.toUpperCase();
  }
  get tributacao(): string {
    return this.#tributacao;
  }
  set tributacao(value: string) {
    this.#tributacao = value;
  }
  get icms(): number {
    return this.#icms;
  }
  set icms(value: number) {
    this.#icms = value;
  }
  get cfop(): number {
    return this.#cfop;
  }
  set cfop(value: number) {
    this.#cfop = value;
  }
  get csosn(): number {
    return this.#csosn;
  }
  set csosn(value: number) {
    this.#csosn = value;
  }
}
