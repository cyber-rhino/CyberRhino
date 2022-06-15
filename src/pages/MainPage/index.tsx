import Navbar from "../../components/Navbar";
import Home from "../../sections/Home";
import Services from "../../sections/Services";
import QmSomos from "../../sections/QmSomos";
import Contact from "../../sections/Contact";

function MainPage() {
  return (
    <>
      <Navbar />
      <body id="sections">
        <Home />
        <Services />
        <QmSomos />
        <Contact />

        <a id="backToTopButton" href="#navigation">
          <svg width="151" height="151" viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_497_7)">
<circle cx="75.5" cy="63.5" r="61" fill="url(#paint0_linear_497_7)" stroke="white" stroke-width="3"/>
<path d="M71.75 88.5C71.75 90.5711 73.4289 92.25 75.5 92.25C77.5711 92.25 79.25 90.5711 79.25 88.5L71.75 88.5ZM78.1517 38.3483C76.6872 36.8839 74.3128 36.8839 72.8483 38.3483L48.9835 62.2132C47.519 63.6777 47.519 66.052 48.9835 67.5165C50.448 68.981 52.8223 68.981 54.2868 67.5165L75.5 46.3033L96.7132 67.5165C98.1777 68.981 100.552 68.981 102.017 67.5165C103.481 66.052 103.481 63.6777 102.017 62.2132L78.1517 38.3483ZM79.25 88.5L79.25 41L71.75 41L71.75 88.5L79.25 88.5Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_497_7" x="0" y="0" width="151" height="151" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="12"/>
<feGaussianBlur stdDeviation="6.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_497_7"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_497_7" result="shape"/>
</filter>
<linearGradient id="paint0_linear_497_7" x1="75.5" y1="1" x2="76" y2="126" gradientUnits="userSpaceOnUse">
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

export default MainPage;
