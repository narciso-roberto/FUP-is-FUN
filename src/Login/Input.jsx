import React from 'react'

const Input = ({value,type,id,label,onChange,onBlur}) => {
  return (
    <>
    <label htmlFor={id}>{label}</label>
    <input 
    type={type}
    id={id}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    /> 
    </>
  )
}

export default Input
