import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderComponent from "./SliderComponent";

const TestimonialSection: React.FC = () => {
  return (
    <div className="bg-[#7b469b] pt-8 pb-12 max-w-[100vw] overflow-hidden md:pt-20 md:pb-28 ">
      <h2 className="poppins-regular hidden md:block text-5xl text-center text-white mb-8 md:mb-20">
        Our clients opinions
      </h2>
      <SliderComponent />
    </div>
  );
};

export default TestimonialSection;
