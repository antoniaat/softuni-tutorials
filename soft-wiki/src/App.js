import React from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom';

import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';

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
