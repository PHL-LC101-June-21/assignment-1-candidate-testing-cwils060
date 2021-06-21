const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer;
let candidateAnswer;
let questions;
let correctAnswers;
let candidateAnswers;


function askForName() { }
  // TODO 1.1b: Ask for candidate's name //


function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
 
 

//question = input.question("Who was the first American woman in space? ");
//correctAnswer = "Sally Ride"; 
//candidateAnswer= question;
//console.log("Your Answer: " + candidateAnswer);
//console.log("Correct Answer: " + correctAnswer); 

}


questions=["Who was the first American woman in space?",
 "True or false: 5 kilometer == 5000 meters?", 
 "(5*3)/2*10=?", 
 "Given the array [8, 'Orbit', 'Trajectory', 45] what entry is at index 2?", 
 "What is the minimum crew size for the ISS?"]; 

 correctanswers= ["Sally Ride", "true", "40", "Trajectory", "3"];

 candidateName = input.question ("What is your name?");
console.log( "Welcome " + candidateName + "!"); 

console.log("");

for ( let i = 0; i< questions.length; i++)
 {

   question = input.question(questions[i]);
candidateAnswer= question;
console.log("Your Answer: " + candidateAnswer);
console.log("Correct Answer: " + correctanswers[i]);


if (candidateAnswer == correctanswers [i])
 {
   console.log("You are correct!");
 }
 else 
 {
   console.log("Wrong Answer!");
 } 
console.log("");
console.log("");
 
 }


function gradeQuiz(candidateAnswers) {

  /* TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
 //if (candidateAnswer == "Sally Ride" || candidateAnswer== "sally ride" || candidateAnswer == "SALLY RIDE")
 //{
   console.log("You are correct!");
 }
 else 
 {
   console.log("Wrong Answer");
 }*/

  let grade;
  

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};