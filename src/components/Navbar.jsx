import React from "react";
import './Styles/Navbar.css'
import profileIcon from "../assets/profile-image.png";
import logoutIcon from "../assets/logout.png";
import dashboardIcon from "../assets/dashboard.png";
import attendanceIcon from '../assets/attendance.png'
import leaveRecordIcon from '../assets/leaveRecord.png'
import leaveIcon from '../assets/leave.png'
import employeesIcon from '../assets/employees.png'
import projectsIcon from '../assets/projects.png'
import hamIcon from '../assets/hamburger-icon.png'

const Navbar = () => {
  return (
    <nav className="navbar bg-body-tertiary sticky-top">
      <div className="container">
        <button
          className="btn"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
                  <span><img src={hamIcon} alt="menus" /></span>
        </button>
        <div className="d-flex align-items-center justify-content-center">
          <div className="btn me-3 fs-5">Logout</div>
          <a className="navbar-brand" href="#">  
          <div className="profile-icon">
            <img src={profileIcon} alt="" />
          </div>
          </a>
        </div>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Navbar
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav align-items-start m-auto justify-content-end flex-grow-1 text-start">
              <li className="nav-item mx-2 mb-3 fs-5 col-12">
                <a className="nav-link active" aria-current="page" href="#">
                  <img src={dashboardIcon} alt="logout-icon" className="me-3" />
                  Dashboard
                </a>
              </li>
              <li className="nav-item mx-2 mb-3 fs-5 col-12">
                <a className="nav-link" href="#">
                  <img src={attendanceIcon} alt="logout-icon" className="me-3" />
                  Attendance
                </a>
              </li>
              <li className="nav-item mx-2 mb-3 fs-5 col-12">
                <a className="nav-link" href="#">
                  <img src={leaveRecordIcon} alt="logout-icon" className="me-3" />
                  Leave Records
                </a>
              </li>
              <li className="nav-item mx-2 mb-3 fs-5 col-12">
                <a className="nav-link" href="#">
                  <img src={leaveIcon} alt="logout-icon" className="me-3" />
                  Apply Leave
                </a>
              </li>
              <li className="nav-item mx-2 mb-3 fs-5 col-12">
                <a className="nav-link" href="#">
                  <img src={employeesIcon} alt="logout-icon" className="me-3" />
                  Employees
                </a>
              </li>
              <li className="nav-item mx-2 mb-3 fs-5 col-12">
                <a className="nav-link" href="#">
                  <img src={projectsIcon} alt="logout-icon" className="me-3" />
                  Projects
                </a>
              </li>
              <li className="nav-item mx-2 mb-3 fs-5 col-12">
                <a className="nav-link" href="#">
                  <img src={logoutIcon} alt="logout-icon" className="me-3" />
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
