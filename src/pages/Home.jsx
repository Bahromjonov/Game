import React, { useState } from 'react';
import { shuffledArry } from '../Quiz';

const Home = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = shuffledArry[currentQuestionIndex];

  const handleAnswerClick = (answerIndex) => {
    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    setUserAnswers([...userAnswers, isCorrect]);
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < shuffledArry.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className='container mx-auto px-5 flex justify-center py-5 '>
      {showResult ? (
        <div>
          <h2>Test tugadi!</h2>
          <p>Sizning natijangiz: {score}/{shuffledArry.length}</p>
        </div>
      ) : (
        <div className=''>
          <h2 className='font-bold text-2xl mb-10'>{currentQuestion.question}</h2>
          <img  src={currentQuestion.img} alt='Animal' className='mb-5 w-96 h-80 bg-transparent' />
          <ul className='max-w-[300px]'>
            {currentQuestion.answers.map((answer, index) => (
              <li className='py-2.5 pl-5 bg-green-400 mb-5' key={index} onClick={() => handleAnswerClick(index)}>
                {answer}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;
