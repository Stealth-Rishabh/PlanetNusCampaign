import React from "react";

const HeroSection = () => {
  return (
    <main className="container mx-auto max-w-screen-xl px-4 py-4 sm:py-8 flex flex-col text-center sm:text-left md:flex-row gap-8 items-center justify-between hero-bg">
      {/* Left Content */}
      <div className="space-y-6 text-center lg:text-left">
        <div className="space-y-2 sm:space-y-4">
          <h1 className="text-[24px] leading-7 sm:text-4xl font-bold text-[#1a237e]">
            Study at
            <div>National University of Singapore (NUS)</div>
          </h1>
          <div className="bg-[#2c2760] animate-pulse text-white text-xl sm:text-3xl font-bold py-2 px-4 inline-block rounded-sm">
            Transform Your Future
          </div>
          <h2 className="text-xl leading-none sm:text-2xl text-[#1a237e]">
            with NUS 1-Year MTech Programs!
          </h2>
        </div>

        <p className="text-gray-700 !mt-[10px] sm:mt-6 md:max-w-xl">
          Join the globally ranked NUS to gain in-depth knowledge in
          cutting-edge fields like{" "}
          <span className=" text-[#2c2760] text-lg font-bold">
            Artificial Intelligence
          </span>
          ,{" "}
          <span className=" text-[#2c2760] text-lg font-bold">Software Engineering</span>,
          and{" "}
          <span className=" text-[#2c2760] text-lg font-bold">
            Business Analytics
          </span>
          .
        </p>

        {/* <button className="bg-[#1a237e] hover:bg-[#1a237e]/90 rounded-sm text-white px-8 py-2 text-lg">
          Apply Now
        </button> */}
      </div>

      {/* Right Form */}
      <div
        id="apply-now"
        className="relative bg-gradient-to-br from-sky-500 to-blue-600 p-6 !pt-14 shadow-xl max-w-[400px] custom-div rounded-sm"
      >
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
              className="w-full bg-white p-2"
              required
            />
            <button
              type="submit"
              className="px-14 rounded-sm py-2 block mx-auto bg-[#1a237e] hover:bg-[#1a237e]/90 text-white  text-[1.4rem] font-normal animate-bounce"
              style={{ marginTop: "2.5rem" }}
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
