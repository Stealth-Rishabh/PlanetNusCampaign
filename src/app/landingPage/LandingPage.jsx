import React from "react";
import Hero from "./Hero";
import WhoShouldAttend from "./WhoShouldAttend";
import MTechProgram from "./MTechProgram";
import ProgramSpecializations from "./ProgramSpecializations";
import WhoShouldApply from "./WhoShouldApply";
import WhyChooseNus from "./WhyChooseNus";

const LandingPage = () => {
  return (
    <>
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
