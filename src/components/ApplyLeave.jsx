import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import LeaveRecords from "./LeaveRecords";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ApplyLeave = () => {
  const appliedToast = () =>
    toast.success("Leave Applied Successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored"
    });

  const initialValues = {
    leaveType: "",
    fromDate: "",
    toDate: "",
    reason: "",
  };

  const validationSchema = Yup.object().shape({
    leaveType: Yup.string().required("type of leave required"),
    reason: Yup.string().required("reason for leave required"),
    fromDate: Yup.date().required("from date required"),
    toDate: Yup.date().required("to date required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    try {
      console.log(values);
      resetForm();
      appliedToast();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="colored"
      ></ToastContainer>
      <div className="container px-4 my-5 d-md-flex">
        <div className="col col-md-6 col-lg-4 border">
          <p className="px-2">Applying Leave</p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="d-flex flex-column align-items-start justidy-content-center p-2">
              <div className="mb-4 col-12">
                <label htmlFor="leaveType" className="col-12 col-sm-4">
                  Leave type
                </label>
                <Field
                  as="select"
                  name="leaveType"
                  className="rounded border border-secondary p-2 col-12"
                >
                  <option
                    value=""
                    className="text-muted"
                    disabled
                    defaultValue
                    hidden
                  >
                    select an option
                  </option>
                  <option value="WFH">Work From Home</option>
                  <option value="onDuty">On Duty</option>
                  <option value="privilege">Privilege</option>
                  <option value="casualLeave">Casual Leave</option>
                  <option value="maternityLeave">Maternity Leave</option>
                </Field>
                <ErrorMessage
                  name="leaveType"
                  component="span"
                  className="text-danger"
                ></ErrorMessage>
              </div>
              <div className="mb-4 col-12">
                <label htmlFor="fromDate" className="col-12 col-sm-4">
                  From date
                </label>
                <Field
                  type="date"
                  name="fromDate"
                  className="rounded border border-secondary p-2 col-12"
                ></Field>
                <ErrorMessage
                  name="fromDate"
                  component="span"
                  className="text-danger"
                ></ErrorMessage>
              </div>
              <div className="mb-4 col-12">
                <label htmlFor="toDate" className="col-12 col-sm-4">
                  To date
                </label>
                <Field
                  type="date"
                  name="toDate"
                  className="rounded border border-secondary p-2 col-12"
                ></Field>
                <ErrorMessage
                  name="toDate"
                  component="span"
                  className="text-danger"
                ></ErrorMessage>
              </div>
              <div className="mb-2 col-12">
                <label htmlFor="reason">Reason</label>
                <Field
                  as="textarea"
                  name="reason"
                  className="rounded border border-secondary p-2 col-12"
                ></Field>
                <ErrorMessage
                  name="reason"
                  component="span"
                  className="text-danger"
                ></ErrorMessage>
              </div>
              <button
                className="mb-1 btn btn-custom col-4 align-self-center"
                type="submit"
              >
                Apply
              </button>
            </Form>
          </Formik>
        </div>
        <div>
          <LeaveRecords />
        </div>
      </div>
    </>
  );
};

export default ApplyLeave;
