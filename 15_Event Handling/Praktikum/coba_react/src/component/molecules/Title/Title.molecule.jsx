import React from "react";
import { bootsraplogo } from "../../../assets";

const Title = () => {
  return (
    <>
      <a
        className="navbar-brand d-flex justify-content-center mt-4"
        href="https://getbootstrap.com/"
      >
        <img src={bootsraplogo} alt="Bootstrap" width={50} height={44} />
      </a>
      <div className="text-center mt-4 mb-4">
        <h1 className="fs-2 fw-bold">Create Product</h1>
        <h2 className="fs-4 fw-lighter">
          Below is an example form built entirely with Bootstrap’s form
          controls. Each required form group has a validation state that can be
          triggered by attempting to submit the form without completing it.
        </h2>
      </div>
    </>
  );
};

export default Title;
