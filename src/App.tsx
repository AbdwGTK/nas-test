import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HeroSection from "./Sections/Hero";

function App() {
  return (
    <div className="landing-page">
      <HeroSection />
      <div className="w-52 h-52 bg-red-500"></div>
    </div>
  );
}

export default App;
