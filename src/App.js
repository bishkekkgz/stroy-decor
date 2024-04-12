import Main from "./components/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
    <Router >
      <Routes >
        <Route path="/" element ={<Main/>}/>
        <Route path="/navbar" element ={<Navbar/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
