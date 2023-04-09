import React from "react";

const ProductFreshness = ({ checked, onChange }) => {
  return (
    <>
      <div className="has-validation mt-3" data-testid="productfreshness">
        <label htmlFor="productfreshness" className="form-label">
          Product Freshness :
        </label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="productfreshness"
            id="freshness1"
            value={"Brand New"}
            checked={"Brand New" === checked}
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
            name="productfreshness"
            id="freshness2"
            value={"Second Hank"}
            checked={"Second Hank" === checked}
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
            name="productfreshness"
            id="freshness3"
            value={"Refurbished"}
            checked={"Refurbished" === checked}
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
