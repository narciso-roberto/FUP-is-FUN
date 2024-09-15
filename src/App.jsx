import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Abas/Home.jsx';
import { EncapContext } from './Contexto/ContextoGeral.jsx';
import Login from './Login/Login.jsx'
import CriarConta from './Login/CriarConta.jsx'


function App() {

  return (
    <>
      <BrowserRouter>
      <EncapContext>
          <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/' element={<Login/>}/>
            <Route path='/singUp' element={<CriarConta/>}/>
          </Routes>

      </EncapContext>
      </BrowserRouter>
    </>
  )
}

export default App

