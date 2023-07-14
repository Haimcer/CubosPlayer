import Next from '../../assets/next.svg';
import Pause from '../../assets/pause.svg';
import Play from '../../assets/play.svg';
import Stop from '../../assets/stop.svg';
import Previous from '../../assets/previous.svg';
import './controls.css';




export default function Controls({ audioRef, songs, currentSong, isPlaying, setIsPlaying, setCurrentSong,isCard, setIsCard, setCurrentIndex  }) {

     let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
     


    const playPause = () => {
		if (isPlaying) {
      setIsCard(!isCard)
			audioRef.current.pause();
			setIsPlaying(!isPlaying);
		} else {
      setIsCard(!isCard)
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

      setCurrentSong(songs[0])
      
      isPlaying ? setIsCard(!isCard) : setIsCard(isCard);
       isPlaying ? setIsPlaying(!isPlaying) : setIsPlaying(isPlaying);
      
     
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

   async function botaoNext() {

  
       await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      //  isPlaying ? setIsPlaying(isPlaying) : setIsPlaying(!isPlaying);

       console.log(currentSong.url)
       console.log(currentSong.title)
       console.log(currentSong.artist)
       if(isPlaying){
        setPlay()
      }
      }

      async function botaoReturn() {
       
        if ((currentIndex - 1) % songs.length === -1) {
            await setCurrentSong(songs[songs.length - 1]);
        } else {
            await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
        } 
        if(isPlaying){
          setPlay()
        }
        // isPlaying ? setIsPlaying(isPlaying) : setIsPlaying(!isPlaying);
          }
  
       
    return (
        
        <div className='controlesMusica'>
        <div className='informacoesMusica'>
        <div className='musica'>{!isPlaying ? '' : currentSong.title }</div>
        <div className='autor'>{!isPlaying ? '' : currentSong.artist }</div>
        </div>
        <audio src={currentSong.url} ref={audioRef} />
        <div className = 'optionButtons'>
        <button onClick={() => botaoStop()}><img className='botoes' src={Stop} alt="foto de perfil"/></button>
        <button onClick={() => botaoReturn()}><img className='botoes' src={Previous} alt="foto de perfil"/></button>
        <button onClick={playPause} ><img className={isPlaying ? 'stop' : 'playStop'} src={iconButton()} alt="foto de perfil"/></button>
        <button onClick={() => botaoNext()}><img className='botoes' src={Next} alt="foto de perfil"/></button>
        </div>
        </div>

         
    )
  }