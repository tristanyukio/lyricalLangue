import React from "react";
import "./Navbar.css"
import { useNavigate } from "react-router-dom";
export default function Navbar() {
    const navigate = useNavigate();
    function home(){
        navigate("/home");
    }
    function mots(){
        navigate("/cards");
    }
    function listen(){
        navigate("/listen");
    }
    // function profile(){
    //     navigate("./cards");
    // }
    return (
     <nav>
        <ul>
        <li className="logo" onClick={home}>LyricalLangue </li>
            <div className="pages">
                <li className="pages-one" onClick={listen} >Ecoute</li>
                <li className="pages-one" onClick={mots}>Mots</li>
                <li><button className="button">Profile</button></li>
            </div>
        </ul>
    </nav>
    )
};