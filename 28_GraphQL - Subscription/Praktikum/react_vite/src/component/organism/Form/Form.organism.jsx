import { gql, useMutation, useSubscription } from "@apollo/client";
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

const GetProductlist = gql`
  query MyQuery {
    List_products {
      id
      productcategory
      productdescription
      productfreshness
      productimage
      productname
      productprice
    }
  }
`;

const SUBSCRIBE_TO_PRODUCTS = gql`
  subscription {
    List_products {
      id
      productcategory
      productdescription
      productfreshness
      productimage
      productname
      productprice
    }
  }
`;

const CREATE_PRODUCT_MUTATION = gql`
  mutation CreateProduct($product: List_products_insert_input!) {
    insert_List_products_one(object: $product) {
      id
      productname
      productcategory
      productimage
      productfreshness
      productdescription
      productprice
    }
  }
`;

const DELETE_PRODUCT_MUTATION = gql`
  mutation DeleteProduct($id: Int!) {
    delete_List_products_by_pk(id: $id) {
      id
    }
  }
`;

const Schema = Yup.object().shape({
  productname: Yup.string().min(2).max(20).required("Please fill this field!"),
  productcategory: Yup.string().required("Please choose Product Category!"),
  productimage: Yup.mixed().required("Please insert Product Image!"),
  productfreshness: Yup.string().required("Please choose Product Freshness!"),
  productdescription: Yup.string()
    .min(5)
    .max(150)
    .required("Please fill this description!"),
  productprice: Yup.number().positive().required("Please fill the price!"),
});

const Form = ({ onNavigate }) => {
  const productList = useProductListSelector();
  const dispatch = useDispatch();

  const { loading, error, data } = useSubscription(SUBSCRIBE_TO_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch(productAction.set(data.List_products));
    }
  }, [data, dispatch]);

  const [deleteProduct] = useMutation(DELETE_PRODUCT_MUTATION);

  const [createProduct] = useMutation(CREATE_PRODUCT_MUTATION);

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
    onSubmit: async (values, { resetForm }) => {
      try {
        await createProduct({ variables: { product: values } });
        resetForm();
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handleDeleteProduct = (productId) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (isConfirmed) {
      deleteProduct({ variables: { id: productId } }).catch((error) => {
        console.log(error);
      });
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
                  <th scope="col">Additional Description</th>
                  <th scope="col">Product Price</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.List_products.map((values, index) => (
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
                            handleDeleteProduct(values.id);
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
