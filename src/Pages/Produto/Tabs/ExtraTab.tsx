import React from "react";
import Produto from "../../../Core/Produto/Produto";

interface ExtraTabProps {
  produto: Produto;
  setProduto: any;
}

const ExtraTab = (props: ExtraTabProps) => {
  return (
    <div>
      <div className="card-body">
        <div className="col-12">
          <div className="row" style={{ marginTop: "10px" }}>
            <div className="col-3">
              <h5>Opções</h5>
              {/* <input className="form-check-input" type="checkbox" checked={props.produto}/> */}
              <label>Envia Balança</label>
            </div>
            <div className="col-3">
              <label>Validade</label>
              <input
                className="form-control"
                placeholder="Validade"
                type="text"
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraTab;
