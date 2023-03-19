import React from "react";
import { img1 } from "../../../assets";
import "./SubPage.template.style.css"

const SubPage = ({onNavigate}) => {
  return (
    <>
      <link rel="stylesheet" href="src/main.css" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
        crossOrigin="anonymous"
      />
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="https://www.google.com/">
            Simple Header
          </a>
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
      <div id="main">
        <div id="main-bag">
          <h1>Better Solutions For Your Business</h1>
          <h2>
            We are team of talented designers making websites with Bootstrap
          </h2>
          <div className="watch">
            <a href="createAccount.html" className="watch-bag1">
              Get Started
            </a>
            <a href="https://www.youtube.com/" className="watch-bag2">
              Watch Video
            </a>
          </div>
          <button onClick={onNavigate} className="watch-bag2 mt-4 ms-4">Move To Create Product</button>
        </div>
        <img src={img1} className="img1" alt="" />
      </div>
      <div>
        {/* <div
          id="carouselExampleRide"
          className="carousel slide"
          data-bs-ride="true"
        >
          <div
            className="carousel-inner"
            style={{ backgroundColor: "#4e6e814e" }}
          >
            <div className="carousel-item active mt-3">
              <h1 className="ms-auto me-auto w-50 fs-3 fw-bold text-center fst-italic">
                Interesting Learning
              </h1>
              <img
                src="src/1677124119611.png"
                className="d-block ms-auto me-auto w-50 pt-4 pb-4"
                alt="..."
              />
            </div>
            <div className="carousel-item mt-3">
              <h1 className="ms-auto me-auto w-50 fs-3 fw-bold text-center fst-italic">
                Hone Skills
              </h1>
              <img
                src="src/1677377609435.png"
                className="d-block ms-auto me-auto w-50 pt-4 pb-4"
                alt="..."
              />
            </div>
            <div className="carousel-item mt-3">
              <h1 className="ms-auto me-auto w-50 fs-3 fw-bold text-center fst-italic">
                Front-End Engineer
              </h1>
              <img
                src="src/1677377765113.png"
                className="d-block ms-auto me-auto w-50 pt-4 pb-4"
                alt="..."
              />
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleRide"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon bg-dark"
                aria-hidden="true"
              />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleRide"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon bg-dark"
                aria-hidden="true"
              />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div> */}
        <center>
          <div className="join">
            <h3>Join Our Newsletter</h3>
            <p>
              Tamen quem nulla quae legam multos aute sint culpa legam noster
              magna
            </p>
            <input type="text" className="join-bag" required="" />
            <button className="start">Subscribe</button>
          </div>
        </center>
        <footer>
          <div className="detail">
            <div className="detail-bag">
              <h1>ARSHA</h1>
              <p>A108 Adam Street</p>
              <p>New York, NY 535022 United States</p>
              <p>
                <strong>Phone:</strong> +1 5589 55488 55
              </p>
              <p>
                <strong>Email:</strong> info@example.com
              </p>
            </div>
            <div className="detail-bag">
              <h2>Useful Links</h2>
              <ul>
                <li>
                  <a href="https://www.google.com/">Home</a>
                </li>
                <li>
                  <a href="https://www.google.com/">About us</a>
                </li>
                <li>
                  <a href="https://www.google.com/">Services</a>
                </li>
                <li>
                  <a href="https://www.google.com/">Terms of service</a>
                </li>
                <li>
                  <a href="https://www.google.com/">Privacy policy</a>
                </li>
              </ul>
            </div>
            <div className="detail-bag">
              <h2>Our Services</h2>
              <ul>
                <li>Web Design</li>
                <li>Web Development</li>
                <li>Product Management</li>
                <li>Marketing</li>
                <li>Graphic Design</li>
              </ul>
            </div>
            <div className="detail-bag">
              <h2>Our Social Networks</h2>
              <p>
                Cras fermentum odio eu feugiat lide par naso tierra videa magna
                derita valies
              </p>
              <div className="sosmed">
                <a href="https://github.com/elfill03/react_rafael-fillah-firmansyah">
                  <i className="fab fa-github" />
                </a>
                <a href="https://github.com/elfill03/testing">
                  <i className="fab fa-github" />
                </a>
                <a href="https://www.youtube.com/">
                  <i className="fa-brands fa-youtube" />
                </a>
              </div>
            </div>
          </div>
          <div className="cpr">
            <h1>
              © Copyright <strong>Arsha</strong>. All Rights Reserved
            </h1>
            <h2>
              Designed by{" "}
              <span style={{ color: "#47B2E4" }}>BootstrapMade</span>
            </h2>
          </div>
        </footer>
      </div>
    </>
  );
};

export default SubPage;
