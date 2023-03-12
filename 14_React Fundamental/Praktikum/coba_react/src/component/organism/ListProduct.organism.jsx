import React from "react";

const ListProduct = () => {
  return (
    <>
      <div className="container m-auto text-center">
        <h1 className="fw-bold fs-2">List Product</h1>
      </div>
      <div className="container-fluid mb-0">
        <table
          className="table table-light table-striped"
          id="tableData"
          style={{ width: "min(100% - 10px, 65%)" }}
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
            </tr>
          </thead>
          <tbody>
            <tr></tr>
          </tbody>
        </table>
        <input
          className="form-control"
          type="search"
          placeholder="Search by Product Name"
          aria-label="Search"
          style={{ width: "18%" }}
        />
        <div className="d-flex mb-4">
          <button type="button" className="btn btn-primary" id="delete-btn">
            Deletion
          </button>
          <button
            className="btn btn-outline-primary  border border-primary"
            type="submit"
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default ListProduct;
