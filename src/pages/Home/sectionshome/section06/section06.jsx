import React from 'react'
import './section06/section06.css'
import { Instagram, LinkedIn } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const Section06 = () => {
  const {t} = useTranslation ();
  return (
    <div className='footer'>
      <div className='section01'>
        <h1 className='logo'>NexaSoft</h1>
        <h3>{t('FOOTER_TITLE')}</h3>
<div>
  <Instagram sx={{ fontSize: 40, color: "white" }} />
  <LinkedIn sx={{ fontSize: 40, color: "white" }} />
</div>


      </div>
      <div>
        <hr />
        <div className='sectonitens'>
          <div>
            <p>{t('FOOTER_ATLASSIAN')}</p>
            <p>{t('FOOTER_JIRA_LICENSE')}</p>
            <p>{t('FOOTER_JIRA_CONSULTING')}</p>
          </div>
          <div>
            <p>{t('FOOTER_MICROSOFT')}</p>
            <p>{t('FOOTER_DATA_AI')}</p>
            <p>{t('FOOTER_DIGITAL_WORKPLACE')}</p>
            <p>{t('FOOTER_SALESFORCE')}</p>
          </div>
          <div>
            <p>{t('FOOTER_BLOG')}</p>
            <p>{t('FOOTER_CONTACT')}</p>
            <p>{t('FOOTER_OMBUDSMAN')}</p>
          </div>

        </div>
      </div>
      <hr />
      <div className='ours'>
        <p> @2026 NexaSoft</p>
      </div>
      <div className='links'>
        <a href="">{t('FOOTER_SECURITY_POLICY')}</a>
         <div className='divider'>
          |
          </div>
        <a href="">{t('FOOTER_CODE_ETHICS')} </a>
      </div>
      <div>

      </div>

    </div>
  )
}

export default Section06;
