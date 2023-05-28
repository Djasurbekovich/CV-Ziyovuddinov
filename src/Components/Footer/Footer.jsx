import React from "react";
import Container from "../../Utils/Container/Container";
import { Link } from "react-router-dom";
import { FaTelegram, FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Logo from "../../Assets/Imgs/ziyovuddinov.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__wrap">
          <a href="#home">
            <div>
              <img className="footer__logo" src={Logo} alt="Ziyovuddinov" />
            </div>
          </a>
          <div className="footer__icons">
            <Link to="https://t.me/ziyovuddinovv7" target="_blank">
              <FaTelegram className="footer__icon" />
            </Link>
            <Link to="https://instagram.com/ziyovuddinov_v7" target="_blank">
              <RiInstagramFill className="footer__icon" />
            </Link>
            <Link
              to="https://www.facebook.com/profile.php?id=100091383715459&mibextid=ZbWKwL"
              target="_blank">
              <FaFacebookSquare className="footer__icon" />
            </Link>
          </div>
        </div>
        <div className="footer__end">
          <strong className="footer__text">
            This site was created by{" "}
            <Link
              to="https://t.me/ziyovuddinovv7"
              target="_blank"
              style={{ color: "limegreen" }}>
              <span>me</span>
            </Link>
          </strong>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
