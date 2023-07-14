import './card.css';
import { useState } from "react"; 


function Card({title, description, cover, setCurrentSong, songs, id,}){

  let currentIndex = songs.findIndex((song) => song.id === id);

 async function clickAlbum(){
  
    await setCurrentSong(songs[currentIndex]);
    console.log(currentIndex)
  }
 

    return (
      <button onClick={()=> clickAlbum()} className='album'>
          <div>
          <img className='capa' src= {cover} alt="foto de capa" />
          </div>
          <div className='titulo'>{title}</div>
          <div className='descricao'>{description}</div>
        </button>
    )
  }
  

  export default Card;