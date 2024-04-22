import React from "react";
import Main from "./components/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchScreen from "./components/SearchScreen";
import PrimeDecorPlintusNat from "./components/primedec/PrimeDecorPlintusNat";
import Basket from "./components/Basket";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/primedeccat" element={<PrimeDecorPlintusNat />} />
          <Route path="/basketProducts" element={<Basket />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
