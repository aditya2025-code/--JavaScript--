const questions = [
  {
    category: "Science",
    question: "What is the chemical symbol for water?",
    choices: ["H2O", "O2", "CO2"],
    answer: "H2O"
  },
  {
    category: "History",
    question: "Who was the first President of the United States?",
    choices: ["George Washington", "Thomas Jefferson", "Abraham Lincoln"],
    answer: "George Washington"
  },
  {
    category: "Geography",
    question: "Which is the largest continent by land area?",
    choices: ["Africa", "Asia", "Europe"],
    answer: "Asia"
  },
  {
    category: "Technology",
    question: "What does CPU stand for?",
    choices: [
      "Central Processing Unit",
      "Computer Power Unit",
      "Central Program Utility"
    ],
    answer: "Central Processing Unit"
  },
  {
    category: "Sports",
    question: "How many players are on the field for one soccer team during a match?",
    choices: ["9", "10", "11"],
    answer: "11"
  }
];
const getRandomQuestion = (Question) => {
  return Question[Math.floor(Math.random() * Question.length)];
}
// console.log(getRandomQuestion(questions));
const getRandomComputerChoice = (Question) => {
  return Question[Math.floor(Math.random() * (Question.length))];
}
// console.log(getRandomComputerChoice(questions));
const getResults = (Question, Choice) => {
  if (Choice === Question.answer) return "The computer's choice is correct!";
  else return `The computer's choice is wrong. The correct answer is: ${Question.answer}`;
}
