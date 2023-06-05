import React from "react";
import { LinkBs } from "../../atoms";
import { JoinLanding, LandingPageTitle } from "../../molecules";
import { Footer, Navbar } from "../../organism";
import "./Landingpage.template.style.css";

const Landingpage = ({ onNavigate }) => {
  return (
    <>
      <LinkBs />
      <Navbar />
      <LandingPageTitle onNavigate={onNavigate}/>
      <JoinLanding/>
      <Footer />
    </>
  );
};

export default Landingpage;
