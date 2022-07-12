import Preco from "../../Core/Preco/Preco";
import http from "../../http-common";

export default interface PrecoRepositorio {
  salvar(preco: Preco): Promise<Preco>;
  obter(preco: Preco): Promise<Preco>;
  obterTodos(codigo: string): Promise<Preco[]>;
}
export default class ColecaoPreco implements PrecoRepositorio {
  async salvar(preco: Preco): Promise<Preco> {
    const req = await http.patch(
      "/produtos/" + preco.id + "/precos/" + preco.id,
      Preco.ConversorToObj(preco)
    );
    return preco;
  }
  async obter(preco: Preco): Promise<Preco> {
    const req = await http.get("/produtos/" + preco.id + "/precos/" + preco.id);

    return Preco.Conversor(req.data.data);
  }
  async obterTodos(codigo: string): Promise<Preco[]> {
    const precos: Preco[] = [];

    const req = await http.get("/produtos/" + codigo + "/precos");
    req.data.data.map((prec: any) => {
      precos.push(Preco.Conversor(prec));
    });

    return precos;
  }
}
