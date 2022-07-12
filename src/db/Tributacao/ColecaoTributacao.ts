import Tributacao from "../../Core/Tributacao/Tributacao";
import http from "../../http-common";

export default interface TributacaoRepositorio {
  salvar(Tributacao: Tributacao): Promise<Tributacao>;
  obter(codigo: string): Promise<{}>;
  obterTodos(codigo: string): Promise<Tributacao[]>;
}
export default class ColecaoTributacao implements TributacaoRepositorio {
  async obterTodos(): Promise<Tributacao[]> {
    const Tributacaos: Tributacao[] = [];

    const req = await http.get("/tributacoes");
    req.data.data.map((prec: any) => {
      Tributacaos.push(Tributacao.Conversor(prec));
    });

    return Tributacaos;
  }
  async obter(codigo: string): Promise<{}> {
    const req = await http.get("/tributacoes/" + codigo);
    return req.data;
  }
}
