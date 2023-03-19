import React from "react";

const ProductFreshness = ({checked1, checked2, checked3, onChange}) => {
  return (
    <>
      <div className="has-validation mt-3">
        <label className="form-label">Product Freshness :</label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="freshness"
            id="freshness1"
            value="Brand New"
            checked={checked1}
            onChange={onChange}
          />
          <label className="form-check-label" htmlFor="freshness1">
            Brand New
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="freshness"
            id="freshness2"
            value="Second Hank"
            checked={checked2}
            onChange={onChange}
          />
          <label className="form-check-label" htmlFor="freshness2">
            Second Hank
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="freshness"
            id="freshness3"
            value="Refurbished"
            checked={checked3}
            onChange={onChange}
          />
          <label className="form-check-label" htmlFor="freshness3">
            Refurbished
          </label>
        </div>
      </div>
    </>
  );
};

export default ProductFreshness;
