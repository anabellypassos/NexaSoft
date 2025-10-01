import { Title } from "./styles"
import Header from "../../componentes/header/header"
import React, { useState, useEffect } from 'react';
import '../Home/home.css'
import imageslider0 from '../../assets/Midia/imagens/computador-laptop-cinza-ligado.jpg'
import imageslider01 from '../../assets/Midia/imagens/conceito-de-colagem-de-html-e-css-com-pessoa.jpg'
import imageslider02 from '../../assets/Midia/imagens/conceito-de-fundo-de-programacao.jpg'
import imageslider03 from '../../assets/Midia/imagens/engenheiro-de-computadores-digitar-no-teclado-escrever-codigo-para-construir-firewalls.jpg'
import imageslider04 from '../../assets/Midia/imagens/tela-de-digitalizacao-de-programador-em-seu-smartwatch-com-camera-smartphone.jpg'
import imageslider05 from '../../assets/Midia/imagens/trabalhando-no-codigo.jpg'

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
    return(
        <div>
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
   
        </div>
    )
}

export default Home