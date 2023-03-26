import React from "react";
import { img1 } from "../../../assets";
import "./LandingPageTitle.molecule.style.css"

const LandingPageTitle = ({onNavigate}) => {
  return (
    <>
      <div id="main">
        <div id="main-bag">
          <h1>Better Solutions For Your Business</h1>
          <h2>
            We are team of talented designers making websites with Bootstrap
          </h2>
          <div className="watch">
            <a href="createAccount.html" className="watch-bag1">
              Get Started
            </a>
            <a href="https://www.youtube.com/" className="watch-bag2">
              Watch Video
            </a>
          </div>
          <button onClick={onNavigate} className="watch-bag2 mt-4 ms-4">
            Move To Create Product
          </button>
        </div>
        <img src={img1} className="img1" alt="" />
      </div>
    </>
  );
};

export default LandingPageTitle;
