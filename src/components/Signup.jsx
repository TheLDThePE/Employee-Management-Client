import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import emailicon from "../assets/email.png";
import passwordicon from "../assets/password.png";
import usernameicon from "../assets/username.png";

const Signup = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const navigate = useNavigate();

  const handleSignup = (values) => {
    try {
      navigate("/");
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSignup}
      >
        <Form className="container d-flex flex-column justify-content-center align-items-center form">
          <div className="col-12 my-4 fs-5 d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex col-12">
              <label htmlFor="username" className="col-1">
                <img src={usernameicon} alt="usernameicon" className="icon" />
              </label>
              <Field
                type="username"
                className="ms-4 col-10 rounded p-1 ps-2"
                name="username"
                placeholder="username"
              ></Field>
            </div>
            <ErrorMessage
              name="username"
              component="span"
              className="text-danger"
            ></ErrorMessage>
          </div>
          <div className="col-12 my-4 fs-5 d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex col-12">
              <label htmlFor="email" className="col-1">
                <img src={emailicon} alt="emailicon" className="icon" />
              </label>
              <Field
                type="email"
                className="ms-4 col-10 rounded p-1 ps-2"
                name="email"
                placeholder="email"
              ></Field>
            </div>
            <ErrorMessage
              name="email"
              component="span"
              className="text-danger"
            ></ErrorMessage>
          </div>
          <div className="col-12 my-4 fs-5 d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex col-12">
              <label htmlFor="email" className="col-1">
                <img src={passwordicon} alt="emailicon" className="icon" />
              </label>
              <Field
                type="password"
                className="col-10 ms-4 rounded p-1 ps-2"
                name="password"
                placeholder="password"
              ></Field>
            </div>
            <ErrorMessage
              name="password"
              component="p"
              className="text-danger"
            ></ErrorMessage>
          </div>
          <div className="col-12 my-4 fs-5 d-flex justify-content-center align-items-baseline">
              <Field
              type="checkbox"
              className="me-2"
                name="checkbox"
              ></Field>
            <div>Register me as Admin</div>
          </div>
          <button
            type="submit"
            className="col-6 align-self-center btn btn-custom my-2 fs-5"
          >
            Sign Up
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default Signup;
