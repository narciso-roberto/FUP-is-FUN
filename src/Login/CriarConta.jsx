import React from 'react'
import style from './login.module.css';
import { useNavigate } from 'react-router-dom';
import useLogin from './useLogin.jsx';
import Carregando from '../Utilidades/Carregando'
import useForm from '../Hooks/useForm'
import Input from '../Login/Input.jsx'



const SingUp = () => {

    const navegar = useNavigate()

    const nome = useForm()
    const email = useForm('email')
    const senha = useForm('senha')



    const { criarUsuario,carregando,erro } = useLogin();

    // arrumar isso dps, fazer aquele hook receber apenas um tipo de valor, sem erro = tudo certo 

    const handleRegister = async (event) => {
        event.preventDefault();

        if(!senha.validate() && !email.validate()){
          await criarUsuario({nome:nome.value,email:email.value,senha:senha.value})
        }

      };

  return (
    <div className={style.loginBG}>
      <div className={style.login}>
        <h1>FAÇA SEU REGISTRO</h1>
        <form>

        <Input type="email" id="email" label={'Email'} {...email}/>
        <span>{email.erro}</span>

        <Input type="password" id="senha" label={'Senha'} {...senha}/>
        <span>{senha.erro}</span>

        <Input type="text" id="nome" label={'Nome'} {...nome}/>
        <span>{erro}</span>


        </form>
      <button onClick={(event) => {handleRegister(event)}}>Registrar-se</button>
      <button onClick={() => {navegar('/')}}>Ja sou usuario</button>
      </div>
      {carregando && <Carregando/>}
    </div>
  )
}

export default SingUp
