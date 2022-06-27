import React, { useState } from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";

export default function App() {
  const questions = [
    {
      questionText: "Where is Tuwaiq Academy located?",
      answerOptions: [
        { answerText: "Jeddah", isCorrect: false },
        { answerText: "Makkah", isCorrect: false },
        { answerText: "Riyadh", isCorrect: true },
        { answerText: "Dubai", isCorrect: false },
      ],
    },
    {
      questionText: "What is Spring boot",
      answerOptions: [
        { answerText: "Programming Language", isCorrect: false },
        { answerText: "Framewrok", isCorrect: true },
        { answerText: "Database", isCorrect: false },
        { answerText: "Application", isCorrect: false },
      ],
    },
    {
      questionText:
        "Who Played The Witcher (Geralt Of Rivia) in The Witcher Series  ?",
      answerOptions: [
        { answerText: "Henry Cavil", isCorrect: true },
        { answerText: "Bruce Willis", isCorrect: false },
        { answerText: "Chris Hemsworth", isCorrect: false },
        { answerText: "Daniel Radcliffe", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter Films are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "8", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  //increment the score by 1 if it's correct
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    //move to nxt q
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <BrowserRouter>
      <div className="app">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length}
            <h6 className="display-6"> CONGRATS!!</h6>
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </BrowserRouter>
  );
}
