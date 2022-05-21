import "./App.css";
import "./assets/styles/custom.scss";
import "bootstrap/js/src/collapse.js";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
    <div className="wrapper">
    <Navbar />
    <Home />
    </div>
    <Footer />
    </>
  );
}

export default App;
