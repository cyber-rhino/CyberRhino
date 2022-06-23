import "./styles.css";
import LogoRhino from "../../assets/img/logoRhino.svg";
import CyberRhino from "../../assets/img/cyber.rhino.svg";
import Rhino from "../../assets/img/rhino.svg";
import LoginRhino from "../../assets/img/loginImage.svg";

function Login () {
  return(
    <>

      <div className="background">
        <div className="img-desktop">
          <img src={Rhino} alt="" className="rhino" />
          <img src={LoginRhino} alt="" className="celular" />
        </div>

        <div className="form">

          <div className="form-title">
            <img src={LogoRhino} alt="" className="logo"/>
            <img src={CyberRhino} alt="" className="cyberRhino"/>
          </div>

          <div className="campos">

            <div className="dados-pessoais">
              <div>
                <span className="focus-input" data-placeholder="Nome"></span>
                <input className="input" type="text"/>
              </div>

              <div>
                <span className="focus-input" data-placeholder="Sobrenome"></span>
                <input className="input" type="text"/>
              </div>
            </div>

            <div className="dados-gerais">
              <div>
                <span className="focus-input" data-placeholder="E-mail"></span>
                <input className="input" type="email"/>
              </div>

              <div>
                <span className="focus-input" data-placeholder="Senha"></span>
                <input className="input senha" type="password" />
              </div>

              <div>
                <span className="focus-input" data-placeholder="Confirmar Senha" ></span>
                <input className="input senha" type="password" />
              </div>
              
            </div>
          </div>

          <div className="btn-1">
            <button>Registre-se</button>
          </div>

          <div className="txt">
              <p>Já é de casa?</p> <a href="#">Faça o login</a>
          </div>

        </div>
      </div>
    </>
  );
}

export default Login;