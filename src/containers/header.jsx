// src/containers/Header.jsx
import React from "react";
import { useNavigate } from 'react-router-dom';
import './header.css';
import logo from '../assets/xuliz-logo.png'; 
import baixo from '../assets/icon/baixo.png';
import lado from '../assets/icon/lado.png';
import pix from '../assets/icon/pix.png';
import parcela from '../assets/icon/parcela.png';
import taxas from '../assets/icon/taxas.png';
import automatic from '../assets/icon/automatic.png';
import maquinaXuliz from '../assets/xuliz.png';

function Header() {
  const navigate = useNavigate();

  // Função para navegar para a página inicial ao clicar na logo

  return (
    <header className="Body">
      <ul className="ul">
        <img 
          src={logo} 
          alt="Logo"/>

        <li>
          <a href="#">O Xuliz</a>
          </li>
        <li>
          <a href="#">Ajuda</a>
          </li>
        <li>
          <a href="#">Produtos</a>
        <img src={baixo} alt="" />
        </li>
      </ul>
      
      <div>
        <button>
          <a href="#">Baixe o app
            <img src={lado} alt="" />
          </a>
        </button>
        <button>
          <a href="#">Área parceiros</a>
        </button>
      </div>

      <div>
        <h2>A sua aliada
          <br />
          financeira são as
          <br />
          maquininhas XPay
        </h2>
        <p>Maquininhas que te entregam facilidade e taxas
          <br />
          baixas para você ganhar muito mais.
        </p>
      </div>

      <div>
        <div>
          <p><img src={pix} alt="" />Pix na maquininha</p>
          <p><img src={parcela} alt="" />Parcele em até 12x</p>
        </div>

        <div>
          <p><img src={taxas} alt="" />Menores taxas do mercado</p>
          <p><img src={automatic} alt="" />Baixa automática no sistema</p>
        </div>

        <div>
          <button>Eu quero receber com Xuliz</button>
        </div>
        <img src={maquinaXuliz} alt="xuliz-maquininha"/>
      </div>
    </header>
  );
}

export default Header;
