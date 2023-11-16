import React from "react";
import SignUp from "./pages/SignUp";
// import Dashboard from './pages/dashborad/Dashborad'
import DashBoard from "./pages/DashBoard.jsx";
import { Routes, Route } from "react-router-dom";
import ProjectCompletionDocumentation from "./pages/postconstruction/ProjectCompletionDocumentation";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<DashBoard />} />
        <Route path="/SignUp" exact element={<SignUp />} />
        <Route
          path="/ProjectCompletionDocumentation"
          exact
          element={<ProjectCompletionDocumentation />}
        />
      </Routes>
    </>
  );
}

export default App;
