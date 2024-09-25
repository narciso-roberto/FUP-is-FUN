import React, { useState } from 'react'
import styles from './header.module.css'
import SvgComponent from '../imgs/logo'
import { Link } from 'react-router-dom'
import ListFavoritos from './ListFavoritos'
import MenuMobile from './MenuMobile'

const Header = () => {

  const [favList, setFavList] = useState(null);
  const [menuMobile,setMenuMobile] = useState(window.innerWidth <= 880);

  React.useEffect(() => {

    const handleResize = () => {
      setMenuMobile(window.innerWidth <= 880)
    }
    
    window.addEventListener('resize',handleResize)

    return () => {window.removeEventListener('resize',handleResize)};
  },[menuMobile])

  console.log(menuMobile)

  const handleClick = () => {
    setFavList(true)
  }

  const handleLogOut= () => {
    localStorage.token = '';
  }

  const BtnList = () => {
    return(
      <ul className={styles.btnList}>
          <li><Link to="./">FILMES</Link></li>
          <li><Link to="./">ATORES</Link></li>
          <li onClick={handleClick}><Link to="./">FAVORITOS</Link></li>
          <li onClick={handleLogOut} className={styles.sair}><Link to="/">SAIR</Link></li>
          {favList && <ListFavoritos exit={setFavList}/>}
        </ul>
    )
  }

  favList ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"

  return (
    <div className={styles.headerBg}>
      <div className={styles.header}>
        <SvgComponent width="250px"/>
        {menuMobile ? <MenuMobile/> : <BtnList/>}
      </div>
    </div>
  )
}

export default Header
