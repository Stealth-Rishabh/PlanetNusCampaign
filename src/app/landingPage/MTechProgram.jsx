import React from "react";
import MTechPrograms from "../../assets/MTechProgram.webp";
import { Clock, Briefcase } from "lucide-react";

export default function MTechProgram() {
  return (
    <div className="w-full min-h-screen flex items-center bg-[#eaeff0] p-8 md:p-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left side - Image collage */}
        <div className="">
          <img src={MTechPrograms} className="w-full max-h-[500px] object-contain" alt="" />
        </div>

        {/* Right side - Content */}
        <div className="space-y-8 relative">
          <div className="space-y-4 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a367b] tracking-tight animate-fade-in">
              MTech Program at NUS
            </h1>
            <div className="bg-gradient-to-br from-sky-500 to-blue-600 text-white p-4 shadow-lg transform hover:scale-[1.02] rounded-sm animate-pulse transition-all duration-300">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                A Pathway to Future Success
              </h2>
            </div>
          </div>

          <div className="space-y-6 text-center sm:text-left">
            <div className="flex items-center space-x-3 text-[#1a367b] font-semibold text-lg group">
              <Clock className="hidden sm:block w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
              <p>Duration: 1-year full-time program</p>
            </div>
            <div className="flex items-center space-x-3 text-[#1a367b] font-semibold text-lg group">
              <Briefcase className="hidden sm:block w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              <p>Includes a 5-month paid internship</p>
            </div>
          </div>
          <div className="flex text-center sm:text-left items-start space-x-3">
            <p className="text-gray-700 text-lg leading-relaxed">
              Gain real-world experience, develop specialized skills, and expand
              your global network with a degree that opens doors to top tech and
              consulting firms worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Add required CSS for animations
const styles = `
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .animate-fade-in {
    animation: fade-in 0.6s ease-out forwards;
  }
`;

// Add styles to head
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}
