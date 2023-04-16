import React from "react";

const ProductImage = ({ onChange, value }) => {
  return (
    <>
      <div className="has-validation mt-3">
        <label htmlFor="formFile" className="form-label">
          Image of Product
        </label>
        <input
          className="form-control text-primary border border-primary"
          type="file"
          id="productimage"
          style={{ width: "min(100% - 10px, 58%)" }}
          name="productimage"
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default ProductImage;
