import React, { useState } from 'react'
import styles from './header.module.css'
import SvgComponent from '../imgs/logo'
import { Link } from 'react-router-dom'
import ListFavoritos from './ListFavoritos'

const Header = () => {

  const [favList, setFavList] = useState(null);

  const handleClick = () => {
    setFavList(!favList)
  }

  favList ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"

  return (
    <div className={styles.headerBg}>
      <div className={styles.header}>
        <SvgComponent width="250px"/>
        <ul className={styles.btnList}>
          <li><Link to="./">FILMES</Link></li>
          {/* https://api.themoviedb.org/3/movie/popular */}
          <li><Link to="./">ATORES</Link></li>
          <li onClick={handleClick}><Link to="./">FAVORITOS</Link></li>
          {favList && <ListFavoritos exit={setFavList}/>}
        </ul>
      </div>
    </div>
  )
}

export default Header
