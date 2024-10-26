import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; 
import Header from './containers/Header'; 
import '../src/containers/index.css';
import Bandeiras from './containers/bandeiras';
import Maquinas from './containers/maquinas';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Bandeiras />
      <Maquinas />
    </BrowserRouter>
  </StrictMode>
);
