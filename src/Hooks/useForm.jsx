import React from 'react'

const types = {
    senha: {
        regex: /^(?=.*[A-Za-z])(?=.*\d{6,})[A-Za-z\d]+$/,
        erro: 'Digite uma senha com pelomenos 6 numeros e uma letra'
    },
    email: {
      regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      erro: 'email invalido'
    },
    
  };

const useForm = (type) => {
    const [value,setValue] = React.useState('');
    const [erro,setErro] = React.useState('');


    const onChange = ({target}) => {
        setValue(target.value)
        if(erro){
            validate(target.value)
        }
    }

    const validate = (value) => {
        if(!type)
            return false
        if(value.length == 0){
            setErro("Preencha um valor")
            return true
        }
        if(!types[type].regex.test(value)){
            setErro(types[type].erro)
            return true
        }else{
            setErro(false)
        }
    }


  return({

    value,
    erro,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value)
    }) 
}

export default useForm
