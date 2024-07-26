import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HeroSection from "./Sections/Hero";
import StatisticsSection from "./Sections/statistics";
import PricingSection from "./Sections/Pricing";
import AboutUsSection from "./Sections/AboutUs";

function App() {
  return (
    <div className="landing-page">
      <HeroSection />
      <AboutUsSection />
      <StatisticsSection />
      <PricingSection />
    </div>
  );
}

export default App;
