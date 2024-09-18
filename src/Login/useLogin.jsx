import React from 'react'

import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth,bd} from '../firebase'; 
import { collection, doc, setDoc, addDoc, getDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

// Erro ao registrar: Firebase: Error (auth/invalid-email).
// Erro ao registrar: Firebase: Error (auth/email-already-in-use).

// const errorFirebase={
//   "auth/invalid-email": ,
// }

const useLogin = () => {

    const navegar = useNavigate()

    const [carregando,setCarregando] = React.useState(null);
    const [erro,setErro] = React.useState(null);


    React.useEffect(() => {
      if(localStorage.token){
        navegar('/home')
      }
    },[navegar])

    const logarUsuario = async (dadosUsuario) => {

      try {
        setCarregando(true)
        setErro(null)
        const userCredential = await signInWithEmailAndPassword(auth, dadosUsuario.email, dadosUsuario.senha);
        // const docSnap = await getDoc(doc(bd, "usuarios",userCredential.user.uid))
        localStorage.token = userCredential.user['uid'];
        await setDoc(doc(bd, "usuarios", userCredential.user['uid']), dadosUsuario);
        navegar('/home')
      } catch (error) {
        setCarregando(false)
        setErro("Dados incorretos")
      }finally{
        setCarregando(false)
      }

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
        if (error.code == "auth/email-already-in-use") setErro('Email ja cadastrado')
      }finally{
        setCarregando(false)
      }
    }

    return { logarUsuario, criarUsuario,carregando,erro }
}

export default useLogin
