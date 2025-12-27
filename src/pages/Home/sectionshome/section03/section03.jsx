import React, { useState, useEffect } from 'react';
import "../section03/section03.css"
const Section03 = () => {
     const [bolas, setbolas]= useState([]);
      useEffect(() =>{
        const quantidadedeBolas = 100;
        const bolasnovas = Array.from({length:quantidadedeBolas}).map((_,index)=>({
          id:index,
          left : Math.random()*100,
          top : Math.random()*100,
          size : Math.random()*15 + 5,
          delay : Math.random()*5
        }));setbolas(bolasnovas);
      },[]);
  return (
      <div className="quadrante3">
         {bolas.map((bola) => (
          <div
            key={bola.id}
            className="boll"
            style={{
              left: `${bola.left}%`,
              top: `${bola.top}%`,
              width: `${bola.size}px`,
              height: `${bola.size}px`,
              animationDelay: `${bola.delay}s` // Se usar a animação CSS
            }}
          ></div>
        ))}
        <div className="container-secton3">
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
  )
}

export default Section03
