import React from 'react'
import style from './banner.module.css'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Banner = ({movies,setBanner}) => {

  const [slide,setSlide] = React.useState(0);
  const [fade,setFade] = React.useState(true);

  React.useEffect(() => {
    const mudar = setInterval(() => {
      setFade(false)
      
      setTimeout(() => {
        slide<19 ? setSlide(slide+1) : setSlide(0)
        setFade(true)
        },1000)
      },6000)
      return () => {clearInterval(mudar)}
  },[slide])




  let movie = movies[slide];
    return (
    <div className={style.banner} >
        <img
        className={fade ? style.fadeIn :style.fadeOut}
        src={`https://image.tmdb.org/t/p/original/${movie['backdrop_path']}`}
        onLoad={() => {setBanner(true)}}
        />

        
        <div className={style.skipBack}>
          <button className={`${style.bannerBtn} ${style.back}`} disabled={!fade} onClick={() => {
            setFade(false)
            setTimeout(() => {
            setSlide(slide-1)
            setFade(true)
          },1000)
          }}><IoIosArrowBack/></button>

          <div className={`${style.desc} ${fade ? style.fadeIn :style.fadeOut}`}>
            <h1>{movie.original_title}</h1>
            <p>{movie.overview}</p>
            <button>COMPRAR</button>
          </div>

          <button className={`${style.bannerBtn} ${style.forward}`} disabled={!fade} onClick={() => {
            setFade(false)
            setTimeout(() => {
            setSlide(slide+1)
            setFade(true)
          },1000)
          }}><IoIosArrowForward/></button>

        </div>
    </div>
  )
}

export default Banner
