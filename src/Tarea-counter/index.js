import React from "react";
import { TareaContext } from "../TareaContext";

function TareaCounter () {
    const {totalTareas, completeTareas} = React.useContext(TareaContext);

    return [
    <h2 className=" card-header text-white bg-success text-center m-3">Contador de tareas</h2>,
        <p>Has completado {completeTareas} de un total de {totalTareas}</p>
    ];
}

export { TareaCounter };