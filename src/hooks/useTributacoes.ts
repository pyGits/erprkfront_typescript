import { useState } from "react";
import { useDispatch } from "react-redux";
import Tributacao from "../Core/Tributacao/Tributacao";
import ColecaoTributacao from "../db/Tributacao/ColecaoTributacao";

export default function useTributacaos() {
  const repo = new ColecaoTributacao();
  const [tributacao, setTributacao] = useState<Tributacao>(Tributacao.vazio);
  const [tributacoes, setTributacoes] = useState<Tributacao[]>([]);
  const dispatch = useDispatch();

  const tributacaoSelecionado = (tributacao: Tributacao) => {
    setTributacao(Tributacao.vazio);
    setTributacao(tributacao);
  };
  // obter todos os produtos
  async function obterTodos() {
    dispatch({ type: "SHOW_LOADING" });
    await repo.obterTodos().then((p) => {
      setTributacoes(p);
      dispatch({ type: "HIDE_LOADING" });
    });
  }
  async function obter(codigo: string) {
    dispatch({ type: "SHOW_LOADING" });
    repo
      .obter(codigo)
      .then((p: any) => {
        setTributacao(Tributacao.Conversor(p.data));
        dispatch({ type: "HIDE_LOADING" });
      })
      .catch((e) => {
        dispatch({ type: "HIDE_LOADING" });
        dispatch({
          type: "SHOW_TOAST",
          payload: {
            status: "SHOW",
            title: "Erro",
            type: "danger",
            text: "Tributação não encontrada, tente novamente",
          },
        });
        setTributacao(Tributacao.vazio);
      });
  }
  return {
    obterTodos,
    obter,
    tributacoes,
    tributacao,
    setTributacao,
    tributacaoSelecionado,
  };
}
