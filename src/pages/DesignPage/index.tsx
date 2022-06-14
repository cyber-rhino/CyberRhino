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
      </ScrollToTop>
    </>
  );
}

export default DesignPage;
