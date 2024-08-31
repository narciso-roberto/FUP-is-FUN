import React from 'react'
import styles from './header.module.css'
import SvgComponent from '../imgs/logo'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className={styles.headerBg}>
      <div className={styles.header}>
        <SvgComponent width="250px"/>
        <ul className={styles.btnList}>
          <li><Link to="./">FILMES</Link></li>
          {/* https://api.themoviedb.org/3/movie/popular */}
          <li><Link to="./">ATORES</Link></li>
          <li><Link to="./">FAVORITOS</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
