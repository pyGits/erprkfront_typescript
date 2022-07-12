import React from "react";
import Table from "../../../Components/table/Table";

const EstoqueTab = () => {
  const column = [
    { heading: "Loja", value: "loja", width: "225px" },
    { heading: "Estoque Atual", value: "estoque" },
    { heading: "Estoque Mínimo", value: "estoqueMin" },
    { heading: "Estoque Máximo", value: "estoqueMax" },
  ];

  const tableRows = [
    {
      loja: "1 - Loja Reginaldo",
      estoque: "5,30",
      estoqueMin: "1,30",
      estoqueMax: "100,00",
    },
    {
      loja: "2 - Loja Hideki",
      estoque: "2,30",
      estoqueMin: "1,10",
      estoqueMax: "600,00",
    },
  ];
  return (
    <div>
      <Table column={column} data={tableRows}></Table>
    </div>
  );
};

export default EstoqueTab;
