import React from "react";
import Container from "../../Utils/Container/Container";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useTranslation } from "react-i18next";
import MyPhoto from "../../Assets/Imgs/my photo.jpg";
import "./About.scss";

const About = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <section id="aboutme" className="about">
        <AnimationOnScroll animateIn="fadeInLeft">
          <div className="about__left">
            <h2 className="about__title">{t("about-title")}</h2>
            <p className="about__text">{t("about-text")}</p>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="fadeInRight">
          <div className="about__right">
            <img className="about__img" src={MyPhoto} alt="Image" />
          </div>
        </AnimationOnScroll>
      </section>
    </Container>
  );
};

export default About;
