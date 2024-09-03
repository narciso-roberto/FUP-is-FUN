import React from 'react'
import style from './trailer.module.css'
import useFetch from '../../Hooks/useFetch';
import Carregando from '../Carregando';

const Trailer = ({visible,setVisible,idTrailer}) => {
  // const [trailer,setTrailer] = React.useState(null);
  const [video,setVideo] = React.useState(false);

  const {dados,loading,erro,request} = useFetch()
  
  React.useEffect(()=> {
    request(`https://api.themoviedb.org/3/movie/${idTrailer}/videos?api_key=4f621b443c07a81c9346a04256502bfe`)
  },[])
  
   if(erro) return erro
   if(loading) return <Carregando/>
  // mostra se o usuario querer e quando tiver carregado o trailer
  if(visible && dados)
    return(<div className={style.frame} onClick={()=>{setVisible(!visible)} }>

        <iframe src={`https://www.youtube.com/embed/${dados["results"][0].key}`} className={video ? style.borderFrame : ''} onLoad={() => {setVideo(!video)}}/>


      </div>)
  else
    return null
}

export default Trailer




