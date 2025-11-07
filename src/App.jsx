import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Portolio from "./Pages/Portolio";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portolio />} />
        </Routes>
  
      <Footer />
    </>
  );
};

export default App;
