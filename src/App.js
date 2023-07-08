import Navbar from "./componets/Navbar"
import Home from "./componets/Home"
import Cert from "./componets/Certifications"
import Social from "./componets/Social"
import Contact from "./componets/Contact"
import About from "./componets/About"
import Portfolio from "./componets/Portfolio"
import Experience from "./componets/Experience"
import React from 'react'


export default function App() {
  return (
   <div className="bg-gray-800">
    <Navbar />
    <Home />
    <Cert />
    <Social />
    <About />
    <Portfolio />
    <Experience />
    <Contact />
   </div>
  );
}


