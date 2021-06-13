// Questions in JSON format
let questions = [
    {
        "id":1,
        "question":"1) Identify the dimension and direction along which these two sounds differ.",
        "a":"Spectrum / Increase",
        "b":"Spectrum / Decrease",
        "c":"Brightness / Increase",
        "d":"Brightness / Decrease",
        "e":"Articulation / Increase",
        "f":"Articulation / Decrease",
        "g":"Envelope / Increase",
        "h":"Envelope / Decrease",
        "i":"No Change",
        "answer":"b"
    },  
    {
        "id":2,
        "question":"2) Identify the dimension and direction along which these two sounds differ.",
        "a":"Spectrum / Increase",
        "b":"Spectrum / Decrease",
        "c":"Brightness / Increase",
        "d":"Brightness / Decrease",
        "e":"Articulation / Increase",
        "f":"Articulation / Decrease",
        "g":"Envelope / Increase",
        "h":"Envelope / Decrease",
        "i":"No Change",
        "answer":"i"
    },  
    {
        "id":3,
        "question":"3) Identify the dimension and direction along which these two sounds differ.",
        "a":"Spectrum / Increase",
        "b":"Spectrum / Decrease",
        "c":"Brightness / Increase",
        "d":"Brightness / Decrease",
        "e":"Articulation / Increase",
        "f":"Articulation / Decrease",
        "g":"Envelope / Increase",
        "h":"Envelope / Decrease",
        "i":"No Change",
        "answer":"e"
    } 
]

// Declare variables
const question = document.getElementById("question");
const answers = Array.from(document.getElementsByClassName("answer-text"));
const questionCounterText = document.getElementById("counter");
const scoreText = document.getElementById("score");

let questionCounter;
let score;
const MAX_QUESTIONS = 3;
let acceptingAnswers;

startGame = () => {
    questionCounter = 0;
    score = 0;
    console.log(questions);
    acceptingAnswers = true;

    availableQuestions = getRandomQuestions(questions, MAX_QUESTIONS);
    console.log(availableQuestions);

    getNewQuestion();
}

// Shuffles available questions into a random order
const getRandomQuestions = (arr, n) => {
    let len = arr.length;
    if (n > len) {
        throw new RangeError(
            "getRandomQuestions: more elements taken than available"
        );
    }

    // Shuffles the order of the questions
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    // Return randomised array of questions
    return (selected = shuffled.slice(0, n));
}

const getNewQuestion = () => {
    // End when all questions have been shown
    if (availableQuestions.length === 0) {
        //console.log("No more questions")
        displayResults();
        return;
    }

    // Increment question counter and update display
    questionCounter++;
    questionCounterText.innerText = questionCounter + "/" + MAX_QUESTIONS;

    // Update display with current question
    currentQuestion = availableQuestions[0];
    //console.log(currentQuestion);
    question.innerText = currentQuestion.question;

    // Display answers for each question
    answers.forEach((answer) => {
        answer.innerText = currentQuestion[answer.dataset["answer"]];
    });

    // Add event listeners for answer selection
    answers.forEach((answer) => {
        answer.addEventListener("click", (e) => {
            // If not accepting answers, return
            if(!acceptingAnswers) {
                //console.log("not accepting answers");
                return;
            }
            // Set acceptingAnswers to false to only allow single answer
            acceptingAnswers = false

            const clickedAnswer = e.target;
            const answerLetter = clickedAnswer.dataset["answer"]
            //console.log(answerLetter);

            // Update clicked div with colour for correct or incorrect answer
            let classToApply = "incorrect";

            // If correct answer is clicked, increment score and set class to correct
            if (answerLetter === currentQuestion.answer) {
                console.log("correct answer");
                score++;
                scoreText.innerText = score;
                classToApply = "correct";
            }
            // Apply the appropriate class
            clickedAnswer.parentElement.classList.add(classToApply);

            // After time period, remove the correct/incorrect class and get the next question
            setTimeout(() => {
                clickedAnswer.parentElement.classList.remove(classToApply);
                getNewQuestion();
                acceptingAnswers = true;
            }, 1500);
        });
    });
    availableQuestions.shift();
};

//Shows task complete modal 
displayResults = () => {
    let modal = document.getElementById("taskCompleteModal");
    modal.style.display = "block"
}

startGame();
