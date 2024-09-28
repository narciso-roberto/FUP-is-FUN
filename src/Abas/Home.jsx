import React from 'react'
import style from './home.module.css'
import Carregando from '../Utilidades/Carregando';
import MostrarFilmes from '../Utilidades/ExibirFilmes/MostrarFilmes';
import useFetch from '../Hooks/useFetch';
import Banner from '../Componentes/Banner';
import Footer from '../Componentes/Footer.jsx';
import Header from '../Componentes/Header.jsx';


const Home = () => {

  const {dados,request} = useFetch()
  const [banner,setBanner] = React.useState(null)

  React.useEffect(() => {
    request('https://api.themoviedb.org/3/discover/movie?api_key=4f621b443c07a81c9346a04256502bfe')
  },[])


  let movies=null;
  dados ? movies=dados['results']: ''

    return (
      <div className={style.mainBg}>
        <Header/>
          <div className={style.main}>
            {dados ? <Banner movies={movies} setBanner={setBanner}/> : <Carregando/>}
            <h1 className={style.titlejajaterminaresseaki}>Ola {localStorage.nome}, veja os mais relevantes.</h1>
            {dados && banner ? <MostrarFilmes movies={dados}/> : ''}
          </div>
        <Footer/>
      </div>
    )
  
    // voltar em banner mdoule mais tarde
    // concertar modal rezise hook q dispara toda hora
    // add secao de comentarios
    // ERRO NO CONTEXTO GERAL
  
}

export default Home
