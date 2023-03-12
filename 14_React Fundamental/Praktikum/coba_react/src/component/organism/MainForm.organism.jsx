import React from "react";
import logo from "../organism/bootstrap-logo.svg";

const MainForm = () => {
  return (
    <>
      <div className="container">
        <div className="d-grid">
          <a
            className="navbar-brand d-flex justify-content-center mt-4"
            href="https://getbootstrap.com/"
          >
            <img src={logo} alt="Bootstrap" width={50} height={44} />
          </a>
          <div className="text-center mt-4 mb-4">
            <h1 className="fs-2 fw-bold">Create Product</h1>
            <h2 className="fs-4 fw-lighter">
              Below is an example form built entirely with Bootstrap’s form
              controls. Each required form group has a validation state that can
              be triggered by attempting to submit the form without completing
              it.
            </h2>
          </div>
          <form className="needs-validation" autoComplete="off">
            <div
              className="d-grid m-auto has-validation"
              style={{ width: "min(100% - 10px, 40%)" }}
            >
              <h1 className="fs-3 fw-bold">Detail Product</h1>
              {/* Nama Product */}
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
                  autofocus=""
                />
              </div>
              {/* /Nama Product */}
              {/* Kategori Product */}
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
              {/* /Kategori Product */}
              {/* Pilihan Product */}
              <div className="has-validation mt-3">
                <label className="form-label">Product Freshness :</label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    defaultValue="Brand New"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Brand New
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    defaultValue="Second Hank"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Second Hank
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    defaultValue="Refurbished"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Refurbished
                  </label>
                </div>
              </div>
              {/* /Pilihan Product */}
              {/* Gambar Product */}
              <div className="has-validation mt-3">
                <label htmlFor="formFile" className="form-label">
                  Image of Product
                </label>
                <input
                  className="form-control text-primary border border-primary"
                  type="file"
                  id="productimage"
                  style={{ width: "min(100% - 10px, 58%)" }}
                />
              </div>
              {/* /Gambar Product */}
              {/* Deskripsi Product */}
              <div className="has-validation mt-3">
                <label htmlFor="Description" className="form-label">
                  Additional Description
                </label>
                <textarea
                  className="form-control"
                  id="Description"
                  rows={4}
                  defaultValue={""}
                />
              </div>
              {/* /Deskripsi Product */}
              {/* Harga Product */}
              <div className="has-validation mt-3">
                <label htmlFor="productprice" className="form-label">
                  Product Price :
                </label>
                <input
                  type="number"
                  name="productprice"
                  id="productprice"
                  className="form-number"
                  placeholder="$ 0"
                />
              </div>
              {/* /Harga Product */}
              {/* Button Submit */}
              <button
                type="submit"
                id="submit"
                className="btn btn-primary m-auto mt-5 mb-5"
                style={{ width: "min(100% - 10px, 90%)" }}
              >
                Create Product
              </button>
              {/* /Button Submit */}
              <div
                className="alert alert-success mt-3"
                role="alert"
                id="alert"
                hidden=""
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MainForm;
