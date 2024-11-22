import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Register from "./component/Register";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Login from "./component/Login";
import CreateForm from "./component/CreateForm";
import ListForm from "./component/ListForm";
function App() {
  const [questions, setQuestions] = useState([]); // Shared state for questions

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/createform"
            element={
              <CreateForm questions={questions} setQuestions={setQuestions} />
            }
          />
          <Route
            path="/listform"
            element={<ListForm questions={questions} />}
          />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
