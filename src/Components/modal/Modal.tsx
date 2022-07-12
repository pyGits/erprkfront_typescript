import React from "react";
import { useSelector } from "react-redux";

interface ModalProps {
  id: string;
  title: string;
  children: any;
  save?: any;
}

const Modal = (props: ModalProps) => {
  const loading = useSelector((state: any) => state.application.loading);
  return (
    <div className="modal fade" id={props.id}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{props.title}</h4>
          </div>
          {props.children}
          <div className="modal-footer float-right">
            <button
              type="button"
              className="btn btn-default"
              data-dismiss={"modal"}
            >
              Cancelar
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-dismiss={"modal"}
              onClick={() => props.save()}
            >
              Salvar
            </button>
          </div>
        </div>
        {loading && (
          <div className="overlay">
            <i className="fas fa-2x fa-sync-alt fa-spin"></i>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
