import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Botones from '/src/componentes/Botones.jsx'
import BtnIzquierda from '/src/componentes/BtnIzquierda.jsx'
import Footer from '/src/componentes/Footer.jsx'
import '/src/componentes/footer.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './componentes/Navbar';
import  ImageAccordion  from './componentes/ImageAccordion.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      {/* <Botones/> */}
      <ImageAccordion/> 
      <Footer/>

    </>
  )
}

export default App
