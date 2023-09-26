import panda from './assets/panda.jpg'
import lion from './assets/lion.png'
import elephant from './assets/elephant.jfif'
import monkey from './assets/monkey.jfif'
import zebra from './assets/zebra.jfif'

const arry = [
    {
      question: "what animal is this?",
      img:panda,
      answers: ["Bear", "Panda", "Elephand", "Tiger"],
      correctAnswer: 1,
    },
    {
      question: "what animal is this?",
      img:elephant,
      answers: ["Elephant", "Zebra", "Horse", "Griaffe"],
      correctAnswer: 0,
    },
    {
      question: "what animal is this?",
      img:lion,
      answers: ["Crocodile", "Cat", "Donkey", "Lion"],
      correctAnswer: 3,
    },
    {
      question: "what animal is this?",
      img:monkey,
      answers: ["Crocodile", "Monkey", "Donkey", "Lion"],
      correctAnswer: 1,
    },
    {
      question: "what animal is this?",
      img:zebra,
      answers: ["zebra", "Monkey", "Donkey", "Lion"],
      correctAnswer: 1,
    },
  ];
  
  

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    console.log(shuffledArray.length);
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };
  
  export const shuffledArry = shuffleArray(arry);
  