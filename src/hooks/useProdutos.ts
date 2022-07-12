import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { HIDE_LOADING, SHOW_LOADING } from "../Store/Actions/actionTypes";

import Produto from "../Core/Produto/Produto";
import Preco from "../Core/Preco/Preco";
import ColecaoProduto from "../db/Produto/ColecaoProduto";
import { useSelector } from "react-redux";

export default function useProdutos() {
  const repo = new ColecaoProduto();
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [produto, setProduto] = useState<Produto>(Produto.vazio);

  const dispatch = useDispatch();
  const mode = useSelector((state: any) => state.application.mode);
  const navigate = useNavigate();

  // ação para navegar para a pagina de produto
  const produtoSelecionado = (produto: Produto) => {
    navigate("/produtos/" + produto.codigo);
  };
  // obter todos os produtos
  function obterTodos() {
    dispatch({ type: SHOW_LOADING });
    repo.obterTodos().then((p) => {
      setProdutos(p);
      dispatch({ type: HIDE_LOADING });
    });
  }
  // obter produto
  async function obter(codigo: string) {
    dispatch({ type: SHOW_LOADING });
    repo.obter(codigo).then((p) => {
      setProduto(p);

      dispatch({ type: HIDE_LOADING });
    });
  }

  async function salvarProduto(produto: Produto) {
    dispatch({ type: SHOW_LOADING });
    if (mode === "MODE_INSERT") {
      await repo.inserir(produto).then(() => {
        navigate("/produtos/");
        dispatch({ type: HIDE_LOADING });
      });
    } else {
      await repo.salvar(produto);
      navigate("/produtos/");
      dispatch({ type: HIDE_LOADING });
    }
  }

  return {
    produtos,
    produto,
    setProduto,
    produtoSelecionado,
    salvarProduto,
    obter,
    obterTodos,
  };
}
