import Next from '../../assets/next.svg';
import Pause from '../../assets/pause.svg';
import Play from '../../assets/play.svg';
import Stop from '../../assets/stop.svg';
import Previous from '../../assets/previous.svg';
import './controls.css';
import { useState } from "react"; 
import App from '../../App';



export default function Controls({ audioRef, musica }) {
     const [songs, setSongs] = useState(musica);
	 const [currentSong, setCurrentSong] = useState(songs[0]);
     const [isPlaying, setIsPlaying] = useState(false);
     let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    // const [musicas, setMusicas] = useState(musica);
    function botaoPause() {
      audioRef.current.pause();
    }

    const playPause = () => {
		if (isPlaying) {
			audioRef.current.pause();
			setIsPlaying(!isPlaying);
		} else {
			audioRef.current.play();
			setIsPlaying(!isPlaying);
		}
	};

    const iconButton = () => {
		if (isPlaying) {
			return Pause;
		} else {
			return Play;
		}
	};
  
    function setPlay() {
      audioRef.current.play();
      
    }
  
    function botaoStop() {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

   async function botaoNext() {

       botaoStop();
       await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
       setPlay();
       console.log(currentSong.url)
       console.log(currentSong.title)
       console.log(currentSong.artist)
      }

      async function botaoReturn() {
        botaoStop();
        if ((currentIndex - 1) % songs.length === -1) {
            await setCurrentSong(songs[songs.length - 1]);
        } else {
            await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
        } 
        setPlay();
          }
  
       
    return (
        
        <div className='controlesMusica'>
        <div className='informacoesMusica'>
        <div className='musica'>{currentSong.title}</div>
        <div className='autor'>{currentSong.artist}</div>
        </div>
        <audio src={currentSong.url} ref={audioRef} />
        <div className = 'optionButtons'>
        <button onClick={() => botaoStop()}><img className='botoes' src={Stop} alt="foto de perfil"/></button>
        <button onClick={() => botaoReturn()}><img className='botoes' src={Previous} alt="foto de perfil"/></button>
        <button onClick={playPause} ><img className='playStop' src={iconButton()} alt="foto de perfil"/></button>
        <button onClick={() => botaoNext()}><img className='botoes' src={Next} alt="foto de perfil"/></button>
        </div>
        </div>

         
    )
  }