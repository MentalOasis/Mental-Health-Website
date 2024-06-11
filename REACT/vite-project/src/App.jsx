import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';  // para iconos footer

// COMPONENTES: 
import Botones from '/src/componentes/Botones.jsx'
import BtnIzquierda from '/src/componentes/BtnIzquierda.jsx'
import Footer from '/src/componentes/Footer.jsx'
import Navbar from './componentes/Navbar';
import  ImageAccordion  from './componentes/ImageAccordion.jsx';
import EmojiRating from './componentes/EmojiRating.jsx';
import Sidebar from './componentes/Sidebar.jsx'
// sidebar
import { Button, Layout, theme } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import Logo from './componentes/Logo';
import MenuList from './componentes/MenuList';
import ToggleThemeButton from './componentes/ToggleThemeButton';
import { MenuOutlined } from '@ant-design/icons';
const { Header, Sider } = Layout;


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Navbar/>
      {/* <Sidebar/> */}
      <Botones/>
      
      {/* <ImageAccordion/>  */}
      <Footer/>

    </>

  )
}

export default App
