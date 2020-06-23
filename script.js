const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")
const directions = document.getElementById("instructions")
const scoreText = document.getElementById("score")
const questionCounterText = document.getElementById("questionCounter")
const correctAnswer = 10
const maximumQuestions = 10
//const startingMinutes = 2;
//const countdownEl = document.getElementById("countdown");
//var correct = 0;
//var wrong = 0;

//totalcounter();

//let time = startingMinutes * 60;
let shuffledQuestions, currentQuestionIndex
let score = 0
let questionCounter = 0
let availableQuetions = 10

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
   currentQuestionIndex++
   setNextQuestion()
})

//function totalcounter() {
//   if (answer.correct) {on.click=correct++;}
  // else if (answer.wrong) {on.click=wrong++}
//}

function startGame() {
   startButton.classList.add("hide")
   directions.classList.add("hide")
   shuffledQuestions = questions.sort(() => Math.random() - .5)
   currentQuestionIndex = 0
   questionCounter = 0
   score = 0
   questionContainerElement.classList.remove("hide")
   setNextQuestion() 
}
//setInterval(updateCountdown, 1000);

//function updateCountdown() {
 //  const minutes = Math.floor(time/60);
  // let seconds = time % 60;

 //  seconds = seconds < 10 ? "0" + seconds : seconds;
 //  countdownEl.innerHTML = "${minutes}: ${seconds}";
  // time--;
//}

function setNextQuestion(){
   resetState()
   showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
   questionElement.innerText = question.question
   question.answers.forEach(answer => {
      const button = document.createElement("button")
      button.innerText = answer.text
      button.classList.add("btn");
      if(answer.correct) {
         button.dataset.correct = answer.correct
      }
      button.addEventListener("click", selectAnswer)
      answerButtonsElement.appendChild(button)
   })
}

function resetState(){
   clearStatusClass(document.body)
   nextButton.classList.add("hide")
   while(answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild)
   }
}

function selectAnswer(e){
   const selectedButton = e.target
   const correct = selectedButton.dataset.correct
   setStatusClass(document.body, correct)
   Array.from(answerButtonsElement.children).forEach(button =>{
      setStatusClass(button, button.dataset.correct)
   })
   if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove("hide")
    } else {
     // startButton.innerText = "Quiz Over!"
      //startButton.classList.remove("hide")
    }
  }

  function setStatusClass(element, correct){
   clearStatusClass(element)
   if (correct) {
      element.classList.add("correct")
   }  else {
      element.classList.add("wrong")
   }
   }

   questionCounterText.innerText= "${questionCounter}/${maximumQuestions}";

   function clearStatusClass(element) {
      element.classList.remove("correct")
      element.classList.remove("wrong")
    }
      
const questions = [
   {
      question: "Stokely Williams debuted as the lead singer of what group?",
      answers: [
         {text: "Boys To Men", correct: false},
         {text: "Mint Condition", correct: true},
         {text: "New Edition", correct: false},
         {text: "The Dramatics", correct: false},
      ]
   },
   
   {
      question: "Stoke grew up in which city?",
      answers: [
         {text: "Los Angeles", correct: false},
         {text: "Detroit", correct: false},
         {text: "Minneapolis", correct: true},
         {text: "Chicago", correct: false},
      ]
   },
  
   {
      question: "What is the name of Stoke's debut cd?",
      answers: [
         {text: "Introducing Stokley", correct: true},
         {text: "Pretty Brown Eyes", correct: false},
         {text: "Victoria", correct: false},
         {text: "One", correct: false},
      ]
   },
     
   {
      question: "How old was Stoke when he played his first instrument?",
      answers: [
         {text: "5", correct: false},
         {text: "8", correct: false},
         {text: "7", correct: false},
         {text: "4", correct: true},
      ]
   },
         
   {  
      question: "What film soundtrack did Stoke play on?",
      answers: [
         {text: "Jason's Lyric", correct: true},
         {text: "Mo Better Blues", correct: false},
         {text: "Coming To America", correct: false},
         {text: "How Stella Got Her Groove Back", correct: false},
      ]   
   },
      
   {
      question: "Stokely is a master at playing several instruments in which classification??",
      answers: [
         {text: "Keyboard", correct: false},
         {text: "Strings", correct: false},
         {text: "Percussion", correct: true},
         {text: "Brass", correct: false},
      ]
   },
         
   {
      question: "What is the name of Stoke's first number one solo single?",
      answers: [
            {text: "Organic", correct: true},
            {text: "Victoria", correct: false},
            {text: "Way Up!", correct: false},
            {text: "Level", correct: false},
         ]
   },
         
   {
      question: "How many number one singles did Stokely have when he played in a band??",
      answers: [
            {text: "10", correct: false},
            {text: "1", correct: true},
            {text: "12", correct: false},
            {text: "2", correct: false},
         ]
   },
      
   {
      question: "Stokley's solo album debuted in what year?",
      answers: [
            {text: "2017", correct: true},
            {text: "1997", correct: false},
            {text: "2011", correct: false},
            {text: "2008", correct: false},
         ]
   },
      
   {
      question: "Stokely's new album contains a song with which rapper?",
      answers: [
            {text: "Ice Cube", correct: false},
            {text: "Drake", correct: false},
            {text: "Snoop Dog", correct: true},
            {text: "Nas", correct: false},
         ]
   }
]
