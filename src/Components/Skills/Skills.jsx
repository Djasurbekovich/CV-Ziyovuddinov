import React from "react";
import Container from "../../Utils/Container/Container";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useTranslation } from "react-i18next";
import "./Skills.scss";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <section id="skills" className="skills">
        <h2 className="skills__title">{t("skills-title")}</h2>
        <div className="skills__display">
          <div className="skills__box">
            <AnimationOnScroll animateIn="fadeInRight">
              <div className="skills__wrap">
                <div className="skills__box1">
                  <strong className="skills__text">HTML</strong>
                </div>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="fadeInRight">
              <div className="skills__wrap">
                <div className="skills__box3">
                  <strong className="skills__text">CSS</strong>
                </div>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="fadeInRight">
              <div className="skills__wrap">
                <div className="skills__box2">
                  <strong className="skills__text">SASS</strong>
                </div>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="fadeInRight">
              <div className="skills__wrap">
                <div className="skills__box4">
                  <strong className="skills__text">JavaScript</strong>
                </div>
              </div>
            </AnimationOnScroll>
          </div>
          <div className="skills__box">
            <AnimationOnScroll animateIn="fadeInLeft">
              <div className="skills__wrap">
                <div className="skills__box1">
                  <strong className="skills__text">React JS</strong>
                </div>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="fadeInLeft">
              <div className="skills__wrap">
                <div className="skills__box2">
                  <strong className="skills__text">Ant Design</strong>
                </div>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="fadeInLeft">
              <div className="skills__wrap">
                <div className="skills__box3">
                  <strong className="skills__text">MUI</strong>
                </div>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="fadeInLeft">
              <div className="skills__wrap">
                <div className="skills__box4">
                  <strong className="skills__text">Node JS</strong>
                </div>
              </div>
            </AnimationOnScroll>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Skills;
