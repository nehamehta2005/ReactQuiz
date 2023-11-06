import React, { useState } from "react";
import quizData from "./quiz";
import { shuffle } from "lodash";
import "./Quiz.css";

export default function Quiz() {
  /*   const shuffleData = shuffle(quizData); */
  const [shuffleData, setShuffleData] = useState(() => shuffle(quizData)); //this is called lazy initialization
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [answerButtonClicked, setAnswerButtonClicked] = useState(false);

  const handleAnswerButtonClick = (isCorrect) => {
    setAnswerButtonClicked(true);
    if (isCorrect === true) {
      setScore(score + 5);
    }
    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < 10) {
        setcurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
      setAnswerButtonClicked(false);
    }, 2000);
  };

  const restartQuiz = () => {
    setcurrentQuestion(0);
    setShuffleData(shuffle(quizData));
    setShowScore(false);
  };

  return (<div className="parentContainer">
    <div className="Quiz">
      <div className="QuizInnerLayout">
        {showScore ? (
          <div className="score-section">
            <div>You scored {score} out of 50</div>
            <button className="startQuiz" onClick={() => restartQuiz()}>
              <span>Click!</span>
              <span>START</span>
            </button>
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/10
              </div>
              <div className="question-text">
                {shuffleData[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {shuffleData[currentQuestion].answerOptions.map(
                (answerOption) => (
                  <button
                    onClick={() =>
                      handleAnswerButtonClick(answerOption.isCorrect)
                    }
                    className={
                      answerButtonClicked
                        ? answerOption.isCorrect
                          ? "correct"
                          : "incorrect"
                        : ""
                    }
                  >
                    {answerOption.answerText}
                  </button>
                )
              )}
            </div>
          </>
        )}
      </div>
    </div>
    </div>
  );
}
