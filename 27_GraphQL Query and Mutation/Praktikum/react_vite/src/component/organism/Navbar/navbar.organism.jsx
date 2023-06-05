import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { WebTitle } from "../../atoms";
import { auth } from "./../../../firebase";

const Navbar = () => {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useState(null);

  const handleNavigateLogin = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const handleNavigateLanding = useCallback(() => {
    navigate("/");
  }, [navigate]);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  });

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
        alert("Logout successful");
        handleNavigateLanding();
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <WebTitle />
          <span style={{ marginTop: "15px", marginLeft: "20px" }}>
            {authUser ? (
              <b>
                <p>{`Welcome ${authUser.email}`}</p>
              </b>
            ) : (
              <b>
                <p>{"Guest"}</p>
              </b>
            )}
          </span>
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
              <div>
                {authUser ? (
                  <button
                    type="button"
                    className="btn btn-primary me-2"
                    onClick={userSignOut}
                  >
                    LogOut
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-primary me-2"
                    onClick={handleNavigateLogin}
                  >
                    Login
                  </button>
                )}
              </div>

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
