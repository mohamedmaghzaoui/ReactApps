import { MyCalendar } from "./pages/calendar";
import { Home } from "./pages/Home";
import { Navbar } from "./pages/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Calendar } from "react-big-calendar";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<MyCalendar />} />
          <Route path="*" element={<h1>page not available</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
