import React from 'react'

import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth,bd} from '../firebase'; 
import { collection, doc, setDoc, addDoc, getDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';


const ragexs = {
    senha: {
      regex: /^(?=.*[A-Za-z])(?=.*\d{6,})[A-Za-z\d]+$/,
    },
    email: {
      regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    },
    
  };


const useLogin = () => {

    const navegar = useNavigate()

    const [carregando,setCarregando] = React.useState(false);

    React.useEffect(() => {
      if(localStorage.token){
        navegar('/home')
      }
    },[])

    const logarUsuario = async (dadosUsuario) => {
      try {
        setCarregando(true)
        const userCredential = await signInWithEmailAndPassword(auth, dadosUsuario.email, dadosUsuario.senha);
        // const docSnap = await getDoc(doc(bd, "usuarios",userCredential.user.uid))
        localStorage.token = userCredential.user['uid'];
        await setDoc(doc(bd, "usuarios", userCredential.user['uid']), dadosUsuario);
        navegar('/home')
      } catch (error) {
        setCarregando(false)
        console.error('Erro ao registrar:', error.message);
      }finally{
        setCarregando(false)
      }

    }
    
    const validarDados = (dado,tipo) => {
        return ragexs[`${tipo}`].regex.test(dado)
    }

    const criarUsuario = async (dados) => {
      try {
        setCarregando(true)
        const userCredential = await createUserWithEmailAndPassword(auth,dados.email,dados.senha);
        localStorage.token = userCredential.user['uid'];
        await setDoc(doc(bd, "usuarios", userCredential.user.uid), dados);
        navegar('/home')
        console.log('Usuário registrado:');
      } catch (error) {
        console.error('Erro ao registrar:', error.message);
      }finally{
        setCarregando(false)
      }
    }

    return { logarUsuario, criarUsuario,validarDados,carregando }
}

export default useLogin
