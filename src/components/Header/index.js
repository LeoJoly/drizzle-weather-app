// -- Package imports
import React from 'react';
import { Link } from 'react-router-dom';
import { HiSearchCircle } from "react-icons/hi";

// == Local imports
import logoBright from '../../assets/logos/drizzle-logo_bright.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__container__logo">
          <Link to="/">
            <img src={logoBright} alt="Drizzle logo" />
          </Link>
        </div>
        <button className="header__container__btn">
          <p>Search place</p>
          <HiSearchCircle className="header__container__btn__icon" />
        </button>
      </div>
    </header>
  );
};

export default Header;