import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './components/Navbar/globalStyles';

import Heroo from './components/Heroo';
import {productData, productDataTwo} from './components/Products/data';
import Products from './components/Products';
import Feature from './Feature';
import Footer from './components/Footer';



function App() {
  return (
    <Router>
     
      <GlobalStyle />

      <Heroo />
      <Products heading='Choose your favorite' data={productData}/>
      <Feature/>     
      <Products heading='Sweet Treats for you' data={productDataTwo}/>
      <Footer/>
      </Router>
  );
}

export default App;
