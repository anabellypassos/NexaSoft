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

/** Carrosel serviços*/
import servico1 from "../../assets/Midia/imagens/imagemdeconsultorias/servico1.jpg";
import servico2 from "../../assets/Midia/imagens/imagemdeconsultorias/servico2.jpg";
import servico3 from "../../assets/Midia/imagens/imagemdeconsultorias/servico3.jpg";
import servico4 from "../../assets/Midia/imagens/imagemdeconsultorias/servico4.webp";
import servico5 from "../../assets/Midia/imagens/imagemdeconsultorias/servico5.jpg";
/* Fim das imagens de serviços*/

function Home() {

  const [indiceAtual, setIndiceAtual] = useState(0)
  const listaDeImagens = [imageslider0, imageslider01, imageslider02, imageslider03, imageslider04, imageslider05];

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceAtual(indiceAntigo => (indiceAntigo + 1) % listaDeImagens.length);
    }, 3000);

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




  var sliderservicos = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
  return (
    <div className="backgroundhome">
      <Header />
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
        <div className="quadrante02">
          <div className="Text02">
            <h1>Nossos <span>Serviços</span> </h1>
            <p>Empresas líderes na era digital precisam de um parceiro especializado como a CSP Tech para superar a concorrência. Entendemos seus desafios e mostramos as melhores opções para resolvê-los.</p>
          </div>
          <div className="carrosselServicos">
            <Slider{...sliderservicos}>
              <div className="servico-card">
                <img src={servico1} alt="servico1" className="imagem-servico" />
                <div className="servico-overlay">
                  <h3 className="servico-titulo">Design UI UX</h3>
                  <a href="/servico1" className="botao-saiba-mais">Saiba Mais</a>
                </div>
              </div>

              <div className="servico-card">
                <img src={servico2} alt="servico2" className="imagem-servico" />
                <div className="servico-overlay">
                  <h3 className="servico-titulo">Solution Development</h3>

                  <a href="/servico2" className="botao-saiba-mais">Saiba Mais</a>
                </div>
              </div>

              <div className="servico-card">


                <img src={servico3} alt="servico3" className="imagem-servico" />
                <div className="servico-overlay">
                  <h3 className="servico-titulo">Smart Process</h3>
                  <a href="/servico3" className="botao-saiba-mais">Saiba Mais</a>
                </div>
              </div>

              <div className="servico-card">
                <img src={servico4} alt="servico4" className="imagem-servico" />
                <div className="servico-overlay">
                  <h3 className="servico-titulo">Consultoria em Jira</h3>

                  <a href="/servico4" className="botao-saiba-mais">Saiba Mais</a>
                </div>

              </div>

              <div className="servico-card">
                <img src={servico5} alt="servico5" className="imagem-servico" />
                <div className="servico-overlay">
                  <h3 className="servico-titulo">Data & AI
                  </h3>

                  <a href="/servico5" className="botao-saiba-mais">Saiba Mais</a>
                </div>

              </div>
            </Slider>
          </div>
    
        </div>
      </div>
      <div className="quadrante3">
        <div className="container-secton3">
            <div className="bluor"></div>
            <div className="texts">
              <h1> Décadas de história ajudando a<span> transformar negócios e criar experiências digitais</span></h1>
              <p>"Com o modelo implantado pela CSP, conseguimos maior volume de entregas, ganhamos produtividade,
                rapidez no tempo de resposta e redução de custos.
                Na parte de Business Intelligence, os painéis
                desenvolvidos pela CSP chegam até o nível executivo,
                com resultados e dados que apoiam nossa melhor tomada de decisão."
              </p>
              
            </div>
            <p className="grupy">Betsy Rabello, Ex-CIO do Grupo Ipiranga</p>
          </div>
          </div>
    </div>

  )
}

export default Home;