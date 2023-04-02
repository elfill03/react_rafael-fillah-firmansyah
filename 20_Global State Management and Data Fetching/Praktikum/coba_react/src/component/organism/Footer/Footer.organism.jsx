import React from "react";
import "./Footer.organism.style.css"

const Footer = () => {
  return (
    <>
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
            Designed by <span style={{ color: "#47B2E4" }}>BootstrapMade</span>
          </h2>
        </div>
      </footer>
    </>
  );
};

export default Footer;
