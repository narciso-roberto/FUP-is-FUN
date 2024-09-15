import React from 'react'
import style from './login.module.css';
import { useNavigate } from 'react-router-dom';
import useLogin from './useLogin.jsx';
import Carregando from '../Utilidades/Carregando'




const Login = () => {
    const [senha, setSenha] = React.useState('8856778');
    const [email, setEmail] = React.useState('narcisoroberto1369@gmail.com');
    
    const navegar = useNavigate()
    
    const { logarUsuario,carregando } = useLogin();
    
    const handleLogin = async (e) => {
      e.preventDefault();
      await logarUsuario({email,senha})
    };
    
    

    return (
      <div className={style.loginBG}>
      <div className={style.login}>
        <h1>FAÇA SEU LOGIN</h1>
        <form>
        <label htmlFor="email">Email</label>
        <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
        />

        <label htmlFor="senha">Senha</label>
        <input
            type="password"
            id="senha"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
        />

        

       
        </form>
      <button onClick={(event) => {handleLogin(event)}}>Enviar</button>
      <button onClick={() => {navegar('singUp')}}>Criar conta</button>
      </div>
      {carregando && <Carregando/>}
    </div>
  )
}

export default Login
