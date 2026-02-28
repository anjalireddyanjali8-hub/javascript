import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Footer from "./Footer/Footer";
import Services from "./Services/Services";
import Landing from "./Landing/Landing";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
