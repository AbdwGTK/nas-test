import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderComponent from "./SliderComponent";

const TestimonialSection: React.FC = () => {
  return (
    <div className="bg-[#7b469b] min-h-screen pt-8 pb-12 md:pt-20 md:pb-28 flex flex-col items-center justify-center max-w-[100vw] overflow-hidden">
      <h2 className="poppins-regular text-5xl text-center text-white mb-8 md:mb-20">
        Our clients opinions
      </h2>
      <div className="w-full">
        <SliderComponent />
      </div>
    </div>
  );
};

export default TestimonialSection;
