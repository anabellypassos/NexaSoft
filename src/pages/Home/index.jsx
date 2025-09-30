import { Title } from "./styles"
import Header from "../../componentes/header/header"
import '../Home/home.css'
function Home(){
    return(
        <div>
  <Header/>
    <div className="quadrante01">
      <h1 className="Titledestac">
        Consultoria especializada em <span>desenvolvimento de software customizados</span>
      </h1>
      <p className="paragrapy01">Apoiamos esmpresas não nativas digitais a <span>digitalizar processos críticos</span> e criar novas linhas de receita com produtos ou sistemas criados <span>sob medida</span></p>
    </div>
        </div>
    )
}

export default Home