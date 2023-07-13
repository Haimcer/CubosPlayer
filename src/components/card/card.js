import './card.css';


function Card({title, description, cover}){

  function clickAlbum(){
    const button = document.querySelector('button')
    button?.addEventListener('click',() => {
      console.log('botao clicaco')
    })
  }
 

    return (
      <button onClick={() => clickAlbum()} className='album'>
          <div>
          <img className='capa' src= {cover} alt="foto de capa"/>
          </div>
          <div className='titulo'>{title}</div>
          <div className='descricao'>{description}</div>
        </button>
    )
  }

  export default Card;