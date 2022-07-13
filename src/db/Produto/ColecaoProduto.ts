import Produto from "../../Core/Produto/Produto";
import http from "../../http-common";

export default interface ProdutoRepositorio {
  salvar(produto: Produto): Promise<Produto>;
  inserir(produto: Produto): Promise<Produto>;
  obter(codigo: string): Promise<Produto>;
  obterTodos(): Promise<Produto[]>;
}

export default class ColecaoProduto implements ProdutoRepositorio {
  async obter(codigo: string): Promise<Produto> {
    const req = await http.get("/produtos/" + codigo);

    return Produto.Conversor(req.data.data);
  }

  async salvar(produto: Produto): Promise<Produto> {
    const req = await http.patch(
      "/produtos/" + produto.codigo,
      Produto.ConversorToObj(produto)
    );

    return produto;
  }
  async inserir(produto: Produto): Promise<Produto> {
    await http.post("/produtos", Produto.ConversorToObj(produto));

    return produto;
  }

  async obterTodos(): Promise<Produto[]> {
    const produtos: Produto[] = [];

    const req = await http.get("/produtos");
    req.data.data.map((prod: any) => {
      produtos.push(Produto.Conversor(prod));
    });

    return produtos;
  }
}
