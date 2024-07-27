import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HeroSection from "./Sections/Hero";
import StatisticsSection from "./Sections/statistics";
import PricingSection from "./Sections/Pricing";
import AboutUsSection from "./Sections/AboutUs";
import ServicesSection from "./Sections/Services";
import NewsSection from "./Sections/News";
import ChartsSection from "./Sections/Charts";
import TestimonialSection from "./Sections/Testimonials";
import Footer from "./Sections/Footer";

function App() {
  return (
    <div className="landing-page">
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <StatisticsSection />
      <ChartsSection />
      <NewsSection />
      <TestimonialSection />
      <PricingSection />

      <Footer />
    </div>
  );
}

export default App;
