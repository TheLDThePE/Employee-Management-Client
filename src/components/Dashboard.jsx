import React from "react";
import Displaycards from "./Displaycards.jsx";
import MarkAttendanceCard from "./MarkAttendanceCard.jsx";

const Dashboard = () => {
  return (
    <>
      <Displaycards />
      <div className="col-12">
        <MarkAttendanceCard className="col-6"/>
      </div>
    </>
  );
};

export default Dashboard;
