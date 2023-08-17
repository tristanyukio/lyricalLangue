import React from "react";
import Navbar from "../components/Navbar.jsx";
import Musicplayer from "../components/Musicplayer.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Flashcards from "../pages/Flashcards.jsx";
import { useState, useEffect, useRef} from "react";
import "./Listen.css"
export default function Listen({selectedInputs, handleInputSelect}) {
    const [lyrics, setLyrics] = useState('');
    const [currentPlayer, setCurrentPlayer] = useState({ 'artistName': 'La Femme', 'trackName': 'Où va le monde', 'player': 'https://open.spotify.com/embed/track/6M2ZYgZ2cdu5oCHGI8wamV?utm_source=generator&theme=0'});
    const [artists, setArtists] = useState({
        'AOne': {
          'artistName': 'La Femme',
          'trackName': 'Où va le monde',
          'player': 'https://open.spotify.com/embed/track/6M2ZYgZ2cdu5oCHGI8wamV?utm_source=generator&theme=0'
        },
        'ATwo': {
          'artistName': 'Orelsan',
          'trackName': 'Jour meilleur',
          'player': 'https://open.spotify.com/embed/track/6VOUfCrjmxH62oijWgbC6O?utm_source=generator&theme=0'
        },
        'AThree': {
          'artistName': 'Bigflo & Oli',
          'trackName': 'Dommage',
          'player': 'https://open.spotify.com/embed/track/0J2a0afQcr63ymGo5hKCDo?utm_source=generator&theme=0'
        },
        'AFour': {
          'artistName': 'Orelsan',
          'trackName': 'La Quête',
          'player': 'https://open.spotify.com/embed/track/0w6lsLBvhtGcqMYA7MB7r6?utm_source=generator&theme=0'
        },
        'AFive': {
          'artistName': 'Angèle',
          'trackName': 'Balance ton quoi',
          'player': 'https://open.spotify.com/embed/track/2jX5c5RFp0A9E1GDsvGxIa?utm_source=generator&theme=0'
        },
        'ASix': {
            'artistName': 'Casseurs Flowters',
            'trackName': 'Si facile',
            'player': 'https://open.spotify.com/embed/track/7GfmLz1shp0aMwkPYHan0y?utm_source=generator&theme=0'
          },
        'ASevan': {
            'artistName': 'Stromae',
            'trackName': 'Sante',
            'player': 'https://open.spotify.com/embed/track/3vXnuFnC5RhPGwsFi0ORcI?utm_source=generator&theme=0'
          },
        'AEight':{
            'artistName': 'Stromae',
            'trackName': 'Papaoutai',
            'player': 'https://open.spotify.com/embed/track/1QFw2xxyQtgKjlrMCEqsNj?utm_source=generator&theme=0'
          }
      });
      

    // useEffect(() => {
    //     console.log(currentPlayer)
    //     // let key = Object.keys(currentPlayer);
    //     let newKey = currentPlayer.artistName
    //     let tr = currentPlayer.trackName
    //     console.log(tr)
    //     // let track = currentPlayer[key].trackName
    //     // console.log('tr', key)
    //     const apiKey = 'a3cb88f87311282efdb0ccdb44f5975f';
    //     // const artistName = 'La Femme';
    //     // const trackName = 'Où va le monde';
    //     const searchUrl = `https://api.musixmatch.com/ws/1.1/track.search?q_artist=${encodeURIComponent(newKey)}&q_track=${encodeURIComponent(tr)}&apikey=${apiKey}`;

        

        fetch(searchUrl)
          .then(response => response.json())
          .then(data => {
              const trackKey = data.message.body.track_list[0].track.track_id;

              const lyricsUrl = `https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${trackKey}&apikey=${apiKey}`;

              fetch(lyricsUrl)
                .then(response => response.json())
                .then(lyricsData => {
                  if (lyricsData.message.body.lyrics) {
                    let lyrics = lyricsData.message.body.lyrics.lyrics_body;
                    lyrics = lyrics.replace(/\n/g, ' ');
                    lyrics = lyrics.replace(/[,]/g, '');
                    console.log(lyrics)
                    setLyrics(lyrics);
                  } else {
                    setLyrics('Lyrics not found.');
                  }
                })
                .catch(error => {
                  console.error('Error retrieving lyrics:', error);
                });
            
          })
          .catch(error => {
            console.error('Error retrieving track information:', error);
          });
      }, [currentPlayer]);


    const player = (artist) => {
        console.log(artist)
        const newPlayerKey = artist
        console.log(12312312,artists[newPlayerKey])
        setCurrentPlayer(artists[newPlayerKey])
        return
    }

    return (
        <div>
            <Navbar />
            <div className="layout">
               <Sidebar 
               selectedInputs={selectedInputs}
               artists={artists}
               player={player}
               />
               <Musicplayer
               onDoubleClick={handleInputSelect}
               lyrics={lyrics}
               currentPlayer={currentPlayer}
               artists={artists}
               />
            </div>
        </div>
    )
};

