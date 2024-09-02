import React from 'react'
import style from './stars.module.css'

import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";


const Stars = ({nota}) => {
    const estrela = []
    const score = Math.round(nota/2);
    for(let i =0;i<5;i++){
        if(i<score){
            estrela[i] = <FaStar/>;
        }else{
            estrela[i] = <FaRegStar/>
        }
    }
    
  return (
    <div className={style.stars}>
        {estrela.map((est,a)=>{
            return <React.Fragment key={a}>{est}</React.Fragment>
        })}
    </div>
  )
}

export default Stars
