import React from 'react'
import style from './favoritar.module.css'

const Favoritar = ({setNotificacao,notificacao}) => {

    React.useEffect(() => {
        const intervalo = setTimeout(() => {
            setNotificacao(false)
        },2400)

        return () => {clearTimeout(intervalo);}
    },[])

  return (
    <div className={style.notf}>
        <div className={style.notfMsg}>
            <h1>{notificacao}</h1>
        </div>
    </div>
  )
}

export default Favoritar
