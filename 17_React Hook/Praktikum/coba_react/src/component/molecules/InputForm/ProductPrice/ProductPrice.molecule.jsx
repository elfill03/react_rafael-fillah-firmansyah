import React from "react";

const ProductPrice = ({value, onChange}) => {
  return (
    <>
      <div className="has-validation mt-3">
        <label htmlFor="productprice" className="form-label">
          Product Price :
        </label>
        <input
          type="number"
          className="form-control"
          id="productprice"
          name="productprice"
          aria-describedby="productprice"
          value={value}
          onChange={onChange}
          placeholder="$ 0"
        />
      </div>
    </>
  );
};

export default ProductPrice;
