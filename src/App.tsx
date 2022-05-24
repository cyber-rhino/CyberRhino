import "./App.css";
import "./assets/styles/custom.scss";
import "bootstrap/js/src/collapse.js";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Footer from "./sections/Footer";
import Services from "./sections/Services";
import QmSomos from "./sections/QmSomos";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Navbar />
      <body id="sections">
        <section id="home-page">
          <Home />
        </section>

        <section id="services-page">
          <Services />
        </section>

        <section id="qmsomos-page">
          <QmSomos />
        </section>

        <section id="contact-page">
          <Contact />
        </section>
      </body>
      
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
