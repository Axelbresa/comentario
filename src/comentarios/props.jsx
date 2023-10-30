// Usuario.jsx

import React from 'react';

const Usuario = ({ id, nombre, apellido, email, genero, pais }) => {
    return (
        <div className='usuario'>
            <p>ID: {id}</p>
            <p>Nombre: {nombre}</p>
            <p>Apellido: {apellido}</p>
            <p>Email: {email}</p>
            <p>Género: {genero}</p>
            <p>País: {pais}</p>
        </div>
    );
};


export default Usuario;

// import React from 'react'

// function Props({ auto, casa, animales }
// ) {
//     return (
//         <div>
//             <p>{casa} </p>
//             <p>{auto} </p>
//             <p>{animales} </p>

//         </div>
//     )
// }

// export default Props

// import React from 'react'

// const Props = (props) => {
//     const { auto, casa, animales } = props


//     return (
//         <div>
//             <p>{casa} </p>
//             <p>{auto} </p>
//             <p>{animales} </p>

//         </div>
//     )
// }

// export default Props

