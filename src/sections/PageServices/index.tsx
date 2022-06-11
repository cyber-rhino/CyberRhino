import "./styles.css";
import Html5 from "../../assets/img/Html5.svg";
import Css3 from "../../assets/img/Css3.svg";
import Js1 from "../../assets/img/Js1.svg";
import ts from "../../assets/img/ts.svg";
import Spring from "../../assets/img/Spring.svg";
import Python from "../../assets/img/Python.svg";
import Java from "../../assets/img/Java.svg";
import cesta from "../../assets/img/cesta.png";
import designFrontend from "../../assets/img/designFrontend.svg";
import designBackend from "../../assets/img/designBackend.svg";

function PageServices() {
  return(
    <>

    <nav>
        <img src="" alt="" />
        <img src="" alt="" />
      </nav>
    <div className="pageContainer">
      
        <div className="top">
            <p>PORQUE FAZER UM SITE?</p>
            <h1>Serviços - Software</h1>
        </div>

      
        <div className="content">
        <p>Software é um conjunto de instruções que devem ser seguidas e executadas por um mecanismo, seja ele um computador ou um aparato eletromecânico. É o termo usado para descrever programas, apps, scripts, macros e instruções de código embarcado diretamente (firmware), de modo a ditar o que uma máquina deve fazer.

        Todo programa em seu computador, celular, tablet, smart TV, console de videogame, set-top box e etc. é um software, seja ele um editor de textos, um navegador, um editor de áudio ou vídeo, um jogo, um app de streaming e por aí vai.</p>
      </div>

        <div className="frontend">
          <img src={designFrontend} alt="" />
          <button><h3>Front-end</h3>
          <p>html, css, typescript, javascript</p>
          </button>

          <div className="card">
          <p>Podemos classificá-lo como a parte que nos permite interagir. Quem trabalha com front-end é responsável por desenvolver por meio do código uma interface gráfica e, normalmente, com as tecnologias base da web, como HTML, CSS e JavaScript.

          Algumas pessoas podem confundir esse trabalho com o que um designer faz, mas a diferença aqui é que o designer vai utilizar alguma ferramenta visual para desenhar a interface, como Photoshop ou Sketch. Já quem faz front-end estará mais próxima do código em si, que irá rodar no navegador, como o Chrome, Firefox ou Safari.</p>

          <div className="logos">
          <img src={Html5} alt="" />
          <img src={Css3} alt="" />
          <img src={Js1} alt="" />
          <img src={ts} alt="" />
          </div>

          <button>SOLICITAR SERVIÇO <img src={cesta} alt="" /></button>
          <a href="#">Especifique seu serviço aqui.</a>
          </div>
          
        </div>

        <div className="backend">
          <img src={designBackend} alt="" />
          <button><h3>Back-end</h3>
          <p>Spring tool suite, java, python</p>
          </button>
          
          <div className="card"><p>
          Quando acessamos um site, por exemplo, por trás de toda sua apresentação amigável esteticamente, há uma comunicação das informações trocadas entre banco de dados e navegador. Portanto, por trás da interface gráfica do realizador, o back-end está sempre agindo.

          As vertentes da programação podem se enveredar por diferentes caminhos. Ou seja, um software developer pode trabalhar na área de front-end ou back-end. Quando seu domínio atinge os dois lados, sua denominação passa a ser Full Stack.</p>
          
          <div className="logos">
          <img src={Spring} alt="" />
          <img src={Python} alt="" />
          <img src={Java} alt="" />
          </div>

          <button>SOLICITAR SERVIÇO <img src={cesta} alt="" /></button>
          <a href="#">Especifique seu serviço aqui.</a>
          </div>
        </div>

    </div>
    
    </>
  );
}

export default PageServices;