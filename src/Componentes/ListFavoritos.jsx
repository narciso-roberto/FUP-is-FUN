import React from 'react'
import style from './listfavoritos.module.css'
import { GlobalContext } from '../Contexto/ContextoGeral.jsx';
import Button from '../Utilidades/Button.jsx'
import { FaTrash } from "react-icons/fa";
import Favoritar from '../Utilidades/Notificacoes/Favoritar.jsx';

const ListFavoritos = ({exit}) => {

    const {favoritos,movies,REMOVER_FAVORITO} = React.useContext(GlobalContext)
    const [notificacao,setNotificacao] = React.useState('')

    const FilmesFavoritos = movies.results.filter((objetoFilm) => {
        return favoritos.includes(objetoFilm.original_title)
    })

    const handleClickout = ((e) => {
        if(e.target == e.currentTarget){
            exit(false)
        }
    })

    const handleDelete = (alvo) => {
      REMOVER_FAVORITO(alvo)
      setNotificacao('voce desfavoritou esse filme')
    }

  return (
    <div className={style.favListBg} onClick={handleClickout}>
      <section className={style.favList}>
        <h1>FAVORITOS</h1>
        <ul className={style.filmes}>
            {FilmesFavoritos.map((filme,index) => {
                return <li key={index} className={style.cartFilme}>
                    <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}/>
                    <Button classe={style.delet} onClick={() => {handleDelete(filme.original_title)}}> 
                        <FaTrash fontSize={'2rem'}/>
                    </Button>
                </li>
            })}
        </ul>
      </section>
      {notificacao && <Favoritar setNotificacao={setNotificacao} notificacao={notificacao}/>}
    </div>
  )
}

export default ListFavoritos
