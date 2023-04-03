import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Landingpage } from "../component/templates";
const LandingPage = () => {
  const navigate = useNavigate();
  const handleNavigateProduct = useCallback(() => {
    navigate("/createproduct");
  }, [navigate]);
  return (
    <>
      <Landingpage onNavigate={handleNavigateProduct} />
    </>
  );
};

export default LandingPage;
