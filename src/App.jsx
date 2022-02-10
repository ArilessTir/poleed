import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./component/footer/footer";
import Navbar from "./component/navbar/navbar";
import Artiste from "./pages/Artiste";
import Artistes from "./pages/Artistes";
import Events from "./pages/Events";
import Event from "./pages/Event";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ScrollToTop from "./services/scrollTop";
import Projects from "./pages/Project";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/event" element={<Events />} />
        <Route path="/artiste" element={<Artistes />} />
        <Route path="/artiste/:id" element={<Artiste />} />
        <Route path="/event/:id" element={<Event />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
