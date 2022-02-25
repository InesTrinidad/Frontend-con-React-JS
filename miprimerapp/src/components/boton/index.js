import React, {useState} from "react"; 
import "./style.css";
export function Boton(){
    const [textoBoton, setTextoBoton] = useState("Soy un Boton");
    return (
        <button className="boton-componente" onClick={() => { setTextoBoton("Soy Ines"); }}>
            {textoBoton}
        </button>
    );
}