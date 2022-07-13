import React, { useEffect, useState } from "react";
import "./custom.css";
import Select from "react-select";
import Produto from "../../../Core/Produto/Produto";
import { useSelector } from "react-redux";

interface PrincipalTabProps {
  produto: Produto;
  setProduto?: any;
}

const PrincipalTab = (props: PrincipalTabProps) => {
  const mode = useSelector((state: any) => state.application.mode);
  const [formControl, setFormControl] = useState(false);

  useEffect(() => {
    if (mode === "MODE_INSERT") {
      setFormControl(false);
    }
    if (mode === "MODE_EDIT") {
      setFormControl(true);
    }
  }, [mode]);
  const options = [
    { value: "01", label: "Aranhas" },
    { value: "02", label: "Hidekis" },
    { value: "03", label: "Reginaldos" },
  ];
  const optionsUn = [
    { value: "UN", label: "UN" },
    { value: "KG", label: "KG" },
    { value: "GR", label: "GR" },
  ];
  const optionsVenda = [
    { value: "N", label: "Unitária" },
    { value: "S", label: "Balança Checkout" },
  ];

  return (
    <div className="card-body">
      <div className="col-12">
        <div className="row">
          <div className="col-3">
            <label>Código</label>
            <input
              className="form-control"
              placeholder="Código do produto"
              type="text"
              value={props.produto.codigo}
              onChange={(e) => {
                props.produto.codigo = e.target.value;
                props.setProduto(Produto.Conversor(props.produto));
              }}
              readOnly={formControl}
            ></input>
          </div>
          <div className="col-9">
            <label>Descrição</label>
            <input
              className="form-control"
              placeholder="Nome do produto"
              type="text"
              value={props.produto.nome}
              onChange={(e) => {
                props.produto.nome = e.target.value;
                props.setProduto(Produto.Conversor(props.produto));
              }}
            ></input>
          </div>
        </div>
      </div>
      {/* SEÇÕES GRUPO E SUBGRUPOS */}
      <div className="col-12">
        <div className="row">
          <div className="col-3">
            <label>Seção</label>
            <Select
              options={options}
              value={options.filter((r) => r.value === props.produto.secao)}
              onChange={(e) => {
                props.produto.secao = e.value;
                props.setProduto(Produto.Conversor(props.produto));
              }}
              placeholder="Seção"
            ></Select>
          </div>

          <div className="col-3">
            <label>Grupo</label>
            <Select
              options={options}
              value={options.filter((r) => r.value === props.produto.grupo)}
              placeholder="Grupo"
              onChange={(e) => {
                props.produto.grupo = e.value;
                props.setProduto(Produto.Conversor(props.produto));
              }}
            ></Select>
          </div>
          <div className="col-3">
            <label>Subgrupo</label>
            <Select
              options={options}
              value={options.filter((r) => r.value === props.produto.subgrupo)}
              placeholder="Subgrupo"
              onChange={(e) => {
                props.produto.subgrupo = e.value;
                props.setProduto(Produto.Conversor(props.produto));
              }}
            ></Select>
          </div>
        </div>
      </div>
      {/* EMBALAGENS */}
      <div className="card-header">
        <h3
          className="card-title"
          style={{ color: "#117cb3", fontWeight: "400" }}
        >
          Forma de venda
        </h3>
      </div>
      <div className="col-12" style={{ marginTop: "10px" }}>
        <div className="row">
          <div className="col-3">
            <label>Composição</label>
            <div
              className="form-group"
              onChange={(e) => {
                (props.produto.composicao = (
                  e.target as HTMLInputElement
                ).value),
                  props.setProduto(Produto.Conversor(props.produto));
              }}
            >
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="normal"
                  value="N"
                  checked={"N" === props.produto.composicao}
                  readOnly
                />
                <label className="form-check-label">Normal</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="composto"
                  value="C"
                  checked={"C" === props.produto.composicao}
                  readOnly
                />
                <label className="form-check-label">Composto</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="kit"
                  value="K"
                  checked={"K" === props.produto.composicao}
                  readOnly
                />
                <label className="form-check-label">Kit</label>
              </div>
            </div>
          </div>

          <div className="col-3">
            <label>Forma de venda</label>
            <Select
              options={optionsVenda}
              value={optionsVenda.filter(
                (r) => r.value === props.produto.formavenda
              )}
              placeholder="Forma de venda"
              onChange={(e) => {
                props.produto.formavenda = e.value;
                props.setProduto(Produto.Conversor(props.produto));
              }}
            ></Select>
          </div>
          <div className="col-2">
            <label>Unidade</label>
            <Select
              value={optionsUn.filter((r) => r.value === props.produto.unidade)}
              options={optionsUn}
              onChange={(e) => {
                props.produto.unidade = e.value;
                props.setProduto(Produto.Conversor(props.produto));
              }}
              placeholder="UN"
            ></Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipalTab;
