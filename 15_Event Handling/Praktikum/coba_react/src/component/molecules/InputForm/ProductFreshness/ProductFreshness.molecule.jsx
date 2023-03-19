import React from "react";

const ProductFreshness = () => {
  return (
    <>
      <div className="has-validation mt-3">
        <label className="form-label">Product Freshness :</label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            defaultValue="Brand New"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Brand New
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            defaultValue="Second Hank"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Second Hank
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            defaultValue="Refurbished"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Refurbished
          </label>
        </div>
      </div>
    </>
  );
};

export default ProductFreshness;
