// Questions in the following JSON format:
//
//let questionsTest1 = [
//    {
//        "id":"",
//        "question":"",
//        "soundASource": "",
//        "soundBSource": "",
//        "answer":""
//    },...  
//
// Obfuscated to protect integrity of the study

const _0x52f1=['Identify\x20the\x20dimension\x20and\x20direction\x20to\x20change\x20sound\x20A\x20into\x20sound\x20B.','static/TE_sounds/task1.2_sounds/1.2_9a.wav','static/TE_sounds/task1.2_sounds/1.2_9b.wav','static/TE_sounds/task1.2_sounds/1.2_5b.wav','static/TE_sounds/task1.2_sounds/1.2_8b.wav','static/TE_sounds/task1.2_sounds/1.2_3a.wav','668958VWMczd','1-2_10','251144jqzVrE','static/TE_sounds/task1.2_sounds/1.2_8a.wav','static/TE_sounds/task1.2_sounds/1.2_5a.wav','static/TE_sounds/task1.2_sounds/1.2_6b.wav','1439ZRnfNT','static/TE_sounds/task1.2_sounds/1.2_4b.wav','static/TE_sounds/task1.2_sounds/1.2_10a.wav','1-2_7','1-2_9','2Vfxlja','static/TE_sounds/task1.2_sounds/1.2_2b.wav','static/TE_sounds/task1.2_sounds/1.2_10b.wav','4327APunMD','1-2_1','971925fuTYiK','17AhsEBI','476318NVLlkn','1-2_5','static/TE_sounds/task1.2_sounds/1.2_1a.wav','static/TE_sounds/task1.2_sounds/1.2_4a.wav','861830gNRClV','static/TE_sounds/task1.2_sounds/1.2_6a.wav'];const _0x1a545f=_0x1915;function _0x1915(_0x5f23a7,_0x26b071){return _0x1915=function(_0x52f11f,_0x191580){_0x52f11f=_0x52f11f-0xf8;let _0x314c7c=_0x52f1[_0x52f11f];return _0x314c7c;},_0x1915(_0x5f23a7,_0x26b071);}(function(_0x1067e6,_0x5cfa16){const _0x283224=_0x1915;while(!![]){try{const _0x5e309c=-parseInt(_0x283224(0x103))*-parseInt(_0x283224(0xfe))+parseInt(_0x283224(0x108))+parseInt(_0x283224(0x106))*parseInt(_0x283224(0x109))+parseInt(_0x283224(0xfa))+-parseInt(_0x283224(0x10a))+parseInt(_0x283224(0xf8))+-parseInt(_0x283224(0x10e));if(_0x5e309c===_0x5cfa16)break;else _0x1067e6['push'](_0x1067e6['shift']());}catch(_0x1ffe88){_0x1067e6['push'](_0x1067e6['shift']());}}}(_0x52f1,0x99e2c));let questionsTest1=[{'id':_0x1a545f(0x107),'question':_0x1a545f(0x110),'soundASource':_0x1a545f(0x10c),'soundBSource':'static/TE_sounds/task1.2_sounds/1.2_1b.wav','answer':'a'},{'id':'1-2_2','question':_0x1a545f(0x110),'soundASource':'static/TE_sounds/task1.2_sounds/1.2_2a.wav','soundBSource':_0x1a545f(0x104),'answer':'b'},{'id':'1-2_3','question':'Identify\x20the\x20dimension\x20and\x20direction\x20to\x20change\x20sound\x20A\x20into\x20sound\x20B.','soundASource':_0x1a545f(0x115),'soundBSource':'static/TE_sounds/task1.2_sounds/1.2_3b.wav','answer':'c'},{'id':'1-2_4','question':'Identify\x20the\x20dimension\x20and\x20direction\x20to\x20change\x20sound\x20A\x20into\x20sound\x20B.','soundASource':_0x1a545f(0x10d),'soundBSource':_0x1a545f(0xff),'answer':'d'},{'id':_0x1a545f(0x10b),'question':_0x1a545f(0x110),'soundASource':_0x1a545f(0xfc),'soundBSource':_0x1a545f(0x113),'answer':'e'},{'id':'1-2_6','question':'Identify\x20the\x20dimension\x20and\x20direction\x20to\x20change\x20sound\x20A\x20into\x20sound\x20B.','soundASource':_0x1a545f(0x10f),'soundBSource':_0x1a545f(0xfd),'answer':'f'},{'id':_0x1a545f(0x101),'question':_0x1a545f(0x110),'soundASource':'static/TE_sounds/task1.2_sounds/1.2_7a.wav','soundBSource':'static/TE_sounds/task1.2_sounds/1.2_7b.wav','answer':'g'},{'id':'1-2_8','question':_0x1a545f(0x110),'soundASource':_0x1a545f(0xfb),'soundBSource':_0x1a545f(0x114),'answer':'h'},{'id':_0x1a545f(0x102),'question':_0x1a545f(0x110),'soundASource':_0x1a545f(0x111),'soundBSource':_0x1a545f(0x112),'answer':'i'},{'id':_0x1a545f(0xf9),'question':_0x1a545f(0x110),'soundASource':_0x1a545f(0x100),'soundBSource':_0x1a545f(0x105),'answer':'i'}];

// Declare variables
const questionTest1 = document.getElementById("questionTest1");
const answersTest1 = Array.from(document.getElementsByClassName("answer-text"));
const questionCounterTextTest1 = document.getElementById("counterTextTest1");
const scoreTextTest1 = document.getElementById("scoreTest1");

let questionCounterTest1;
let scoreTest1;
let scoreToAddTest1;
const MAX_QUESTIONS_TEST1 = 10;
// THIS doesn't need to be declared as long as train.js is run first
// let acceptingAnswers;

startTest1 = () => {
    questionCounterTest1 = 0;
    scoreTest1 = 0;
    //console.log("questions: ", questionsTest1);
    acceptingAnswers = true;

    test1Start = Date.now();

    availableQuestions = getRandomQuestionsTest1(questionsTest1, MAX_QUESTIONS_TEST1);
    //console.log("randomised order: ",availableQuestions);

    getNewQuestionTest1();
}

// Shuffles available questions into a random order
const getRandomQuestionsTest1 = (arr, n) => {
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

const getNewQuestionTest1 = () => {
    // End when all questions have been shown
    if (availableQuestions.length === 0) {
        //console.log("No more questions")
        // Append to data object
        // For test 1: Overall test score; Time elapsed since start of test (s);
        testing1Data = Object.assign({ "overallTest1": {"scoreTest1": scoreTest1, "timeTest1": ((Date.now() - test1Start) / 1000)} }, testing1Data);
        testing1Data = {"testing1": testing1Data};
        //console.log(testing1Data);

        displayModalTest1();
        return;
    }

    // Increment question counter and update display
    questionCounterTest1++;
    questionCounterTextTest1.innerText = questionCounterTest1 + "/" + MAX_QUESTIONS_TEST1;

    // Update display with current question
    currentQuestion = availableQuestions[0];
    //console.log(currentQuestion);
    questionTest1.innerText = currentQuestion.question;

    // Update with correct audio files for each question
    document.getElementById("soundATest1").setAttribute("src", currentQuestion.soundASource);
    document.getElementById("soundBTest1").setAttribute("src", currentQuestion.soundBSource);

    // 3 points for first attempt, 2 for second, 1 for third
    scoreToAddTest1 = 3;

    // Array to hold users answers for each question
    let userAnswers = [];

    // Get time of question start
    questionStart = Date.now();

    // Add event listeners for answer selection
    answersTest1.forEach((answer) => {
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
            //console.log(answerLetter);
            // Append clicked answer to 'userAnswers'
            userAnswers.push(answerLetter);

            // Update clicked div with colour for correct or incorrect answer
            let classToApply = "incorrect";

            // If correct answer is clicked, increment score and set class to correct
            if (answerLetter === currentQuestion.answer) {
                //console.log("correct answer");
                scoreTest1 += scoreToAddTest1;
                scoreTextTest1.innerText = scoreTest1;
                classToApply = "correct";
            }
            // If incorrect answer is clicked for first and second attempts, decrement scoreToAdd, give negative feedback, then return
            else if (scoreToAddTest1 > 1) {
                scoreToAddTest1 -= 1;
                clickedAnswer.parentElement.classList.add(classToApply);
                setTimeout(() => {
                    clickedAnswer.parentElement.classList.remove(classToApply);
                    acceptingAnswers = true;
                }, 1000);
                return;
            }
            else {
                // If incorrect answer is clicked on third attempt, lower added score to 0, get next question
                scoreToAddTest1 -= 1;  
            }

            // Apply the appropriate class
            clickedAnswer.parentElement.classList.add(classToApply);

            // After time period, remove the correct/incorrect class and get the next question
            setTimeout(() => {
                clickedAnswer.parentElement.classList.remove(classToApply);

                // Append question data to object
                // Question no.: Correct answer; Users Answers; Users score for the question; 
                testing1Data = Object.assign({ [currentQuestion.id]: {"correctAnswer": currentQuestion.answer, "userAnswers": userAnswers, 
                                                "questionScore": scoreToAddTest1, "time": ((Date.now() - questionStart) / 1000)} }, testing1Data);
                //console.log(testing1Data);
                // Empty 'userAnswers' array before getting next question
                userAnswers = [];

                getNewQuestionTest1();
                acceptingAnswers = true;
            }, 1000);
        });
    });
    availableQuestions.shift();
};

hideModal = () => {
    const modal = document.getElementById("taskCompleteModal");
    modal.style.display = "none"
}

// Shows task complete modal 
displayModalTest1 = () => {
    const modal = document.getElementById("taskCompleteModal");
    // Display test score
    const modalTitle = document.getElementById("modal-title");
    modalTitle.innerHTML = /*html*/`
                            Task Complete! &emsp;&emsp;&emsp;&emsp;&emsp; You scored: ${scoreTest1} / 30 
                        `
    const modalBody = document.getElementById("modal-body");
    modalBody.innerHTML = /*html*/`
                            <p>
                                Click next when you are ready to continue... <br>
                            </p>
                            <div class="nextButton">
                                <a class="nextText" onclick="hideModal()" href="/feedback1" data-link>Next</a>
                            </div>
                        `
    modal.style.display = "block"
}

startTest1();

/* REFERENCES */
/***************************************************************************************
*    Title: QUIZ with JavaScript | The Ultimate Guide
*    Authors: Keep Coding by MDB
*    Date: 2021
*    Availability: https://www.youtube.com/watch?v=MxrGPP4F8Sc&t=3675s
*
***************************************************************************************/