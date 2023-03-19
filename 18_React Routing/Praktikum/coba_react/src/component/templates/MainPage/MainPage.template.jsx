import React, { useEffect, useCallback } from "react";
import { LinkBs } from "../../atoms";
import { Form, Navbar } from "../../organism";
import "./MainPage.template.style.css";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  useEffect(() => {
    alert("Welcome to Create Product");
  }, []);
  const navigate = useNavigate();
  const handleNavigateLandingPage = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <LinkBs />
      <Navbar />
      <Form onNavigate={handleNavigateLandingPage}/>
    </>
  );
};

export default MainPage;
