import { useState } from "react";
import { useDispatch } from "react-redux";
import NCM from "../Core/Tributacao/NCM";
import ColecaoNcms from "../db/Tributacao/ColecaoNCM";

export default function useNcms() {
  const repo = new ColecaoNcms();
  const [ncm, setNcm] = useState<NCM>(NCM.vazio);
  const [ncms, setNcms] = useState<NCM[]>([]);
  const dispatch = useDispatch();

  const ncmSelecionado = (ncm: NCM) => {
    setNcm(NCM.vazio);
    setNcm(ncm);
  };
  // obter todos os ncms
  async function obterNCMTodos() {
    dispatch({ type: "SHOW_LOADING" });
    await repo.obterTodos().then((p) => {
      setNcms(p);
      dispatch({ type: "HIDE_LOADING" });
    });
  }

  async function obterNCM(codigo: string) {
    dispatch({ type: "SHOW_LOADING" });
    repo
      .obter(codigo)
      .then((p: any) => {
        setNcm(NCM.Conversor(p.data));
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
            text: "NCM não encontrado, tente novamente",
          },
        });
        setNcm(NCM.vazio);
      });
  }
  return {
    ncms,
    ncm,
    setNcm,
    obterNCM,
    ncmSelecionado,
    obterNCMTodos,
  };
}
