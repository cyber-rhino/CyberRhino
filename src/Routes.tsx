import SoftwarePage from "./pages/SoftwarePage";
import MainPage from "./pages/MainPage";
import { Routes, Route, BrowserRouter} from "react-router-dom";


function BRoutes() {
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage />} />
            
            <Route path="/software" element={<SoftwarePage/>} />
        </Routes>
    </BrowserRouter>
);
}



export default BRoutes;

