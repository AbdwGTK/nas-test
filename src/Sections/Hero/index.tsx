import React from "react";

const HeroSection = () => {
  return (
    <div className="relative ">
      <div className=" px-[18px] md:px-[88px]">
        <div className="flex  gap-0 sm:gap-40 ">
          <div className="md:w-1/2">
            <div>
              <p
                className="poppins-bold text-white text-center sm:text-start"
                style={{ fontSize: 32, lineHeight: "48px" }}
              >
                Transform your business with our {""}
                <span className="gradient-text">
                  creative marketing solutions!
                </span>
              </p>
              <p
                className="poppins-regular text-white text-center sm:text-start mt-10"
                style={{ fontSize: 16, lineHeight: "28px" }}
              >
                Welcome to Focus Marketing Solutions! We're a creative team
                dedicated to driving your business forward with innovative
                marketing strategies. From digital marketing to social media
                management, we're here to help you succeed. Let's build
                something extraordinary together
              </p>
            </div>
            <div className="flex flex-col md:flex-row mt-10 gap-4">
              <button className="bg-[#7D4283] text-white py-4 px-6 w-full md:w-max rounded-full ">
                Join Us
              </button>
              <button className="bg-transparent text-white border-white border py-4 px-6  w-full md:w-max rounded-full ">
                Contact us
              </button>
            </div>
          </div>
          <div className="hidden md:flex items-end md:w-1/2">
            <div className="w-full ">
              <img
                className="rounded-xl"
                src="assets/pictures/buildings.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="hidden md:flex justify-between mt-7 gap-0 sm:gap-40">
          <div className="relative w-1/2 h-fit">
            <img
              className="rounded-xl w-full  max-w-80 mt-10   object-cover fade"
              src="assets/pictures/skyview.png"
              alt="Skyview"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent max-w-80 to-black rounded-xl"></div>
          </div>
          <div className="relative w-1/2 ">
            <img
              className="rounded-xl w-full max-w-80  object-cover fade"
              src="assets/pictures/handshake.png"
              alt="Handshake"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent max-w-80 to-black rounded-xl"></div>
          </div>
        </div>
      </div>
      <PartnersSection />
    </div>
  );
};

export default HeroSection;

const PartnersSection = () => {
  return (
    <div className="w-full mt-10 py-10 bg-[#161616] block md:absolute bottom-0">
      <p className="poppins-medium text-center text-lg md:text-6xl text-white">
        Our Partners
      </p>
    </div>
  );
};
