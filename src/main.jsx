import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; 
import Header from './containers/Header'; 
import '../src/containers/index.css';
import Bandeiras from './containers/bandeiras';
import Maquina1 from './containers/maquina1';
import Maquina2 from './containers/maquina2';
import Container1 from './containers/container1';
import Contaner2 from './containers/container2';
import Footer from './containers/footer';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Bandeiras />
      <Maquina1 />
      <Maquina2 />
      <Container1 />
      <Contaner2 />
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
