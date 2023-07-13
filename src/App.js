import './App.css';
import './musics';
import Logo from './assets/logo.svg';
import Profile from './assets/profile.jpg';
import Card from './components/card/card'
import { musics } from './musics';
import Controls from './components/controls/controls';
import { useRef } from 'react';
import { useState } from "react"; 



function App({nomeMusica, nomeAutor}) {
  const [nome, setNome] = useState(nomeMusica);
  const [autor, setAutor] = useState(nomeAutor);
  const audioRef = useRef(0);
  console.log(nome)
  console.log('aasdsa')
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
          key={music.id}
          title={music.title}
          cover={music.cover}
          description={music.description}         
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
         />
          <div className='indicator'>
          <div className='alinhamento'></div>
            <div>0</div>
          <div className='barraProgresso'></div>
          <div>3.34</div>

          </div>
         
        </div>
      </div>
    </footer>
    </div>
  );
}

export default App;
