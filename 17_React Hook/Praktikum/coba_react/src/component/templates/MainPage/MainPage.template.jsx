import React, { useEffect } from "react";
import { LinkBs } from "../../atoms";
import { Form, ListProduct, Navbar } from "../../organism";
import "./MainPage.template.style.css"

const MainPage = () => {
  useEffect(() => {
    alert("Welcome");
  }, []);

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
