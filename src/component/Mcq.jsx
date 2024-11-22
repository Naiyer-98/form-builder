import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Mcq() {
  // Define state to manage answers and validation
  const [answers, setAnswers] = useState({
    question1: "",
    question2: "",
    question3: "",
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  // Handle change for radio buttons
  const handleChange = (e) => {
    setAnswers({
      ...answers,
      [e.target.name]: e.target.value,
    });
  };

  // Validate the form before submission
  const validate = () => {
    const newErrors = {};
    Object.keys(answers).forEach((question) => {
      if (!answers[question]) {
        newErrors[question] = "This question is required";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Form submitted successfully!");
      // Handle further logic (e.g., sending data to a backend)
      navigate("/createform");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          MCQ Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Question 1 */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              1. What is the capital of France?
            </label>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="question1"
                  value="Paris"
                  onChange={handleChange}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2">Paris</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  name="question1"
                  value="Berlin"
                  onChange={handleChange}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2">Berlin</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  name="question1"
                  value="Madrid"
                  onChange={handleChange}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2">Madrid</span>
              </label>
            </div>
            {errors.question1 && (
              <p className="text-red-500 text-sm mt-1">{errors.question1}</p>
            )}
          </div>

          {/* Question 2 */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              2. What is 2 + 2?
            </label>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="question2"
                  value="3"
                  onChange={handleChange}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2">3</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  name="question2"
                  value="4"
                  onChange={handleChange}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2">4</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  name="question2"
                  value="5"
                  onChange={handleChange}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2">5</span>
              </label>
            </div>
            {errors.question2 && (
              <p className="text-red-500 text-sm mt-1">{errors.question2}</p>
            )}
          </div>

          {/* Question 3 */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              3. What is the largest planet in our solar system?
            </label>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="question3"
                  value="Earth"
                  onChange={handleChange}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2">Earth</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  name="question3"
                  value="Jupiter"
                  onChange={handleChange}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2">Jupiter</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  name="question3"
                  value="Saturn"
                  onChange={handleChange}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2">Saturn</span>
              </label>
            </div>
            {errors.question3 && (
              <p className="text-red-500 text-sm mt-1">{errors.question3}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            <a href="/createform"> </a>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Mcq;
