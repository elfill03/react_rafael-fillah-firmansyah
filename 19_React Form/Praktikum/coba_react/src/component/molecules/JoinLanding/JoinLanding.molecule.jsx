import React from "react";
import "./JoinLanding.molecule.style.css";

const JoinLanding = () => {
  return (
    <>
      <center>
        <div className="join">
          <h3>Join Our Newsletter</h3>
          <p>
            Tamen quem nulla quae legam multos aute sint culpa legam noster
            magna
          </p>
          <input type="text" className="join-bag" required="" />
          <button className="start">Subscribe</button>
        </div>
      </center>
    </>
  );
};

export default JoinLanding;
