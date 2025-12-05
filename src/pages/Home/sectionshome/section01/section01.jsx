import React, { useState, useEffect } from 'react';
import './section01.css';
import Header from '../../../../componentes/header/header';

import imageslider0 from '../../../../assets/Midia/imagens/computador-laptop-cinza-ligado.jpg';
import imageslider01 from '../../../../assets/Midia/imagens/conceito-de-colagem-de-html-e-css-com-pessoa.jpg';
import imageslider02 from '../../../../assets/Midia/imagens/conceito-de-fundo-de-programacao.jpg';
import imageslider03 from '../../../../assets/Midia/imagens/engenheiro-de-computadores-digitar-no-teclado-escrever-codigo-para-construir-firewalls.jpg';
import imageslider04 from '../../../../assets/Midia/imagens/tela-de-digitalizacao-de-programador-em-seu-smartwatch-com-camera-smartphone.jpg';
import imageslider05 from '../../../../assets/Midia/imagens/trabalhando-no-codigo.jpg';

const Section01 = () => {
  const [indiceAtual, setIndiceAtual] = useState(0);

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
            alt="imagem do slider"
          />
        </div>
      </div>
    </div>
  );
};

export default Section01;
