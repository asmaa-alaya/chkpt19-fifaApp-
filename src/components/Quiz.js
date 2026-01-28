import { useEffect, useState } from "react";
import questions from "./Questions.js";
import "./quiz.css";

function App() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(10);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showFeedback, setShowFeedback] = useState(false);

    // Timer logic
    useEffect(() => {
        if (showFeedback) return;

        if (timer === 0) {
            goNext();
            return;
        }

        const interval = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [timer, showFeedback]);

    // End of quiz
    if (currentIndex >= questions.length) {
        return (
            <div className="container">
                <div className="card">
                    <h1>Quiz Finished 🎉</h1>
                    <p className="score">
                        Your score: {score} / {questions.length}
                    </p>
                    <button
                        className="restart"
                        onClick={() => {
                            setCurrentIndex(0);
                            setScore(0);
                            setTimer(10);
                            setSelectedAnswer(null);
                            setShowFeedback(false);
                        }}
                    >
                        Restart Quiz 🔄
                    </button>
                </div>
            </div>
        );
    }

    const currentQuestion = questions[currentIndex];

    function handleAnswer(option) {
        if (showFeedback) return;

        setSelectedAnswer(option);
        setShowFeedback(true);

        if (option === currentQuestion.correctAnswer) {
            setScore((prev) => prev + 1);
        }

        setTimeout(goNext, 1500);
    }

    function goNext() {
        setCurrentIndex((prev) => prev + 1);
        setTimer(10);
        setSelectedAnswer(null);
        setShowFeedback(false);
    }

    function getButtonClass(option) {
        if (!showFeedback) return "option";

        if (option === currentQuestion.correctAnswer) {
            return "option correct";
        }

        if (option === selectedAnswer) {
            return "option wrong";
        }

        return "option";
    }

    return (
        <div className="container">
            <div className="card">
                <div className="header">
                    <span>
                        Question {currentIndex + 1}/{questions.length}
                    </span>
                    <span className={`timer ${timer <= 3 ? "danger" : ""}`}>
                        ⏱ {timer}s
                    </span>
                </div>

                <h2>{currentQuestion.question}</h2>

                <div className="options">
                    {currentQuestion.options.map((option, index) => (
                        <button
                            key={index}
                            className={getButtonClass(option)}
                            onClick={() => handleAnswer(option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>

                <p className="score">Score: {score}</p>
            </div>
        </div>
    );
}

export default App;
