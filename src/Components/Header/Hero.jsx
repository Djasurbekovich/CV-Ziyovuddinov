import React from "react";
import { useTranslation } from "react-i18next";
import "./Header.scss";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="hero">
      <div className="hero__left">
        <small className="hero__hello">{t("hero-hello")} 👋</small>
        <h1 className="hero__title">{t("hero-name")}</h1>
        <strong className="hero__job">{t("hero-job")}</strong>
        <p className="hero__text">{t("hero-who")}</p>
        <a href="#contact">
          <button className="hero__btn">{t("hero-btn")}</button>
        </a>
      </div>
      <div className="hero__right">
        <img
          className="hero__img"
          src="https://www.srisoftwarez.com/images/banner.png"
          alt="Image"
        />
      </div>
    </div>
  );
};

export default Hero;
