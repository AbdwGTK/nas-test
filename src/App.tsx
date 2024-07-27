import React from "react";
import "./App.css";
import {
  Navbar,
  HeroSection,
  AboutUsSection,
  ServicesSection,
  StatisticsSection,
  ChartsSection,
  NewsSection,
  TestimonialSection,
  PricingSection,
  Footer,
} from "./Sections";

function App() {
  return (
    <div className="landing-page">
      <Navbar />
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
