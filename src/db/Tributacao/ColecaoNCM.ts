import NCM from "../../Core/Tributacao/NCM";
import http from "../../http-common";

export default interface NCMRepositorio {
  obter(codigo: string): Promise<{}>;
  obterTodos(codigo: string): Promise<NCM[]>;
}
export default class ColecaoNCM implements NCMRepositorio {
  async obterTodos(): Promise<NCM[]> {
    const NCMs: NCM[] = [];

    const req = await http.get("/ncms");
    req.data.data.map((prec: any) => {
      NCMs.push(NCM.Conversor(prec));
    });

    return NCMs;
  }
  async obter(codigo: string): Promise<{}> {
    const req = await http.get("/ncms/" + codigo);
    return req.data;
  }
}
