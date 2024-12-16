import React from "react";
import Navbar from "./components/navbar";
import LandingPage from "./app/landingPage/LandingPage";

const App = () => {
  return (
    <>
      <div
        className="min-h-screen mx-auto max-w-screen-xl bg-white"
      >
        <Navbar />
        <LandingPage />
      </div>
    </>
  );
};

export default App;
