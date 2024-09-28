import React from 'react'

import { bd} from '../firebase'; 
import { doc,getDoc,updateDoc } from "firebase/firestore";


export const GlobalContext = React.createContext();

export const EncapContext = ({children}) => {

    const [movies,setMovies] = React.useState()
    const [favoritos,setFavoritos] = React.useState([])
    const [sim,setsim] = React.useState(false)

      const fetchUser = async (uid) => {
        const docRef = await getDoc(doc(bd, "usuarios", uid));
        localStorage.nome = docRef.data().nome
      }


      const buscarFavoritos = async () => {
        const user = (await getDoc(doc(bd, "usuarios", localStorage.token))).data();
        setFavoritos(user.favoritos)
        setsim(true)
      }


    React.useEffect(() => {
      const setarFavoritos = async () => {
        await updateDoc(doc(bd, "usuarios", localStorage.token),{favoritos: favoritos})
      }
        if(sim){
          setarFavoritos() 
        }

    },[favoritos])




    const REMOVER_FAVORITO = (alvo) => {
        setFavoritos(favoritos.filter((filme) => { return filme != alvo}))
    }

    const ADICIONAR_FAVORITO = (alvo) => {
        setFavoritos([...favoritos,alvo])
    }

    
    React.useEffect(()=>{
        const url = 'https://api.themoviedb.org/3/discover/movie?api_key=4f621b443c07a81c9346a04256502bfe';
    fetch(url)
    .then(res => res.json())
    .then(json => setMovies(json))
  },[])


  return (
    <GlobalContext.Provider value={{
    movies,
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

