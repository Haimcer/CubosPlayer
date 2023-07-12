import './card.css';

function Card(){
    return (
      <div className='album'>
          <div>
          <img className='capa' src= 'https://storage.googleapis.com/pedagogico/frontend-files/aula-react-referencias-eventos/img2.jpg' alt="foto de perfil"/>
          </div>
          <div className='titulo'>Violão Acust.</div>
          <div className='descricao'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</div>
        </div>
    )
  }

  export default Card;