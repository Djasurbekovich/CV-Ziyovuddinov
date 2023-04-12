import React from "react";
import Container from "../../Utils/Container/Container";
import "./Header.scss";
import Hero from "./Hero";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div id="home">
      <Container>
        <Navbar />
        <Hero />
      </Container>
    </div>
  );
};

export default Header;
