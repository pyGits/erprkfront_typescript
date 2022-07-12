import React from "react";

const ExtraTab = () => {
  return (
    <div>
      <div className="card-body">
        <div className="col-12">
          <div className="row" style={{ marginTop: "10px" }}>
            <div className="col-3">
              <h5>Opções</h5>
              <input className="form-check-input" type="checkbox" />
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
