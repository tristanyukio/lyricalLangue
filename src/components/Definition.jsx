import React from "react";
import "./Definition.css";

export default function Definition({selectedInputs}) {
    
    return (
        <div class="prop">
  
        <div>word</div>
        <div>Defintiion</div>
         <div>
         <input type="checkbox"/>   
        <button>Edit</button>
        <button>delete</button>
       </div>
          
        </div>

    );
}
