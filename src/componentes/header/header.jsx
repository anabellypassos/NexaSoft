import React, { useState, useEffect } from 'react';
import './header.css';
import { useTranslation } from 'react-i18next';
import br from '../../i18n/logoLanguage/brasil.png';
import es from '../../i18n/logoLanguage/espanha.png';
import en from '../../i18n/logoLanguage/estados-unidos.png';


const Header = () => {
  const { t, i18n } = useTranslation();

  // Função que muda o idioma da página INTEIRA
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [hamburguerOpen, setHamburguerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleHamburguer = () => setHamburguerOpen(!hamburguerOpen);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    if (hamburguerOpen) setHamburguerOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`container-header ${scrolled ? 'scrolled' : ''}`}>
      <div className='conjunto'>
        <h1 className='logo' onClick={() => scrollToSection('home')}>NexaSoft</h1>

        <nav className={`nav-header ${hamburguerOpen ? 'active' : ''}`}>
          
          {/* Textos traduzidos usando o t() */}
          <li onClick={() => scrollToSection('servicos')}>{t('HEADER.SERVICES')}</li>
          <li onClick={() => scrollToSection('contato')}>{t('HEADER.CONTACT')}</li>

          {/* Os 3 botões de idioma */}
          <div className='logo-Language'>
            <a className='br' onClick={() => changeLanguage('br')}><img src={br} alt="Português" width="30" height="30" /></a>
            <a className='en' onClick={() => changeLanguage('en')}><img src={en} alt="Inglês" width="25" height="25" /></a>
            <a className='es' onClick={() => changeLanguage('es')}><img src={es} alt="Espanhol" width="25" height="25" /></a>
          </div>

        </nav>
       
        <div className={`menu-hamburguer ${hamburguerOpen ? 'active' : ''}`} onClick={toggleHamburguer}>
          <span className='burger'></span>
          <span className='burger'></span>
          <span className='burger'></span>
        </div>
      </div>
    </div>
  );
};

export default Header;