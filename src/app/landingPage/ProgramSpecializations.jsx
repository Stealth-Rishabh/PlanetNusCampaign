import React from "react";
import PS1 from "../../assets/PS1.png";
import PS2 from "../../assets/PS2.png";
import PS3 from "../../assets/PS3.png";

export default function ProgramSpecializations() {
  const specializations = [
    {
      title: "Artificial Intelligence Systems (AIS)",
      image: PS1,
    },
    {
      title: "Enterprise Business Analytics (EBAC)",
      image: PS2,
    },
    {
      title: "Software Engineering (SE)",
      image: PS3,
    },
  ];

  const benefits = [
    "5 months paid internships",
    "Real-world projects that enhance your learning experience",
    "Gain a global perspective by studying at one of Asia's top-ranked universities",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
          Program Specialisations
        </h1>
        <p className="text-lg md:text-xl text-blue-800 max-w-3xl mx-auto">
          Choose from three dynamic specialisations designed to equip you with
          essential skills for the future:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {specializations.map((spec, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg">
            <div className="overflow-hidden">
              <img
                src={spec.image}
                alt={spec.title}
                className="w-full h-full object-cover hover:scale-125 transition-all duration-300"
              />
            </div>
            <div className="bg-gradient-to-br from-sky-500 to-blue-600 inset-0 flex items-center p-5">
              <h3 className="text-white text-2xl sm:text-[32px] leading-[36px] text-center font-medium">
                {spec.title}
              </h3>
            </div>
          </div>
          
        ))}
      </div>

      <div className="bg-gray-100 rounded-lg p-5 sm:p-8">
        <h2 className="text-blue-800 text-2xl font-bold mb-4">Key Benefits:</h2>
        <ul className="space-y-3">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start text-blue-800">
              <span className="mr-2 mt-1.5">
                <svg
                  className="w-4 h-4 text-blue-800 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
              <span className="text-lg">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
