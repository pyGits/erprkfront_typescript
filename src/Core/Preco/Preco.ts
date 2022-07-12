import Loja from "../Loja/Loja";

export default class Preco {
  #tenant_id: string;
  #id: number;
  #loja: number;
  #preco: number;
  #custo: number;
  #margem: number;
  #lojas: Loja;

  constructor(
    tenant_id: string,
    id: number,
    loja: number,
    preco: number,
    custo: number,
    margem: number,
    lojas: Loja
  ) {
    this.#tenant_id = tenant_id;
    this.#id = id;
    this.#loja = loja;
    this.#preco = preco;
    this.#custo = custo;
    this.#margem = margem;
    this.#lojas = lojas;
  }
  static Conversor(d: any): any {
    return new Preco(
      d.tenant_id,
      d.id,
      d.loja,
      d.preco,
      d.custo,
      d.margem,
      d.lojas
    );
  }
  // converter produto para objeto
  static ConversorToObj(p: Preco): any {
    const preco = {
      tenant_id: p.tenant_id,
      id: p.id,
      loja: p.loja,
      preco: p.preco,
      custo: p.custo,
      margem: p.margem,
      lojas: p.lojas,
    };
    return preco;
  }
  static vazio() {
    return new Preco("555", 0, 0, 0, 0, 0, Loja.vazio());
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
  get loja(): number {
    return this.#loja;
  }

  public setLoja(loja: number): void {
    this.#loja = loja;
  }

  get preco(): number {
    return this.#preco;
  }

  set preco(value: number) {
    this.#preco = value;
  }

  get custo(): number {
    return this.#custo;
  }
  set custo(value: number) {
    this.#custo = value;
  }

  get margem(): number {
    return this.#margem;
  }
  set margem(value: number) {
    this.#margem = value;
  }

  get lojas(): Loja {
    return this.#lojas;
  }
}
