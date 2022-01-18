import React from "react";
import { TareaCounter } from '../Tarea-counter';
import { TareaContext } from "../TareaContext";
import { TareaBuscar } from '../Tareas-busqueda';
import { TareaLista } from '../Tarea-lista';
import { TareaItem } from '../Tarea-item';
import { TareaBoton } from '../Tarea-button';
import { TareaForm } from "../TareaFrom";
import {Modal} from '../Modal';

function AppUI() {
  const {error,
    loading,
    tareasBuscadas,
    tareaComplete, 
    tareaDelete,
    openModal,
    setOpenModal,
  } = React.useContext(TareaContext);

    return(
        <div className='App-header'>
      <div className='contenido'>
      <React.Fragment>
      <div className='card m-2'>
      <h2 className=" card-header text-white bg-success text-center m-3">Buscar o Crear tareas</h2>
        <TareaBuscar />
        <TareaBoton
          setOpenModal={setOpenModal}
        />
      </div>
      <div className='card m-2'>
        <TareaCounter />

              <TareaLista>
                {error && <p>Algo salio mal.</p>}
                {loading && <p>Estamos cargando por favor espera.</p>}
                {(!loading && !tareasBuscadas.length) && <p>Crear tu primer tarea</p>}
              
                {tareasBuscadas.map( tarea => (
                  <TareaItem key={tarea.text} 
                    text={tarea.text}
                    complete={tarea.complete}
                    onComplete = {() => tareaComplete(tarea.text)}
                    onDelete = {() => tareaDelete(tarea.text)}
                  />
                 ))}
              </TareaLista>
              {!!openModal && (
                <Modal>
                  <TareaForm />
                </Modal>
              )}
      </div>
      </React.Fragment>
      </div>
    </div>
    );
}

export {AppUI};