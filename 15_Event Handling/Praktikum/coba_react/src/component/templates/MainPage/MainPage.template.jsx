import React from "react";
import { LinkBs } from "../../atoms";
import { Form, ListProduct, Navbar } from "../../organism";
import "./MainPage.template.style.css"

const MainPage = () => {
  return (
    <>
      <LinkBs />
      <Navbar/>
      <Form/>
      <ListProduct/>
    </>
  );
};

export default MainPage;
