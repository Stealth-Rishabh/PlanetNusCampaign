import React from "react";
import hero_img from "../../assets/hero-img.jpg";

const HeroSection = () => {
  return (
    <main
      className="container mx-auto max-w-screen-xl px-4 py-8 flex flex-col sm:flex-row gap-8 items-center justify-between hero-bg"
    >
      {/* Left Content */}
      <div className="space-y-6">
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1a237e]">
            Study at
            <div>National University of Singapore (NUS)</div>
          </h1>
          <div className="bg-[#2c2760] text-white text-2xl sm:text-3xl font-bold py-2 px-4 inline-block">
            Transform Your Future
          </div>
          <h2 className="text-xl sm:text-2xl text-[#1a237e]">
            with NUS 1-Year MTech Programs!
          </h2>
        </div>

        <p className="text-gray-700 max-w-xl">
          Join the globally ranked NUS to gain in-depth knowledge in
          cutting-edge fields like Artificial Intelligence, Software
          Engineering, and Business Analytics.
        </p>

        <button className="bg-[#1a237e] hover:bg-[#1a237e]/90 text-white px-8 py-2 text-lg">
          Apply Now
        </button>
      </div>

      {/* Right Form */}
      <div className="relative bg-gradient-to-br from-[#3498db] to-[#2980b9] p-6 !pt-14 shadow-xl max-w-[400px] custom-div">
        <div className="relative">
          <h3 className="text-3xl text-center font-bold text-white mb-6">
            Start Your Journey at NUS Today!
          </h3>

          <form className="space-y-4">
            <input
              placeholder="Name"
              className="w-full bg-white p-2 "
              required
            />
            <input
              placeholder="Contact No"
              type="tel"
              className="w-full bg-white p-2 "
              required
            />
            <input
              placeholder="Email ID"
              type="email"
              className="w-full bg-white p-2 "
              required
            />
            <input
              placeholder="Qualification"
              className="w-full bg-white p-2 "
              required
            />
            <input
              placeholder="Program of Interest"
              className="w-full bg-white p-2 "
              required
            />
            <input
              placeholder="City for Entrance Test"
              className="w-full bg-white p-2 "
              required
            />
            <button
              type="submit"
              className="w-1/2 block mx-auto bg-[#1a237e] hover:bg-[#1a237e]/90 text-white py-2 text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
