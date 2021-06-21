// Questions in JSON format
let questionsTest2 = [
    {
        "id":1,
        "question":"1) Listen to the sound and click the tile with the matching properties.",
        "soundSource": "",
        "answer":"v"
    },  
    {
        "id":2,
        "question":"2) Listen to the sound and click the tile with the matching properties.",
        "soundSource": "",
        "answer":"e"
    },  
    {
        "id":3,
        "question":"3) Listen to the sound and click the tile with the matching properties.",
        "soundSource": "",
        "answer":"s"
    } 
]

// Declare variables
const questionTest2 = document.getElementById("questionTest2");
const answers = Array.from(document.getElementsByClassName("bingo-answer-text"));
const questionCounterTextTest2 = document.getElementById("counterTextTest2");
const scoreTextTest2 = document.getElementById("scoreTest2");

let questionCounterTest2;
let scoreTest2;
let scoreToAddTest2;
const MAX_QUESTIONS_TEST2 = 3;
// THIS doesn't need to be declared as long as train.js is run first
 let acceptingAnswers;

startTest2 = () => {
    questionCounterTest2 = 0;
    scoreTest2 = 0;
    //console.log(questions);
    acceptingAnswers = true;

    availableQuestions = getRandomQuestionsTest2(questionsTest2, MAX_QUESTIONS_TEST2);
    console.log(availableQuestions);

    getNewQuestionTest2();
}

// Shuffles available questions into a random order
const getRandomQuestionsTest2 = (arr, n) => {
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

const getNewQuestionTest2 = () => {
    // End when all questions have been shown
    if (availableQuestions.length === 0) {
        //console.log("No more questions")
        displayModalTest2();
        return;
    }

    // Increment question counter and update display
    questionCounterTest2++;
    questionCounterTextTest2.innerText = questionCounterTest2 + "/" + MAX_QUESTIONS_TEST2;

    // Update display with current question
    currentQuestion = availableQuestions[0];
    console.log(currentQuestion);
    
    //console.log(currentQuestion);
    questionTest2.innerText = currentQuestion.question;

    // Update with correct audio file for each question
    document.getElementById("soundTest2").setAttribute("src", currentQuestion.soundSource);

    // 3 points for first attempt, 2 for second, 1 for third
    scoreToAddTest2 = 3;

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

            // This ensures that answers are still recognised if a <mark> element is clicked
            let clickedAnswer;
            if (e.target.nodeName == "MARK") {
                clickedAnswer = e.target.parentElement;
            }
            else {
                clickedAnswer = e.target;
            }
            
            const answerLetter = clickedAnswer.dataset["answer"]
            console.log(answerLetter);

            // Update clicked div with colour for correct or incorrect answer
            let classToApply = "incorrect";

            // If correct answer is clicked, increment score and set class to correct
            if (answerLetter === currentQuestion.answer) {
                console.log("correct answer");
                scoreTest2 += scoreToAddTest2;
                scoreTextTest2.innerText = scoreTest2;
                classToApply = "correct";
            }
            // If incorrect answer is clicked for first and second attempts, decrement scoreToAdd, give negative feedback, then return
            else if (scoreToAddTest2 > 1) {
                scoreToAddTest2 -= 1;
                clickedAnswer.parentElement.classList.add(classToApply);
                console.log("add 'incorrect' class");
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
                // If answer was correct, leave the answer highlighted
                if (classToApply === "incorrect") {
                    clickedAnswer.parentElement.classList.remove(classToApply);
                }
                getNewQuestionTest2();
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
displayModalTest2 = () => {
    const modal = document.getElementById("taskCompleteModal");
    const modalBody = document.getElementById("modal-body");
    modalBody.innerHTML = `
                            <p>Click</p>
                            <div class="nextButton">
                                <a class="nextText" onclick="hideModal()" href="/feedback2" data-link>Next</a>
                            </div>
                            <p>to continue...</p>
                        `
    modal.style.display = "block"
}

startTest2();

