import "./style.css";
import Interrogacao from "../../assets/img/interrogacao.png";

function QmSomos() {
  return (
    <section id="qmsomos-page">
      <div className="col-a">
        <h4>Quem Somos?</h4>
        <h2>Entenda porquê existimos</h2>
        <p>
          Nossa empresa surgiu para atender um mercado cada vez maior de pessoas
          e empresas que demandam conteúdo textual de qualidade para alcançarem
          seus objetivos e se diferenciarem no mercado moderno cada vez mais
          competitivo.
          <br />
          <br /> Nossa equipe operacional é formada por editores, revisores,
          escritores, ghost writers e copywriters, pós-graduados, mestres e
          doutores, com formação em humanas, exatas e biológicas e amplo e
          profundo conhecimento teórico e prático em suas áreas de atuação.
        </p>
      </div>
      <div className="col-b">
        <img src={Interrogacao} alt="" />
      </div>
    </section>
  );
}

export default QmSomos;
