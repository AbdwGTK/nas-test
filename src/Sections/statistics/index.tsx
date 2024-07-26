import React from "react";

const StatisticsSection = () => {
  return (
    <div className="flex flex-col gap-20 md:flex-row px-[26px] md:px-24 justify-between">
      <div className="w-full md:w-1/2">
        <p className="poppins-medium text-[#7D4283] statistics-paragraph1">
          We bear the responsibility of developing the sector.
        </p>
        <p className="poppins-light text-[#646A69] statistics-paragraph2 ">
          Elevate your brand with our comprehensive marketing solutions,
          including Digital Marketing, Content Creation, and Social Media
          Strategy. Enhance visibility through expert SEO and PPC management,
        </p>
      </div>
      <div className="flex flex-col items-center text-center gap-16 w-full md:w-1/2">
        <div className="grid grid-cols-2 md:flex md:flex-col items-start text-center gap-16">
          <StatisticsInfo label={"Clients"} count={"1,200+"} />
          <StatisticsInfo label={"Branches"} count={"20+"} />
          <StatisticsInfo label={"Number of Employees"} count={"200+"} />
          <StatisticsInfo label={"Sales Representative"} count={"315+"} />
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;

const StatisticsInfo = ({ label, count }: { label: string; count: string }) => {
  return (
    <div className="flex flex-col items-start">
      <p className="poppins-semibold  text-white text-5xl">{count}</p>
      <p className="text-[#646A69] text-start mt-2">{label}</p>
    </div>
  );
};
