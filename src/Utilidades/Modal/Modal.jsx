import React, { useState } from 'react';
import style from './modal.module.css';
import Trailer from './Trailer';
import Carregando from '../Carregando';
import Favoritar from '../Notificacoes/Favoritar';
import { FaHeart } from "react-icons/fa";
import { GlobalContext } from '../../Contexto/ContextoGeral';
import Button from '../Button';

const Modal = ({movie,exit}) => {

  const {favoritos,REMOVER_FAVORITO,ADICIONAR_FAVORITO} = React.useContext(GlobalContext)
  

  const [size,setSize] = useState([window.innerWidth,window.innerHeight]);
  const [trailer,setTrailer] = useState(false);
  const [mostrarTexto,setMostrarTexto] = useState(false)
  const [notificacao,setNotificacao] = useState('');
  

  React.useEffect(() => {

    const handleResize = () => {
      setSize([window.innerWidth,window.innerHeight])
    }
    
    window.addEventListener('resize',handleResize)


    return () => {window.removeEventListener('resize',handleResize)};
  },[size])

  const clickFavorito = ({currentTarget}) => {
    if(favoritos.includes(movie.original_title)){
      currentTarget.classList.remove(`${style.selected}`);
      setNotificacao('Voce desfavoritou esse filme');
      REMOVER_FAVORITO(movie.original_title)

    }else{
      currentTarget.classList.add(`${style.selected}`);
      setNotificacao('Voce favoritou esse filme');
      ADICIONAR_FAVORITO(movie.original_title)

    }
  }
  
  return (
    <div className={style.modalBG} onClick={(event) => {{event.currentTarget == event.target ? exit(): null}}} >
      <div className={style.modal}>
        
        <img src={`https://image.tmdb.org/t/p/original/${movie['backdrop_path']}`} alt="" onLoad={() => {setMostrarTexto(true)}}/>

        {mostrarTexto ? (<>
          {trailer && <Trailer visible={trailer} setVisible={setTrailer} idTrailer={movie.id}/>}

          <section className={style.desc}>
  
              <div className={style.infos}>
                  <h1>{movie.original_title}</h1>
                  <p>{ size[0] > 900 ? movie.overview : movie.overview.match(/^((?:\S+\s+){0,29}\S+)/)[0] + '...' }</p>
              </div>
              <div className={style.acoes}>

              <Button classe={style.btnFavorito} onClick={clickFavorito}>
                Favoritar <FaHeart color={favoritos.includes(movie.original_title)? '#eb4f7e' : ""} fontSize={'1.5rem'}/>
              </Button>

                <Button classe={style.btnTrailer} onClick={() => {setTrailer(!trailer)}} msg={'Ver Trailer'}/>
              </div>
          </section>
          </>) : <Carregando/>}
          {notificacao && <Favoritar setNotificacao={setNotificacao} notificacao={notificacao}/>}
      </div>
    </div>
  )
}

export default Modal
