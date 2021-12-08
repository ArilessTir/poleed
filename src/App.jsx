import { AnimatePresence } from "framer-motion";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./component/footer/footer";
import Navbar from "./component/navbar/navbar";
import Artiste from "./pages/Artiste";
import Artistes from "./pages/Artistes";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <AnimatePresence exitBeforeEnter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          <Route path="/event" element={<Home />} />
          <Route path="/artiste" element={<Artistes />} />
          <Route path="/artiste/:id" element={<Artiste />} />
        </Routes>
        <Footer />
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default App;
