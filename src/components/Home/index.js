// == Package imports
import React from 'react';
import { HiSearchCircle } from "react-icons/hi";

// == Local imports
import logoBright from '../../assets/logos/drizzle-logo_bright.svg';

const Home = () => (
  <main className="home">
    <div className="home__container">
      <div className="home__container__intro">
        <p className="home__container__intro__wlcm">Welcome to...</p>
        <div className="home__container__intro__logo">
          <img src={logoBright} alt="Drizzle logo" />
        </div>
        <p className="home__container__intro__desc">The cool weather app. It's fun, accurate and easy to use. Just start by choosing a location.</p>
      </div>
      <button className="home__container__btn">
        <p>Search place</p>
        <HiSearchCircle className="home__container__btn__icon" />
      </button>
    </div>
  </main>
);

export default Home;