import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Main_sidebar.css";

import swimming from "./../assets/sidebar-swimming.png";
import workout from "./../assets/sidebar-workout.png";
import meditation from "./../assets/sidebar-meditation.png";
import cycling from "./../assets/sidebar-cycling.png";

export default function MainSideBar() {
  return (
    <div className="main-sidebar">
      <nav className="main-sidebar__nav">
        <Link to="/" className="main-sidebar__nav__link">
          <img src={meditation} alt="" className="main-sidebar__nav__img" />
        </Link>
        <Link to="/" className="main-sidebar__nav__link">
          <img src={swimming} alt="" className="main-sidebar__nav__img" />
        </Link>
        <Link to="/" className="main-sidebar__nav__link">
          <img src={cycling} alt="" className="main-sidebar__nav__img" />
        </Link>
        <Link to="/" className="main-sidebar__nav__link">
          <img src={workout} alt="" className="main-sidebar__nav__img" />
        </Link>
      </nav>
    </div>
  );
}
