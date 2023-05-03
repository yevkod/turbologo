import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import DemosPage from "./pages/DemosPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import PagesPage from "./pages/PagesPage";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/demos" element={<DemosPage />}/>
                <Route path="/services" element={<ServicesPage />}/>
                <Route path="/pages" element={<PagesPage />}/>
                <Route path="/contact" element={<ContactPage />}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
