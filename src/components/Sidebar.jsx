import React from "react";
import "./Sidebar.css"
import Carddef from "../components/Carddef.jsx";
export default function Sidebar(props) {
        const arr = []
        for(let artist in props.artists){
            const art = artist
            arr.push(
            <div className="outer-box" onClick={() => props.player(art)}>
                <div className="names">
                <div>
                  {props.artists[artist].trackName}
                </div>
                <div>{props.artists[artist].artistName}</div>
              </div>
            </div>
            )
        }
    return (
     <div className="sidebar">
        <div className="songs">
            <h2>Chansons</h2>
          {arr}
        </div>
        <div className="card">
        <Carddef props={props}/>
        </div>
    </div>
    )
};
