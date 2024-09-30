import React from 'react'

import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth,bd} from '../firebase'; 
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../Contexto/ContextoGeral.jsx';



const useLogin = () => {

    const navegar = useNavigate()
    const {fetchUser} = React.useContext(GlobalContext)

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
        localStorage.token = userCredential.user['uid'];
        await fetchUser(userCredential.user['uid'])
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
        logarUsuario(dados)
      } catch (error) {
        if (error.code == "auth/email-already-in-use") setErro('Email ja cadastrado')
      }
 
    }

    return { logarUsuario, criarUsuario,carregando,erro }
}

export default useLogin
