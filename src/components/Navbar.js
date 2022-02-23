import "./Navbar.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import HouseIcon from "../assets/house-warped.svg";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <header className="primary-header">
      <div className="container">
        <nav className="main-nav">
          <Link to="/">
            <h4 className="logo">
              <span>
                <img src={HouseIcon} alt="house icon" />
              </span>
              Cozy Homes
            </h4>
          </Link>

          {/* Nav List */}

          <ul className={showNav ? "nav-list show" : "nav-list"}>
            {["Become a host", "Sign up", "Login"].map(item => (
              <li className="nav-link" key={item}>
                {item}
              </li>
            ))}
          </ul>

          {/* Overlay */}

          <div
            onClick={() => setShowNav(false)}
            className={showNav ? "overlay show" : "overlay"}
          ></div>

          {/* Open Button */}

          {!showNav && (
            <button
              onClick={() => setShowNav(true)}
              aria-label="hamburger-menu-toggle"
              className="toggle-menu"
            >
              <FontAwesomeIcon icon={faBars} size="xl" />
            </button>
          )}

          {/* Close Button */}

          {showNav && (
            <button
              onClick={() => setShowNav(false)}
              aria-label="hamburger-menu-toggle"
              className="toggle-menu"
            >
              <FontAwesomeIcon icon={faX} size="xl" />
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}
