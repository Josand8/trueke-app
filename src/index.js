import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Encabezado from './Componentes/Encabezado';
import Navegacion from './Componentes/Navegacion';
import Pie_pagina from "./Componentes/Pie_pagina";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Encabezado/>
    <Navegacion enlace1="Inicio" enlace2="Publicar/Editar tarjeta" enlace3="Iniciar Sesión" enlace4="Crear Usuario" enlace5="Cerrar sesión"/>
    
    <Pie_pagina/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
