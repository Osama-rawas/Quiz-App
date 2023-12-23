const quizData = [
  {
    question: "What is the percentage of the Earth covered by water?",
    a: "51%",
    b: "61%",
    c: "71%",
    d: "81%",
    correct: "c",
  },
  {
    question: "What is the largest internal organ in the human body?",
    a: "Lungs",
    b: "Heart",
    c: "Kidneys",
    d: "Liver",
    correct: "d",
  },
  {
    question: "What does the Richter scale measure?",
    a: "Wind Speed",
    b: "Earthquake intensity",
    c: "Tornado Strength",
    d: "Temperature ",
    correct: "b",
  },
  {
    question: "Which country is the footballer Cristiano Ronaldo from?",
    a: "Spain",
    b: "Portugal",
    c: "Uruguay",
    d: "Brazil",
    correct: "b",
  },
  {
    question: "What is the longest river in the world?",
    a: "Nile",
    b: "Amazon River",
    c: "Yellow River",
    d: "Congo River",
    correct: "a",
  },
  {
    question: "What was Euclid?",
    a: "A philosopher",
    b: "A poet",
    c: "A mathematician",
    d: "A painter",
    correct: "c",
  },
  {
    question: "Which country won the first Football World Cup in 1930?",
    a: "Uruguay",
    b: "Portugal",
    c: "Italy",
    d: "Brazil",
    correct: "a",
  },
  {
    question: " Name the Animal who can’t Jump?",
    a: "butterfly",
    b: "Lion",
    c: "Elephant",
    d: "Hours",
    correct: "c",
  },
  {
    question: "What year was javascript lunched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "a",
  },
  {
    question: "من بين هؤلاء شاعر سوري",
    a: "محمود درويش",
    b: "عباس جيجان",
    c: "نزار قباني",
    d: "كريم العراقي",
    correct: "c",
  },
];
const quiz = document.querySelector(".quiz-container");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitbtn = document.getElementById("submit");
const answerEls = document.querySelectorAll(".answer");

let currentquiz = 0;
let score = 0;
loadQuiz();

function getselected() {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}
function delselectedanswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}
function loadQuiz() {
  delselectedanswers();
  const currentQuizData = quizData[currentquiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}
submitbtn.addEventListener("click", () => {
  const answer = getselected();

  if (answer) {
    if (answer === quizData[currentquiz].correct) {
      score++;
      console.log(score);
    }

    currentquiz++;
    if (currentquiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.classList.add("finished");
      quiz.innerHTML = `<h2>You answered correctly at  ${score}/${quizData.length}  </h2>
      <button onclick='location.reload()'>Reload</button>`;
    }
  }
});
