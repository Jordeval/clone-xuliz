<<<<<<< HEAD
import React from "react";
import { useNavigate } from 'react-router-dom';
import Maquina2 from '../assets/maquininha2.png';
import Propay from '../assets/propay.png'


function maquina2() {
    const navigate = useNavigate();

    return(
        <div className="fundo">
            <div>
                <img src={Propay} alt="" />
                <p>12x de R$85,90 ou R$950,00 à vista </p>
                <p>Muito mais que uma maquininha</p>
            </div>

            <div>
                <li>Aceite todos os pagamentos: Apple Pay, Samsung
                    <br />
                    Pay, Google Pay, QR Code, Pix e aproximação (NFC)
                </li>
                <li>Visualize e imprima seus relatórios de vendas.</li>
                <li>Bateria recarregável que dura o dia inteiro.</li>
                <li>Design com tela touch screen mega resistente.</li>
                <li>Wi-Fi e chip ilimitado com conexão automática.</li>
            </div>
            <button>Comprar por menos de R$2,86 / dia</button>
            <div>
                <img src={Maquina2} alt="Maquina de cartão" />
            </div>
        </div>
    );
};

export default maquina2;
=======
import React from "react";
import { useNavigate } from 'react-router-dom';
import Maquina2 from '../assets/maquininha2.png';
import Propay from '../assets/propay.png'
import './index.css';

function maquina2() {
    const navigate = useNavigate();

    return(
        <div className="Body">
            <div>
                <img src={Propay} alt="" />
                <p>12x de R$85,90 ou R$950,00 à vista </p>
                <p>Muito mais que uma maquininha</p>
            </div>

            <div>
                <li>Aceite todos os pagamentos: Apple Pay, Samsung
                    <br />
                    Pay, Google Pay, QR Code, Pix e aproximação (NFC)
                </li>
                <li>Visualize e imprima seus relatórios de vendas.</li>
                <li>Bateria recarregável que dura o dia inteiro.</li>
                <li>Design com tela touch screen mega resistente.</li>
                <li>Wi-Fi e chip ilimitado com conexão automática.</li>
            </div>
            <button>Comprar por menos de R$2,86 / dia</button>
            <div>
                <img src={Maquina2} alt="Maquina de cartão" />
            </div>
        </div>
    );
};

export default maquina2
>>>>>>> 86a5b5bb02f9fb8423b3204125f4af6fce27b54f
