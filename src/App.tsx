import React from "react";
import Home from "./Pages/Home/Home";
import "./dependencies";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Home></Home>
      </BrowserRouter>
    </div>
  );
};

export default App;
