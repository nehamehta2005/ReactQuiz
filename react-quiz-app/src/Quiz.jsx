import React, { useState } from "react";
import quizData from "./quiz";
import { shuffle } from "lodash";

export default function Quiz() {
  /*   const shuffleData = shuffle(quizData); */
  const [shuffleData, setShuffleData] = useState(() => shuffle(quizData)); //this is called lazy initialization
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 5);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < 10) {
      setcurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  const restartQuiz = () => {
    setcurrentQuestion(0);
    setShuffleData(shuffle(quizData));
    setShowScore(false)
  };

  return (
    <div className="Quiz">
      <div className="QuizInnerLayout">
        {showScore ? (
          <div className="score-section">
            <div>
              You scored {score} out of {shuffleData.length}
            </div>
            <button className="reloadAll" onClick={() => restartQuiz()}>
              Start Again
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
  );
}
