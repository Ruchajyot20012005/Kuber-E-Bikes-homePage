import React, { useRef, useState } from "react";
import "./Navbar.scss";

function Navbar() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  return (
    <nav className="navigation">
      <div className="inner-div">
        <div className="logo">KUBER E-BIKES</div>
        <div className="nav-options">
          <ul>
            <li>
              <a href="#head">HOME</a>
            </li>
            <li className="to-about">
              <a href="#about">ABOUT</a>
            </li>
            <li className="menu-container">
              <span onClick={onClick} className="menu-trigger">
                MODELS
              </span>
              <nav
                ref={dropdownRef}
                className={`menu ${isActive ? "active" : "inactive"}`}
              >
                <ul>
                  <li>
                    <a href="/messages">Juniper</a>
                  </li>
                  <li>
                    <a href="/trips">Vamos</a>
                  </li>
                  <li>
                    <a href="/saved">Festiva</a>
                  </li>
                </ul>
              </nav>
            </li>
            <li>BECOME A DEALER</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
