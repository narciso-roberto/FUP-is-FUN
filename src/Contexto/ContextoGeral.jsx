import React from 'react'

import { bd} from '../firebase'; 
import { doc,getDoc,updateDoc } from "firebase/firestore";


export const GlobalContext = React.createContext();

export const EncapContext = ({children}) => {

    const [favoritos,setFavoritos] = React.useState([])
    const [buscaFeita,setBuscaFeita] = React.useState(false)

      const fetchUser = async (uid) => {
        const docRef = await getDoc(doc(bd, "usuarios", uid));
        localStorage.nome = docRef.data().nome
      }


      const buscarFavoritos = async () => {
        const user = (await getDoc(doc(bd, "usuarios", localStorage.token))).data();

        setFavoritos(user.favoritos)
        setBuscaFeita(true)
      }


    React.useEffect(() => {
      const atualizarFavoritos = async () => {
        await updateDoc(doc(bd, "usuarios", localStorage.token),{favoritos: favoritos})
      }
        if(buscaFeita){
          atualizarFavoritos() 
        }

    },[favoritos])




    const REMOVER_FAVORITO = (alvo) => {
        setFavoritos(favoritos.filter((filme) => { return filme != alvo}))
    }

    const ADICIONAR_FAVORITO = (alvo) => {
        setFavoritos([...favoritos,alvo])
    }


  return (
    <GlobalContext.Provider value={{
    favoritos,
    setFavoritos,
    REMOVER_FAVORITO,
    ADICIONAR_FAVORITO,
    fetchUser,
    buscarFavoritos
    }}>

        {children}
    </GlobalContext.Provider>
  )
}

