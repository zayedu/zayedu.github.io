import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Bachelors Of Software Engineering
                </h3>
                <span className="qualification__subtitle">
                  McMaster University
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2026
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/*   <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">OSSD</h3>
                <span className="qualification__subtitle">
                  Albert Campbell CI
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2022
                </div>
              </div>
            </div>
          */}
            {/*<div className="qualification__data">
              <div>
                <h3 className="qualification__title">OSSD</h3>
                <span className="qualification__subtitle">
                  Albert Campbell CI
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
*/}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
              </div>

              <div>
                <h3 className="qualification__title">OSSD</h3>
                <span className="qualification__subtitle">
                  Albert Campbell CI
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2018-2022
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Software Development Intern
                </h3>
                <span className="qualification__subtitle">
                  LocoMobi World Inc.
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Summer 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Data Management Volunteer
                </h3>
                <span className="qualification__subtitle">
                  Spinal Cord Injury Ontario
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Orientation Volunteer</h3>
                <span className="qualification__subtitle">
                  Albert Campbell CI
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
