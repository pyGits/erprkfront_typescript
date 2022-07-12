export default class Loja {
  #tenant_id: string;
  #id: number;
  #cnpj: string;
  #loja: string;

  constructor(tenant_id: string, id: number, cnpj: string, loja: string) {
    this.#tenant_id = tenant_id;
    this.#id = id;
    this.#cnpj = cnpj;
    this.#loja = loja;
  }
  static vazio() {
    return new Loja("", 0, "", "");
  }

  get tenant_id() {
    return this.#tenant_id;
  }
  set tenantId(value: string) {
    this.#tenant_id = value;
  }
  get id() {
    return this.#id;
  }
  set id(value: number) {
    this.#id = value;
  }
  get cnpj() {
    return this.#cnpj;
  }
  set cnpj(value: string) {
    this.#cnpj = value;
  }
  get loja() {
    return this.#loja;
  }
  set loja(value: string) {
    this.#loja = value;
  }
}
