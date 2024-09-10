import axios from "axios";
import React, { useEffect, useState } from "react";

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(3); // Number of employees per page
  const axiosBaseURL = "http://localhost:4000/api";

  const fetchEmployees = async () => {
    try {
      const options = {
        headers: {
          authorization: `Bearer ${localStorage.getItem("authToken")}`,
          "Content-Type": "application/json",
        },
      };
      const employeesResponse = await axios.post(
        `${axiosBaseURL}/user/getallemployees`,
        {},
        options
      );
      const fetchedEmployees = employeesResponse.data.employees;
      setEmployees(fetchedEmployees);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  // Calculate the indices of the current page's employees
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = employees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  // Function to change the current page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="container my-5">
        <div className="accordion" id="accordionExample">
          {currentEmployees.map((employee, index) => (
            <div className="accordion-item" key={employee.employeeId}>
              <div className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${employee.employeeId}`}
                  aria-expanded="false"
                  aria-controls={`collapse${employee.employeeId}`}
                >
                  <div className="d-flex flex-column justify-content-center align-items-start">
                    <div className="display-6">{employee.name}</div>
                    <p className="my-0 text-muted">{employee.designation}</p>
                  </div>
                </button>
              </div>
              <div
                id={`collapse${employee.employeeId}`}
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    Name: <strong>{employee.name}</strong>
                  </p>
                  <p>
                    <strong>{employee.designation}</strong>
                  </p>
                  <p>
                    Email:{" "}
                    <a className="email text-decoration-none hover-pointer">
                      {employee.email}
                    </a>
                  </p>
                  {employee.role == "admin" ? <p className="badge text-bg-danger">{employee.role}</p>: ""}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <nav className="mt-4">
          <ul className="pagination justify-content-center">
            {Array.from(
              { length: Math.ceil(employees.length / employeesPerPage) },
              (_, index) => (
                <li
                  key={index + 1}
                  className={`page-item ${currentPage === index + 1 ? "active" : ""
                    }`}
                >
                  {employees.length > 3 ? 
                    < button
                    className="page-link"
                  onClick={() => paginate(index + 1)}
                  >
                  {index + 1}
                </button> : ""}
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Employees;
