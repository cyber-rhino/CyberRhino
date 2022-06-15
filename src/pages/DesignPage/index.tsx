import "../styles.css";
import designWeb from "../../assets/img/designWeb.svg";
import designMarketing from "../../assets/img/designMarketing.svg";
import BuyButton from "../../components/BuyButton";
import { Link } from "react-router-dom";
import NavServices from "../../components/NavServices";
import ScrollToTop from "../../ScrollToTop";

function DesignPage() {
  return (
    <>
      <ScrollToTop>
        <body>
          <NavServices />
          <div id="Page-Services">
            <div className="top">
              <h1>Design</h1>
              <h6>FAZEMOS DO SEU NEGOCIO ESTILO</h6>
            </div>

            <div className="content">
              <p>
                O design é um conceito amplo que representa o processo de
                criação de produtos a partir da excelência técnica e estética,
                com o objetivo de solucionar problemas e agregar valor. Um bom
                design entrega a melhor experiência possível para o usuário.
                <br />
                <br />
                Design é um processo de pensamento que compreende a criação de
                produtos para solucionar problemas, incluindo aspectos
                funcionais e estéticos.
                <br />
                <br /> Essa é a definição mais objetiva possível para o
                conceito, que abrange inúmeras formas de idealização, concepção,
                desenvolvimento e especificação de objetos, sistemas e serviços.
              </p>
            </div>

            <div className="cards">
              <div className="card">
                <img src={designWeb} alt="" />
                <div className="tittle">
                  <h3>Web Design</h3>
                  <p>wireframes, interfaces</p>
                </div>

                <div className="gray-card">
                  <p>
                    Web design é a área que abrange a criação de interfaces para
                    softwares, sites, plataformas e aplicativos. <br />
                    <br /> Por interface, entendemos a parte visual das soluções
                    de TI, que se apresenta amigavelmente na tela no lugar de um
                    monte de códigos. <br />
                    <br /> Por exemplo, toda a lógica da sua área de trabalho do
                    Windows ou mesa do Mac foi projetada e criada por um web
                    designer, incluindo o layout de cada objeto e sua posição.{" "}
                    <br />
                    <br />
                    Para além de uma estética agradável, esse profissional
                    agrega os conceitos de usabilidade e experiência do usuário
                    ao design dos sites.
                  </p>

                  <button>
                    <BuyButton />
                  </button>
                  <a href="https://wa.me/5588987654321">
                    Especifique seu serviço aqui.
                  </a>
                </div>
              </div>

              <div className="card">
                <img src={designMarketing} alt="" />
                <div className="tittle">
                  <h3>Marketing</h3>
                  <p>marketing digital, banners de publicidade</p>
                </div>

                <div className="gray-card">
                  <p>
                    O design para marketing digital é uma área repleta de
                    desafios para o profissional que está começando a sua
                    carreira. O tempo
                    todo testando novas possibilidades e criando novas formas de
                    se comunicar visualmente. <br />
                    <br /> Marketing e a Publicidade trazem e os elementos
                    visuais que o Design pode fornecer, temos o
                    conjunto perfeito para o sucesso de uma marca que pensa no
                    consumidor. <br />
                    <br /> O Design e o Marketing Digital, portanto, estão
                    intimamente ligados. Juntos, conseguem atingir objetivos de
                    campanhas, atrair leads qualificados e fazer grande
                    diferença em empresas de todos os portes e setores.
                  </p>

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

export default DesignPage;
