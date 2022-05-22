import "./style.css";
import Interrogacao from "../../assets/img/interrogacao.png";


function QmSomos(){
    return(
        <section id="qmsomos-page">
            <h4>Quem Somos?</h4>
            <h2>Entenda porquê existimos</h2>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature.</p>
            <img src={Interrogacao} alt="" />
        </section>
    );
}

export default QmSomos;