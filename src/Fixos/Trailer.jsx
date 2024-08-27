import React from 'react'
import style from './modal.module.css'
import Carregando from './Carregando';

const Trailer = ({visible,setVisible,idTrailer}) => {
  const [trailer,setTrailer] = React.useState(null);
  
  fetch(`https://api.themoviedb.org/3/movie/${idTrailer}/videos?api_key=4f621b443c07a81c9346a04256502bfe`).then((response) => {
    return response.json()
  }).then((json) => {
    setTrailer(`https://www.youtube.com/embed/${json["results"][0].key}`)
  })
   
  if(visible && trailer)
    return(<div className={style.frame} onClick={()=>{setVisible(!visible)}}>
        <iframe src={trailer} />
      </div>)
  else
    return null
}

export default Trailer




