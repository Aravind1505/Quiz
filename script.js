document.querySelector("title").innerHTML = "Quiz";

let data = [
    {
        question: "name",
        a : "ratata", b: "bitata", c:"motata", d:"potata",
        answer: "c"
    },
    {
        question: "age",
        a : "ratata", b: "bitata", c:"motata", d:"potata",
        answer: "c"
    },
    {
        question: "section",
        a : "ratata", b: "bitata", c:"motata", d:"potata",
        answer: "c"
    },
    {
        question: "gender",
        a : "ratata", b: "bitata", c:"motata", d:"potata",
        answer: "c"
    },
    {
        question: "course",
        a : "ratata", b: "bitata", c:"motata", d:"potata",
        answer:"c"
    }
];

const question = document.getElementById("question");
const aText = document.getElementById("aText");
const bText = document.getElementById("bText");
const cText = document.getElementById("cText");
const dText = document.getElementById("dText");
const submitBtn = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;
loadQuiz();

function loadQuiz(){
    deSelectAnswers();
    const currentQuizData = data[currentQuestion]; 

    question.innerHTML = currentQuizData.question;
    aText.innerHTML = currentQuizData.a;
    bText.innerHTML = currentQuizData.b;
    cText.innerHTML = currentQuizData.c;
    dText.innerHTML = currentQuizData.d;
}

function getSelected(){
    const answerEls = document.querySelectorAll(".answer");
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

function deSelectAnswers(){
    const answerEls = document.querySelectorAll(".answer");
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if(answer){
        if(currentQuestion < data.length && answer == data[currentQuestion].answer){
            console.log("Correct");
            score++;
        }
        else{
            console.log("Wrong");
        }
        if(currentQuestion < data.length - 1){
            currentQuestion++;
            loadQuiz();
        }else{
            // alert("Finished quiz");  
            document.getElementById("quiz").innerHTML = "<h2>You answered " + score + "/" + data.length + " correctly. </h2>";  
            document.querySelector("h2").style.padding = "2rem";
        }
    }
});