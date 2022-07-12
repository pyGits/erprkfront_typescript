import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

interface TableProps {
  column: Array<any>;
  data: Array<any>;
  dataTarget?: string; // modal
  valorSelecionado?: (valor: any) => void;
}

const Table = (props: TableProps) => {
  function renderizarCabecalho() {
    return (
      <tr>
        {props.column.map((item, index) => (
          <th key={index} style={{ width: item.width }}>
            {item.heading}
          </th>
        ))}
      </tr>
    );
  }
  function renderizarDados() {
    return props.data?.map((valor, index) => {
      return (
        // se existir função na tabela ele vai retornar linha clicavel
        props.valorSelecionado ? (
          <tr
            key={index}
            data-target={props.dataTarget}
            data-toggle="modal"
            data-dismiss="modal"
            onClick={() => props.valorSelecionado?.(valor)}
          >
            <TableRow column={props.column} item={valor}></TableRow>
          </tr>
        ) : (
          // apenas leitura
          <tr key={index}>
            <TableRow column={props.column} item={valor}></TableRow>
          </tr>
        )
      );
    });
  }
  return (
    <div>
      <div className="table-responsive">
        <table id="table" className="table table-bordered table-hover">
          <thead>{renderizarCabecalho()}</thead>
          <tbody>{renderizarDados()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
