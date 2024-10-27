import React from "react";
import { useNavigate } from 'react-router-dom';


function container1() {
    const navigate = useNavigate();
    
    return(
        <div>
            <div>
                <h2>Está em dúvida? Entre em contato um consultor Xuliz!</h2>
                <p>O Xuliz é o seu parceiro na hora de comprar uma máquina de cartão. Nós te ajudamos a
                <br />
                encontrar a maquininha ideal para o seu negócio, com segurança, praticidade e as menores
                <br />
                taxas do mercado. Fale com um consultor exclusivo e saiba mais.
                </p>
                <button>Falar com consultor exclusivo</button>
            </div>
        </div>
    );
};

export default container1