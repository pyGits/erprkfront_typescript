import React, { useEffect, useState } from "react";
import Produto from "../../../Core/Produto/Produto";
import Tributacao from "../../../Core/Tributacao/Tributacao";
import useTributacoes from "../../../hooks/useTributacoes";
import SearchTaxation from "../../Taxation/Search/SearchTaxation";
interface FiscalTabProps {
  produto: Produto;
  setProduto: any;
}

const FiscalTab = (props: FiscalTabProps) => {
  const { tributacao, obter, setTributacao } = useTributacoes();
  const HandleMudarTributacao = async (tributacao: Tributacao) => {
    // ao sair altera diretamente no produto e recarrega
    await obter(tributacao.codigo);
    props.produto.tributacao = tributacao.codigo;
    props.setProduto(Produto.Conversor(props.produto));
  };
  useEffect(() => {
    //quando mudar tributação dentro do produto, muda na classe
    tributacao.codigo = props.produto.tributacao;
    setTributacao(Tributacao.Conversor(tributacao));
    HandleMudarTributacao(tributacao);
  }, [props.produto.tributacao]);

  return (
    <div className="card-body">
      <div className="col-12">
        <div className="row" style={{ marginTop: "10px" }}>
          <div className="col-4">
            <label>Tributação</label>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control col-3"
                value={tributacao.codigo}
                onBlur={() => HandleMudarTributacao(tributacao)}
                onChange={(e) => {
                  tributacao.codigo = e.target.value;
                  setTributacao(Tributacao.Conversor(tributacao));
                }}
              />
              <div
                className="input-group-append"
                data-toggle="modal"
                data-target="#taxationSearch"
              >
                <span className="input-group-text">
                  <i className="fas fa-search"></i>
                </span>
              </div>
              <input
                className="form-control"
                type="text"
                value={tributacao.tributacao}
                readOnly
              />
            </div>
          </div>

          <div className="col-3">
            <label>NCM</label>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control col-3"
                value={props.produto.ncm}
                readOnly
              />
              <div className="input-group-append">
                <span className="input-group-text">
                  <i className="fas fa-search"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control col-3"
                value={"teste"}
                readOnly
              />
            </div>
          </div>
          <div className="col-3">
            <label>CEST</label>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                value={props.produto.cest}
                readOnly
              />
              <div className="input-group-append">
                <span className="input-group-text">
                  <i className="fas fa-search"></i>
                </span>
              </div>
            </div>
            <code>Salgadinhos estranhos</code>
          </div>
        </div>
        <div className="card-header">
          <h3
            className="card-title"
            style={{ color: "#117cb3", fontWeight: "400" }}
          >
            Impostos federais
          </h3>
        </div>
        <div className="col-3" style={{ marginTop: "10px" }}>
          <label>Pis/Cofins</label>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              value={props.produto.piscofins}
              readOnly
            />
            <div className="input-group-append">
              <span className="input-group-text">
                <i className="fas fa-search"></i>
              </span>
            </div>
          </div>
          <code>Alíquota Zero</code>
        </div>
      </div>

      <SearchTaxation
        tributacao={tributacao}
        setTributacao={setTributacao}
        setProduto={HandleMudarTributacao}
      ></SearchTaxation>
    </div>
  );
};

export default FiscalTab;
