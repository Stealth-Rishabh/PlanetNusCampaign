import React from "react";
import HeroSection from "./HeroSection";
import WhoShouldAttend from "./WhoShouldAttend";
import MTechProgram from "./MTechProgram";
import ProgramSpecializations from "./ProgramSpecializations";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <WhoShouldAttend />
      <MTechProgram />
      <ProgramSpecializations />
    </>
  );
};

export default LandingPage;
