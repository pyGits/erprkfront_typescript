import React, { useState } from "react";
import { useEffect } from "react";
import Table from "../../../Components/table/Table";
import Loja from "../../../Core/Loja/Loja";
import Preco from "../../../Core/Preco/Preco";
import Produto from "../../../Core/Produto/Produto";
import usePrecos from "../../../hooks/usePrecos";
import FormPrice from "../../Preco/FormPreco";

interface PrecosTabProps {
  produto: Produto;
  setProduto: any;
}

const PrecosTab = (props: PrecosTabProps) => {
  const { preco, setPreco } = usePrecos();
  const column = [
    {
      heading: "Loja",
      value: "lojas",
      subvalue: "loja",
    },
    { heading: "Custo", value: "custo", mask: "money" },
    { heading: "Margem", value: "margem", mask: "percentage" },
    { heading: "Preço", value: "preco", mask: "money" },
  ];
  return (
    <div>
      <Table
        column={column}
        data={props.produto.precos}
        valorSelecionado={setPreco}
        dataTarget={"#priceProduct"}
      ></Table>
      <FormPrice
        produto={props.produto}
        preco={preco}
        setProduto={props.setProduto}
      ></FormPrice>
    </div>
  );
};

export default PrecosTab;
