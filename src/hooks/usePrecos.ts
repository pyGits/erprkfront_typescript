import { useState } from "react";
import { useDispatch } from "react-redux";
import Preco from "../Core/Preco/Preco";
import Produto from "../Core/Produto/Produto";
import ColecaoPreco from "../db/Preco/ColecaoPreco";

export default function usePrecos() {
  const repo = new ColecaoPreco();
  const [preco, setPreco] = useState<Preco>(Preco.vazio);
  const [precos, setPrecos] = useState<Preco[]>([]);
  const dispatch = useDispatch();

  const precoSelecionado = (preco: Preco) => {
    setPreco(Preco.vazio);
    setPreco(preco);
  };

  // obter todos os produtos
  async function obterTodos(codigo: string) {
    dispatch({ type: "SHOW_LOADING" });
    repo.obterTodos(codigo).then((p) => {
      setPrecos(p);
      dispatch({ type: "HIDE_LOADING" });
    });
  }
  async function salvarPreco(preco: Preco) {
    dispatch({ type: "SHOW_LOADING" });
    await repo.salvar(preco).then((p) => {
      setPreco(p);
      dispatch({ type: "HIDE_LOADING" });
    });
  }
  async function obter(preco: Preco) {
    dispatch({ type: "SHOW_LOADING" });
    await repo.obter(preco).then((p) => {
      setPreco(p);
      dispatch({ type: "HIDE_LOADING" });
    });
  }

  return {
    preco,
    precos,
    obter,
    obterTodos,
    setPreco,
    precoSelecionado,
    salvarPreco,
  };
}
