import React from "react";
import LinkBs from "../atoms/LinkBs.atoms";
import Navbar from "../molecules/navbar.molecule";
import ListProduct from "../organism/ListProduct.organism";
import MainForm from "../organism/MainForm.organism";

const CreateProduct = () => {
  return (
    <>
      <LinkBs />
      <Navbar />
      <MainForm />
      <ListProduct />
    </>
  );
};

export default CreateProduct;
