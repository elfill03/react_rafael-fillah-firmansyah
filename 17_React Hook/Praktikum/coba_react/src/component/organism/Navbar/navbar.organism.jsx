import React from "react";
import { WebTitle } from "../../atoms";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <WebTitle/>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <button type="button" className="btn btn-primary me-2">
                Primary
              </button>
              <a
                className="nav-link me-2"
                href="https://www.google.com/"
                style={{ color: "#0D6EFD" }}
              >
                Features
              </a>
              <a
                className="nav-link me-2"
                href="https://www.google.com/"
                style={{ color: "#0D6EFD" }}
              >
                Pricing
              </a>
              <a
                className="nav-link me-2"
                href="https://www.google.com/"
                style={{ color: "#0D6EFD" }}
              >
                FAQs
              </a>
              <a
                className="nav-link"
                href="https://www.google.com/"
                style={{ color: "#0D6EFD" }}
              >
                About
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
