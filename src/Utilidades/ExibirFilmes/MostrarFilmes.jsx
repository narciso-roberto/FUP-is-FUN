import React from 'react'
import style from './mostrarfilmes.module.css'
import Stars from './Stars';
import Modal from '../Modal/Modal';
import { GlobalContext } from '../../Contexto/ContextoGeral';
import { FaHeart } from "react-icons/fa";

const MostrarFilmes = ({movies}) => {

  const {favoritos,buscarFavoritos} = React.useContext(GlobalContext)


    const [movie,setMovie] = React.useState(null);
    const [modal,setModal] = React.useState(0)
    const [imgLoad, setImgLoad] = React.useState(false);

    React.useEffect(() => {
      buscarFavoritos()
    },[])

  return (
    <section className={style.movies}>
        {movies['results'].map((movie,index) => {
            return (
                <div className={style.card} key={index} onClick={()=>{setModal(!modal);setMovie(movie)}}>
                {favoritos.includes(movie.original_title) ? <span className={style.favoritos}><FaHeart color='#eb4f7e' fontSize="1.5rem"/></span> : null}
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
