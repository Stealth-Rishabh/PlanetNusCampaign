import React from "react";

const scheduleData = [
  {
    city: "Chennai",
    date: "16 March 2025 Sunday",
    time: "9:00am – 5:00pm",
    venue: "Citadines OMR Chennai",
    address:
      "290 Rajiv Gandhi Salai (OMR) IT Expy, Sholinganallur, Chennai, Tamil Nadu 600119",
  },
  {
    city: "Hyderabad",
    date: "18 March 2025 Tuesday",
    time: "9:00am – 5:00pm",
    venue: "Red Fox Hotel Hyderabad",
    address:
      "Survey No. 64, Plot No. 2, Hitech City Main Rd, HITEC City, Telangana 500081",
  },
  {
    city: "Pune",
    date: "20 March 2025 Thursday",
    time: "9:00am – 5:00pm",
    venue: "ibis Pune Viman Nagar",
    address:
      "Survey No 32, Viman Nagar Rd, Viman Nagar, Pune, Maharashtra 411014",
  },
  {
    city: "Bengaluru",
    date: "22 March 2025 Saturday",
    time: "9:00am – 5:00pm",
    venue: "Bloom Hub | Outer Ring Road Marathahalli",
    address:
      "3, Outer Ring Road Kadubeesanahalli, Panathur, Marathahalli, Bengaluru, Karnataka 560037",
  },
  {
    city: "Mumbai",
    date: "25 March 2025 Tuesday",
    time: "9:00am – 5:00pm",
    venue: "Mirage Hotel Mumbai",
    address:
      "International Airport Approach Road, Andheri East, Mumbai, Maharashtra 400059",
  },
  {
    city: "Ahmedabad",
    date: "27 March 2025 Thursday",
    time: "9:00am – 5:00pm",
    venue: "Fortune Park Ahmedabad",
    address:
      "Opp Gujarat College, Purshottam Mavlankar Marg, Ellisbridge, Ahmedabad, Gujarat 380006",
  },
  {
    city: "Delhi",
    date: "30 March 2025 Sunday",
    time: "9:00am – 5:00pm",
    venue: "Park Inn by Radisson New Delhi Lajpat Nagar",
    address:
      "1 & 2, Ring Rd, Vikram Vihar, Lajpat Nagar IV, Lajpat Nagar 4, New Delhi, Delhi 110024",
  },
];

const WhoShouldAttend = () => {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-[#3498db] to-[#2980b9] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Who Should Attend?
          </h1>
          <p className="text-xl sm:text-2xl text-white max-w-3xl mx-auto">
            The NUS MTech entrance test is your first step toward securing a
            spot in one of our highly regarded MTech programs.
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-8 mb-12">
            16<sup>th</sup> March – 30<sup>th</sup> March 2025
          </h2>
        </div>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="overflow-x-auto p-5">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="relative bg-gradient-to-br from-[#3498db] to-[#2980b9] shadow rounded-t-lg">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-white first:rounded-tl-lg last:rounded-tr-lg">
                    City
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                    Preview Talk, Entrance Test & Interview
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-white first:rounded-tl-lg last:rounded-tr-lg">
                    Venue
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {scheduleData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 border-b border-gray-200">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-gray-200">
                      {item.city}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-r border-gray-200">
                      <div>{item.date}</div>
                      <div>{item.time}</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <div className="font-medium">{item.venue}</div>
                      <div className="text-gray-600">{item.address}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoShouldAttend;
