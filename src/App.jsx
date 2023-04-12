import React from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <div className="stars">
        <div className="stars2">
          <div className="stars3"></div>
        </div>
      </div>
      <Header />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
