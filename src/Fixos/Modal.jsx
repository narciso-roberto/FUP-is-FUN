import React, { useState } from 'react'
import style from './modal.module.css'
import Trailer from './Trailer'



const Modal = ({movie,exit}) => {

    const [trailer,setTrailer] = useState(false);

  return (
    <div className={style.modalBG} onClick={(e) => {{e.currentTarget == e.target ? exit(): null}}}>
      <div className={style.modal}>
        
        <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="" />

        <Trailer visible={trailer} setVisible={setTrailer} idTrailer={movie.id}/>

        <section className={style.desc}>

            <div className={style.infos}>
                <h1>{movie.original_title}</h1>
                <p>{movie.overview}</p>
            </div>
            <div className={style.acoes}>
                <button>Comprar</button>
                <button className={style.trailer} onClick={() => {setTrailer(!trailer)}}>Ver Trailer</button>
            </div>
        </section>
      </div>
    </div>
  )
}

export default Modal
