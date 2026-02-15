import React from 'react'
import './Section05.css'
import call from '../../../../assets/Midia/imagens/call.png'

const Section05 = () => {
  return (
    <div className="section05" style={{ backgroundImage: `url(${call})` }}>
      <h1>Vamos Conversar ?</h1>

    <button className="buttoncall">Fale com um de nossos consultores </button>

    </div>
  )
}

export default Section05
