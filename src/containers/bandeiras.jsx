import React from "react";
import { useNavigate } from 'react-router-dom';
import cartoesB from '../assets/cartoes.png';

function bandeiras() {
    const navigate = useNavigate();

    return(
        <div>
            <div>
                <h3>Aceite as principais
                    <br />
                    bandeiras do mercado.
                </h3>
            </div>
            <div>
                <img src={cartoesB} alt="" />
            </div>
            <div>
                <p>Página web para gestão</p>
                <p>Bateria que dura</p>
                <p>Já vem com chip</p>
                <p>Bobina grátis</p>
                <p>Wi-Fi</p>
                <p>2G, 3G e 4G</p>
            </div>
        </div>
    );
};

export default bandeiras;