import { useEffect, useRef, useState } from 'react';
import './App.css';
import Logo from './assets/logo.svg';
import Profile from './assets/profile.jpg';
import Card from './components/card/card';
import Controls from './components/controls/controls';
import './musics';
import { musics } from './musics';



function App() {
  const audioRef = useRef(null);
  const [songs] = useState(musics);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isCard, setIsCard] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);


  useEffect(() => {
    const audioElement = audioRef.current;

    const updateTime = () => {
      setCurrentTime(audioElement.currentTime);
    };

    audioElement.addEventListener('timeupdate', updateTime);

    return () => {
      audioElement.removeEventListener('timeupdate', updateTime);
    };
  }, []);

  

  const calculateProgress = () => {
  if (isPlaying) { const audioElement = audioRef.current;
    const progress = (audioElement.currentTime / audioElement.duration) * 100;
    return `${progress}%`;}
  };

  function setIndex() {
    setCurrentSong(songs[0])
    console.log(currentSong)
  }
  // onClick={()=> setIndex()}
  return (
    <div className="background">
      <header className='header'>
        <div>
          <img className='logo' src={Logo} alt="logo escrito cubos player" />
        </div>
        <div className='perfil'>
          <div className='imgprofile' alt="foto de perfil" style={{ backgroundImage: `url(${Profile})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '3vw',
        height: '6vh'}} > </div>
          <p className='mensagem'>Bem vindo, Allan.</p>
        </div>
      </header>
      <body >
        <section className='playList'>
          <div className='nomePlaylist'>The best play list</div>
          <div className='div'></div>
        </section>

        <main className='main'>
          {
            musics.map((music) => <Card
              audioRef={audioRef}
              id={music.id}
              key={music.id}
              title={music.title}
              cover={music.cover}
              description={music.description}
              setCurrentSong={setCurrentSong}
              currentSong={currentSong}
              songs={songs}
              setIsPlaying={setIsPlaying}
              isPlaying={isPlaying}
              isCard={isCard}
              setIsCard={setIsCard}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />,
            )
          }

        </main>
      </body>
      <footer>
        <div className='controle'>

          <div className='interface'>
            <Controls
              audioRef={audioRef}
              musica={musics}
              setCurrentSong={setCurrentSong}
              songs={songs}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              currentSong={currentSong}
              isCard={isCard}
              setIsCard={setIsCard}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />
            <div className='row'>
            <div className='alinhamento'></div>
              <div class="progress-bar">
                 <div class="progress" style={{ width: calculateProgress() }}></div> 
                <div className='alinhamento'></div>
              </div>
              </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
