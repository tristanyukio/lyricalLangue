import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import "./Flashcards.css";

export default function Flashcards(props) {
  const [words, setWords] = useState([]);

  // useEffect(() => {
  //   async function fetchWords() {
  //     try {
  //       const response = await fetch("http://localhost:3000/cards", {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });
  //       const data = await response.json();
  //       setWords(data);
  //     } catch (err) {
  //       alert(err);
  //     }
  //   }
  //   fetchWords();
  // }, []);

  const line = words.map((word, index) => (
    <div 
      className="line-word"
      key={index}>
        
      <div className="word-one"><p>{word.word}</p></div>
      <div className="word-two"><p>{word.definition}</p></div>
      
      </div>
  ))
  console.log(line)
  return (
    <div className="flashcards">
      <Navbar />

      <div className="character-card">
        <div className="word-column">
          <p className="word-title">Word</p>
        </div>
        <div className="definition-one">
          <p className="word-title">Definition</p>
        </div>
      </div>
      <div>{line}</div>
     
    </div>
  );
}
