import "./App.css";
import ApplyLeave from "./components/ApplyLeave.jsx";
import Attendance from "./components/Attendance.jsx";
import Auth from "./components/Auth.jsx";
import Dashboard from "./components/dashboard.jsx";
import Employees from "./components/Employees.jsx";
import LeaveRecords from "./components/LeaveRecords.jsx";
import Projects from "./components/Projects.jsx";
import Sidebar from "./components/Sidebar.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route element={<Sidebar />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/ApplyLeave" element={<ApplyLeave />}></Route>
            <Route path="/LeaveRecords" element={<LeaveRecords />}></Route>
            <Route path="/Projects" element={<Projects />}></Route>
            <Route path="/Employees" element={<Employees />}></Route>
            <Route path="/Attendance" element={<Attendance />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
