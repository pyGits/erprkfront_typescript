import React from "react";
import { Link } from "react-router-dom";
import Container from "../../Components/container/Container";

const NotFound = () => {
  return (
    <Container title="404 Página não encontrada">
      <div className="error-page">
        <h2 className="headline text-warning"> 404</h2>
        <div className="error-content">
          <h3>
            <i className="fas fa-exclamation-triangle text-warning" /> Oops!
            Página não encontrada.
          </h3>
          <p>
            Nós não encontramos a página que você estava tentando acessar,
            retorne ao
            <Link to="/"> início</Link>
          </p>
        </div>
        {/* /.error-content */}
      </div>
    </Container>
  );
};

export default NotFound;
