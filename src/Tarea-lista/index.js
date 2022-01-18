import React from "react";

function TareaLista (props) {
    return (
     <section>
         <ul>
            {props.children}
         </ul>
         
     </section>
    );
}

export { TareaLista };