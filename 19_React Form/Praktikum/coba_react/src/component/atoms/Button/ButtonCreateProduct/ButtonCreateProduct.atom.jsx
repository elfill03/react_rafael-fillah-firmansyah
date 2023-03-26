import React from "react";

const ButtonCreateProduct = ({onClick}) => {
  return (
    <>
      <button
        type="submit"
        id="submit"
        className="btn btn-primary m-auto mt-5 mb-5"
        style={{ width: "min(100% - 10px, 90%)" }}
        onClick={onClick}
      >
        Create Product
      </button>
    </>
  );
};

export default ButtonCreateProduct;
