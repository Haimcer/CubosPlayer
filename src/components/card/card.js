import './card.css';
import { useState } from "react"; 


function Card({title, description, cover, setCurrentSong, songs, id, isCard, setIsCard, currentSong}){
   let currentIndex = songs.findIndex((song) => song.id === id);
 
  // let i = songs.findIndex((song) => song.id === id)
let isSelected = false;

if(isCard){
  if(id == currentSong.id){
    isSelected = true;
   }
}


 async function clickAlbum(){
  setIsCard(!isCard)
  isSelected = true;
     await setCurrentSong(songs[currentIndex]);
    // console.log(currentIndex)
    // console.log(i)
 
  }
 

    return (
      <button onClick={()=> clickAlbum()} className={isSelected ? 'albumisSelect' : 'album'}>
          <div>
          <img className='capa' src= {cover} alt="foto de capa" />
          </div>
          <div className='titulo'>{title}</div>
          <div className='descricao'>{description}</div>
        </button>
    )
  }
  

  export default Card;