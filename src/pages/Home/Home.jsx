import { Title } from "./styles"
import Header from "../../componentes/header/header"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Home/home.css'
import Section02 from "./sectionshome/section02/section02";
import Section03 from "./sectionshome/section03/section03";
import Section01 from "./sectionshome/section01/section01";
import Section04 from "./sectionshome/section04/section04";
import Section05 from "./sectionshome/section05/section05";
import Section06 from "./sectionshome/section06/section06";

function Home() {
  return (
    <div >
      <Section01 />
      <div id="servicos">
        <Section02 />
      </div>
      <Section03 />
      <Section04 />
      <div id="contato">
        <Section05 />
      </div>
      <Section06 />
    </div>




  )
}

export default Home;