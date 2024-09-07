import React from 'react'
import style from './home.module.css'
import Carregando from '../Utilidades/Carregando';
import MostrarFilmes from '../Utilidades/ExibirFilmes/MostrarFilmes';
import useFetch from '../Hooks/useFetch';
import Banner from '../Componentes/Banner';

const Home = () => {

  const {dados,request} = useFetch()

  React.useEffect(() => {
    request('https://api.themoviedb.org/3/discover/movie?api_key=4f621b443c07a81c9346a04256502bfe')
  },[])


  let movies=null;
  dados ? movies=dados['results']: ''

    return (
      <div className={style.mainBg}>
        <div className={style.main}>
          {dados ? <Banner movies={movies}/> : <Carregando/>}
          <h1 className={style.titlejajaterminaresseaki}>Mais relevantes.</h1>
          {dados ? <MostrarFilmes movies={dados}/> : ''}
        </div>
      </div>
    )
  
  
}

export default Home
