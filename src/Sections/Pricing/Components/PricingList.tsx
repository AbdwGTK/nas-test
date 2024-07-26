import React, { useState } from "react";
import PricingButton from "./PricingCard";

const PricingList: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleButtonClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-col gap-4 md:gap-6 items-center w-full md:w-1/2">
      {["Intro", "Base", "Pro", "Enterprise"].map((label, index) => (
        <PricingButton
          key={index}
          price={`$${[40, 80, 123, 250][index]}`}
          active={activeIndex === index}
          onClick={() => handleButtonClick(index)}
          label={label}
        />
      ))}
    </div>
  );
};

export default PricingList;
