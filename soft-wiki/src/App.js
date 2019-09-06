import React from "react";
import "./App.css";

import { BrowserRouter } from "react-router-dom";

import Footer from "./components/common/Footer/Footer.js";
import Header from "./components/common/Header/Header.js";
import Navigation from "./components/common/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Navigation></Navigation>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
