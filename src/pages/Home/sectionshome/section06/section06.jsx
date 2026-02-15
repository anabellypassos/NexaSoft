import React from 'react'
import './section06/section06.css'
import { Instagram, LinkedIn } from '@mui/icons-material';
const Section06 = () => {
  return (
    <div className='footer'>
      <div className='section01'>
        <h1 className='logo'>NexaSoft</h1>
        <h3>Apoiando sua jornada contínua até a excelência digital</h3>
<div>
  <Instagram sx={{ fontSize: 40, color: "white" }} />
  <LinkedIn sx={{ fontSize: 40, color: "white" }} />
</div>


      </div>
      <div>
        <hr />
        <div className='sectonitens'>
          <div>
            <p>Atlassian</p>
            <p>Licenciamento Jira</p>
            <p>Consultoria em Jira</p>
          </div>
          <div>
            <p>Microsoft</p>
            <p>Data & AI</p>
            <p>Digital Workplace</p>
            <p>Salesforce</p>
          </div>
          <div>
            <p>Blog</p>
            <p>Contato</p>
            <p>Ouvidoria</p>
          </div>

        </div>
      </div>
      <hr />
      <div className='ours'>
        <p> @2026 NexaSoft</p>
      </div>
      <div className='links'>
        <a href="">Política de Segurança da Informação</a>
         <div className='divider'>
          |
          </div>
        <a href="">Código de Conduta e Ética </a>
      </div>
      <div>

      </div>

    </div>
  )
}

export default Section06;
