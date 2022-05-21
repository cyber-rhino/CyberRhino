import "./style.css"
import logo from "../../assets/img/logofooter.svg";

function Footer() {
   return(
    <footer>
        <div className="footer-container">
            <img src={logo} alt="" />
    <p>©2022 - ChyberRhino <br/> Todos os direitos reservados</p>
    </div>
    </footer>
   );
}

export default Footer;