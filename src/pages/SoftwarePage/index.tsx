import "../styles.css";
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
import ScrollToTop from "../../ScrollToTop";

function SoftwarePage() {
  return (
    <>
      <ScrollToTop>
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
                executadas por um mecanismo, seja ele um computador ou um
                aparato eletromecânico. É o termo usado para descrever
                programas, apps, scripts, macros e instruções de código
                embarcado diretamente (firmware), de modo a ditar o que uma
                máquina deve fazer.
                <br />
                <br /> Todo programa em seu computador, celular, tablet, smart
                TV, console de videogame, set-top box e etc. é um software, seja
                ele um editor de textos, um navegador, um editor de áudio ou
                vídeo, um jogo, um app de streaming e por aí vai.
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
                    Podemos classificá-lo como a parte que nos permite
                    interagir. Quem trabalha com front-end é responsável por
                    desenvolver por meio do código uma interface gráfica e,
                    normalmente, com as tecnologias base da web, como HTML, CSS
                    e JavaScript. <br />
                    <br /> Algumas pessoas podem confundir esse trabalho com o
                    que um designer faz, mas a diferença aqui é que o designer
                    vai utilizar alguma ferramenta visual para desenhar a
                    interface, como Photoshop ou Sketch. Já quem faz front-end
                    estará mais próxima do código em si.
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
                  <a href="https://wa.me/5588987654321">
                    Especifique seu serviço aqui.
                  </a>
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
                    informações trocadas entre banco de dados e navegador.
                    Portanto, por trás da interface gráfica do realizador, o
                    back-end está sempre agindo. <br />
                    <br /> As vertentes da programação podem se enveredar por
                    diferentes caminhos. Ou seja, um software developer pode
                    trabalhar na área de front-end ou back-end. Quando seu
                    domínio atinge os dois lados, sua denominação passa a ser
                    Full Stack.
                  </p>

                  <div className="logos">
                    <img src={Spring} alt="" />
                    <img src={Python} alt="" />
                    <img src={Java} alt="" />
                  </div>

                  <button>
                    <BuyButton />
                  </button>
                  <a href="https://wa.me/5588987654321">
                    Especifique seu serviço aqui.
                  </a>
                </div>
              </div>
            </div>
          </div>
        </body>

        <Link className="back-main" to={"/"}>
          <svg
            width="151"
            height="151"
            viewBox="0 0 151 151"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_550_2)">
              <circle
                cx="75.5"
                cy="63.5"
                r="61"
                fill="url(#paint0_linear_550_2)"
                stroke="white"
                stroke-width="3"
              />
              <path
                d="M100.5 69.75C102.571 69.75 104.25 68.0711 104.25 66C104.25 63.9289 102.571 62.25 100.5 62.25V69.75ZM50.3483 63.3483C48.8839 64.8128 48.8839 67.1872 50.3483 68.6517L74.2132 92.5165C75.6777 93.981 78.052 93.981 79.5165 92.5165C80.981 91.052 80.981 88.6777 79.5165 87.2132L58.3033 66L79.5165 44.7868C80.981 43.3223 80.981 40.948 79.5165 39.4835C78.052 38.019 75.6777 38.019 74.2132 39.4835L50.3483 63.3483ZM100.5 62.25L53 62.25V69.75H100.5V62.25Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_550_2"
                x="0"
                y="0"
                width="151"
                height="151"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="12" />
                <feGaussianBlur stdDeviation="6.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_550_2"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_550_2"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_550_2"
                x1="75.5"
                y1="1"
                x2="76"
                y2="126"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#15BFE3" />
                <stop offset="1" stop-color="#1523EC" />
              </linearGradient>
            </defs>
          </svg>
        </Link>
      </ScrollToTop>
    </>
  );
}

export default SoftwarePage;
