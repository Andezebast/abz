import React from "react";
import "./Banner.scss";
import Background from "./img/Background.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-container container">
        <div className="banner-background">
          <img src={Background} alt="Background" />
        </div>
        <div className="banner-content">
          <div className="banner-content-container">
            <div className="banner-content-title">
              <p className="title">Test assignment for front-end developer</p>
            </div>
            <div className="banner-content-description">
              <p className="description">
                What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast
                understanding of User design thinking as they'll be building web interfaces with accessibility in mind.
                They should also be excited to learn, as the world of Front-End Development keeps evolving.
              </p>
            </div>
            <div className="banner-content-button">
              <button className="button">Sign up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
