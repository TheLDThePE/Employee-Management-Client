import React, { useState } from "react";
import markAttendance from "../assets/markAttendance.jpg";
import "./Styles/Attendance.css";
import { toast } from "react-toastify";

const MarkAttendanceCard = () => {
  const [swipedIn, setSwipedIn] = useState(false);
  const [totalTime, setToatalTime] = useState(21800000);

  const progressPercentage = Math.min(
    (totalTime / (8 * 60 * 60 * 1000)) * 100,
    100
  ).toFixed(2);

  const handleSwipeToggle = () => {
    if (swipedIn) {
      setSwipedIn(false);
      toast.success("You have swiped out successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: 0,
        theme: "colored",
      });
    } else {
      setSwipedIn(true);
      toast.success("You have swiped in successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: 0,
        theme: "colored",
      });
    }
  };
  return (
    <>
      <div className="mx-4 col-4 d-flex flex-column align-items-center">
        <img src={markAttendance} alt="mark attendance" className="img-fluid" />
        <div className="btn btn-custom fs-5 col-6" onClick={handleSwipeToggle}>
          {swipedIn ? "Swipe Out" : "Swipe In"}
        </div>
        <div className="col-10">
          <div
            className="progress col-12 mt-4"
            role="progressbar"
            aria-label="progressbar 10px high"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ height: "0.8rem" }}
          >
            <div
              className="progress-bar btn-custom"
              style={{ width: `${progressPercentage}%` }}
            >
              {progressPercentage} %
            </div>
          </div>
          <p className="my-2 text-muted lead">
            Total working hours of today :{" "}
            <span className="text-custom">
              {(progressPercentage * 0.08).toFixed(2)} Hrs
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default MarkAttendanceCard;
