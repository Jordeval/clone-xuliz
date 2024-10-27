<<<<<<< HEAD
<<<<<<<< HEAD:src/containers/maquina1.jsx
import React from "react";
import { useNavigate } from 'react-router-dom';
import Maquina2 from '../assets/maquininha2.png';
import Smartpay from '../assets/smartpay.png'
import './index.css';

function maquina1() {
    const navigate = useNavigate();

    return(
        <div className="fundo">
            <div>
            <h2>Escolha a sua XPay agora mesmo</h2>
            <p>O Xuliz oferece para você e seu negócio as maquininhas mais vantajosas do mercado, com taxas
                <br />
                competitivas e um site fácil de usar para controlar suas vendas
            </p>

            <div>
                <img src={Maquina2} alt="Maquina de cartão" />
            </div>

            <div>
                <img src={Smartpay} alt="Leiaute da maquina" />
                <p>12x de R$85,90 ou R$950,00 à vista </p>
                <h2>Muito mais que uma maquininha</h2>
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
            </div>
        </div>
    );
};

export default maquina1;
========

>>>>>>>> 86a5b5bb02f9fb8423b3204125f4af6fce27b54f:src/containers/maquinas.jsx
=======
import React from "react";
import { useNavigate } from 'react-router-dom';
import Maquina2 from '../assets/maquininha2.png';
import Smartpay from '../assets/smartpay.png'
import './index.css';

function maquina1() {
    const navigate = useNavigate();

    return(
        <div className="Body">
            <div>
            <h2>Escolha a sua XPay agora mesmo</h2>
            <p>O Xuliz oferece para você e seu negócio as maquininhas mais vantajosas do mercado, com taxas
                <br />
                competitivas e um site fácil de usar para controlar suas vendas
            </p>

            <div>
                <img src={Maquina2} alt="Maquina de cartão" />
            </div>

            <div>
                <img src={Smartpay} alt="Leiaute da maquina" />
                <p>12x de R$85,90 ou R$950,00 à vista </p>
                <h2>Muito mais que uma maquininha</h2>
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
            </div>
        </div>
    );
};

export default maquina1;
>>>>>>> 86a5b5bb02f9fb8423b3204125f4af6fce27b54f
