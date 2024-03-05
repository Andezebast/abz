import React from "react";
import "./Header.scss";
import LogoSVG from "../../svg/LogoSVG";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container container">
        <div className="header-logo">
          <LogoSVG />
        </div>
        <div className="header-buttons">
          <div className="header-buttons-user">
            <button className="button">User</button>
          </div>
          <div className="header-buttons-sign">
            <button className="button">Sign</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
