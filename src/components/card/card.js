import './card.css';
import { useState } from "react"; 


function Card({title, description, cover, setCurrentSong, songs, id, isCard, setIsCard, currentSong, isPlaying, setIsPlaying, audioRef}){
   let currentIndex = songs.findIndex((song) => song.id === id);
 
  // let i = songs.findIndex((song) => song.id === id)
let isSelected = false;

if(isCard){
  if(id == currentSong.id){
    isSelected = true;
    audioRef.current.play();
   }
}


 async function clickAlbum(){
 setIsCard(!isCard)
  if(isCard){
    audioRef.current.pause()
    setIsPlaying(!isPlaying)
  }else{
    audioRef.current.play()
    setIsPlaying(!isPlaying)
  }
  console.log(isPlaying)
  console.log(isCard)
     await setCurrentSong(songs[currentIndex]);
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