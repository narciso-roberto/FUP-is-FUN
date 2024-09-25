import React from 'react'
import styles from './menumobile.module.css'
import { Link } from 'react-router-dom'

const MenuMobile = () => {

    const [open,setOpen] = React.useState(false)

    const handleLogOut= () => {
        localStorage.token = '';
      }

    const handleClick = () => {
        setOpen(!open)
    }

  return (
      <div className={styles.menumobile}>
        <button className={styles.btnMenuMobile} onClick={handleClick}></button>
        {open && <ul className={styles.menulist}>
        <li><Link to="./">FILMES</Link></li>
          <li><Link to="./">ATORES</Link></li>
          <li><Link to="./">FAVORITOS</Link></li>
          <button onClick={handleLogOut}>SAIR</button>
        </ul>}
      </div>
  )
}

export default MenuMobile
