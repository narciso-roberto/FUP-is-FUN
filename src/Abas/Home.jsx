import React from 'react'
import style from './home.module.css'
import Carregando from '../Utilidades/Carregando';
import MostrarFilmes from '../Utilidades/ExibirFilmes/MostrarFilmes';
import useFetch from '../Hooks/useFetch';
import Banner from '../Componentes/Banner';
import Footer from '../Componentes/Footer.jsx';
import Header from '../Componentes/Header.jsx';


const Home = () => {

  const {dados,request,loading,erro} = useFetch()

  React.useEffect(() => {
    request('https://api.themoviedb.org/3/discover/movie?api_key=4f621b443c07a81c9346a04256502bfe')
  },[])

    
    if(erro) return <div style={{color: 'black'}}>Erro</div>
    if(loading) return <Carregando/>
    if(dados){
      return (
        <div className={style.mainBg}>
          <Header/>
            <div className={style.main}>
              <Banner movies={dados.results}/>
              <h1 className={style.titlejajaterminaresseaki}>Ola {localStorage.nome}, veja os mais relevantes.</h1>
              <MostrarFilmes movies={dados}/>
            </div>
          <Footer/>
        </div>
      )
    }
      


    
  
    // voltar em banner mdoule mais tarde
    // concertar modal rezise hook q dispara toda hora
    // add secao de comentarios
    // ERRO NO CONTEXTO GERAL
  
}

export default Home
