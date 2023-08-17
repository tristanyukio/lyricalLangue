import React from "react";
import "./Carddef.css";

export default function Carddef(props) {
    console.log('updated check', props)
    let def = props.props.selectedInputs

    return (
        <div className="definition">
            <div>
                <h3>Définition</h3>
            </div>
            <div className="de">
               
            {def && <p>{def}</p>}
            </div>
        </div>
    );
}
