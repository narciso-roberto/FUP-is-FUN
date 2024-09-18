import React from 'react'
import style from './login.module.css';
import { useNavigate } from 'react-router-dom';
import useLogin from './useLogin.jsx';
import Carregando from '../Utilidades/Carregando'
import useForm from '../Hooks/useForm'
import Input from '../Login/Input.jsx'


const Login = () => {

    const email = useForm('email')
    const senha = useForm('senha')
    
    const navegar = useNavigate()
    
    const { logarUsuario,carregando,erro } = useLogin();
    
    const handleLogin = async (e) => {
      e.preventDefault();
      await logarUsuario({email:email.value,senha:senha.value})
    };


    return (
      <div className={style.loginBG}>
      <div className={style.login}>
        <h1>FAÇA SEU LOGIN</h1>
        <form>
        <Input type="email" id="email" label={'Email'} {...email}/>

        <Input type="password" id="senha" label={'Senha'} {...senha}/>
        <span>{erro}</span>

        </form>
      <button onClick={(event) => {handleLogin(event)}}>Enviar</button>
      <button onClick={() => {navegar('singUp')}}>Criar conta</button>
      </div>
      {carregando && <Carregando/>}
    </div>
  )
}

export default Login
