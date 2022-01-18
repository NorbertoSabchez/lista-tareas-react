import React from "react";
import { TareaContext } from "../TareaContext";

function TareaBuscar () {
    const {busquedaValor, setBusqueda} = React.useContext(TareaContext);
    
    const onChangeValue = (event) => {
        console.log(event.target.value);
        setBusqueda(event.target.value);
    }

    return (
        <input className="mt-1" 
        placeholder='Tarea...'
        value={busquedaValor}
        onChange={onChangeValue}/>
        
    );
    
}

export { TareaBuscar };