import React from "react";
import HeroSection from "./HeroSection";
import Hero from "./Hero";
import WhoShouldAttend from "./WhoShouldAttend";
import MTechProgram from "./MTechProgram";
import ProgramSpecializations from "./ProgramSpecializations";
import WhoShouldApply from "./WhoShouldApply";
import WhyChooseNus from "./WhyChooseNus";

const LandingPage = () => {
  return (
    <>
      {/* <HeroSection /> */}
      <Hero />
      <WhoShouldAttend />
      <MTechProgram />
      <ProgramSpecializations />
      <WhoShouldApply />
      <WhyChooseNus />
    </>
  );
};

export default LandingPage;
