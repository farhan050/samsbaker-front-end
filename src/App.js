import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from './components/global/hero/Hero';
import Slider from './components/global/sliders/Slider';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Products from './components/Products';
import ContactUs from './components/ContactUs';
import NotFound404 from './components/NotFound404';
function App() {
  return (
    <>
     <Router>
       <Hero>
        <Routes>
          <Route exact path="/" element={<Slider />}></Route>
        </Routes>
       </Hero>
       <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/About" element={<About />}></Route>
          <Route exact path="/Products" element={<Products />}></Route>
          <Route exact path="/Contactus" element={<ContactUs />}></Route>
          <Route exact path="*" element={<NotFound404 />}></Route>
       </Routes>
       <Footer/>
     </Router>
    </>
  );
}

export default App;
