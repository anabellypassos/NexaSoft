import React from 'react'
import './section05.css'
import call from '../../../../assets/Midia/imagens/call.png'
import { useTranslation } from 'react-i18next';

const Section05 = () => {
  const {t}= useTranslation ();
  return (
    <div className="section05" style={{ backgroundImage: `url(${call})` }}>
      <h1>{t('CONTACT_TITLE')}</h1>

    <button className="buttoncall">{t('CONTACT_BUTTON')} </button>

    </div>
  )
}

export default Section05
