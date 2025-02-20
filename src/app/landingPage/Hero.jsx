import React, { useState } from "react";

const Hero = () => {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 'success' or 'error'
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [isEligible, setIsEligible] = useState(true);

  // Function to check if number was already submitted
  const isNumberAlreadySubmitted = (phoneNumber) => {
    const submittedNumbers = JSON.parse(
      localStorage.getItem("submittedNumbers") || "[]"
    );
    return submittedNumbers.includes(phoneNumber);
  };

  // Function to save submitted number
  const saveSubmittedNumber = (phoneNumber) => {
    const submittedNumbers = JSON.parse(
      localStorage.getItem("submittedNumbers") || "[]"
    );
    submittedNumbers.push(phoneNumber);
    localStorage.setItem("submittedNumbers", JSON.stringify(submittedNumbers));
  };

  // Add validation functions
  const validateName = (value) => {
    return /^[A-Za-z\s]+$/.test(value);
  };

  const validatePhone = (value) => {
    return /^[6-9]\d{9}$/.test(value);
  };

  const validateEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleQualificationChange = (e) => {
    const isQualified = e.target.value === "Yes";
    setIsEligible(isQualified);
    if (!isQualified) {
      setMessage("❌ You are not eligible for this program");
      setMessageType("error");
    } else {
      setMessage("");
    }
  };

  const getFormSource = () => {
    const urlParams = new URLSearchParams(window.location.search);
    
    // Get UTM source if it exists, otherwise default to 'website'
    return urlParams.get('utm_source')?.toLowerCase() || 'website';
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the phone number from the form
    const phoneNumber = e.target["Contact No"].value;

    if (isNumberAlreadySubmitted(phoneNumber)) {
      setMessage(
        "❌ This phone number has already been used. Please use a different number."
      );
      setMessageType("error");
      return;
    }

    // Validate all fields before submission
    const name = e.target.Name.value;
    const phone = e.target["Contact No"].value;
    const email = e.target.Email.value;

    if (!validateName(name)) {
      setMessage("Please enter a valid name (letters only)");
      return;
    }

    if (!validatePhone(phone)) {
      setMessage("Please enter a valid 10-digit mobile number");
      return;
    }

    if (!validateEmail(email)) {
      setMessage("Please enter a valid email address");
      return;
    }

    setMessage("Submitting...");
    setMessageType("info");
    setIsSubmitting(true);

    // Create FormData object with the expected field names
    const formData = new FormData();
    formData.append("contact-name", e.target.Name.value);
    formData.append("contact-email", e.target.Email.value);
    formData.append("contact-phone", e.target["Contact No"].value);
    formData.append(
      "contact-message",
      `City: ${e.target.City.value}, 
      Graduate: ${e.target.Qualification.value}, 
      Program: ${e.target["Program of Interest"].value}`
    );
    formData.append("contact-city", e.target.City.value);

    // Update the source to be dynamic
    formData.append("source", getFormSource());
    formData.append("orderid", "1046");
    formData.append("sitename", "NUSPlanetlp");

    fetch("https://nus.planeteducation.info/submit.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Save the submitted number
          saveSubmittedNumber(phoneNumber);

          // Redirect to thank you page
          window.location.href = "/thankyou.html";

          // Optional: Reset form in background
          e.target.reset();
          e.target.City.selectedIndex = 0;
          e.target.Qualification.selectedIndex = 0;
          e.target["Program of Interest"].selectedIndex = 0;
        } else {
          throw new Error(data.message || "Submission failed");
        }
      })
      .catch((error) => {
        console.error(error);
        setMessageType("error");
        setMessage(
          `❌ ${
            error.message ||
            "An error occurred while submitting the form. Please try again."
          }`
        );
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };
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
          <span className=" text-[#2c2760] text-lg font-bold">
            Business Analytics
          </span>
          , and{" "}
          <span className=" text-[#2c2760] text-lg font-bold">
            Software Engineering
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

          {/* Message display above the form */}
          {message && (
            <div
              className={`mb-4 p-3 rounded-md text-base font-medium ${
                messageType === "success"
                  ? "bg-green-100 text-green-700 border border-green-400"
                  : messageType === "error"
                  ? "bg-red-100 text-red-700 border border-red-400"
                  : "bg-blue-100 text-blue-700 border border-blue-400"
              }`}
              role="alert"
            >
              {message}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              placeholder="Name"
              name="Name"
              className="w-full bg-white p-2"
              pattern="[A-Za-z\s]+"
              title="Please enter letters only"
              required
            />
            <input
              placeholder="Contact No"
              type="tel"
              name="Contact No"
              className="w-full bg-white p-2"
              pattern="[6-9][0-9]{9}"
              title="Please enter a valid 10-digit Indian mobile number"
              maxLength="10"
              required
            />
            <input
              placeholder="Email ID"
              type="email"
              name="Email"
              className="w-full bg-white p-2"
              pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
              title="Please enter a valid email address"
              required
            />
            <select name="City" className="w-full bg-white p-2" required>
              <option value="" disabled selected>
                City for Entrance Test
              </option>
              <option value="Ahmedabad">Ahmedabad</option>
              <option value="Bengaluru">Bengaluru</option>
              <option value="Chennai">Chennai</option>
              <option value="Delhi">Delhi</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Pune">Pune</option>
            </select>
            <select
              name="Qualification"
              className="w-full bg-white p-2"
              required
              onChange={handleQualificationChange}
            >
              <option value="" disabled selected>
                Graduate
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <select
              name="Program of Interest"
              className="w-full bg-white p-2"
              required
            >
              <option value="" disabled selected>
                Program of Interest
              </option>
              <option value="Artificial Intelligence">
                Artificial Intelligence
              </option>
              <option value="Business Analytics">Business Analytics</option>
              <option value="Software Engineering">Software Engineering</option>
            </select>
            <button
              type="submit"
              disabled={isSubmitting || !isEligible}
              className={`px-14 rounded-sm py-2 block mx-auto bg-[#1a237e] hover:bg-[#1a237e]/90 text-white text-[1.4rem] font-normal ${
                isSubmitting || !isEligible
                  ? "opacity-50 cursor-not-allowed"
                  : "animate-bounce"
              }`}
              style={{ marginTop: "2.5rem" }}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Hero;
