import React, { useState } from "react";
import {
  ButtonCreateProduct,
  ButtonDelete,
  ButtonEdit,
  ButtonGenerateNumber,
} from "../../atoms";
import { ProductDescription, ProductImage, Title } from "../../molecules";

const Form = () => {
  const [productName, setProductName] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [productCategory, setProductCategory] = useState("");
  const [productFreshness, setProductFreshness] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [products, setProducts] = useState([]);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length <= 10) {
      setProductName(inputValue);
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };
  const inputClass = isValid ? "form-control" : "form-control is-invalid";
  const handleSubmit = (event) => {
    event.preventDefault();
    const product = {
      name: productName,
      category: productCategory,
      freshness: productFreshness,
      price: productPrice,
    };
    setProducts([...products, product]);
    setProductName("");
    setProductCategory("");
    setProductFreshness("");
    setProductPrice("");
  };

  return (
    <>
      <div className="container">
        <div className="d-grid">
          <Title />
          <form
            className="needs-validation"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <div
              className="d-grid m-auto has-validation"
              style={{ width: "min(100% - 10px, 40%)" }}
            >
              <ButtonGenerateNumber />
              <h1 className="fs-3 fw-bold">Detail Product</h1>
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
              </div>
              {/* END PRODUCT NAME */}
              <div className="has-validation mt-3">
                <label htmlFor="productcategory" className="form-label">
                  Product Category :
                </label>
                <select
                  className="form-select mb-3"
                  style={{ width: "min(100% - 10px, 45%)" }}
                  value={productCategory}
                  onChange={(event) => setProductCategory(event.target.value)}
                >
                  <option hidden="">Choose...</option>
                  <option>Food</option>
                  <option>Fruit</option>
                  <option>Vegetable</option>
                </select>
              </div>
              {/* END PRODUCTCATEGORY */}
              <ProductImage />
              <div className="has-validation mt-3">
                <label className="form-label">Product Freshness :</label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="freshness"
                    id="freshness1"
                    value="Brand New"
                    checked={productFreshness === "Brand New"}
                    onChange={(event) =>
                      setProductFreshness(event.target.value)
                    }
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
                    checked={productFreshness === "Second Hank"}
                    onChange={(event) =>
                      setProductFreshness(event.target.value)
                    }
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
                    checked={productFreshness === "Refurbished"}
                    onChange={(event) =>
                      setProductFreshness(event.target.value)
                    }
                  />
                  <label className="form-check-label" htmlFor="freshness3">
                    Refurbished
                  </label>
                </div>
              </div>
              {/* END PRODUCTFRESHNESS */}
              <ProductDescription />
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
                  value={productPrice}
                  onChange={(event) => setProductPrice(event.target.value)}
                  placeholder="$ 0"
                />
              </div>
              {/* END PRODUCTPRICE */}
              <ButtonCreateProduct />
            </div>
          </form>
          <div className="container m-auto text-center">
            <h1 className="fw-bold fs-2">List Product</h1>
          </div>
          <div className="container-fluid mb-0">
            <table
              className="table table-light table-striped"
              id="tableData"
              style={{ width: "min(100% - 10px, 75%)" }}
            >
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Product Category</th>
                  <th scope="col">Image of Product</th>
                  <th scope="col">Product Freshness</th>
                  <th scope="col">Additional Desciption</th>
                  <th scope="col">Product Price</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td></td>
                    <td>{product.freshness}</td>
                    <td></td>
                    <td>{product.price}$</td>
                    <td>
                      <ButtonDelete /> <ButtonEdit />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
