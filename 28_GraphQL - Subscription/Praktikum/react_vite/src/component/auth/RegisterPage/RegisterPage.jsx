import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./../../../firebase";
import "./RegisterPage.style.css";
import { LinkBs } from "../../atoms";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [failedMessage, setFailedMessage] = useState("");

  const navigate = useNavigate();

  const handleNavigateLanding = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const handleNavigateLogin = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
        handleNavigateLogin();
      }, 2000);
    }
    const timer = setTimeout(() => {
      setFailedMessage("");
    }, 2000);

    return () => clearTimeout(timer);
  }, [successMessage, failedMessage]);

  const handleRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setSuccessMessage("Register berhasil");
        console.log("Logged in:", user);
      })
      .catch((error) => {
        setFailedMessage("Register gagal");
        console.error("Login error:", error);
      });
  };
  return (
    <>
      <LinkBs />
      <div className="card col-12 col-lg-4 login-card mt-5 ms-auto me-auto">
        <i
          className="bi bi-arrow-left ms-3 mt-2 fs-3 float-start"
          onClick={handleNavigateLanding}
          style={{ cursor: "pointer" }}
        ></i>
        <center><h1>Register Form</h1></center>
        <form onSubmit={handleRegister} className="ms-5 mt-3">
          <div className="form-group text-left">
            <label className="mt-2 mb-2">Email address</label>
            <input
              type="email"
              className="form-control w-75"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group text-left">
            <label className="mt-4 mb-2">Password</label>
            <input
              type="password"
              className="form-control w-75"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary mt-5">
          Register
          </button>
        </form>
        <center>
          <div
            className="alert alert-success mt-2"
            style={{ display: successMessage ? "block" : "none" }}
          >
            {successMessage}
          </div>
          <div
            className="alert alert-danger mt-2"
            style={{ display: failedMessage ? "block" : "none" }}
          >
            {failedMessage}
          </div>
          <div className="registerMessage pb-5">
            <span>Already have an account? </span>
            <span
              className="loginText"
              onClick={() => handleNavigateLogin()}
            >
              Log in
            </span>
          </div>
        </center>
      </div>
    </>
  );
};

export default RegisterPage;
