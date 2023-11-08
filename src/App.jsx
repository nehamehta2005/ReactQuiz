import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Quiz from "./Quiz";
import Navbar from "./Navbar";
import QuizContainer from "./QuizContainer";
import Contact from "./Contact";
import HowToPlay from "./HowToPlay";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<QuizContainer />} /> {/* Set QuizContainer as the home component */}
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/howtoplay" element={<HowToPlay />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
