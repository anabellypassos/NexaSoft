import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import "../section03/section03.css"
const Section03 = () => {
  const {t}= useTranslation();
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
              <h1> {t('DECADES.DECADES_TRANSFORMING_BUSINESSES')}<span> {t('DECADES.DECADES_TRANSFORMING_BUSINESSES2')}</span></h1>
              <p>"{t('DECADES.CSP_TESTIMONIAL')}"
              </p>
              
            </div>
            <p className="grupy"> {t('DECADES.BETSY_RABELLO_TITLE')}</p>
          </div>
          </div>
  )
}

export default Section03
