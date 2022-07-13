import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../../Components/card/Card";
import CardHeader from "../../Components/card/CardHeader";
import Container from "../../Components/container/Container";
import Modal from "../../Components/modal/Modal";
import Table from "../../Components/table/Table";
import Toast from "../../Components/toast/Toast";
import useProdutos from "../../hooks/useProdutos";

export default function ListProduct() {
  const column = [
    { heading: "Código", value: "codigo", width: "225px" },
    { heading: "Descrição", value: "nome" },
  ];
  const { produtos, produtoSelecionado, obterTodos } = useProdutos();

  useEffect(() => {
    obterTodos();
  }, []);

  return (
    <div>
      {/* Header do componente */}
      <Container title="Produtos">
        <Toast></Toast>
        <Card
          title="Lista de Produtos"
          header={
            <CardHeader title="Lista de produtos">
              <div className="row float-right">
                <Link
                  to="/produtos/novo"
                  className="btn btn-primary float-right"
                  style={{ margin: "5px" }}
                >
                  Novo produto
                </Link>
                <button
                  className="btn btn-secondary float-right"
                  style={{ margin: "5px" }}
                  onClick={() => {
                    obterTodos();
                  }}
                >
                  Pesquisar
                </button>
              </div>
            </CardHeader>
          }
        >
          {/* Pesquisa */}
          <div className="col-12">
            <div className="row">
              <div className="col-3">
                <label htmlFor="codigo">Código</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Código do produto"
                />
              </div>
              <div className="col-8">
                <label htmlFor="exampleInputEmail1">Descrição</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Nome do produto"
                />
              </div>
            </div>
          </div>
          {/* Table */}
          <div className="col-12" style={{ marginTop: "10px" }}>
            <Table
              data={produtos}
              column={column}
              valorSelecionado={produtoSelecionado}
            ></Table>
          </div>
        </Card>
      </Container>
    </div>
  );
}
