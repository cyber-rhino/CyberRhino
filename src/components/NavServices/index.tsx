import "./style.css";
import {ReactComponent as NavServiceLogo} from "../../assets/img/nav-service.svg";
import { Link} from "react-router-dom";

function NavServices() {
  return (
    <nav id="nav-service">
      <Link to={"/"}><NavServiceLogo /></Link>
      <h3>- Serviços</h3>
    </nav>
  );
}

export default NavServices;
