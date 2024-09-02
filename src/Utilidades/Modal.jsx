import React, { useState } from 'react'
import style from './modal.module.css'
import Trailer from './Trailer'
import Carregando from './Carregando'


const Modal = ({movie,exit}) => {

  const [size,setSize] = useState([window.innerWidth,window.innerHeight]);
  const [trailer,setTrailer] = useState(false);
  const [show,setShow] = useState(false)

  React.useEffect(() => {

    const handleResize = () => {
      setSize([window.innerWidth,window.innerHeight])
    }
    
    window.addEventListener('resize',handleResize)



    return () => {window.removeEventListener('resize',handleResize)};
  },[size])

  // let teste = size[0]>800 ? 'backdrop_path' : 'poster_path' 
  // console.log(teste)

  return (
    <div className={style.modalBG} onClick={(e) => {{e.currentTarget == e.target ? exit(): null}}} >
      <div className={style.modal}>
        
        <img src={`https://image.tmdb.org/t/p/original/${movie[size[0]>800 ? 'backdrop_path' : 'poster_path']}`} alt="" onLoad={() => {setShow(true)}}/>

        {/* backdrop_path / poster_path */}
        {/* shows the information when the image is totally loaded*/}
        {show ? (<>
          {trailer && <Trailer visible={trailer} setVisible={setTrailer} idTrailer={movie.id}/>}

          <section className={style.desc}>
  
              <div className={style.infos}>
                  <h1>{movie.original_title}</h1>
                  <p>{ size[0] > 900 ? movie.overview : movie.overview.match(/^((?:\S+\s+){0,29}\S+)/)[0] + '...' }</p>
              </div>
              <div className={style.acoes}>
                  <button>Comprar</button>
                  <button className={style.btnTrailer} onClick={() => {setTrailer(!trailer)}}>Ver Trailer</button>
              </div>
          </section>
          </>) : <Carregando/>}
      </div>
    </div>
  )
}

export default Modal
