import './App.css';
import './musics';
import Logo from './assets/logo.svg';
import Profile from './assets/profile.jpg';
import Card from './components/card/card'
import { musics } from './musics';
import Controls from './components/controls/controls';
import { useRef } from 'react';
import { useState } from "react"; 



function App() {
  
  const [songs] = useState(musics);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);

  return (
    <div className="background">
    <header className='header'>
      <div>
      <img className='logo' src={Logo} alt="logo escrito cubos player"/>
      </div>
      <div className='perfil'>
      <img className='imgprofile' src={Profile} alt="foto de perfil"/>
      <p className='mensagem'>Bem vindo, Allan.</p>
      </div>
    </header>
    <body>
      <section className='playList'>
    <div className='nomePlaylist'>The best play list</div>
    <div className='div'></div>
      </section>
   
    <main className='main'>
        {
          musics.map((music)=> <Card
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
         />
          <div className='indicator'>
          <div className='alinhamento'></div>
            <div>0</div>
          <div className='barraProgresso'></div>
          <div>{musics[0].url.duration}</div>

          </div>
         
        </div>
      </div>
    </footer>
    </div>
  );
}

export default App;
