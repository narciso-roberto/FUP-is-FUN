import React from 'react'
import style from './modal.module.css'

const Trailer = ({visible,setVisible}) => {

  if(visible)
    return(<div className={style.frame} onClick={()=>{setVisible(!visible)}}>
        <iframe src="https://www.youtube.com/embed/eV4UcOAIP-4" />
      </div>)
  else
    return null;
}

export default Trailer
