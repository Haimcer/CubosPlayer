import './App.css';
import Logo from './assets/logo.svg';
import Profile from './assets/profile.jpg';
import Next from './assets/next.svg';
import Pause from './assets/pause.svg';
import Play from './assets/play.svg';
import Stop from './assets/stop.svg';
import Previous from './assets/previous.svg';
import Card from './components/card'



function App() {
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
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </main>
    </body>
    <footer>
      <div className='sombra'></div>
      <div className='controle'>
        <div className='informacoesMusica'>
         <div className='musica'>Violão Acústico</div>
         <div className='autor'>Robert Mayer</div>
        </div>
        <div className='interface'>
          <div className='controlesMusica'>
          <img className='botoes' src={Stop} alt="foto de perfil"/>
          <img className='botoes' src={Previous} alt="foto de perfil"/>
          <img className='playStop' src={Play} alt="foto de perfil"/>
          <img className='botoes' src={Next} alt="foto de perfil"/>
          </div>
          <div className='indicator'>
            <div>0</div>
          <div className='barraProgresso'></div>
          <div>3.34</div>

          </div>
         
        </div>
        <div className='alinhamento'></div>
      </div>
    </footer>
    </div>
  );
}

export default App;
