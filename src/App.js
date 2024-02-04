import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Login from './components/Login';
import UserTable from './components/UserTable';
import Weather from './components/Weather';

function App() {
  return (
    <Router>
      <div className="container-fluid bg-dark text-light p-5">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/weather"
            element={
              <div className="row">
                <div className="col-md-6">
                  <Weather />
                </div>
                <div className="col-md-6">
                  <UserTable />
                  <Logout className="mt-auto" />
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

const Logout = () => {
  const navigate = useNavigate();

  const handleclick = () => {
    console.log("Successfully logged out");
    navigate("/");
  };

  return (
    <div className="position-fixed top-0 start-0 m-3">
      <button className="btn btn-danger" onClick={handleclick}>
        Log out
      </button>
    </div>
  );
};

export default App;