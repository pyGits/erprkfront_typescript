import React from "react";
import { Routes, Route } from "react-router-dom";
import ListProduct from "./Pages/Product/ListProduct";
import FormProduct from "./Pages/Product/FormProduct";
// import Client from "./Pages/Client/Client";
import NotFound from "./Pages/NotFound/NotFound";

export default () => (
  <Routes>
    {/* <Route path="/clientes" element={<Client />}></Route> */}
    <Route path="/produtos" element={<ListProduct />}></Route>
    <Route path="/produtos/:codigo" element={<FormProduct />}></Route>
    <Route path="*" element={<NotFound />}></Route>
  </Routes>
);
