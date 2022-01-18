import React from "react";
import './Tarea-item.css';

function TareaItem (props) {


    return (
         <li className="TodoItem">
                <span className={`Icon Icon-check ${props.complete && 'Icon-check--active'}`}
                 onClick={props.onComplete}
                ><i class="fas fa-check"></i></span>
                <p className="TodoItem-p"
                >{props.text}</p>
                <span className="Icon Icon-delete"
                onClick={props.onDelete}
                ><i class="fas fa-eraser"></i></span>

         </li>     
    );
}

export { TareaItem };