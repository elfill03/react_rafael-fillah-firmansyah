import React from "react";

const ProductCategory = () => {
  return (
    <>
      <div className="has-validation mt-3">
        <label htmlFor="productcategory" className="form-label">
          Product Category :
        </label>
        <select
          className="form-select mb-3"
          style={{ width: "min(100% - 10px, 45%)" }}
        >
          <option hidden="">Choose...</option>
          <option>Food</option>
          <option>Fruit</option>
          <option>Vegetable</option>
        </select>
      </div>
    </>
  );
};

export default ProductCategory;