import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import "./Styles/Navbar.css";
import profileIcon from "../assets/profile-image.png";
import profile24 from "../assets/profileIcon-24.png";
import logoutIcon from "../assets/logout.png";
import dashboardIcon from "../assets/dashboard.png";
import attendanceIcon from "../assets/attendance.png";
import leaveRecordIcon from "../assets/leaveRecord.png";
import leaveIcon from "../assets/leave.png";
import employeesIcon from "../assets/employees.png";
import projectsIcon from "../assets/projects.png";
import hamIcon from "../assets/hamburger-icon.png";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoggedIn, setToken } from "../Slices/AuthSlice";
import { setProfilePicture } from "../Slices/EmployeeSlice";
import axios from "axios";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profilePicture = useSelector((state) => state.employee.profilePicture);
  const axiosBaseURL = "https://employee-management-server-f7k2.onrender.com/api"

  const handleLogout = () => {
    dispatch(setLoggedIn(false));
    dispatch(setToken(null));
    localStorage.setItem("loggedIn", false);
    localStorage.removeItem("authToken");
    localStorage.removeItem("totalTime");
    localStorage.removeItem("swipedIn");
    navigate("/");
  };

  useEffect(() => {
    const fetchProfilePicture = async () => {
      try {
        const options = {
          headers: {
            authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
          responseType: "blob",
        };

        const response = await axios.get(
          `${axiosBaseURL}/user/getprofilepicture`,
          options
        );

        // Log response data to check if it's a Blob
        console.log("Response data:", response.data);
        console.log("Is Blob:", response.data instanceof Blob); // Check if it is a Blob

        if (response.data instanceof Blob) {
          const imageUrl = URL.createObjectURL(response.data);
          dispatch(setProfilePicture(imageUrl));
        } else {
          console.error("Error: Response is not a Blob");
        }
      } catch (error) {
        console.error("Error fetching profile picture:", error);
      }
    };
    fetchProfilePicture();

    // Cleanup function to revoke the object URL
    console.log(profilePicture);
    return () => {
      if (profilePicture) {
        URL.revokeObjectURL(profilePicture);
      }
    };
  }, [dispatch]);

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
          <span>
            <img src={hamIcon} alt="menus" />
          </span>
        </button>
        <div className="d-flex align-items-center justify-content-center">
          <div className="btn me-3 fs-5" onClick={handleLogout}>
            Logout
          </div>
          <Link className="navbar-brand" to="/myprofile">
            <div className="profile-icon">
              <img src={profileIcon} alt="" className={setProfilePicture} />
            </div>
          </Link>
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
                <Link
                  className={`nav-link ${(isActive) => {
                    isActive ? "btn-custom" : "";
                  }}`}
                  aria-current="page"
                  to="/dashboard"
                >
                  <img src={dashboardIcon} alt="logout-icon" className="me-3" />
                  Dashboard
                </Link>
              </li>
              <li className="nav-item mx-2 mb-3 fs-5 col-12">
                <Link
                  className={`nav-link ${(isActive) => {
                    isActive ? "btn-custom" : "";
                  }}`}
                  to="/myprofile"
                >
                  <img src={profile24} alt="logout-icon" className="me-3" />
                  My Profile
                </Link>
              </li>
              <li className="nav-item mx-2 mb-3 fs-5 col-12">
                <Link
                  className={`nav-link ${(isActive) => {
                    isActive ? "btn-custom" : "";
                  }}`}
                  to="/Attendance"
                >
                  <img
                    src={attendanceIcon}
                    alt="logout-icon"
                    className="me-3"
                  />
                  Attendance
                </Link>
              </li>
              <li className="nav-item mx-2 mb-3 fs-5 col-12">
                <Link
                  className={`nav-link ${(isActive) => {
                    isActive ? "btn-custom" : "";
                  }}`}
                  to="LeaveRecords"
                >
                  <img
                    src={leaveRecordIcon}
                    alt="logout-icon"
                    className="me-3"
                  />
                  Leave Records
                </Link>
              </li>
              <li className="nav-item mx-2 mb-3 fs-5 col-12">
                <Link
                  className={`nav-link ${(isActive) => {
                    isActive ? "btn-custom" : "";
                  }}`}
                  to="/Applyleave"
                >
                  <img src={leaveIcon} alt="logout-icon" className="me-3" />
                  Apply Leave
                </Link>
              </li>
              <li className="nav-item mx-2 mb-3 fs-5 col-12">
                <Link
                  className={`nav-link ${(isActive) => {
                    isActive ? "btn-custom" : "";
                  }}`}
                  to="/Employees"
                >
                  <img src={employeesIcon} alt="logout-icon" className="me-3" />
                  Employees
                </Link>
              </li>
              <li className="nav-item mx-2 mb-3 fs-5 col-12">
                <Link
                  className={`nav-link ${(isActive) => {
                    isActive ? "btn-custom" : "";
                  }}`}
                  to="/Projects"
                >
                  <img src={projectsIcon} alt="logout-icon" className="me-3" />
                  Projects
                </Link>
              </li>
              <li className="nav-item mx-2 mb-3 fs-5 col-12">
                <button
                  className="nav-link col-12 text-start"
                  onClick={handleLogout}
                >
                  <img src={logoutIcon} alt="logout-icon" className="me-3" />
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
