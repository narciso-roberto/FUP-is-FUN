import React from 'react'

const Button = ({classe,onClick,msg,children}) => {
  return (
    <button className={classe} onClick={onClick}>
        {(msg || children)}
    </button>
  )
}

export default Button
