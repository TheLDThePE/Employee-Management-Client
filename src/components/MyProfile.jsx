import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import profileIcon from "../assets/username.png";
import "./Styles/MyProfile.css";
import { useDispatch, useSelector } from "react-redux";
import { setProfilePicture, setEmployee } from "../Slices/EmployeeSlice.jsx";

const EmployeeForm = () => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const employee = useSelector((state) => state.employee.employee);
  const profilePicture = useSelector((state) => state.employee.profilePicture);
  const [file, setFile] = useState(null);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    phone: Yup.string().min(10, "Must be at least 10 characters").nullable(),
    address: Yup.string().nullable(),
    role: Yup.string().oneOf(["employee", "manager", "admin"], "Invalid role"),
  });

  const handleFormSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.put(
        `http://localhost:4000/api/employee/${employee._id}`,
        values,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
      alert("Employee details updated successfully");
      dispatch(setEmployee(response.data.employee)); // Update Redux state
      setEditing(false); // Exit edit mode
    } catch (error) {
      console.error("Error updating employee:", error);
    } finally {
      setSubmitting(false); // Reset the submitting state
    }
  };

  const handleImageUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profilePicture", file);

    try {
      const response = await axios.put(
        `http://localhost:4000/api/employee/${employee._id}/upload`,
        formData,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("authToken")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Profile picture updated successfully");
      dispatch(setProfilePicture(response.data.profilePicture)); // Update profile picture in Redux state
    } catch (error) {
      console.error("Error uploading profile picture:", error);
    }
  };

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const options = {
          headers: {
            authorization: `Bearer ${localStorage.getItem("authToken")}`,
            "Content-Type": "application/json",
          },
        };
        const response = await axios.get(`http://localhost:4000/api/user/getemployee`, options);
        dispatch(setEmployee(response.data.employee));
      } catch (error) {
        console.error("Error fetching employee:", error);
      }
    };

    fetchEmployee();
  }, [dispatch]);

  return (
    <div className="container">
      <h2>{editing ? "Edit Employee" : "Employee Details"}</h2>
      <div className="d-flex align-items-center justify-content-between mb-3">
        <button className="btn btn-primary" onClick={() => setEditing(!editing)}>
          {editing ? "Cancel" : "Edit"}
        </button>
      </div>
      <div className="container d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-start">
        <form
          onSubmit={handleImageUpload}
          className="my-4 col-md-2 d-flex flex-column align-items-center justify-content-center"
        >
          <label htmlFor="file-upload" className="custom-file-upload mb-3">
            <img src={profilePicture || profileIcon} alt="Profile" />
          </label>

          <input
            type="file"
            id="file-upload"
            accept=".jpeg, .png, .jpg"
            onChange={(e) => setFile(e.target.files[0])}
            className="form-control"
          />

          <button type="submit" className="btn btn-custom mt-2">
            Upload
          </button>
        </form>

        {editing ? (
          <Formik
            initialValues={{
              name: employee?.name || "",
              email: employee?.email || "",
              phone: employee?.phone || "",
              address: employee?.address || "",
              role: employee?.role || "employee",
            }}
            validationSchema={validationSchema}
            onSubmit={handleFormSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="col-12 col-md-10 d-flex flex-column">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <Field type="text" name="name" className="form-control" />
                  <ErrorMessage name="name" component="div" className="text-danger" />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Field type="email" name="email" className="form-control" />
                  <ErrorMessage name="email" component="div" className="text-danger" />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <Field type="text" name="phone" className="form-control" />
                  <ErrorMessage name="phone" component="div" className="text-danger" />
                </div>

                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <Field type="text" name="address" className="form-control" />
                  <ErrorMessage name="address" component="div" className="text-danger" />
                </div>

                <div className="form-group">
                  <label htmlFor="role">Role</label>
                  <Field as="select" name="role" className="form-control">
                    <option value="employee">Employee</option>
                    <option value="manager">Manager</option>
                    <option value="admin">Admin</option>
                  </Field>
                  <ErrorMessage name="role" component="div" className="text-danger" />
                </div>

                <button
                  type="submit"
                  className="btn btn-custom mt-3 fw-light align-self-center"
                  disabled={isSubmitting}
                >
                  Update
                </button>
              </Form>
            )}
          </Formik>
        ) : (
          // Display employee details
          <div className="col-12 col-md-10">
            <div className="mb-3 col-12 d-flex">
              <strong className="col-4">Name: </strong>
              <div className={employee?.name ? "" : "text-muted col-8"}>{employee?.name || "N/A"}</div>
            </div>
            <div className="mb-3 col-12 d-flex">
              <strong className="col-4">Email: </strong>
              <div className={employee?.email ? "" : "text-muted col-8"}>{employee?.email || "N/A"}</div>
            </div>
            <div className="mb-3 col-12 d-flex">
              <strong className="col-4">Phone: </strong>
              <div className={employee?.phone ? "" : "text-muted col-8"}>{employee?.phone || "N/A"}</div>
            </div>
            <div className="mb-3 col-12 d-flex">
              <strong className="col-4">Address: </strong>
              <div className={employee?.address ? "" : "text-muted col-8"}>{employee?.address || "N/A"}</div>
            </div>
            <div className="mb-3 col-12 d-flex">
              <strong className="col-4">Role: </strong>
              <div className={employee?.role ? "" : "text-muted col-8"}>{employee?.role || "N/A"}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeForm;
