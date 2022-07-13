import React, { useEffect } from "react";
import Modal from "../../../Components/modal/Modal";
import Table from "../../../Components/table/Table";
import Produto from "../../../Core/Produto/Produto";
import useNcms from "../../../hooks/useNcms";

interface ListarNCMProps {
  setNcm: any;
  produto: Produto;
  setProduto: any;
  load: boolean;
}
const ListarNcm = (props: ListarNCMProps) => {
  const column = [
    { heading: "NCM", value: "codigo" },
    { heading: "Descrição", value: "descricao" },
  ];
  const { ncm, ncms, ncmSelecionado, obterNCMTodos } = useNcms();

  useEffect(() => {
    // alterar na classe da props
    props.setNcm(ncm);
    props.produto.ncm = ncm.getCodigo();
    props.setProduto?.(props.produto);
  }, [ncm]);

  useEffect(() => {
    obterNCMTodos();
  }, [props.load]);
  return (
    <Modal title={"Localizar Tributacao"} id={`ncmSearch`}>
      <div>
        <div className="col-9">
          <label>NCMs:</label>
        </div>
        <div className="card-body">
          <Table
            data={ncms}
            column={column}
            valorSelecionado={ncmSelecionado}
          ></Table>
        </div>
      </div>
    </Modal>
  );
};

export default ListarNcm;
