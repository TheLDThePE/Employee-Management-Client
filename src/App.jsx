import "./App.css";
import Auth from "./components/Auth.jsx";
import Dashboard from "./components/dashboard.jsx";
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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
