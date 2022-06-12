import "./styles.css";
import Html5 from "../../assets/img/Html5.svg";
import Css3 from "../../assets/img/Css3.svg";
import Js1 from "../../assets/img/Js1.svg";
import ts from "../../assets/img/ts.svg";
import Spring from "../../assets/img/Spring.svg";
import Python from "../../assets/img/Python.svg";
import Java from "../../assets/img/Java.svg";
import designFrontend from "../../assets/img/designFrontend.svg";
import designBackend from "../../assets/img/designBackend.svg";
import BuyButton from "../../components/BuyButton";
import { Link } from "react-router-dom";
import NavServices from "../../components/NavServices";

function SoftwarePage() {
  return (
    <>
    <body>
    <NavServices />
      <div id="Page-Services">
        <div className="top">
          <h1>Software</h1>
          <h6>PORQUE FAZER UM SITE?</h6>
        </div>

        <div className="content">
          <p>
            Software é um conjunto de instruções que devem ser seguidas e
            executadas por um mecanismo, seja ele um computador ou um aparato
            eletromecânico. É o termo usado para descrever programas, apps,
            scripts, macros e instruções de código embarcado diretamente
            (firmware), de modo a ditar o que uma máquina deve fazer.
            <br />
            <br /> Todo programa em seu computador, celular, tablet, smart TV,
            console de videogame, set-top box e etc. é um software, seja ele um
            editor de textos, um navegador, um editor de áudio ou vídeo, um
            jogo, um app de streaming e por aí vai.
          </p>
        </div>

        <div className="cards">
          <div className="card">
            <img src={designFrontend} alt="" />
            <div className="tittle">
              <h3>Front-end</h3>
              <p>html, css, typescript, javascript</p>
            </div>

            <div className="gray-card">
              <p>
                Podemos classificá-lo como a parte que nos permite interagir.
                Quem trabalha com front-end é responsável por desenvolver por
                meio do código uma interface gráfica e, normalmente, com as
                tecnologias base da web, como HTML, CSS e JavaScript. <br />
                <br /> Algumas pessoas podem confundir esse trabalho com o que
                um designer faz, mas a diferença aqui é que o designer vai
                utilizar alguma ferramenta visual para desenhar a interface,
                como Photoshop ou Sketch. Já quem faz front-end estará mais
                próxima do código em si.
              </p>

              <div className="logos">
                <img src={Html5} alt="" />
                <img src={Css3} alt="" />
                <img src={Js1} alt="" />
                <img src={ts} alt="" />
              </div>

              <button>
                <BuyButton />
              </button>
              <a href="#contact-page">Especifique seu serviço aqui.</a>
            </div>
          </div>

          <div className="card">
            <img src={designBackend} alt="" />
            <div className="tittle">
              <h3>Back-end</h3>
              <p>Spring tool suite, java, python</p>
            </div>

            <div className="gray-card">
              <p>
                Quando acessamos um site, por exemplo, por trás de toda sua
                apresentação amigável esteticamente, há uma comunicação das
                informações trocadas entre banco de dados e navegador. Portanto,
                por trás da interface gráfica do realizador, o back-end está
                sempre agindo. <br />
                <br /> As vertentes da programação podem se enveredar por
                diferentes caminhos. Ou seja, um software developer pode
                trabalhar na área de front-end ou back-end. Quando seu domínio
                atinge os dois lados, sua denominação passa a ser Full Stack.
              </p>

              <div className="logos">
                <img src={Spring} alt="" />
                <img src={Python} alt="" />
                <img src={Java} alt="" />
              </div>

              <button>
                <BuyButton />
              </button>
              <a href="#contact-page">Especifique seu serviço aqui.</a>
            </div>
          </div>
        </div>
      </div>
      </body>

      <Link className="back-main" to={"/"}>
        <svg
          width="125"
          height="125"
          viewBox="0 0 125 125"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="62.5"
            cy="62.5"
            r="61"
            fill="url(#paint0_linear_550_2)"
            stroke="white"
            stroke-width="3"
          />
          <path
            d="M87.5 68.75C89.5711 68.75 91.25 67.0711 91.25 65C91.25 62.9289 89.5711 61.25 87.5 61.25V68.75ZM37.3483 62.3483C35.8839 63.8128 35.8839 66.1872 37.3483 67.6517L61.2132 91.5165C62.6777 92.981 65.052 92.981 66.5165 91.5165C67.981 90.052 67.981 87.6777 66.5165 86.2132L45.3033 65L66.5165 43.7868C67.981 42.3223 67.981 39.948 66.5165 38.4835C65.052 37.019 62.6777 37.019 61.2132 38.4835L37.3483 62.3483ZM87.5 61.25L40 61.25V68.75H87.5V61.25Z"
            fill="white"
          />
          <defs>
            <linearGradient
              id="paint0_linear_550_2"
              x1="62.5"
              y1="6.98855e-10"
              x2="63"
              y2="125"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#15BFE3" />
              <stop offset="1" stop-color="#1523EC" />
            </linearGradient>
          </defs>
        </svg>
      </Link>
    </>
  );
}

export default SoftwarePage;
