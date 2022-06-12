import "./App.css";
import "./assets/styles/custom.scss";
import "bootstrap/js/src/collapse.js";
import Footer from "./sections/Footer";
import BRoutes from "./Routes";

function App() {
  return (
    <> 
      <BRoutes />
      
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
backToTopButtonOnScroll()
window.addEventListener('scroll', backToTopButtonOnScroll)


function backToTopButtonOnScroll() {
  if (window.pageYOffset > 500){
        document.body.classList.add('show')
      } else {
          document.body.classList.remove('show') 
      }
}
