import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./App.css";
import RoomeProject from "./pages/projects/RoomeProject";
import StrengthForDancersProject from "./pages/projects/StrengthForDancersProject";
import AWSWeddingProject from "./pages/projects/AWSWeddingProject";
import GoogleBooksProject from "./pages/projects/GoogleBooksProject";
function App() {
  return (
    <Router>
      <div className="container">
        <nav className="sidebar">
          <ul>
            <li><NavLink to="/" end>About</NavLink></li>
            <li><NavLink to="/projects">My Projects</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/roome" element={<RoomeProject />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/strength-for-dancers" element={<StrengthForDancersProject />} />
            <Route path="/projects/aws-wedding" element={<AWSWeddingProject />} />
            <Route path="/projects/google-books" element={<GoogleBooksProject />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
