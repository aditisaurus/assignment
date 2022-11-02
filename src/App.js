import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Main from "./Components/Main";
import SelectTablePage from "./Components/SelectTablePage";
import SelectIndentedTable from "./Components/SelectIndentedTable";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="homepage" element={<HomePage />} />
        <Route path="selectSourcePage" element={<Main />} />
        <Route path="selectTablePage" element={<SelectTablePage />} />
        <Route path="selectIndentedTable" element={<SelectIndentedTable />} />
      </Routes>
    </div>
  );
}

export default App;
