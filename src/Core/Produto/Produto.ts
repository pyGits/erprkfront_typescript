import PrecosTab from "../../Pages/Produto/Tabs/PrecosTab";
import Preco from "../Preco/Preco";

export default class Produto {
  #tenant_id: string;
  #codigo: string;
  #nome: string;
  #secao: string;
  #grupo: string;
  #subgrupo: string;
  #composicao: string;
  #formavenda: string;
  #unidade: string;
  #tributacao: string;
  #ncm: string;
  #cest: string;
  #piscofins: string;
  #precos: Preco[];

  constructor(
    tenant_id: string,
    codigo: string,
    nome: string,
    secao: string,
    grupo: string,
    subgrupo: string,
    composicao: string,
    formavenda: string,
    unidade: string,
    tributacao: string,
    ncm: string,
    cest: string,
    piscofins: string,
    precos: Preco[]
  ) {
    this.#tenant_id = tenant_id;
    this.#codigo = codigo;
    this.#nome = nome;
    this.#secao = secao;
    this.#grupo = grupo;
    this.#subgrupo = subgrupo;
    this.#composicao = composicao;
    this.#formavenda = formavenda;
    this.#unidade = unidade;
    this.#tributacao = tributacao;
    this.#ncm = ncm;
    this.#cest = cest;
    this.#piscofins = piscofins;
    this.#precos = precos;
  }

  // converter objeto para produto
  static Conversor(d: any): any {
    return new Produto(
      "555",
      d.codigo,
      d.nome,
      d.secao,
      d.grupo,
      d.subgrupo,
      d.composicao,
      d.formavenda,
      d.unidade,
      d.tributacao,
      d.ncm,
      d.cest,
      d.piscofins,
      d.precos
    );
  }
  // converter produto para objeto
  static ConversorToObj(p: Produto): any {
    var precos1: any = [];
    p.precos.map((p) => {
      precos1.push(Preco.ConversorToObj(p));
    });
    const produto = {
      tenant_id: "555",
      codigo: p.codigo,
      nome: p.nome,
      secao: p.secao,
      grupo: p.grupo,
      subgrupo: p.subgrupo,
      composicao: p.composicao,
      formavenda: p.formavenda,
      unidade: p.unidade,
      tributacao: p.tributacao,
      ncm: p.ncm,
      cest: p.cest,
      piscofins: p.piscofins,

      precos: precos1,
    };

    return produto;
  }

  static vazio() {
    return new Produto(
      "555",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      []
    );
  }

  get tenantId() {
    return this.#tenant_id;
  }
  set tenantId(value: string) {
    this.#tenant_id = value;
  }
  get precos() {
    return this.#precos;
  }
  set precos(value: Preco[]) {
    this.#precos = value;
  }

  get codigo() {
    return this.#codigo;
  }
  set codigo(value: string) {
    this.#codigo = value;
  }

  get nome() {
    return this.#nome;
  }
  set nome(value: string) {
    this.#nome = value.toUpperCase();
  }
  get secao() {
    return this.#secao;
  }
  set secao(value: string) {
    this.#secao = value;
  }
  get grupo() {
    return this.#grupo;
  }
  set grupo(value: string) {
    this.#grupo = value;
  }
  get subgrupo() {
    return this.#subgrupo;
  }
  set subgrupo(value: string) {
    this.#subgrupo = value;
  }
  get composicao() {
    return this.#composicao;
  }
  set composicao(value: string) {
    this.#composicao = value;
  }
  get formavenda() {
    return this.#formavenda;
  }
  set formavenda(value: string) {
    this.#formavenda = value;
  }
  get unidade() {
    return this.#unidade;
  }
  set unidade(value: string) {
    this.#unidade = value;
  }
  get tributacao() {
    return this.#tributacao;
  }
  set tributacao(value: string) {
    this.#tributacao = value;
  }
  get ncm() {
    return this.#ncm;
  }
  set ncm(value: string) {
    this.#ncm = value;
  }
  get cest() {
    return this.#cest;
  }
  set cest(value: string) {
    this.#cest = value;
  }
  get piscofins() {
    return this.#piscofins;
  }
  set piscofins(value: string) {
    this.#piscofins = value;
  }
}
