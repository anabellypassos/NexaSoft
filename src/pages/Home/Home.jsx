import { Title } from "./styles"
import Header from "../../componentes/header/header"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Home/home.css'
import Section02 from "./sectionshome/section02/section02";
import Section03 from "./sectionshome/section03/section03";
import Section01 from "./sectionshome/section01/section01";
function Home() {
  return (
    <div >
<Section01 /> 
<Section02/>
<Section03/>
</div>

   
    

  )
}

export default Home;