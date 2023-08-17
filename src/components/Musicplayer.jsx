import React, { useState, useEffect, useRef} from "react";
import "./Musicplayer.css";
import Sidebar from "../components/Sidebar.jsx";
export default function Musicplayer({onDoubleClick, lyrics, currentPlayer, artists}) {
  const [inputColors, setInputColors] = useState([]);
  const [inputValues, setInputValues] = useState([]);
  const [fillCount, setFillCount] = useState([]);
  
  const handleInputChange = (event, index) => {
    const words = lyrics.split(' ');
    if (event.keyCode === 13 || event.key === 'Enter') {
        console.log(words[index])

    const input = event.target.value;
    if (input === words[index]) {
        const updatedInputColors = [...inputColors];
        updatedInputColors[index] = '#277827';
        
        setInputColors(updatedInputColors);
      } else {
        const updatedInputColors = [...inputColors];
        updatedInputColors[index] = '#EE2424';
        const updatedFillCount = [...fillCount];

        if (!updatedFillCount[index]) {
          updatedFillCount[index] = 1;
        } else {
          updatedFillCount[index]++;
        }

        if (updatedFillCount[index] === 3) {
          words[index] += ' ';
          updatedInputColors[index] = 'inherit';
        }

        setFillCount(updatedFillCount);
        setInputColors(updatedInputColors);
      } 
   }
  };

  
  const renderLyrics = () => {
    const words = lyrics.split(' ');

    const renderWords = words.map((word, index) => {
        const isFilled = fillCount[index] >= 3;
      if ((index + 1) % 5 === 0) {
        return (
            <input
            className="inputs"
            key={index}
            style={{ backgroundColor: inputColors[index] }}
            type="text"
            readOnly={isFilled}
            value={isFilled ? word : inputValues[index]}
            onKeyDown={(event) => handleInputChange(event, index)}
            // onSelect={(event) => handleInputSelect(event, index)}
          />
        );
      } else {
        return(
            <span
            key={index}
            style={{ backgroundColor: inputColors[index] }}
            onDoubleClick={() => onDoubleClick(index)}
          >
            {word + ' '}
          </span>
        )
      }
    });
    return renderWords;
  };


  return (
    <div className="musicplayer">
      <iframe src={currentPlayer.player} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture" loading="lazy"></iframe>

    
      <div className="lyricsContainer">
        {renderLyrics()}
      </div>
    </div>
  );
  }

  