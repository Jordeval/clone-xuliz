import React from "react";
import { useNavigate } from 'react-router-dom';
import logo from '../assets/xuliz-logo.png';
import './header.css';
import './index.css';


function footer() {
    const navigate = useNavigate();
    
    return(
        <footer className="Body">
            <div>
              <h4>Baixe o Xuliz</h4>
              <button>Google Play</button>
              <button>App Store</button>
              <h4>Siga o Xuliz</h4>
              <button><a href="intagram.com">Instagram</a></button>
            </div>

            <div>
                <div>
                 <h4>Fale com agente</h4> 
                 <p>E mail para parceria
                 <br />
                parceria@xuliz.com.br</p>  
                </div>
            </div>

            <div>
                <div>
                   <h4>Precisa de ajuda?</h4> 
                   <p>
                    Entrar em contato
                    <br />
                    Ou mande um e mail para
                    <br />
                    suporte@xuliz.com.br
                   </p>
                </div>
            </div>

            <div>
               <h4>Políticas</h4>
               <p>Política de privacidade
                <br />
                Termos de condição
                <br />
                recorrente
                </p> 
            </div>

            <div className="ul">
                <img src={logo} alt="" />
                <p>@2024 Xuliz. All rights reserved</p>
                <p>
                Aconselhamos que todos os usuários leiam ATENTAMENTE todas as Políticas e observem as tarifas
                <br />
                cobradas em cada situação.
                </p>
            </div>
        </footer>
    );
};

export default footer;