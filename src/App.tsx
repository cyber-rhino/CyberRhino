import "./App.css";
import "./assets/styles/custom.scss";
import "bootstrap/js/src/collapse.js";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Footer from "./sections/Footer";
import Services from "./sections/Services";

function App() {
  return (
    <>
    <section>
    <Navbar />
    <Home />
    <Services />
    </section>
    <footer>
    <Footer />
    </footer>
    </>
  );
}

export default App;
