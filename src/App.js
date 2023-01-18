import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // react-router-dom 에서 3개의 module을 import한 상황
import Login from "./components/Login";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
