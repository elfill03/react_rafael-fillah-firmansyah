import React, { useState } from "react";
import {
  ButtonCreateProduct,
  ButtonDelete,
  ButtonEdit,
  ButtonGenerateNumber,
} from "../../atoms";
import {
  ProductCategory,
  ProductDescription,
  ProductFreshness,
  ProductImage,
  ProductName,
  ProductPrice,
  Title,
} from "../../molecules";
import "./Form.template.style.css"

const Form = ({onNavigate}) => {
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

  const deleteProduct = (index) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (isConfirmed) {
      const updatedProducts = [...products];
      updatedProducts.splice(index, 1);
      setProducts(updatedProducts);
    }
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
              <button onClick={onNavigate} className="navigation">Move To Landing Page</button>
              <ProductName
                className={inputClass}
                value={productName}
                onChange={handleInputChange}
              />
              <ProductCategory
                value={productCategory}
                onChange={(event) => setProductCategory(event.target.value)}
              />
              <ProductImage />
              <ProductFreshness
                checked1={productFreshness === "Brand New"}
                checked2={productFreshness === "Second Hank"}
                checked3={productFreshness === "Refurbished"}
                onChange={(event) => setProductFreshness(event.target.value)}
              />
              <ProductDescription />
              <ProductPrice
                value={productPrice}
                onChange={(event) => setProductPrice(event.target.value)}
              />
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
                      <ButtonDelete
                        onDelete={() => {
                          deleteProduct(index);
                        }}
                      />
                      <ButtonEdit />
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
