import "./style.css";
import logo from "../../assets/img/logo.svg";

function Navbar(){
    return(
        <nav className="navbar navbar-expand-md">
        <div className="container-fluid">
          <div>
            <img src={logo} alt="" />
          </div>
          <div className="collapse navbar-ligth navbar-collapse">
            <ul className="navbar-nav offset-md-2 main-menu">
              <li>
                <a href="m">Início</a>
              </li>
              <li>
                <a href="m">Serviços</a>
              </li>
              <li>
                <a href="m">Quem somos</a>
              </li>
              <li>
                <a className="button" href="m">
                  Contate-nos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;