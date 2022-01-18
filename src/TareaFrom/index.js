import React from "react";
import { TareaContext } from "../TareaContext";

function TareaForm(){
    const [newValueTarea, setNewValueTarea] = React.useState('');
    const {tareaAdd,setOpenModal} = React.useContext(TareaContext);
    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewValueTarea(event.target.value);
    }

    const onAdd = (event) => {
        event.preventDefault();
        tareaAdd(newValueTarea);
        setOpenModal(false);
    }



    return(
        <form onSubmit={onAdd} className="card p-5">
            <h2>Agregar una nueva tarea</h2>
            <textarea 
            value={newValueTarea}
            onChange={onChange}
            placeholder="Nueva tarea..."/>
            <div>
                <button
                    type="button"
                    onClick={onCancel}
                    className="btn btn-danger"
                    
                > cancelar</button>
                <button
                    type="submit"
                    className="btn btn-success"
                > añadir</button>
            </div>
        </form>
        
    );
}

export {TareaForm};