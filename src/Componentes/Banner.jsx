import React from 'react'

import style from './banner.module.css'

const Banner = ({movies}) => {

  const [slide,setSlide] = React.useState(0);

  const mudar = setInterval(() => {
    if(slide+1 > 19){
      setSlide(0)
    }else{
      setSlide(slide+1)
    }
    clearInterval(mudar)
  },6000)

  let movie = movies[slide];
    
  return (
    <div className={style.banner}>
        <img src={`https://image.tmdb.org/t/p/original/${movie['backdrop_path']}`}/>

        <div className={style.desc}>
            <h1>{movie.original_title}</h1>
            <p>{movie.overview}</p>
            <button>COMPRAR</button>
        </div>
        
    </div>
  )
}

export default Banner
