import React from 'react'
import './section04.css'
import { useTranslation } from 'react-i18next';
const Section04 = () => {
    const {t} = useTranslation ();

    return (
        <div className='section04'>
            <div className='section04-container'>
                <h4>{t('ABOUT_TITLE_SMALL')}</h4>
                <h2 >{t('ABOUT_TITLE')}</h2>
                <p>{t('ABOUT_TEXT')}
                </p>
                
            </div>
        </div>
    )
}

export default Section04
