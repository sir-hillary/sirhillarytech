import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Footer/Footer";
import Contact from "./Pages/Contact";
import ScrollToTop from "./Components/ScrollToTop";
import AboutPage from "./Pages/About";
import PortfolioPage from "./Pages/Portolio";
import ServicesPage from "./Components/Services/Services";


const App = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<PortfolioPage />} />        
        <Route path="/about" element={<AboutPage />} />        
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
