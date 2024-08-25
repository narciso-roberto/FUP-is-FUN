import React from 'react'
import style from './home.module.css'
import { GlobalContext } from '../Contexto/ContextoGeral'

const Home = () => {

  const {movies} = React.useContext(GlobalContext)

  if(movies){
    console.log(movies['results'][0])
    return (
      <div className={style.mainBg}>
        <div className={style.main}>
          <h1>Mais relevantes.</h1>
          <section className={style.movies}>
            {movies['results'].map((movie,index) => {
              return (
              <div key={index}>
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}/>
                <div>
                  {movie.title}
                </div>
              </div>)
            })}
          </section>
        </div>
      </div>
    )
  }
  
}

export default Home
