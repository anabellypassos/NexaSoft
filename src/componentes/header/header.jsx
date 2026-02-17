import React, { useState, useEffect } from 'react'; // Adicionado useEffect
import './header.css';

const Header = () => {
  const [hamburguerOpen, setHamburguerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleHamburguer = () => {
    setHamburguerOpen(!hamburguerOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    if (hamburguerOpen) {
      setHamburguerOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    /* Mantida a estrutura exata, apenas injetando a classe 'scrolled' se necessário */
    <div className={`container-header ${scrolled ? 'scrolled' : ''}`}>
      <div className='conjunto'>
        <h1 className='logo' onClick={() => scrollToSection('home')}>NexaSoft</h1>
        
        <nav className={`nav-header ${hamburguerOpen ? 'active' : ''}`}>
          {/* Adicionados os cliques para scroll. Certifique-se que suas seções tenham esses IDs */}
          <li onClick={() => scrollToSection('servicos')}>Serviços</li>
          <li onClick={() => scrollToSection('blog')}>Blog</li>
          <li onClick={() => scrollToSection('contato')}>Contato</li>   
        </nav> 

        <div 
          className={`menu-hamburguer ${hamburguerOpen ? 'active' : ''}`} 
          onClick={toggleHamburguer}
        >  
          <span className='burger'></span>
          <span className='burger'></span>
          <span className='burger'></span>
        </div>
      </div>
    </div>
  );
};

export default Header;