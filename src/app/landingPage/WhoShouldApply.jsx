import React from "react";
import Image from "../../assets/Rectangle (4).png";
import bg from "../../assets/Rectangle (5).png";

export default function WhoShouldApply() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#014189] text-white py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Who Should Apply?
          </h1>
          <p className="text-lg text-center max-w-3xl mx-auto">
            The NUS MTech program is designed for ambitious graduates with an
            interest in AI, Business Analytics, and Software Engineering. Ideal
            candidates include:
          </p>
        </div>
      </div>

      {/* Programs Section */}
      <div className="bg bg-2 mx-auto min-h-screen px-4 pb-12 sm:py-12 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="grid order-2 md:order-1 md:grid-cols-1 gap-8">
            {/* AI & Software Engineering Card */}
            <div className="bg-white overflow-hidden rounded-lg shadow-lg border-2 hover:border-blue-500">
              <div className="p-6">
                <div className="bg-gradient-to-br from-sky-500 to-blue-600 text-white p-4 -mx-6 -mt-6 mb-6">
                  <h2 className="text-xl font-semibold">
                    For Artificial Intelligence Systems (AIS) & Software
                    Engineering (SE)
                  </h2>
                </div>
                <p className="text-gray-600">
                  Graduates with relevant work experience in IT-related roles,
                  especially those currently employed at top IT firms like
                  Infosys, Wipro, TCS, Accenture, IBM, Tech Mahindra, Deloitte,
                  etc. Freshers with strong academic records are also welcome to
                  apply.
                </p>
              </div>
            </div>

            {/* Business Analytics Card */}
            <div className="bg-white overflow-hidden rounded-lg shadow-lg border-2 hover:border-blue-500">
              <div className="p-6">
                <div className="bg-gradient-to-br from-sky-500 to-blue-600 text-white p-4 -mx-6 -mt-6 mb-6">
                  <h2 className="text-xl font-semibold">
                    For Enterprise Business Analytics (EBAC)
                  </h2>
                </div>
                <p className="text-gray-600">
                  Candidates with a solid background in quantitative fields,
                  such as Finance, Accountancy, Mathematics, Statistics,
                  Econometrics, Engineering, Computer Science, or IT. Freshers
                  are welcome to apply.
                </p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="rounded-xl order-1 md:order-2 overflow-hidden shadow-2xl">
            <img
              src={Image}
              alt="Students collaborating"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
