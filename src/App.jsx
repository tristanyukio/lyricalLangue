import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Listen from "./pages/Listen.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Flashcards from "./pages/Flashcards.jsx";
import { useState , useEffect} from "react";
import Register from "./pages/Register.jsx";
import Practice from "./pages/Practice.jsx";


const App = () => {
  const [selectedInputs, setSelectedInputs] = useState();
  const [flashWords, setFlashWords] = useState([]);

  const handleInputSelect = (index) => {
    const selection = window.getSelection();
    const selectedText = selection.toString().trim();
    const term = selectedText;
    const url = `https://dicolink.p.rapidapi.com/mot/${selectedText}/definitions`;
    const options = {
      method: "GET",
      headers: {
        'X-RapidAPI-Key': '7e804892e7msh569b0e23c7f1171p13013fjsnd83ea953b362',
        'X-RapidAPI-Host': 'dicolink.p.rapidapi.com'
      }
    };

    try {
      fetch(url, options)
        .then(response => response.json())
        .then(result => {
          console.log('res', result)
          const definition = result[0].definition;
          const word = result[0].mot;
          setSelectedInputs(definition);
          setFlashWords(word)
        })
        .catch(error => console.error(error));
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    async function wordSave(event) {

      // event.preventDefault();
      try {
        const response = await fetch('http://localhost:3000/listen', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            word: flashWords,
            definition: selectedInputs,
          })
        });
        console.log(response);
        const data = await response.json();
        console.log(data);
      } catch (err) {
        alert(err);
      }
    }

    wordSave()
    // setFlashWords((prevState) => [...prevState, ...selectedInputs]);
   
  }, [flashWords]);

  console.log(flashWords)
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route
          path="listen"
          element={<Listen selectedInputs={selectedInputs} handleInputSelect={handleInputSelect} />}
        />
        
        <Route
          path="cards"
          element={<Flashcards flashWords={flashWords} />}
        />
         <Route
          path="practice"
          element={<Practice practice={Practice} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
  