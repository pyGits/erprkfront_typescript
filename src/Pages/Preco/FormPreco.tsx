import React, { useState } from "react";
import InputCurrency from "../../Components/input/InputCurrency";
import Preco from "../../Core/Preco/Preco";
import { useSelector } from "react-redux";
import Produto from "../../Core/Produto/Produto";
import Modal from "../../Components/modal/Modal";

interface FormPriceProps {
  preco: Preco;
  produto: Produto;
  setProduto: any;
}
const FormPrice = (props: FormPriceProps) => {
  //estado local
  const [preco, setPreco] = useState(props.preco.preco);
  const [custo, setCusto] = useState(props.preco.custo);
  const [margem, setMargem] = useState(props.preco.margem);
  // on show modal
  $("#priceProduct").on("show.bs.modal", function () {
    setPreco(props.preco.preco);
    setMargem(props.preco.margem);
    setCusto(props.preco.custo);
  });
  const HandleSalvarPreco = () => {
    // acha o indice no array preços, dentro de produto, e altera
    props.produto.precos[
      props.produto.precos.findIndex((x) => x.loja === props.preco.loja)
    ] = new Preco(
      "555",
      props.preco.id,
      props.preco.loja,
      preco,
      custo,
      margem,
      props.preco.lojas
    );

    props.setProduto(Produto.Conversor(props.produto));
  };

  return (
    <Modal id="priceProduct" title="Preços" save={() => HandleSalvarPreco()}>
      <div className="modal-body">
        <div className="col-9">
          <label>Loja:</label>

          <input
            type="text"
            className="form-control"
            value={`${props.preco.lojas.id} - ${props.preco.lojas.loja}`}
            readOnly
          />
        </div>
        <div className="card-header">
          <h3
            className="card-title"
            style={{ color: "#117cb3", fontWeight: "400" }}
          >
            Preços:
          </h3>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-3">
              <label> Custo</label>
              <InputCurrency
                mask="dinheiro"
                value={custo}
                setValue={setCusto}
              ></InputCurrency>
            </div>
            <div className="col-3">
              <label> Margem</label>
              <InputCurrency
                mask="porcentagem"
                value={margem}
                setValue={setMargem}
              ></InputCurrency>
            </div>
            <div className="col-3">
              <label> Preço Venda</label>
              <InputCurrency
                mask="dinheiro"
                value={preco}
                setValue={setPreco}
              ></InputCurrency>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default FormPrice;
