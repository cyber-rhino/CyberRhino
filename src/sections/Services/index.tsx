import "./style.css"
import SoftImg from "../../assets/img/software.png";
import DesiImg from "../../assets/img/design.png";
import HardImg from "../../assets/img/hardware.png";
import {ReactComponent as Confere} from "../../assets/img/confere.svg"

function Services() {
  return (
    <section className="services-page">
      <h4>Services</h4>
      <h2>O que podemos oferecer?</h2>
      
      <div className="card">
     <img src={SoftImg} alt="" />
     <div className="title">
     <h2>Software</h2> 
     <Confere/ >
     </div>
     <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,</p>
      </div>

      <div className="card">
     <img src={DesiImg} alt="" />
     <div className="title">
     <h2>Design</h2> 
     <Confere/ >
     </div>
     <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,</p>
      </div>

      <div className="card">
     <img src={HardImg} alt="" />
     <div className="title">
     <h2>Hardware</h2> 
     <Confere/ >
     </div>
     <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,</p>
      </div>

    </section>
  );
}

export default Services;