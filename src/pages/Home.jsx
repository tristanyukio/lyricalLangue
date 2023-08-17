import React from "react";
import Navbar from "../components/Navbar.jsx";
import { useState, useEffect, useRef} from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"
export default function Home() {

    const navigate = useNavigate();

    function listenPage(){
      navigate("/listen");
    }
    function flashcardPage(){
        navigate("/cards");
      }
    return (
        <div className="home">
            <Navbar />
              <div class="container">
                <div class="ecoute">
                    <div>
                    <button class="btn" onClick={listenPage}>ECOUTE</button>
                </div>
                </div>
                <div class="cards">
                <div>
                <button class="btn-2" onClick={flashcardPage} >MOTS</button>
                </div>
                </div>
                </div>
            <div className="contain">
                        <div className="outer">
                  
                            <div className="outer-1"><p>BIENVENUE, USER </p></div>
                            <div className="outer-2"><p>Daily Streak: 1🔥</p></div>
                            <div className="outer-3"><p>Word of the day:</p></div>
                            {/* <div clasNames="outer-3">Word of the day: </div> */}
               
                        </div>
            </div>
        </div>
    )
};



