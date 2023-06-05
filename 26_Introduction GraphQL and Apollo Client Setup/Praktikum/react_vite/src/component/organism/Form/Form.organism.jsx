import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useProductListSelector } from "../../../Config/redux/ProductList/productListSelector";
import { productAction } from "../../../Config/redux/ProductList/productSlice";

import {
  ButtonCreateProduct,
  ButtonDelete,
  ButtonEdit,
  ButtonGenerateNumber,
} from "../../atoms";
import {
  CreateProductTitle,
  ProductCategory,
  ProductDescription,
  ProductFreshness,
  ProductImage,
  ProductName,
  ProductPrice,
} from "../../molecules";
import "./Form.organism.style.css";

const Schema = Yup.object().shape({
  productname: Yup.string().min(2).max(20).required("Please fill this field!"),
  productcategory: Yup.string().required("Please choose Product Category!"),
  productimage: Yup.mixed().required("Please insert Product Image!"),
  productfreshness: Yup.string().required("Please choose Product Freshness!"),
  productdescription: Yup.string()
    .min(5)
    .max(150)
    .required("Please fill this fdescription!"),
  productprice: Yup.number().positive().required("Please fill the price!"),
});

const Form = ({ onNavigate }) => {
  const productList = useProductListSelector();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      productname: "",
      productcategory: "",
      productimage: "",
      productfreshness: "",
      productdescription: "",
      productprice: 0,
    },
    validationSchema: Schema,
    onSubmit: (values, { resetForm }) => {
      axios
        .post(
          "https://643b9a2070ea0e660297037c.mockapi.io/products/products",
          values
        )
        .then((response) => {
          dispatch(productAction.add([...productList, response.data]));
          resetForm();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  const deleteProduct = (index) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (isConfirmed) {
      const productToDelete = productList[index];
      axios
        .delete(
          `https://643b9a2070ea0e660297037c.mockapi.io/products/products/${productToDelete.id}`
        )
        .then(() => {
          const updatedProducts = [...productList];
          updatedProducts.splice(index, 1);
          dispatch(productAction.delete([...updatedProducts]));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    axios
      .get("https://643b9a2070ea0e660297037c.mockapi.io/products/products")
      .then((response) => {
        dispatch(productAction.set(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="d-grid">
          <CreateProductTitle />
          <form
            id="createForm"
            className="needs-validation"
            autoComplete="off"
            onSubmit={formik.handleSubmit}
          >
            <div
              className="d-grid m-auto has-validation"
              style={{ width: "min(100% - 10px, 40%)" }}
            >
              <ButtonGenerateNumber />
              {/* <button onClick={onNavigate} className="navigation">
                Move To Landing Page
              </button> */}
              <ProductName
                onChange={formik.handleChange}
                value={formik.values.productname}
              />
              {formik.errors.productname && (
                <div className="error-msg">{formik.errors.productname}</div>
              )}

              <ProductCategory
                onChange={formik.handleChange}
                value={formik.values.productcategory}
                data-testid="productcategory-input"
              />
              {formik.errors.productcategory && (
                <div className="error-msg">{formik.errors.productcategory}</div>
              )}

              <ProductImage
                onChange={formik.handleChange}
                value={formik.values.productimage}
              />
              {formik.errors.productimage && (
                <div className="error-msg">{formik.errors.productimage}</div>
              )}

              <ProductFreshness
                checked={formik.values.productfreshness}
                onChange={formik.handleChange}
                value={formik.values.productfreshness}
              />
              {formik.errors.productfreshness && (
                <div className="error-msg">
                  {formik.errors.productfreshness}
                </div>
              )}

              <ProductDescription
                onChange={formik.handleChange}
                value={formik.values.productdescription}
              />
              {formik.errors.productdescription && (
                <div className="error-msg">
                  {formik.errors.productdescription}
                </div>
              )}

              <ProductPrice
                onChange={formik.handleChange}
                value={formik.values.productprice}
              />
              {formik.errors.productprice && (
                <div className="error-msg">{formik.errors.productprice}</div>
              )}

              <ButtonCreateProduct onClick={formik.handleSubmit} />
            </div>
          </form>
          <div className="container m-auto text-center">
            <h1 className="fw-bold fs-2">List Product</h1>
          </div>
          <div className="container-fluid mb-0">
            <table className="table table-light table-striped" id="tableData">
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
                {productList.map((values, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{values.productname}</td>
                    <td>{values.productcategory}</td>
                    <td>{values.productimage}</td>
                    <td>{values.productfreshness}</td>
                    <td>{values.productdescription}</td>
                    <td>{values.productprice}$</td>
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
