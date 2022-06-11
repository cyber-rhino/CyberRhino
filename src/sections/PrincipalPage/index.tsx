import Navbar from "../../components/Navbar";
import Home from "../Home";
import Services from "../Services";
import QmSomos from "../QmSomos";
import Contact from "../Contact";

function principalPage() {
  return (
    <>
      <Navbar />
      <body id="sections">
        <Home />
        <Services />
        <QmSomos />
        <Contact />

        <a id="backToTopButton" href="#navigation">
          <svg width="125" height="125" viewBox="0 0 125 125" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="62.5" cy="62.5" r="62.5" fill="url(#paint0_linear_497_7)"/>
          <path d="M58.75 87.5C58.75 89.5711 60.4289 91.25 62.5 91.25C64.5711 91.25 66.25 89.5711 66.25 87.5L58.75 87.5ZM65.1517 37.3483C63.6872 35.8839 61.3128 35.8839 59.8483 37.3483L35.9835 61.2132C34.519 62.6777 34.519 65.052 35.9835 66.5165C37.448 67.981 39.8223 67.981 41.2868 66.5165L62.5 45.3033L83.7132 66.5165C85.1777 67.981 87.552 67.981 89.0165 66.5165C90.481 65.052 90.481 62.6777 89.0165 61.2132L65.1517 37.3483ZM66.25 87.5L66.25 40L58.75 40L58.75 87.5L66.25 87.5Z" fill="white"/>
          <defs>
          <linearGradient id="paint0_linear_497_7" x1="62.5" y1="6.98855e-10" x2="63" y2="125" gradientUnits="userSpaceOnUse">
          <stop stop-color="#15BFE3"/>
          <stop offset="1" stop-color="#1523EC"/>
          </linearGradient>
          </defs>
          </svg>
        </a>
      </body>
    </>
  );
}

export default principalPage;