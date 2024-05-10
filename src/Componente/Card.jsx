import React from 'react';
import './Card.css';
import Imagen from './Imagen';
import Detalles from './Detalles';

function Card() {
    return (
        <div>
            <Imagen/>
            <Detalles/>
        </div>
    );
}

export default Card;
