import React from "react";
import "./HowToPlay.css";

function HowToPlay() {
  return (
    <div className="parentContainer">
      <div className="outerContainer">
        <div className="innerContainer">
          <h2>How to Play</h2>
          <p>Follow these simple steps to play the quiz:</p>
          <ol>
            <li>Read each question carefully.</li>
            <li>
              Choose the correct answer by clicking on the provided options.
            </li>
            <li>Submit your answer to see if it's correct.</li>
            <li>Each question is worth 5 points.</li>
            <li>There are a total of 10 questions.</li>
            <li>
              Continue to the next question until you've completed the quiz.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default HowToPlay;
