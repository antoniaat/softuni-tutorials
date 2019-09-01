import React from "react";
import "./App.css";

import { BrowserRouter } from "react-router-dom";

import Footer from "./Components/Common/Footer/Footer.js";
import Header from "./Components/Common/Header/Header.js";
import Navigation from "./Components/Common/Navigation/Navigation";

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