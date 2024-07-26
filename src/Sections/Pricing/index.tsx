import React from "react";
import PricingList from "./Components/PricingList";

const PricingSection: React.FC = () => (
  <div className="flex flex-col mt-8 md:mt-32 mx-6 md:mx-20 gap-8 md:gap-20 md:flex-row md:justify-between">
    <div className="w-full md:w-1/2">
      <p className="poppins-bold pricing-headline text-white">
        Simple pricing for your Business
      </p>
      <p className="poppins-regular pricing-paragraph text-white">
        We have several powerful plans to showcase your business and get
        discovered as a creative entrepreneurs. Everything you need.
      </p>
    </div>
    <PricingList />
  </div>
);

export default PricingSection;
