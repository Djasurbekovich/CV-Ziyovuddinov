import React, { useState, useEffect, useRef } from "react";
import i18n from "../../Language/i18next";
import { useTranslation } from "react-i18next";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { ThemeContext, themes } from "../../Context/ThemeContext";
import "./Header.scss";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);

  const { t } = useTranslation();

  const handleChangeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (menuOpen && ref.current && !ref.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.addEventListener("mousedown", handler);
    };
  }, [menuOpen]);

  return (
    <nav className="nav">
      <a href="#home">
        <div>
          <strong className="nav__logo">
            <span>Z.</span>Elmurod
          </strong>
        </div>
      </a>
      <select className="nav__lang" onChange={handleChangeLanguage}>
        <option value="uz">{t("select-uz")}</option>
        <option value="ru">{t("select-ru")}</option>
        <option value="en">{t("select-en")}</option>
      </select>
      <ThemeContext.Consumer>
        {({ changeTheme }) => (
          <button
            color="link"
            onClick={() => {
              setDarkMode(!darkMode);
              changeTheme(darkMode ? themes.light : themes.dark);
            }}
            style={{ color: "white", display: "flex" }}>
            {darkMode ? <BsMoonStarsFill /> : <BsSunFill />}
          </button>
        )}
      </ThemeContext.Consumer>
      <ul className="nav__list">
        <a href="#home">
          <li className="nav__item">{t("nav-home")}</li>
        </a>
        <a href="#aboutme">
          <li className="nav__item">{t("nav-about")}</li>
        </a>
        <a href="#skills">
          <li className="nav__item">{t("nav-skills")}</li>
        </a>
        <a href="#portfolio">
          <li className="nav__item">{t("nav-portfolio")}</li>
        </a>
        <a href="#contact">
          <li className="nav__item">{t("nav-contact")}</li>
        </a>
      </ul>

      <div ref={ref} className="nav-menu">
        <button className="toggle" onClick={() => setMenuOpen((prev) => !prev)}>
          {menuOpen ? (
            <MdClose style={{ width: "35px", height: "35px", color: "red" }} />
          ) : (
            <FiMenu style={{ width: "30px", height: "30px" }} />
          )}
        </button>
        <ul className={`menu-nav${menuOpen ? " show-menu" : ""}`}>
          <li>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              {t("nav-home")}
            </a>
          </li>
          <li>
            <a href="#aboutme" onClick={() => setMenuOpen(false)}>
              {t("nav-about")}
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => setMenuOpen(false)}>
              {t("nav-skills")}
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick={() => setMenuOpen(false)}>
              {t("nav-portfolio")}
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              {t("nav-contact")}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
