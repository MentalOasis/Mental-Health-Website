import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';  // para iconos footer
// import 'bootstrap/dist/css/bootstrap.min.css';
// COMPONENTES: 
import Botones from '/src/componentes/Botones.jsx'
import BtnIzquierda from '/src/componentes/BtnIzquierda.jsx'
import Footer from '/src/componentes/Footer.jsx'
import Navbar from './componentes/Navbar';
import  ImageAccordion  from './componentes/ImageAccordion.jsx';
import EmojiRating from './componentes/EmojiRating.jsx';
// import Prueba from './componentes/Prueba.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      {/* <Botones/> */}
      <ImageAccordion/> 
      {/* <EmojiRating/> */}
      {/* <Prueba/> */}
      <Footer/>

    </>
  )
}

export default App
