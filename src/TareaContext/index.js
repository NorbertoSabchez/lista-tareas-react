import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TareaContext = React.createContext();

function TareaProvider(props) {

    const {
        item: tareas,
        saveItem: saveTarea,
        loading,
        error,
      } = useLocalStorage('TAREAS_V1', []);
      
      const [busquedaValor, setBusqueda] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);
    
      const completeTareas = tareas.filter( tarea => !!tarea.complete).length;
      const totalTareas = tareas.length;
    
      let tareasBuscadas = [];
    
      if( !busquedaValor.length >= 1){
        tareasBuscadas = tareas;
      }else{
        tareasBuscadas = tareas.filter( tarea =>{
          const tareaText = tarea.text.toLowerCase();
          const busquedaText = busquedaValor.toLowerCase();
          return tareaText.includes(busquedaText);
        });
      }
    
    
      const tareaAdd = (text) => {
        const nuevaTareas = [...tareas];
        nuevaTareas.push({
          complete: false,
          text,
        })
        saveTarea(nuevaTareas);
    };
      const tareaComplete = (text) => {
          const tareaIndex = tareas.findIndex(tarea => tarea.text === text);
          const nuevaTareas = [...tareas];
          nuevaTareas[tareaIndex].complete = true;
          saveTarea(nuevaTareas);
      };
    
      const tareaDelete = (text) => {
        const tareaIndex = tareas.findIndex(tarea => tarea.text === text);
        const nuevaTareas = [...tareas];
        nuevaTareas.splice(tareaIndex, 1);
        saveTarea(nuevaTareas);
    };

    return(
        <TareaContext.Provider value={{
            loading,
            error,
            busquedaValor,
            setBusqueda,
            totalTareas,
            completeTareas,
            tareasBuscadas,
            tareaAdd,
            tareaComplete,
            tareaDelete,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TareaContext.Provider>
    );
}


export {TareaContext, TareaProvider};