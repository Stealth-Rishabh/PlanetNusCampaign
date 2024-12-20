import React from "react";
import {
  ArrowUpRight,
  GraduationCap,
  Building2,
  DollarSign,
  Globe2,
} from "lucide-react";
import Image from "../../assets/png-1.png";

const WhyChooseNus = () => {
  return (
    <div className="p-5 py-10 sm:p-8 md:p-16 rounded-3xl text-white sm:min-h-[400px]">
      <div className="bg-gradient-to-br from-sky-500 to-blue-600 max-w-7xl mx-auto p-5 sm:p-12 py-5 sm:py-14 rounded-2xl">
        <div className="grid md:grid-cols-3 gap-0 items-center">
          {/* Left side - Title */}
          <div className="md:col-span-1 space-y-4">
            <h1 className="text-2xl text-center sm:text-left sm:text-4xl md:text-5xl font-bold leading-tight">
              <span className="hidden sm:inline">WHY CHOOSE<br /></span>
              <span className="sm:hidden">WHY CHOOSE </span>
              <span className="hidden sm:inline">NUS FOR YOUR<br /></span>
              <span className="sm:hidden">NUS FOR YOUR </span>
              <span>M.TECH?</span>
            </h1>
          </div>

          {/* Right side - Circular diagram */}
          <div className="mt-5 sm:mt-0 md:col-span-2 overflow-hidden">
            <img src={Image} className="w-full h-full object-cover" alt="Why Choose NUS" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseNus;
