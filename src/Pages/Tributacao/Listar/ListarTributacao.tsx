import React, { useEffect } from "react";
import Modal from "../../../Components/modal/Modal";
import Table from "../../../Components/table/Table";
import Produto from "../../../Core/Produto/Produto";
import Tributacao from "../../../Core/Tributacao/Tributacao";
import useTributacoes from "../../../hooks/useTributacoes";

interface SearchTaxationProps {
  setTributacao: any;
  setProduto: any;
  produto: Produto;
  load: any; // propriedade para carregar tributações
}

const column = [
  { heading: "Código", value: "codigo" },
  { heading: "Descrição", value: "tributacao" },
];
const SearchTaxation = (props: SearchTaxationProps) => {
  const {
    tributacao,
    tributacoes,
    tributacaoSelecionado,
    obterTributacaoTodos,
  } = useTributacoes();

  useEffect(() => {
    // alterar na classe da props
    props.setTributacao(tributacao);
    props.produto.tributacao = tributacao.codigo;
    props.setProduto?.(props.produto);
  }, [tributacao]);

  useEffect(() => {
    obterTributacaoTodos();
  }, [props.load]);

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
