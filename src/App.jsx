import React from "react";
import LandingPage from "./app/landingPage/LandingPage";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-white">
        <Header />
        <LandingPage />
      </div>
    </>
  );
};

export default App;
