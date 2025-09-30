import React, { useState } from 'react'
import  '../header/header.css';

const Header = () => {
  const [hamburguerOpen,setHamburguerOpen]= useState(false);
  const toggleHamburguer= ( ) =>{
    setHamburguerOpen(!hamburguerOpen)
  }

  return (

    <div className='container-header'>
       <div className='conjunto'>
         <h1 className='logo'>NexaSoft</h1>
        <nav className={`nav-header ${hamburguerOpen ? 'active' : ''}`}>
          <li>Serviços</li>
          <li>Clientes</li>
          <li>Blog</li>
          <li>Contato</li>   
        </nav> 
<div 
      className={`menu-hamburguer ${hamburguerOpen ? 'active' : ''}`} 
      onClick={toggleHamburguer}
    >  
<span className='burger '></span>
<span className='burger '></span>
<span className='burger '></span>

    </div>
    </div>

       </div>
     
  )
}

export default Header;
