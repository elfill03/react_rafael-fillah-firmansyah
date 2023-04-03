import { React, useEffect, useRef } from "react";

const ProductName = ({ value, onChange }) => {
  const inputRef = useRef("");
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <>
      <h1 className="fs-3 fw-bold">Detail Product</h1>
      <div>
        <label htmlFor="productname" className="form-label">
          Product Name
        </label>
        <input
          type="text"
          className="form-control"
          name="productname"
          id="productname"
          aria-describedby="productname"
          style={{ width: "min(100% - 10px, 60%)" }}
          autoFocus=""
          value={value}
          onChange={onChange}
          ref={inputRef}
        />
      </div>
    </>
  );
};

export default ProductName;
