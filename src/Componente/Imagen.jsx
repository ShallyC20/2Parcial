import React from 'react';
import './Imagen.css';
import Imagen1 from "../assets/Mask Group.png";
import Imagen2 from "../assets/Group 4.png";

function Imagen() {
    return (
        <div class="Comp1">
            <img class="Imagen1" src={Imagen1} alt="Logo de navegación" />
            <img class="Imagen2" src={Imagen2} alt="Logo de navegación" />
        </div>
    )
}

export default Imagen