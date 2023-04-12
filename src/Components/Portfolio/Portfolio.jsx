import React from "react";
import { Link } from "react-router-dom";
import Container from "../../Utils/Container/Container";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useTranslation } from "react-i18next";
import "./Portfolio.scss";

const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <section id="portfolio" className="portfolio">
        <h2 className="portfolio__title">{t("portfolio-title")}</h2>
        <ul className="portfolio__list">
          <AnimationOnScroll animateIn="flipInX">
            <Link to="https://prayer-times-day.netlify.app" target="_blank">
              <li className="portfolio__item">
                <h3 className="portfolio__l-title">Prayer Times</h3>
                <img
                  className="portfolio__img"
                  src="src/Imgs/Prayer-times.png"
                  alt="Daily-Prayer-Times"
                />
                <p className="portfolio__text">{t("portfolio-PrayerTimes")}</p>
              </li>
            </Link>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="flipInX">
            <Link to="https://uz-cars.netlify.app" target="_blank">
              <li className="portfolio__item">
                <h3 className="portfolio__l-title">UzAutoCars</h3>
                <img
                  className="portfolio__img"
                  src="src/Imgs/Uz-cars.png"
                  alt="Uz-Cars"
                />
                <p className="portfolio__text">{t("portfolio-UzCars")}</p>
              </li>
            </Link>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="flipInX">
            <Link to="https://products-and-users.netlify.app" target="_blank">
              <li className="portfolio__item">
                <h3 className="portfolio__l-title">Products and Users</h3>
                <img
                  className="portfolio__img"
                  src="src/Imgs/Products-and-Users.png"
                  alt="Products-and-Users"
                />
                <p className="portfolio__text">
                  {t("portfolio-ProductsUsers")}
                </p>
              </li>
            </Link>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="flipInX">
            <Link to="https://who-goes-first.netlify.app" target="_blank">
              <li className="portfolio__item">
                <h3 className="portfolio__l-title">Who goes first ?!</h3>
                <img
                  className="portfolio__img"
                  src="src/Imgs/Who-goes-first.png"
                  alt="Who-goes-first"
                />
                <p className="portfolio__text">{t("portfolio-WhoGoesFirst")}</p>
              </li>
            </Link>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="flipInX">
            <Link to="https://clock-uz-tash.netlify.app" target="_blank">
              <li className="portfolio__item">
                <h3 className="portfolio__l-title">Clock</h3>
                <img
                  className="portfolio__img"
                  src="src/Imgs/Clock.png"
                  alt="Clock"
                />
                <p className="portfolio__text">{t("portfolio-clock")}</p>
              </li>
            </Link>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="flipInX">
            <Link to="https://ez-conculator.netlify.app" target="_blank">
              <li className="portfolio__item">
                <h3 className="portfolio__l-title">Calculator</h3>
                <img
                  className="portfolio__img"
                  src="src/Imgs/Calculator.png"
                  alt="Calculator"
                />
                <p className="portfolio__text">{t("portfolio-calculator")}</p>
              </li>
            </Link>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="flipInX">
            <Link to="https://products-api-js.netlify.app" target="_blank">
              <li className="portfolio__item">
                <h3 className="portfolio__l-title">Products</h3>
                <img
                  className="portfolio__img"
                  src="src/Imgs/Products-API.png"
                  alt="Products"
                />
                <p className="portfolio__text">{t("portfolio-products")}</p>
              </li>
            </Link>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="flipInX">
            <Link
              to="https://the-rick-and-morty-reactjs.netlify.app"
              target="_blank">
              <li className="portfolio__item">
                <h3 className="portfolio__l-title">Rick and Morty</h3>
                <img
                  className="portfolio__img"
                  src="src/Imgs/Rick-and-Morty.png"
                  alt="Rick-and-Morty"
                />
                <p className="portfolio__text">{t("portfolio-RickMorty")}</p>
              </li>
            </Link>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="flipInX">
            <Link to="https://todo-react-js-01.netlify.app" target="_blank">
              <li className="portfolio__item">
                <h3 className="portfolio__l-title">To-Do</h3>
                <img
                  className="portfolio__img"
                  src="src/Imgs/Todo.png"
                  alt="To-do"
                />
                <p className="portfolio__text">{t("portfolio-todo")}</p>
              </li>
            </Link>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="flipInX">
            <Link
              to="https://phone-cart-redux-toolkit.netlify.app"
              target="_blank">
              <li className="portfolio__item">
                <h3 className="portfolio__l-title">Trolley of Phones</h3>
                <img
                  className="portfolio__img"
                  src="src/Imgs/Trolley-of-Phones.png"
                  alt="Trolley-of-Phones"
                />
                <p className="portfolio__text">{t("portfolio-phones")}</p>
              </li>
            </Link>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="flipInX">
            <Link to="https://slider-react-js-01.netlify.app" target="_blank">
              <li className="portfolio__item">
                <h3 className="portfolio__l-title">Slider</h3>
                <img
                  className="portfolio__img"
                  src="src/Imgs/Slider.png"
                  alt="Slider"
                />
                <p className="portfolio__text">{t("portfolio-slider")}</p>
              </li>
            </Link>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="flipInX">
            <Link
              to="https://pagination-github-react.netlify.app"
              target="_blank">
              <li className="portfolio__item">
                <h3 className="portfolio__l-title">Pagination "GitHub"</h3>
                <img
                  className="portfolio__img"
                  src="src/Imgs/Pagination.png"
                  alt="Pagination-GitHub"
                />
                <p className="portfolio__text">{t("portfolio-github")}</p>
              </li>
            </Link>
          </AnimationOnScroll>
        </ul>
      </section>
    </Container>
  );
};

export default Portfolio;
