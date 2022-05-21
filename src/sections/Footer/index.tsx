import "./style.css";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import SocialLinks from "../../components/SocialLinks";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <Logo />
        <p>
          ©2022 - ChyberRhino <br /> Todos os direitos reservados
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}

export default Footer;
