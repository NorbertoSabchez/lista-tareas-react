import React from "react";


function TareaBoton (props) {
    const onClickBoton = () =>{
        props.setOpenModal(true);
    }
    return (
        <button className="btn btn-success"
        onClick={onClickBoton}
        >+ Agregar tarea</button>
    );
}

export { TareaBoton };