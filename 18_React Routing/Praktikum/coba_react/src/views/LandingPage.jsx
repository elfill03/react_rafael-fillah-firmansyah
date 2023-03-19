import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { SubPage } from "../component/templates";
const LandingPage = () => {
  const navigate = useNavigate();
  const handleNavigateProduct = useCallback(() => {
    navigate("/createproduct");
  }, [navigate]);
  return (
    <>
      <SubPage onNavigate={handleNavigateProduct} />
    </>
  );
};

export default LandingPage;
