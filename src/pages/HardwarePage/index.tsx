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

export default HardwarePage;
