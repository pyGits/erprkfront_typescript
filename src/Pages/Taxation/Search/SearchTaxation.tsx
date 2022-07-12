import React, { useEffect } from "react";
import Modal from "../../../Components/modal/Modal";
import Table from "../../../Components/table/Table";
import Tributacao from "../../../Core/Tributacao/Tributacao";
import useTributacoes from "../../../hooks/useTributacoes";

interface SearchTaxationProps {
  tributacao: Tributacao;
  setTributacao: any;
  setProduto?: any;
}

const SearchTaxation = (props: SearchTaxationProps) => {
  const { tributacoes, tributacao, tributacaoSelecionado, obterTodos } =
    useTributacoes();
  const column = [
    { heading: "Código", value: "codigo" },
    { heading: "Descrição", value: "tributacao" },
  ];
  // on show modal
  $("#taxationSearch").on("show.bs.modal", function () {
    obterTodos();
  });
  useEffect(() => {
    props.setTributacao(tributacao);
    props.setProduto?.(tributacao);
  }, [tributacao]);

  return (
    <Modal title={"Localizar Tributacao"} id={`taxationSearch`}>
      <div>
        <div className="col-9">
          <label>Tributação:</label>
        </div>
        <div className="card-body">
          <Table
            data={tributacoes}
            column={column}
            valorSelecionado={tributacaoSelecionado}
          ></Table>
        </div>
      </div>
    </Modal>
  );
};

export default SearchTaxation;
