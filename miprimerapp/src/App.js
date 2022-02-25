import React, { useEffect, useState } from "react";
//importaciones de componentes externos
import {Boton} from "./components/boton";
import logo from './logo.svg';
//Hoja de estilos
import './App.css';

function App() {
  //JSX
  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState("");
  //Useeffect = hook
  useEffect(()=>{ setContador(100);/*Ejecuta esto si cambian lasvariables*/}, [nombre] /*Variables*/);
  return (
  <div className="App" id="App">
    <div> El valor de mi contador es: {contador}</div>
    <button onClick= {()=> { //llamamos al hook y le asignamos otro valor al contador
     setContador(contador + 1);}}>Aumentar contador </button>

     <button onClick= {()=> { //llamamos al hook y le asignamos otro valor al contador
      setContador(contador - 1);}}>Disminuir contador</button>

      <button onClick= {()=> { //llamamos al hook y le asignamos otro valor al contador
        setContador(100);}}>Reinicio del contador</button>

     <input value= {nombre} onChange={(event)=>{setNombre(event.target.value);}}
     placeholder="Ingresa tu nombre"/> 
     <span>Mi nombre es: {nombre}</span>
     <p>Mi nombre es: {nombre}</p>
     <Boton />
  </div>
 ) ;
}

export default App;
