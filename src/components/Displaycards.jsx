import React from "react";
import "../components/Styles/Dashboard.css";
import userdisplay from "../assets/user-display-grad.png";
import projectsdisplay from "../assets/projects-display-grad.png";
import pendingdisplay from "../assets/pending-display-grad.png";
import leavedisplay from "../assets/leave-display-grad.png";

const Displaycards = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 m-2">
          <div className="col">
            <div className="card h-100 py-4 display-card-border display-card-green">
              <div className="d-flex justify-content-between align-items-center">
                <div className="card-body d-flex flex-column justify-content-between align-items-center">
                  <h4 className="card-title text-dark">PROJECTS</h4>
                  <p className="card-text stat-text">0</p>
                </div>
                <div className="col-4">
                  <img src={projectsdisplay} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 py-4 display-card-border display-card-red">
              <div className="d-flex justify-content-between align-items-center">
                <div className="card-body d-flex flex-column justify-content-between align-items-center">
                  <h4 className="card-title text-dark">PENDING</h4>
                  <p className="card-text stat-text">0</p>
                </div>
                <div className="col-4">
                  <img src={pendingdisplay} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 py-4 display-card-border display-card-yellow">
              <div className="d-flex justify-content-between align-items-center">
                <div className="card-body d-flex flex-column justify-content-between align-items-center">
                  <h4 className="card-title text-dark">DAYS OFF</h4>
                  <p className="card-text stat-text">0</p>
                </div>
                <div className="col-4">
                  <img src={leavedisplay} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 py-4 display-card-border display-card-blue">
              <div className="d-flex justify-content-between align-items-center">
                <div className="card-body d-flex flex-column justify-content-between align-items-center">
                  <h4 className="card-title text-dark">PROFILE</h4>
                  <p className="card-text stat-text">update</p>
                </div>
                <div className="col-4">
                  <img src={userdisplay} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Displaycards;
