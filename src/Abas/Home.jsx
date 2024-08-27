import React from 'react'
import style from './home.module.css'
import { GlobalContext } from '../Contexto/ContextoGeral'
import Modal from '../Fixos/Modal';

import Stars from '../Fixos/Stars';


const Home = () => {

  const url = 'https://api.themoviedb.org/3/movie/533535/videos?api_key=4f621b443c07a81c9346a04256502bfe';
    fetch(url)
    .then(res => res.json())
    .then(json => console.log(json))

  const [modal,setModal] = React.useState(0)
  const [cont,setCont] = React.useState(null);

  const {movies} = React.useContext(GlobalContext)

  if(movies){
    // console.log(movies['results'][0])
    return (
      <div className={style.mainBg}>
        <div className={style.main}>
          <h1 className={style.titlejajaterminaresseaki}>Mais relevantes.</h1>
          <section className={style.movies}>
            {movies['results'].map((movie,index) => {
              return (
              <div className={style.card} key={index} onClick={()=>{setModal(!modal);setCont(movie)}}>
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}/>
                <div className={style.desc}>
                  <p className={style.titulo}>{movie.title}</p>
                  {/* <p className={style.overview}>{movie.overview}</p> */}
                  <Stars nota={movie.vote_average}/>
                </div>
              </div>)
            })}
          </section>
            {modal ? <Modal movie={cont} exit={()=>{setModal(!modal)}}/> : null}
        </div>
      </div>
    )
  }
  
}

export default Home
