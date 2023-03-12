import React from "react";
import "./App.css";
import LinkBs from "./component/atoms/LinkBs.atoms";
import Navbar from "./component/molecules/navbar.molecule"
import ListProduct from "./component/organism/ListProduct.organism";
import MainForm from "./component/organism/MainForm.organism";

const App = () => {
  return (
    <>
      <LinkBs/>
      <Navbar/>
      <MainForm/>
      <ListProduct/>
    </>
  );
};

export default App;
