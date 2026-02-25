import React, { useState, useEffect } from 'react';
import './section01.css';
import Header from '../../../../componentes/header/header';

import imageslider0 from '../../../../assets/Midia/imagens/computador-laptop-cinza-ligado.jpg';
import imageslider01 from '../../../../assets/Midia/imagens/conceito-de-colagem-de-html-e-css-com-pessoa.jpg';
import imageslider02 from '../../../../assets/Midia/imagens/conceito-de-fundo-de-programacao.jpg';
import imageslider03 from '../../../../assets/Midia/imagens/engenheiro-de-computadores-digitar-no-teclado-escrever-codigo-para-construir-firewalls.jpg';
import imageslider04 from '../../../../assets/Midia/imagens/tela-de-digitalizacao-de-programador-em-seu-smartwatch-com-camera-smartphone.jpg';
import imageslider05 from '../../../../assets/Midia/imagens/trabalhando-no-codigo.jpg';
import { useTranslation } from 'react-i18next';

const Section01 = () => {
  const [indiceAtual, setIndiceAtual] = useState(0);
  const {t}= useTranslation();

  const listaDeImagens = [
    imageslider0,
    imageslider01,
    imageslider02,
    imageslider03,
    imageslider04,
    imageslider05
  ];

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceAtual(indiceAntigo => (indiceAntigo + 1) % listaDeImagens.length);
    }, 3000);

    return () => clearInterval(intervalo);
  }, [listaDeImagens.length]); // sem dependências

  return (
    <div className="backgroundhome">
      <Header />

      <div className="quadrante01">
        <div className="conteudo-texto">
          <h1 className="Titledestac">
            {t('HERO_TITLE')}<span>{t('HERO_TITLE-SPAN')}</span>
          </h1>

          <p className="paragrapy01">
           {t('HERO_DESCRIPTION')}<span>{t('HERO_DESCRIPTION-SPAN')}</span>
            {t('HERO_DESCRIPTION-SPAN2')} <span>{t('HERO_DESCRIPTION-SPAN3')}</span>
          </p>

          <div className="button">
            <button className="buttonprimary">{t('CTA_TALK_SPECIALIST')}</button>
            <button className="buttonprimary">{t('CTA_SCHEDULE_MEETING')}</button>
          </div>
        </div>

        <div className="slider">
          <img
            src={listaDeImagens[indiceAtual]}
            alt="imagem do slider"
          />
        </div>
      </div>
    </div>
  );
};

export default Section01;
