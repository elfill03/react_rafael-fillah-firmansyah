import React, { useState } from "react";

const ProductName = () => {
  // const [productName, setProductName] = useState("");
  // const [isValid, setIsValid] = useState(true);

  // const handleInputChange = (event) => {
  //   const inputValue = event.target.value;
  //   if (inputValue.length <= 10) {
  //     setProductName(inputValue);
  //     setIsValid(true);
  //   } else {
  //     setIsValid(false);
  //   }
  // };

  // const inputClass = isValid ? "form-control" : "form-control is-invalid";

  return (
    <>
      {/* <h1 className="fs-3 fw-bold">Detail Product</h1>
      <div>
        <label htmlFor="productname" className="form-label">
          Product Name
        </label>
        <input
          type="text"
          className={inputClass}
          name="productname"
          id="productname"
          aria-describedby="productname"
          style={{ width: "min(100% - 10px, 60%)" }}
          autoFocus=""
          value={productName}
          onChange={handleInputChange}
        />
        {!isValid && (
          <div className="invalid-feedback">
            Product name must be 10 characters or less
          </div>
        )}
      </div> */}
    </>
  );
};

export default ProductName;
