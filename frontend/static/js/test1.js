// Questions in JSON format
let questions = [
    {
        "id":1,
        "question":"1) Identify the dimension and direction to change sound A into sound B.",
        "soundASource": "static/stimuli_HugginsPitch/HugginsPitch_calibration.flac",
        "soundBSource": "",
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
        "question":"2) Identify the dimension and direction to change sound A into sound B.",
        "soundASource": "",
        "soundBSource": "static/stimuli_HugginsPitch/HugginsPitch_calibration.flac",
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
        "question":"3) Identify the dimension and direction to change sound A into sound B.",
        "soundASource": "",
        "soundBSource": "",
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
let scoreToAdd;
const MAX_QUESTIONS = 3;
// THIS doesn't need to be declared as long as train.js is run first
// let acceptingAnswers;

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

    // Update with correct audio files for each question
    document.getElementById("soundA").setAttribute("src", currentQuestion.soundASource);
    document.getElementById("soundB").setAttribute("src", currentQuestion.soundBSource);

    // Display answers for each question
    answers.forEach((answer) => {
        answer.innerText = currentQuestion[answer.dataset["answer"]];
    });

    // 3 points for first attempt, 2 for second, 1 for third
    scoreToAdd = 3;

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
                score += scoreToAdd;
                scoreText.innerText = score;
                classToApply = "correct";
            }
            // If incorrect answer is clicked for first and second attempts, decrement scoreToAdd, give negative feedback, then return
            else if (scoreToAdd > 1) {
                scoreToAdd -= 1;
                clickedAnswer.parentElement.classList.add(classToApply);
                setTimeout(() => {
                    clickedAnswer.parentElement.classList.remove(classToApply);
                    acceptingAnswers = true;
                }, 1500);
                return;
            }
            else {
                // If incorrect answer is clicked on third attempt, no change to score, get next question  
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

hideModal = () => {
    const modal = document.getElementById("taskCompleteModal");
    modal.style.display = "none"
}

//Shows task complete modal 
displayResults = () => {
    const modal = document.getElementById("taskCompleteModal");
    const modalBody = document.getElementById("modal-body");
    modalBody.innerHTML = `
                            <p>Click</p>
                            <div class="nextButton">
                                <a class="nextText" onclick="hideModal()" href="/training2" data-link>Next</a>
                            </div>
                            <p>to continue...</p>
                        `
    modal.style.display = "block"
}

startGame();
