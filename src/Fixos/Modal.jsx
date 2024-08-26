import React from 'react'
import style from './modal.module.css'


const Modal = ({movie,exit}) => {
    console.log(movie)
  return (
    <div className={style.modalBG} onClick={(e) => {{e.currentTarget == e.target ? exit(): null}}}>
      <div className={style.modal}>
        
        <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="" />
        
        <section className={style.desc}>
            <div className={style.infos}>
                <h1>{movie.original_title}</h1>
                <p>{movie.overview}</p>
            </div>
            <div className={style.acoes}>
                <button>Comprar</button>
                <button>Alugar</button>
            </div>
        </section>
      </div>
    </div>
  )
}

export default Modal
