import React, { useState, useEffect } from "react";
import LandingPage from "./app/landingPage/LandingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ArrowUp } from "lucide-react";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      <div className="min-h-screen bg-white">
        <Header />
        <LandingPage />
        <Footer />
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 p-2 animate-bounce rounded-sm text-white shadow-lg bg-[#1a237e] hover:bg-[#1a237e]/90 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        )}
      </div>
    </>
  );
};

export default App;
