import React, {useEffect, useState} from 'react';
import './App.css';
import { Routes, Route} from "react-router-dom";
import HomePage from './HomePage';
import Main from './Main';
import SelectTablePage from './SelectTablePage';
import SelectTablePage2 from './SelectTablePage2';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

 
  return (
    <div className="App">
      <Routes>
      <Route path="homepage" element={<HomePage/>} />
      <Route path="selectSourcePage" element={<Main/>} />
      <Route path="selectTablePage" element={<SelectTablePage/>} />
      <Route path="selectTablePage2" element={<SelectTablePage2/>} />


      </Routes>
    
     </div>
  );
}

export default App;
