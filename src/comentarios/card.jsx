import React, { useState } from 'react';
import Perfil from './perfil';
import Icons from './icon';
import AgregarComentario from './agregar_comentario';

function Card() {
    const [cards, setCards] = useState([]);

    const addCard = (comment) => {
        const newCard = (
            <div key={cards.length} className="card">
                <Perfil user="axel" timeUser="hace 2 minutos" img="persona.jpg" />
                <p>{comment}</p>
                <Icons />
            </div>
        );
        setCards([...cards, newCard]);
    };

    return (
        <div className="Contenedor_comentario">
            <AgregarComentario addCard={addCard} />
            {cards}
        </div>
    );
}

export default Card;
