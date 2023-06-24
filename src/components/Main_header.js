import { BrowserRouter as Router, Link } from "react-router-dom";

import mainHeaderLogo from "./../assets/main-header-logo.png";

import "./Main_header.css";
export default function MainHeader() {
  return (
    <div className="main-header">
      <Link to="/" className="main-header__logo-link">
        <div className="main-header__logo-container">
          <img src={mainHeaderLogo} alt="" className="main-header__logo" />
        </div>
      </Link>
      <nav className="main-header__nav">
        <div className="main-header__nav-elt">
          <Link path="/" className="main-header__nav-elt__link">
            Accueil
          </Link>
        </div>
        <div className="main-header__nav-elt">
          <Link path="/" className="main-header__nav-elt__link">
            Profil
          </Link>
        </div>
        <div className="main-header__nav-elt">
          <Link path="/" className="main-header__nav-elt__link">
            Réglage
          </Link>
        </div>
        <div className="main-header__nav-elt">
          <Link path="/" className="main-header__nav-elt__link">
            Communauté
          </Link>
        </div>
      </nav>
    </div>
  );
}
