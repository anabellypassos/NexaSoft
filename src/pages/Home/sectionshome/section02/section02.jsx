import React from 'react'
import "../section02/section02.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from 'react-i18next';
/*Logos do carrossel*/
import logo1 from '../../../../assets/Midia/imagens/logosdeempresas/logo1.png';
import logo2 from '../../../../assets/Midia/imagens/logosdeempresas/logo2.jpg';
import logo3 from '../../../../assets/Midia/imagens/logosdeempresas/logo3.png';
import logo4 from '../../../../assets/Midia/imagens/logosdeempresas/logo4.png';
import logo5 from '../../../../assets/Midia/imagens//logosdeempresas/logo5.png';
import logo8 from '../../../../assets/Midia/imagens/logosdeempresas/logo8.png';
import logo9 from '../../../../assets/Midia/imagens/logosdeempresas/logo9.png';
import logo11 from '../../../../assets/Midia/imagens/logosdeempresas/logo11.png';
import logo12 from '../../../../assets/Midia/imagens/logosdeempresas/logo12.PNG';

/** Carrosel serviços*/
import servico1 from "../../../../assets/Midia/imagens/imagemdeconsultorias/servico1.jpg";
import servico2 from "../../../../assets/Midia/imagens/imagemdeconsultorias/servico2.jpg";
import servico3 from "../../../../assets/Midia/imagens/imagemdeconsultorias/servico3.jpg";
import servico4 from "../../../../assets/Midia/imagens/imagemdeconsultorias/servico4.webp";
import servico5 from "../../../../assets/Midia/imagens/imagemdeconsultorias/servico5.jpg";
const Section02 = () => {

  const { t } = useTranslation();

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
    <div>
      <h1 className="Nossos-clientes">{t('OUR_CLIENTS')}</h1>
      <div className="carrossel">
        <Slider {...settings}>
          <div className="logo-container"><img src={logo1} alt="logo1" /></div>
          <div className="logo-container"><img src={logo2} alt="logo2" /></div>
          <div className="logo-container"><img src={logo3} alt="logo3" /></div>
          <div className="logo-container"><img src={logo4} alt="logo4" /></div>
          <div className="logo-container"><img src={logo5} alt="logo5" /></div>
          <div className="logo-container"><img src={logo8} alt="logo8" /></div>
          <div className="logo-container"><img src={logo9} alt="logo9" /></div>
          <div className="logo-container"><img src={logo11} alt="logo11" /></div>
          <div className="logo-container"><img src={logo12} alt="logo12" /></div>
        </Slider>
      </div>
      <div>
        <div className="quadrante02">
          <div className="Text02">
            <h1>{t('OUR_SERVICES')} <span>{t('OUR_SERVICES-SPAN')}</span> </h1>
            <p>{t('PARTNER_TEXT')}</p>
          </div>
          <div className="carrosselServicos">
            <Slider{...sliderservicos}>
              <div className="servico-card">
                <img src={servico1} alt="servico1" className="imagem-servico" />
                <div className="servico-overlay">
                  <h3 className="servico-titulo">{t('SERVICES.UI_UX_DESIGN')}</h3>
                  <a href="/servico1" className="botao-saiba-mais">{t('SERVICES.LEARN_MORE')}</a>
                </div>
              </div>

              <div className="servico-card">
                <img src={servico2} alt="servico2" className="imagem-servico" />
                <div className="servico-overlay">
                  <h3 className="servico-titulo">{t('SERVICES.SOLUTION_DEVELOPMENT')}</h3>

                  <a href="/servico2" className="botao-saiba-mais">{t('SERVICES.LEARN_MORE')}</a>
                </div>
              </div>

              <div className="servico-card">


                <img src={servico3} alt="servico3" className="imagem-servico" />
                <div className="servico-overlay">
                  <h3 className="servico-titulo">{t('SERVICES.SMART_PROCESS')}</h3>
                  <a href="/servico3" className="botao-saiba-mais">{t('SERVICES.LEARN_MORE')}</a>
                </div>
              </div>

              <div className="servico-card">
                <img src={servico4} alt="servico4" className="imagem-servico" />
                <div className="servico-overlay">
                  <h3 className="servico-titulo">{t('SERVICES.JIRA_CONSULTING')}</h3>

                  <a href="/servico4" className="botao-saiba-mais">{t('SERVICES.LEARN_MORE')}</a>
                </div>

              </div>

              <div className="servico-card">
                <img src={servico5} alt="servico5" className="imagem-servico" />
                <div className="servico-overlay">
                  <h3 className="servico-titulo">{t('SERVICES.DATA_AI')}
                  </h3>

                  <a href="/servico5" className="botao-saiba-mais">{t('SERVICES.LEARN_MORE')}</a>
                </div>

              </div>
            </Slider>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Section02;
