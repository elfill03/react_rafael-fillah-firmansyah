import React from "react";

const ProductDescription = ({ value, onChange }) => {
  return (
    <>
      <div className="has-validation mt-3">
        <label htmlFor="Description" className="form-label">
          Additional Description
        </label>
        <textarea
          className="form-control"
          id="Description"
          rows={4}
          value={value}
          name="productdescription"
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default ProductDescription;
