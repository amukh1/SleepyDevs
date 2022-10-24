import './App.css'

import {
  HashRouter as Router,
  Route,
  Routes,
  useLocation
} from "react-router-dom";
import { useEffect, useState, useRef } from "react";
// import { withRouter } from "react-router";

import Home from "./home";

export default function App() {
  return (
    <main>
      <nav>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/service/:service" element={<div/>} />
        </Routes>
      </Router>
      </nav>
    </main>
  )
}
