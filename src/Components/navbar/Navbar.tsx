import React from "react";
const Navbar = () => {
  return (
    <nav className="main-header navbar navbar-expand ">
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button">
            <i className="fas fa-bars" />
          </a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <img src="/img/rk_logo.png" className="logoRk" alt="User Image"></img>
        </li>
      </ul>
      {/* Right navbar links */}
      <ul className="navbar-nav ml-auto">
        {/* Notifications Dropdown Menu */}
        <li className="nav-item dropdown">
          <a className="nav-link" data-toggle="dropdown" href="#">
            {/* <i className="far fa-bell" /> */}
            <i className="fa fa-bell"></i>
            <span className="badge badge-warning navbar-badge">15</span>
          </a>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <span className="dropdown-item dropdown-header">
              15 Notificações
            </span>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              <i className="fas fa-envelope mr-2" /> 4 Contas a pagar
              <span className="float-right text-muted text-sm">3 minutos</span>
            </a>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              <i className="fas fa-users mr-2" /> 8 Estoque mínimo
              <span className="float-right text-muted text-sm">12 Horas</span>
            </a>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              <i className="fas fa-file mr-2" /> 3 Contas a receber
              <span className="float-right text-muted text-sm">2 Dias</span>
            </a>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item dropdown-footer">
              Ver todas as notificações
            </a>
          </div>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-widget="fullscreen"
            href="#"
            role="button"
          >
            <i className="fas fa-expand-arrows-alt" />
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-widget="control-sidebar"
            data-controlsidebar-slide="true"
            href="#"
            role="button"
          >
            <i className="fas fa-th-large" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
