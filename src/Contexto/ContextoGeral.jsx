import React from 'react'

export const GlobalContext = React.createContext();

export const EncapContext = ({children}) => {

    const [movies,setMovies] = React.useState()
    const [favoritos,setFavoritos] = React.useState([])
    
    
    
    React.useEffect(() => {
      if(localStorage.favoritos){
        setFavoritos(localStorage.favoritos.split(','))

      }
    },[])

    React.useEffect(() => {
      localStorage.favoritos = favoritos;
    },[favoritos])

    
    React.useEffect(()=>{
        const url = 'https://api.themoviedb.org/3/discover/movie?api_key=4f621b443c07a81c9346a04256502bfe';
    fetch(url)
    .then(res => res.json())
    .then(json => setMovies(json))
  },[])


  return (
    <GlobalContext.Provider value={{movies,favoritos,setFavoritos}}>
        {children}
    </GlobalContext.Provider>
  )
}

