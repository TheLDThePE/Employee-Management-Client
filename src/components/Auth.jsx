import React, { useEffect, useState } from "react";
import Signup from "./Signup.jsx";
import Login from "./Login.jsx";

const Auth = () => {
  const [action, setAction] = useState("Login");

  useEffect(() => {
    setAction("Login");
  },[])

  return (
    <>
      <div className="container auth-page col-12 col-sm-8 col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center">
        <div className="col-12 border border-dark p-3 rounded">
          <div className="col-12 d-flex">
            <div
              className={`col-6 btn fs-4 text-center ${
                action == "Login" ? "text-secondary" : "active-action-btn"
              }`}
              onClick={() => setAction("SignUp")}
            >
              Sign Up
            </div>
            <div
              className={`col-6 btn fs-4 border-bottom-primary text-center ${
                action == "Login" ? "active-action-btn" : "text-secondary"
              }`}
              onClick={() => setAction("Login")}
            >
              Login
            </div>
          </div>
          <div className="col-12 my-3">{action == "Login" ? <Login /> : <Signup />}</div>
        </div>
      </div>
    </>
  );
};

export default Auth;
