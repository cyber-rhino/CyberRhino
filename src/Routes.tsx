import SoftwarePage from "./pages/SoftwarePage";
import MainPage from "./pages/MainPage";
import { Routes, Route, BrowserRouter} from "react-router-dom";
import ScrollToTop from "./ScrollToTop";


function BRoutes() {
    return(
    <BrowserRouter>
    <ScrollToTop>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/software" element={<SoftwarePage/>} />
        </Routes>
        </ScrollToTop>
    </BrowserRouter>
);
}



export default BRoutes;

