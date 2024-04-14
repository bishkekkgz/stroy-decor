import React from "react";
import Main from "./components/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchScreen from "./components/SearchScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/search" element={<SearchScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
