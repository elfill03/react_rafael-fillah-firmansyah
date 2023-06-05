import React from "react";
import "./ButtonGenerateNumber.atom.style.css";

const ButtonGenerateNumber = () => {
  return (
    <>
      <button
        className="generate"
        onClick={(event) => {
          event.preventDefault();
          console.log(Math.random());
        }}
      >
        Generate Number
      </button>
    </>
  );
};

export default ButtonGenerateNumber;
