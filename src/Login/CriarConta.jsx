import React from 'react'
import style from './login.module.css';
import { useNavigate } from 'react-router-dom';
import useLogin from './useLogin.jsx';
import Carregando from '../Utilidades/Carregando'



const SingUp = () => {

    const navegar = useNavigate()

    const [senha, setSenha] = React.useState('1234567');
    const [email, setEmail] = React.useState('teste12@gmail.com');
    const [nome, setNome] = React.useState('teste');
    const [erros,setErros] = React.useState({email:false,senha:false}); //true = tem erro
    

    const { criarUsuario,validarDados,carregando } = useLogin();

    const handleRegister = async (event) => {
        event.preventDefault();

        if(validarDados(email,'email') && validarDados(senha,'senha')){
          await criarUsuario({nome,email,senha})
        }
        setErros({email:!validarDados(email,'email'),senha:!validarDados(senha,'senha')})
        
        
      };


  return (
    <div className={style.loginBG}>
      <div className={style.login}>
        <h1>FAÇA SEU REGISTRO</h1>
        <form>
        <label htmlFor="email">Email</label>
        <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
        />
        {erros['email'] && 'email invalido'}
        

        <label htmlFor="senha">Senha</label>
        <input
            type="password"
            id="senha"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
            />
            {erros['senha'] && <span>Digite uma senha com pelo menos 6 numeros e uma letra</span>}

        <label htmlFor="senha">Nome</label>
        <input
            type="text"
            id="nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
        />

       
        </form>
      <button onClick={(event) => {handleRegister(event)}}>Registrar-se</button>
      <button onClick={() => {navegar('/')}}>Ja sou usuario</button>
      </div>
      {carregando && <Carregando/>}
    </div>
  )
}

export default SingUp
