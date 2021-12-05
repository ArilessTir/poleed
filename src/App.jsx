import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./component/footer/footer";
import Navbar from "./component/navbar/navbar";
import Artistes from "./pages/Artiste";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/event" element={<Home />} />
        <Route path="/artiste" element={<Artistes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
