import React, { useState } from "react";

const Hero = () => {
  const [formData, setFormData] = useState({
    Name: "",
    "Contact No": "",
    Email: "",
    City: "",
    Qualification: "",
    "Program of Interest": ""
  });

  const [phoneError, setPhoneError] = useState("");
  const [digitError, setDigitError] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // Manage submit button state

  const validatePhoneStart = (value) => {
    if (value && !/^[6-9]/.test(value)) {
      setPhoneError("Phone number must start with 6, 7, 8, or 9");
    } else {
      setPhoneError("");
    }
  };

  const validatePhoneLength = (value) => {
    if (value.length !== 10) {
      setDigitError("Phone number must be of 10 digits");
    } else {
      setDigitError("");
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;

    if (name === "Name") {
      const regex = /^[a-zA-Z\s]*$/;
      if (!regex.test(value)) {
        setError("Name can only contain letters and spaces.");
        return;
      }
    }

    if (name === "Contact No") {
      const sanitizedValue = value.replace(/\D/g, "");
      validatePhoneStart(sanitizedValue);

      setFormData((prevState) => ({
        ...prevState,
        [name]: sanitizedValue.slice(0, 10),
      }));
      return;
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setError("");
  };

  const handleBlur = (e) => {
    if (e.target.name === "Contact No") {
      validatePhoneLength(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");
    setIsSubmitting(true); // Disable the submit button

    if (phoneError || digitError) {
      setError("Please correct the errors before submitting.");
      setIsSubmitting(false); // Re-enable the submit button
      return;
    }

    if (!/^[a-zA-Z\s]+$/.test(formData.Name)) {
      setError("Name can only contain letters and spaces.");
      setIsSubmitting(false); // Re-enable the submit button
      return;
    }

    try {
      // Prepare the data to send
      const formDataToSend = new FormData();
      formDataToSend.append("contact-name", formData.Name);
      formDataToSend.append("contact-email", formData.Email);
      formDataToSend.append("contact-phone", formData["Contact No"]);
      formDataToSend.append("contact-city", formData.City);
      formDataToSend.append("contact-qualification", formData.Qualification);
      formDataToSend.append("contact-program", formData["Program of Interest"]);

      // Add hidden fields dynamically
      formDataToSend.append("referrer_name", document.referrer || "direct");
      formDataToSend.append("keyword", "Scholarship Program");
      formDataToSend.append("source", "Landing Page");
      formDataToSend.append("orderid", "1046"); // Hardcoded or dynamically generated
      formDataToSend.append("sitename", "NUSPlanetlp");
      formDataToSend.append("campaign_url", window.location.href);
      formDataToSend.append("campaign_name", "Study Abroad Campaign");
      formDataToSend.append("network", "Organic");

      // Send the data to the PHP server
      const response = await fetch(
        "https://nus.planeteducation.info/submit.php",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      // Check if the response is valid JSON
      let result;
      try {
        result = await response.json();
      } catch (jsonError) {
        throw new Error("Unexpected response format, not JSON.");
      }

      // Handle the JSON response
      if (response.ok && result.status === "success") {
        setSuccessMessage("Form submitted successfully!");
        // Redirect to the thank you page
        window.location.href = "thankyou.html";
      } else {
        setError(result.message || "Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError(error.message || "Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false); // Re-enable the submit button
    }
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
          {/* {message && (
            <div
              className={`mb-4 p-3 rounded-md text-sm font-medium ${
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
          )} */}

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
            >
              <option value="" disabled selected>
                Qualification
              </option>
              <option value="12th Pass">12th Pass</option>
              <option value="Graduate">Graduate</option>
              <option value="Post Graduate">Post Graduate</option>
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
              disabled={isSubmitting}
              className={`px-14 rounded-sm py-2 block mx-auto bg-[#1a237e] hover:bg-[#1a237e]/90 text-white text-[1.4rem] font-normal ${
                isSubmitting
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
