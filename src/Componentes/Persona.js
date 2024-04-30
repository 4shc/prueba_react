import React from "react";
// Usando props de forma muy básica y simple
function Persona(props){
  return(
    <div className="persona ver"> 
      <h2>Nombres : {props.nombre}</h2>
      <p>Edad     : {props.edad}</p>
      <p>Correo   : {props.correo}</p>

    </div>
  )
}

export default Persona;