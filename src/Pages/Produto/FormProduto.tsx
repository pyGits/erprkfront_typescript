import React, { useEffect, useState } from "react";
import Container from "../../Components/container/Container";
import Card from "../../Components/card/Card";
import CardHeader from "../../Components/card/CardHeader";
import Navtabs from "../../Components/Navtabs/Navtabs";
import Navcontent from "../../Components/Navtabs/Navcontent";
import PrincipalTab from "./Tabs/PrincipalTab";
import PrecoTab from "./Tabs/PrecosTab";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import useProdutos from "../../hooks/useProdutos";
import FiscalTab from "./Tabs/FiscalTab";
import Teste from "../../Core/teste";
import ExtraTab from "./Tabs/ExtraTab";

const navHeader = [
  { nome: "Principal", active: "nav-link active", tab: "#Principal" },
  { nome: "Preços", active: "nav-link", tab: "#Preco" },
  { nome: "Fiscal", active: "nav-link", tab: "#Fiscal" },
  { nome: "Extra", active: "nav-link", tab: "#Extra" },
];

const FormProduct = () => {
  const { codigo } = useParams();
  const { produto, setProduto, salvarProduto, obter } = useProdutos();
  const dispatch = useDispatch();

  useEffect(() => {
    obter(codigo);
    if (codigo === "novo") {
      dispatch({ type: "MODE_INSERT" });
    } else {
      dispatch({ type: "MODE_EDIT" });
    }
  }, []);

  return (
    <Container title="Cadastro de produto">
      <Card title="Novo Produto" header={<CardHeader title="Novo produto" />}>
        {/* ========== Nav tabs =========== */}
        <Navtabs cols={"col-12"} headers={navHeader}>
          <Navcontent id="Principal" active={"show active"}>
            <PrincipalTab
              produto={produto}
              setProduto={setProduto}
            ></PrincipalTab>
          </Navcontent>
          <Navcontent id="Preco" active={"show"}>
            <PrecoTab produto={produto} setProduto={setProduto}></PrecoTab>
          </Navcontent>
          <Navcontent id="Fiscal">
            <FiscalTab produto={produto} setProduto={setProduto}></FiscalTab>
          </Navcontent>
          <Navcontent id="Extra">
            <ExtraTab produto={produto} setProduto={setProduto}></ExtraTab>
          </Navcontent>
        </Navtabs>
      </Card>
      {/* Footer */}
      <div className="card-footer">
        <Link to="/produtos" className="btn btn-secondary float-right">
          Cancelar
        </Link>
        <button
          className="btn btn-primary float-right"
          style={{ marginRight: "10px" }}
          onClick={() => {
            salvarProduto(produto);
          }}
        >
          Gravar
        </button>
      </div>
    </Container>
  );
};

export default FormProduct;
