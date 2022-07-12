import React from "react";
interface ContainerProps{
  title:string
  children:any
}

const Container = (props: ContainerProps) => {
  return (
    // HEADER DO COMPONENTE ===
    <div className="content-wrapper" style={{ minHeight: "1604.44px" }}>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>{props.title}</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Cadastro</a>
                </li>
                <li className="breadcrumb-item active">{props.title}</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      {/* CONTEÚDO DO COMPONENTE */}
      <section className="content">
        <div className="container-fluid">{props.children}</div>
      </section>
    </div>
  );
};


export default Container;
