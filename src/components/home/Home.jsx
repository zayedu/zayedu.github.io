import React from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import SpotifyNowPlaying from "../SpotifyNowPlaying";
import Top5Tracks from "../Top5Tracks";
import Top5Artists from "../Top5Artists";

const Home = () => {
  return (
    <section className="home_section" id="home">
      <div className="home__container container grid">
        <div className="home__listening">
          <Top5Artists />
        </div>
        <div className="home__content grid">
          <Social />
          <div className="home__img"></div>
          <Data />
        </div>

        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
