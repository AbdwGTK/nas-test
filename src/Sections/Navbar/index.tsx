import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-transparent pt-12 mb-6 md:mb-28 text-white px-6 md:px-20 py-4 grid grid-cols-3 items-center">
      <div className="flex items-center">
        <div className="md:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </div>
        <div className="ml-4">
          <div className="h-10 md:h-8 bg-red-700 w-[135px]" />
        </div>
      </div>
      <div className="hidden md:flex justify-center space-x-8">
        <p className="hover:text-[#7D4283] poppins-regular cursor-pointer  text-sm">
          Home
        </p>
        <p className="hover:text-[#7D4283] poppins-regular cursor-pointer text-sm">
          About us
        </p>
        <p className="hover:text-[#7D4283] poppins-regular cursor-pointer text-sm">
          Services
        </p>
        <p className="hover:text-[#7D4283] poppins-regular cursor-pointer text-sm">
          Branches
        </p>
        <p className="hover:text-[#7D4283] poppins-regular cursor-pointer text-sm relative">
          Jobs
          <span className="ml-2 bg-purple-500 text-white text-xs rounded-full px-2">
            12
          </span>
        </p>
      </div>
      <div className="hidden md:flex justify-end space-x-4">
        <button className="px-4 py-2 border border-white rounded-full hover:bg-white poppins-regular text-sm hover:text-black">
          Contact us
        </button>
        <button className="px-4 py-2 bg-[#7D4283] rounded-full hover:text-black poppins-regular text-sm">
          Join us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
