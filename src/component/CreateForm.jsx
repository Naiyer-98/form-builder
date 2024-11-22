import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateForm = ({ setQuestions }) => {
  const [formName, setFormName] = useState(""); // State for form name
  const [localQuestions, setLocalQuestions] = useState([
    {
      question: "",
      options: ["", "", "", ""],
      correctAnswer: "",
    },
  ]);

  const navigate = useNavigate();

  const handleQuestionChange = (index, value) => {
    const updatedQuestions = [...localQuestions];
    updatedQuestions[index].question = value;
    setLocalQuestions(updatedQuestions);
  };

  const handleOptionChange = (qIndex, oIndex, value) => {
    const updatedQuestions = [...localQuestions];
    updatedQuestions[qIndex].options[oIndex] = value;
    setLocalQuestions(updatedQuestions);
  };

  const handleCorrectAnswerChange = (index, value) => {
    const updatedQuestions = [...localQuestions];
    updatedQuestions[index].correctAnswer = value;
    setLocalQuestions(updatedQuestions);
  };

  const addNewQuestion = () => {
    setLocalQuestions([
      ...localQuestions,
      {
        question: "",
        options: ["", "", "", ""],
        correctAnswer: "",
      },
    ]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formName) {
      alert("Please enter a form name!");
      return;
    }

    for (const q of localQuestions) {
      if (
        !q.question ||
        q.options.some((opt) => opt === "") ||
        q.correctAnswer === ""
      ) {
        alert("Please fill out all fields for each question!");
        return;
      }
    }

    try {
      const formData = {
        formName,
        questions: localQuestions,
      };

      // Save the form data to the backend
      await fetch("http://localhost:5000/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setQuestions((prev) => [...prev, formData]); // Update parent state
      alert("Form successfully created!");
      navigate("/listform"); // Navigate to ListForm
    } catch (error) {
      console.error("Error saving form:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-blue-500 text-center mt-8">
        Create MCQ Form
      </h1>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        {/* Form Name Input */}
        <div>
          <label className="block font-medium text-gray-700">Form Name:</label>
          <input
            type="text"
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
            className="border rounded px-3 py-2 w-full"
            placeholder="Enter form name"
          />
        </div>

        {localQuestions.map((q, qIndex) => (
          <div key={qIndex} className="border rounded-lg p-4 bg-gray-100">
            <h2 className="text-xl font-medium text-gray-700 mb-4">
              Question {qIndex + 1}
            </h2>
            <div>
              <label className="block font-medium text-gray-700">
                Question:
              </label>
              <input
                type="text"
                value={q.question}
                onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
                className="border rounded px-3 py-2 w-full"
                placeholder={`Enter question ${qIndex + 1}`}
              />
            </div>

            {q.options.map((option, oIndex) => (
              <div key={oIndex} className="mt-2">
                <label className="block font-medium text-gray-700">
                  Option {oIndex + 1}:
                </label>
                <input
                  type="text"
                  value={option}
                  onChange={(e) =>
                    handleOptionChange(qIndex, oIndex, e.target.value)
                  }
                  className="border rounded px-3 py-2 w-full"
                  placeholder={`Enter option ${oIndex + 1}`}
                />
              </div>
            ))}

            <div className="mt-4">
              <label className="block font-medium text-gray-700">
                Correct Answer:
              </label>
              <select
                value={q.correctAnswer}
                onChange={(e) =>
                  handleCorrectAnswerChange(qIndex, e.target.value)
                }
                className="border rounded px-3 py-2 w-full"
              >
                <option value="">Select correct answer</option>
                {q.options.map((option, index) => (
                  <option key={index} value={option}>
                    Option {index + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}

        <div className="flex space-x-4 mt-4">
          <button
            type="button"
            onClick={addNewQuestion}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Add New Question
          </button>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateForm;
