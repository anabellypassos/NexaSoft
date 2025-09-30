import { Title } from "./styles"
import Header from "../../componentes/header/header"
import '../Home/home.css'
import imageslider01 from '../../assets/Midia/imagens/computador-laptop-cinza-ligado.jpg'
import imageslider02 from '../../assets/Midia/imagens/conceito-de-colagem-de-html-e-css-com-pessoa.jpg'
import imageslider03 from '../../assets/Midia/imagens/conceito-de-fundo-de-programacao.jpg'
import imageslider04 from '../../assets/Midia/imagens/engenheiro-de-computadores-digitar-no-teclado-escrever-codigo-para-construir-firewalls.jpg'
import imageslider05 from '../../assets/Midia/imagens/tela-de-digitalizacao-de-programador-em-seu-smartwatch-com-camera-smartphone.jpg'
import imageslider06 from '../../assets/Midia/imagens/trabalhando-no-codigo.jpg'

function Home(){

  


    return(
        <div>
  <Header/>
    <div className="quadrante01">
      <h1 className="Titledestac">
        Consultoria especializada em <span>desenvolvimento de software customizados</span>
      </h1>
      <p className="paragrapy01">Apoiamos esmpresas não nativas digitais a <span>digitalizar processos críticos</span> e criar novas linhas de receita com produtos ou sistemas criados <span>sob medida</span></p>
      <div className="button">
       <button className="buttonprimary">Fale com especialista</button>
       <button className="buttonprimary">Agende uma reunião</button>
       </div>
     
    </div>
    <div className="slider">
      <img src={imageslider01} alt="imageslider01" />
            <img src={imageslider02} alt="imageslider02" />
      <img src={imageslider03} alt="imageslider03" />
      <img src={imageslider04} alt="imageslider04" />
      <img src={imageslider05} alt="imageslider05" />
      <img src={imageslider06} alt="imageslider06" />

    </div>
        </div>
    )
}

export default Home