import React from "react";
import reactLogo from './assets/react.svg'
import { useNavigate } from "react-router-dom";
import "./QuizContainer.css"

export default function QuizContainer() {
  const navigate = useNavigate();
  function start() {
    navigate("/quiz");
  }
  return (
    <div className="QuizContainer">
      <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="reactLogo" alt="React logo" />
        </a> 
        
      <button className="startQuizButton" onClick={start}><span>Click!</span><span>START</span></button>
    </div>
  );
}
