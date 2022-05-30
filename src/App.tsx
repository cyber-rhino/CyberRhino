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
          
          <Home />
          <Services />
          <QmSomos />
          <Contact />

      </body>
      
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
