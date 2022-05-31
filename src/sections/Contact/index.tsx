import "./style.css";
import Notebook from "../../assets/img/notebook.png";
import ContactButton from "../../components/ContactButton";

function Contact() {
  return (
    <section id="contact-page">
      <div className="col-a">
        <h4>Contate-nos</h4>
        <h2>Entre em contato</h2>

        <div className="dados">
          <div className="dado">
            <svg
              width="24"
              height="27"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_203_710)">
                <path
                  d="M3 11.3919C3 18.735 12 25.0291 12 25.0291C12 25.0291 21 18.735 21 11.3919C21 8.8879 20.0518 6.4865 18.364 4.71594C16.6761 2.94538 14.3869 1.95068 12 1.95068C9.61305 1.95068 7.32387 2.94538 5.63604 4.71594C3.94821 6.4865 3 8.8879 3 11.3919Z"
                  stroke="#0960C1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 14.539C10.3431 14.539 9 13.13 9 11.3919C9 9.65386 10.3431 8.24487 12 8.24487C13.6569 8.24487 15 9.65386 15 11.3919C15 13.13 13.6569 14.539 12 14.539Z"
                  stroke="#0960C1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_203_710">
                  <rect
                    width="24"
                    height="25.1765"
                    fill="white"
                    transform="matrix(-1 0 0 1 24 0.901611)"
                  />
                </clipPath>
              </defs>
            </svg>
            <p>R .Francisco Carlos Daniel, 157</p>
          </div>

          <div className="dado">
            <svg
              width="24"
              height="26"
              viewBox="0 0 24 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 4.62793H4C2.9 4.62793 2 5.57205 2 6.72597V19.3142C2 20.4681 2.9 21.4122 4 21.4122H20C21.1 21.4122 22 20.4681 22 19.3142V6.72597C22 5.57205 21.1 4.62793 20 4.62793Z"
                stroke="#0960C1"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 6.72607L12 14.0692L22 6.72607"
                stroke="#0960C1"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>cyberrhino14@gmail.com</p>
          </div>
        </div>
        <div className="expanded-button">
          <ContactButton />
        </div>
      </div>

      <div className="col-b">
        <img src={Notebook} alt="" />
        <div className="small-button">
          <a target="_blank" href="https://wa.me/558883476398" rel="noreferrer"><ContactButton /></a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
