import React from 'react'

const useFetch = () => {

    const [dados,setDados] = React.useState(null);
    const [loading,setLoading] = React.useState(null);
    const [erro,setErro] = React.useState(null);

    const request = React.useCallback(async (url) => {
        let json;
        let response;

        try{
            setLoading(true)
            setErro(false)
            response = await fetch(url)
            json = await response.json()

        }catch(erro){
            json=null;
            setErro(erro.mensagem)
        }finally{
            setDados(json);
            setLoading(false)
        }
    },[])

  return ({dados,loading,erro,request})
}

export default useFetch
