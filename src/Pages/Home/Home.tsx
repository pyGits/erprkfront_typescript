import React from "react";
import Toast from "../../Components/toast/Toast";

import Routes from "../../routes";
import Navbar from "./../../Components/navbar/Navbar";
import Sidebar from "./../../Components/sidebar/Sidebar";

const Home = () => {
  const Menu = [
    { id: 1, nome: "Produtos", link: "/produtos" },
    { id: 2, nome: "Clientes", link: "/clientes" },
  ];
  return (
    <div>
      <Navbar></Navbar>
      <Sidebar Menu={Menu}></Sidebar>

      <div className="wrapper">
        <Routes></Routes>
      </div>
      <Toast></Toast>
    </div>
  );
};

export default Home;
