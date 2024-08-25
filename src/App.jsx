import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './Fixos/Footer.jsx';
import Header from './Fixos/Header.jsx';
import Home from './Abas/Home.jsx';
import { EncapContext } from './Contexto/ContextoGeral.jsx';

function App() {



  return (
    <>
      <BrowserRouter>
      <EncapContext>
        <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
        <Footer/>
      </EncapContext>
      </BrowserRouter>
    </>
  )
}

export default App

