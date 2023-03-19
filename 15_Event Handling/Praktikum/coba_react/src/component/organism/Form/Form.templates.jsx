import React from "react";
import { ButtonCreateProduct, ButtonGenerateNumber } from "../../atoms";
import {
  ProductCategory,
  ProductDescription,
  ProductFreshness,
  ProductImage,
  ProductName,
  ProductPrice,
  Title,
} from "../../molecules";

const Form = () => {
  
  return (
    <>
      <div className="container">
        <div className="d-grid">
          <Title />
          <form className="needs-validation" autoComplete="off">
            <div
              className="d-grid m-auto has-validation"
              style={{ width: "min(100% - 10px, 40%)" }}
            >
              <ButtonGenerateNumber/>
              <ProductName />
              <ProductCategory />
              <ProductFreshness />
              <ProductImage />
              <ProductDescription />
              <ProductPrice />
              <ButtonCreateProduct/>
              {/* <div
                className="alert alert-success mt-3"
                role="alert"
                id="alert"
                hidden=""
              /> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
