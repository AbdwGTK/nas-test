import React from "react";
import { ArrowDownIcon, ArrowUpIcon } from "../Icons";

interface PricingButtonProps {
  label: string;
  price: string;
  active: boolean;
  onClick: () => void;
}

const PricingButton: React.FC<PricingButtonProps> = ({
  label,
  price,
  active,
  onClick,
}) => (
  <div
    onClick={onClick}
    className={`rounded-xl pricing-card w-full md:max-w-[480px] px-[18.06px] py-[15.3px] md:py-[22.84px] md:px-[26.95px] ${
      active ? "pricing-card-active" : "pricing-card"
    }`}
  >
    <div className="flex justify-between align-middle">
      <p
        className={`poppins-medium pricing-card-label ${
          active ? "text-white" : "text-[#7d4283]"
        }`}
      >
        {label}
      </p>
      <div>{active ? <ArrowUpIcon /> : <ArrowDownIcon />}</div>
    </div>
    {active && (
      <div>
        <p className="poppins-regular pricing-card-description">
          Pro account gives you freedom with uploading HD videos and can also
          meet all your business needs apasih kamu
        </p>
        <div className="flex justify-between mt-3">
          <p className="poppins-bold pricing-card-price">
            {price}
            <span className="poppins-regular pricing-card-duration">
              {" "}
              /month
            </span>
          </p>
          <button className="pricing-card-button poppins-medium">
            Try 1 month
          </button>
        </div>
      </div>
    )}
  </div>
);

export default React.memo(PricingButton);
