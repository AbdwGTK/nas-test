import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#7D4283] text-white ">
      <div className="container mx-auto py-8 px-4">
        <div>
          <div>
            <p className="text-2xl md:text-5xl poppins-bold text-center md:text-start mt-4">
              What are you waiting for?
            </p>
            <p className="poppins-light text-base md:text-2xl text-center md:text-start mt-4">
              Register now to get the best delivery experience for you and your
              clients in Iraq!
            </p>
          </div>
          <form className="flex mt-9 md:mt-16 flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="email"
              placeholder="Your email"
              className="py-4 px-5 rounded-full w-full md:w-[351px]  text-black"
            />
            <button
              type="submit"
              className="bg-black text-white py-4 px-5 w-full md:w-fit text-lg rounded-full"
            >
              Register now
            </button>
          </form>
        </div>
        <div className="flex items-center mt-20 mb-10">
          <span className="text-sm poppins-light w-full text-center opacity-80">
            &copy; 2024 Lodar Express Delivery Company. All rights reserved.
          </span>
        </div>

        {/* The rest of the footer was not implmented for the lack of links */}
      </div>
    </footer>
  );
};

export default Footer;
