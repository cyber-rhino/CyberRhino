import SoftwarePage from "./pages/SoftwarePage";
import HardwarePage from "./pages/HardwarePage";
import DesignPage from "./pages/DesignPage";
import MainPage from "./pages/MainPage";
import { Routes, Route, BrowserRouter} from "react-router-dom";


function BRoutes() {
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage />} />
            
            <Route path="/software" element={<SoftwarePage/>} />

            <Route path="/hardware" element={<HardwarePage/>} />

            <Route path="/design" element={<DesignPage/>} />
        </Routes>
    </BrowserRouter>
);
}



export default BRoutes;

