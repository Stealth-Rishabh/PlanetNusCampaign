import React from "react";
import logo from "../assets/PE-logo.svg";
import nus_logo from "../assets/NUS-logo.svg";
import experience from "../assets/Experience-logo.svg";

const Navbar = () => {
  return (
    <header className="container mx-auto px-4 py-6 flex sm:flex-row gap-4 justify-between items-center">
      <div className="flex items-center gap-5 sm:gap-10">
        <img src={logo} alt="Planet Education Logo" className="h-9 sm:h-14 w-auto" />
        <img src={experience} alt="Experience Logo" className="h-9 sm:h-14 w-auto" />
        {/* <div className="bg-amber-400 p-2 rounded">
          <span className="text-black font-bold">25 YEARS</span>
        </div> */}
      </div>
      <div className="flex items-center gap-4">
        <img src={nus_logo} alt="NUS Logo" className="h-9 sm:h-14 w-auto" />
      </div>
    </header>
  );
};

export default Navbar;
