import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Umer</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/zayed-umer/"
            target="_blank"
            className="footer__social-link"
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          {/*<a
            href="https://www.instagram.com/notzayed"
            target="_blank"
            className="footer__social-link"
          >
            <i className="bx bxl-instagram"></i>
          </a>
*/}
          <a
            href="https://github.com/zayedu"
            target="_blank"
            className="footer__social-link"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>

        <span className="footer__copy"></span>
      </div>
    </footer>
  );
};

export default Footer;
