import React from 'react'
import style from '../Abas/home.module.css'
import Stars from '../Utilidades/Stars';
import Modal from '../Utilidades/Modal';

const MostrarFilmes = ({movies}) => {

    const [movie,setMovie] = React.useState(null);
    const [modal,setModal] = React.useState(0)
    const [imgLoad, setImgLoad] = React.useState(false);

  return (
    <section className={style.movies}>
        {movies['results'].map((movie,index) => {
            return (
                <div className={style.card} key={index} onClick={()=>{setModal(!modal);setMovie(movie)}}>
                <img className={style.banner} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} onLoad={()=>{setImgLoad(true);}}/>
                {imgLoad && <div className={style.desc}>
                  <h1 className={style.titulo}>{movie.title}</h1>
                  <Stars nota={movie.vote_average}/>
                </div>}
              </div>)
            })}
            {modal ? <Modal movie={movie} exit={()=>{setModal(!modal)}}/> : null}
    </section>
  )
}

export default MostrarFilmes
