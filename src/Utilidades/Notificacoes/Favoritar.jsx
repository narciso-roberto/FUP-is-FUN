import React from 'react'
import style from './favoritar.module.css'

const Favoritar = ({setFavorito}) => {

    React.useEffect(() => {
        const intervalo = setTimeout(() => {
            setFavorito(false)
        },2400)
        console.log(1)

        return () => {clearTimeout(intervalo);}
    },[])

  return (
    <div className={style.notf}>
        <div className={style.notfMsg}>
            <h1>Voce favoritou esse filme</h1>
        </div>
    </div>
  )
}

export default Favoritar
