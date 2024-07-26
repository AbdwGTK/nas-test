import React from "react";

const AboutUsSection = () => {
  return (
    <div className="flex justify-center  mt-40">
      <div className="flex flex-col items-center w-full px-3 md:w-1/2">
        <p className="poppins-medium text-2xl md:text-6xl text-white text-center">
          About us
        </p>
        <p className="poppins-regular text-lg mt-3 md:mt-8 text-center text-white ">
          Welcome to{" "}
          <span className="text-[#7D4283ED]">Focus Marketing Solutions!</span>
          We're a creative team dedicated to driving your business forward with
          innovative marketing strategies. From digital marketing to social
          media management, we're here to help you succeed.{" "}
          <span className="text-[#7D4283ED]">
            Let's build something extraordinary together.
          </span>
        </p>
        <button className="bg-transparent border mt-10 border-[#7D4283] w-full md:w-max text-[#7D4283] poppins-medium rounded-full px-6 py-4">
          Read more
        </button>
      </div>
    </div>
  );
};

export default AboutUsSection;
