// App.jsx
import { useState } from 'react'
import './App.css'
import Card from './comentarios/card'

import React from 'react';
// import Usuario from './comentarios/props';
// import json from './comentarios/usuario.json';
import "./app.css"

const App = () => {
  // const usuarios = json;

  return (
    <div>
      <Card />
      {/* {usuarios.map((usuario) => (
        <Usuario key={usuario.id} id={usuario.id} nombre={usuario.nombre} apellido={usuario.apellido} email={usuario.email} genero={usuario.genero} pais={usuario.pais} />
      ))} */}
    </div>
  );
};

export default App;




// import React from 'react';
// import json from './comentarios/usuario.json';
// import "./app.css"
// const App = () => {
//   console.log(json);


//   return (
//     <div>

//       {json.map((usuario) => (
//         <div className='usuario' key={usuario.id}>
//           <p>ID: {usuario.id}</p>
//           <p>Nombre: {usuario.nombre}</p>
//           <p>Apellido: {usuario.apellido}</p>
//           <p>Email: {usuario.email}</p>
//           <p>Género: {usuario.genero}</p>
//           <p>País: {usuario.pais}</p>
//         </div>
//       ))}


//     </div >
//   );
// };

// export default App;


// import React from 'react';
// import json from './comentarios/usuario.json';
// import "./app.css"
// const App = () => {
//   console.log(json);


//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Nombre</th>
//             <th>Apellido</th>
//             <th>Email</th>
//             <th>Género</th>
//             <th>País</th>
//           </tr>
//         </thead>
//         <tbody>
//           {json.map((usuario) => (
//             <tr key={usuario.id}>
//               <td>{usuario.id}</td>
//               <td>{usuario.nombre}</td>
//               <td>{usuario.apellido}</td>
//               <td>{usuario.email}</td>
//               <td>{usuario.genero}</td>
//               <td>{usuario.pais}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default App;
