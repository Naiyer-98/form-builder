import React, { useEffect, useState } from "react";

const ListForm = () => {
  const [forms, setForms] = useState([]);

  // Fetch forms from the backend
  useEffect(() => {
    const fetchForms = async () => {
      try {
        const response = await fetch("http://localhost:5000/forms");
        const data = await response.json();
        setForms(data); // Load forms into state
      } catch (error) {
        console.error("Error fetching forms:", error);
      }
    };

    fetchForms();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-blue-500 text-center mt-8">
        Forms List
      </h1>

      {forms.length === 0 ? (
        <p className="text-center text-gray-600 mt-4">No forms created yet.</p>
      ) : (
        <div className="mt-8 space-y-4">
          {forms.map((form, index) => (
            <div key={index} className="border rounded-lg p-4 bg-gray-100">
              <h2 className="text-lg font-medium text-gray-700">
                Form Name: {form.formName}
              </h2>
              {form.questions.map((q, qIndex) => (
                <div key={qIndex} className="mt-4">
                  <h3 className="text-md font-medium text-gray-700">
                    {qIndex + 1}. {q.question}
                  </h3>
                  <ul className="mt-2">
                    {q.options.map((opt, idx) => (
                      <li
                        key={idx}
                        className={`px-3 py-1 ${
                          opt === q.correctAnswer
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {idx + 1}. {opt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListForm;
