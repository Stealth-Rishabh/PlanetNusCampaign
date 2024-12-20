import React from "react";

const Footer = () => {
  return (
    <div className="bg-gradient-to-br from-sky-500 to-blue-600">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-start justify-between text-white sm:items-center md:px-8">
        <div className="flex-1 justify-center flex sm:flex-row flex-col items-center sm:items-start gap-x-4">
          <p className="font-medium p-2 text-center sm:text-left">
            Transform your future with NUS 1-Year MTech Programs!
          </p>
          <a href="#apply-now" className="flex-none mt-2 p-1.5 px-4 rounded-full bg-[#1a237e] hover:bg-[#1a237e]/90 animate-bounce flex items-center justify-center font-medium text-sm">
            Apply Now
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                  clipRule="evenodd"
                />
              </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
