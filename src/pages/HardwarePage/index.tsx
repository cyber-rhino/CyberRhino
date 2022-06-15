import "../styles.css";
import designManutencao from "../../assets/img/designManutencao.svg";
import designFormatacao from "../../assets/img/designFormatacao.svg";
import BuyButton from "../../components/BuyButton";
import { Link } from "react-router-dom";
import NavServices from "../../components/NavServices";
import ScrollToTop from "../../ScrollToTop";

function HardwarePage() {
  return (
    <>
      <ScrollToTop>
        <body>
          <NavServices />
          <div id="Page-Services">
            <div className="top">
              <h1>Hardware</h1>
              <h6>PROBLEMAS COM SEU APARELHO?</h6>
            </div>

            <div className="content">
              <p>
                Hardware é a parte física do computador, ou seja, o conjunto de
                aparatos eletrônicos, peças e equipamentos que fazem o
                computador funcionar. A palavra hardware pode se referir também
                como o conjunto de equipamentos acoplados em produtos que
                precisam de algum tipo de processamento computacional. A ciência
                que estuda o hardware é conhecida como arquitetura de
                computadores. <br /> <br /> Diferentemente do hardware, o
                software é a parte lógica do computador. Software é a
                manipulação, instrução de execução, redirecionamento e execução
                das atividades lógicas das máquinas.
              </p>
            </div>

            <div className="cards">
              <div className="card">
                <img src={designManutencao} alt="" />
                <div className="tittle">
                  <h3>Manutenção</h3>
                  <p>computador, celular, notebook etc.</p>
                </div>

                <div className="gray-card">
                  <p>
                    A manutenção adequada de um hardware é tão importante quanto
                    a de um software. Ela é caracterizada por limpeza,
                    identificação de falhas e suas origens, diagnóstico de peças
                    que não estão mais desempenhando como o desejado e, em
                    alguns casos, substituição de componentes. O ideal é que
                    seja feita uma manutenção regularmente; assim é possível
                    evitar desgastes, inclusive dos elementos vitais para o bom
                    funcionamento da máquina. <br /> <br /> Basicamente existem
                    dois tipos de manutenções de hardware: preventiva e
                    corretiva. A primeira consiste na análise prévia do
                    computador, de seu funcionamento, relacionada à CPU e a
                    todos os periféricos.
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
                <img src={designFormatacao} alt="" />
                <div className="tittle">
                  <h3>Formatação</h3>
                  <p>windows, linux, mac.</p>
                </div>

                <div className="gray-card">
                  <p>
                    Uma das principais atividades realizadas por quem atua com
                    manutenção de PCs e Notebooks é sem dúvidas a formatação de
                    computadores. <br /> <br /> A demanda por esse tipo de tarefa é muito
                    grande pois mesmo sendo um procedimento relativamente
                    simples, a maioria das pessoas não se sente segura e
                    confortável para fazer por conta própria e preferem pagar um
                    profissional capacitado. <br /> <br /> Para os profissionais é importante
                    conhecer bem os passos corretos para realizar a tarefa de
                    maneira eficiente e ágil, de forma que o cliente fique
                    satisfeito com o resultado. <br /> <br /> Formatamos Windows, Linux e Mac.
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

export default HardwarePage;
