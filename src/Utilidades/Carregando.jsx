import React from 'react'
import style from './carregando.module.css'

const Carregando = () => {
  return (
    <div className={style.loadingBG}>
      <div className={style.loading}></div>
    </div>
  )
}

export default Carregando
