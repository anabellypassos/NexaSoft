import { Title } from "./styles"
import Header from "../../componentes/header/header"
import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Home/home.css'
import imageslider0 from '../../assets/Midia/imagens/computador-laptop-cinza-ligado.jpg'
import imageslider01 from '../../assets/Midia/imagens/conceito-de-colagem-de-html-e-css-com-pessoa.jpg'
import imageslider02 from '../../assets/Midia/imagens/conceito-de-fundo-de-programacao.jpg'
import imageslider03 from '../../assets/Midia/imagens/engenheiro-de-computadores-digitar-no-teclado-escrever-codigo-para-construir-firewalls.jpg'
import imageslider04 from '../../assets/Midia/imagens/tela-de-digitalizacao-de-programador-em-seu-smartwatch-com-camera-smartphone.jpg'
import imageslider05 from '../../assets/Midia/imagens/trabalhando-no-codigo.jpg'
/*Logos do carrossel*/ 
import logo1 from '../../assets/Midia/imagens/logosdeempresas/logo1.png';
import logo2 from '../../assets/Midia/imagens/logosdeempresas/logo2.jpg';
import logo3 from '../../assets/Midia/imagens/logosdeempresas/logo3.png';
import logo4 from '../../assets/Midia/imagens/logosdeempresas/logo4.png';
import logo5 from '../../assets/Midia/imagens//logosdeempresas/logo5.png';
import logo6 from '../../assets/Midia/imagens/logosdeempresas/logo6.webp';
import logo7 from '../../assets/Midia/imagens/logosdeempresas/logo7.png';
import logo8 from '../../assets/Midia/imagens/logosdeempresas/logo8.png';
import logo9 from '../../assets/Midia/imagens/logosdeempresas/logo9.png';
import logo10 from '../../assets/Midia/imagens/logosdeempresas/logo10.png';
import logo11 from '../../assets/Midia/imagens/logosdeempresas/logo11.png';
import logo12 from '../../assets/Midia/imagens/logosdeempresas/logo12.PNG';
/* Fim das logos do carrosel*/ 


function Home(){
  //useState(0) cria uma váriavel de estado chamada indice atual.
  //Ela começa com 0, que significa que a primeira imagem da lista será mostrada
  //setIndiceAtual é a função que vai usar para mudar o indice
  //listaDeImagens é um array com todas as imagens que vai mostrar no slider.
  const [indiceAtual,setIndiceAtual]= useState(0)
  const listaDeImagens = [imageslider0,imageslider01,imageslider02,imageslider03,imageslider04,imageslider05];
   //useEffect é usado para executar algo depois que o componente é renderizado
   //Nesse caso ele inicia o intervalo de troca de imagens.
   //setInterval(() => { ... }, 3000) executa a função a cada 3000 milessegundos 
  useEffect(() => {
      const intervalo = setInterval(() => {
        setIndiceAtual(indiceAntigo => (indiceAntigo + 1) % listaDeImagens.length);
      }, 3000); // Troca a imagem a cada 3 segundos (3000 milissegundos)

      // Limpar o intervalo quando o componente for desmontado
      return () => clearInterval(intervalo);
    }, [listaDeImagens.length]); 


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
    initialSlide: 0,
      autoplay: true,
    autoplaySpeed: 8000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
   
  
    return(
        <div className="backgroundhome">
  <Header/>
    <div className="quadrante01">
  <div className="conteudo-texto">
    <h1 className="Titledestac">
      Consultoria especializada em <span>desenvolvimento de software customizados</span>
    </h1>
    <p className="paragrapy01">
      Apoiamos empresas não nativas digitais a <span>digitalizar processos críticos</span> 
      e criar novas linhas de receita com produtos ou sistemas criados <span>sob medida</span>
    </p>
    <div className="button">
      <button className="buttonprimary">Fale com especialista</button>
      <button className="buttonprimary">Agende uma reunião</button>
    </div>
  </div>

  <div className="slider">
    <img
      src={listaDeImagens[indiceAtual]}
      alt="imagem"
    />
  </div>


  </div> 
   <h1 className="Nossos-clientes">Nossos Clientes</h1>
   <div className="carrossel">
      <Slider {...settings}>
    <img src={logo1} alt="logo1"></img>
     <img src={logo2} alt="logo2"></img>
      <img src={logo3} alt="logo3"></img>
       <img src={logo4} alt="logo4"></img>
        <img src={logo5} alt="logo5"></img>
         <img src={logo6} alt="logo6"></img>
          <img src={logo7} alt="logo7"></img>
           <img src={logo8} alt="logo8"></img>
            <img src={logo9} alt="logo9"></img>
             <img src={logo10} alt="logo10"></img>
              <img src={logo11} alt="logo11"></img>
               <img src={logo12} alt="logo12"></img>
    </Slider>
   </div>
  
  <div>
    <div className="Text02">
  <h1>Nossos <span>Serviços</span> </h1>
  <p>Empresas líderes na era digital precisam de um parceiro especializado como a CSP Tech para superar a concorrência. Entendemos seus desafios e mostramos as melhores opções para resolvê-los.</p>
    </div>
  </div>
        </div>
       
    )
}

export default Home;