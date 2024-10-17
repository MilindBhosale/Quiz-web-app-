import React, { useState } from 'react';

const questions = [
    {
      question: "How do you judge what should be added in the next version of the app?",
      options: [
        "Data Analysis",
        "User's feedback",
        "Copy from similar product",
        "Make a questionnaire",
        "Personal feeling"
      ],
      correctAnswer: "Data Analysis",
      image: null  
    },
    {
      question: "Which feature is the most important for user engagement?",
      options: [
        "Easy navigation",
        "Attractive UI/UX",
        "Performance",
        "Personalization",
        "Social sharing"
      ],
      correctAnswer: "Personalization",
      image: "path_to_image_1.jpg"  
    },
    {
      question: "What helps the most in retaining users?",
      options: [
        "Frequent updates",
        "Rewards and offers",
        "Personalized content",
        "Seamless experience",
        "Good customer support"
      ],
      correctAnswer: "Rewards and offers",
      image: null
    },
    {
      question: "How do you measure the success of a new feature?",
      options: [
        "Increased user engagement",
        "Positive feedback",
        "Increased downloads",
        "More time spent on the app",
        "Higher revenue"
      ],
      correctAnswer: "Increased user engagement",
      image: "https://via.placeholder.com/300x150.png?text=Success+of+Feature"

    },
    {
      question: "What is the primary goal of the app update?",
      options: [
        "Increase user base",
        "Increase revenue",
        "Improve user experience",
        "Fix bugs",
        "Launch new features"
      ],
      correctAnswer: "Launch new features",
      image: null
    }
  ];
  

  const QuizPage = () => {
    const [started, setStarted] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
    const [incorrectAnswersCount, setIncorrectAnswersCount] = useState(0);
  
    const handleStart = () => {
      setStarted(true);
    };
  
    const handleOptionSelect = (option) => {
      setSelectedOption(option);
    };
  
    const handleNext = () => {
      // Check if the selected option is correct
      if (selectedOption === questions[currentQuestion].correctAnswer) {
        setScore(score + 20); // Each question is worth 20 points (for 5 questions)
        setCorrectAnswersCount(correctAnswersCount + 1);
      } else {
        setIncorrectAnswersCount(incorrectAnswersCount + 1);
      }
  
      // Move to the next question or show results if this is the last question
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption('');
      } else {
        setShowResult(true);
      }
    };
  
    const handleRestart = () => {
      setStarted(false);
      setCurrentQuestion(0);
      setSelectedOption('');
      setScore(0);
      setCorrectAnswersCount(0);
      setIncorrectAnswersCount(0);
      setShowResult(false);
    };
  
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-white to-purple-200">
        {!started ? (
          <>
            {/* Start Page */}
            <div className="mb-16">
              <img src="https://yt3.googleusercontent.com/HLXws3xWxwE7mVHdh2XLErD7aK3dOhNzlSIc6VnSvIZOus8mwMf-UGyoypPjB2jx0g2A5Bm5G74=s900-c-k-c0x00ffffff-no-rj" alt="Logo" className="h-10" />
            </div>
            <div className="flex items-center justify-center bg-white h-40 w-40 rounded-full shadow-lg">
              <h1 className="text-2xl font-bold text-red-500">Quiz</h1>
            </div>
            <button
              className="mt-8 px-6 py-3 bg-red-500 text-white rounded-full text-lg font-medium hover:bg-red-600 transition"
              onClick={handleStart}
            >
              Start
            </button>
          </>
        ) : !showResult ? (
          <>
            {/* Quiz Page */}
            <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
              <div className="text-center mb-4">
                <div className="flex justify-center items-center w-12 h-12 bg-purple-100 rounded-full">
                  <span className="text-2xl font-bold">{currentQuestion + 1}</span>/<span>5</span>
                </div>
              </div>
  
              {/* Render Image if available */}
              {questions[currentQuestion].image && (
                <div className="mb-4">
                  <img
                    src={questions[currentQuestion].image}
                    alt="Question related visual"
                    className="w-full h-40 object-cover rounded-md"
                  />
                </div>
              )}
  
              <h2 className="text-lg font-semibold text-center mb-4">
                {questions[currentQuestion].question}
              </h2>
  
              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-2 p-2 rounded-lg cursor-pointer ${
                      selectedOption === option ? 'bg-green-100' : 'bg-white'
                    }`}
                    onClick={() => handleOptionSelect(option)}
                  >
                    <input
                      type="radio"
                      name="option"
                      value={option}
                      checked={selectedOption === option}
                      className="form-radio h-4 w-4 text-red-500"
                      readOnly
                    />
                    <label className="text-gray-700">{option}</label>
                  </div>
                ))}
              </div>
  
              <button
                className="mt-6 w-full bg-red-500 text-white py-2 rounded-full text-lg font-medium hover:bg-red-600 transition"
                onClick={handleNext}
                disabled={!selectedOption} // Disable button until an option is selected
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Result Page */}
            <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md text-center">
              <div className="mb-4">
                <h2 className="text-2xl font-bold">Your result</h2>
              </div>
              <div className="w-full flex justify-center mb-6">
                {/* Result Arc (simulating progress) */}
                <div className="w-24 h-24 relative">
                  <svg className="absolute top-0 left-0" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      strokeWidth="10"
                      className="text-gray-200"
                      fill="none"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      strokeWidth="10"
                      className="text-red-500"
                      strokeDasharray={`${score}, 100`}
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold">{score}%</span>
                  </div>
                </div>
              </div>
  
              <div className="mb-4">
                <p className="text-lg">
                  <span className="text-green-500 font-bold">{correctAnswersCount}</span> Correct
                </p>
                <p className="text-lg">
                  <span className="text-red-500 font-bold">{incorrectAnswersCount}</span> Incorrect
                </p>
              </div>
  
              <button
                className="mt-4 w-full bg-red-500 text-white py-2 rounded-full text-lg font-medium hover:bg-red-600 transition"
                onClick={handleRestart}
              >
                Start Again
              </button>
            </div>
          </>
        )}
      </div>
    );
  };
  
  export default QuizPage;
  