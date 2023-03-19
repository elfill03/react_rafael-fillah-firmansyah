import React from "react";
import { LinkBs } from "../../atoms";
import { Form, ListProduct, Navbar } from "../../organism";
import "./MainPage.template.style.css"

const CreateProduct = () => {
  return (
    <>
      <LinkBs />
      <Navbar/>
      <Form/>
      <ListProduct/>
    </>
  );
};

export default CreateProduct;
