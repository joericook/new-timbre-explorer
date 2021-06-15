// Questions in JSON format
let descriptions = [
    {
        "id":1,
        "description":"1) Sounds A and B differ along the Spectrum dimension. Sound B has a much higher Spectrum value.",
        "soundASource": "static/stimuli_HugginsPitch/HugginsPitch_calibration.flac",
        "soundBSource": "",
        "spectrumValue": "28",
        "brightnessValue": "128",
        "articulationValue": "128",
        "envelopeValue": "128"
    },  
    {
        "id":2,
        "description":"2) Sounds A and B differ along the Brightness dimension. Sound B has a slightly higher Brightness value.",
        "soundASource": "",
        "soundBSource": "static/stimuli_HugginsPitch/HugginsPitch_calibration.flac",
        "spectrumValue": "128",
        "brightnessValue": "78",
        "articulationValue": "128",
        "envelopeValue": "128",
    },  
    {
        "id":3,
        "description":"3) Sounds A and B differ along the Articulation dimension. Sound B has a much lower Articulation value.",
        "soundASource": "",
        "soundBSource": "",
        "spectrumValue": "128",
        "brightnessValue": "128",
        "articulationValue": "228",
        "envelopeValue": "128",
    } 
]

// Declare variables
const description = document.getElementById("description");
//const answers = Array.from(document.getElementsByClassName("answer-text"));
const trialCounterText = document.getElementById("trialCounter");

let trialCounter;
const MAX_TRIALS = 3;
let acceptingAnswers;

startTraining = () => {
    trialCounter = 0;
    console.log(descriptions);
    acceptingAnswers = true;

    availableTrials = getRandomTrials(descriptions, MAX_TRIALS);
    console.log(availableTrials);

    getNewTrial();
}

// Shuffles available trials into a random order
const getRandomTrials = (arr, n) => {
    let len = arr.length;
    if (n > len) {
        throw new RangeError(
            "getRandomQuestions: more elements taken than available"
        );
    }

    // Shuffles the order of the trials
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    // Return randomised array of questions
    return (selected = shuffled.slice(0, n));
}

const getNewTrial = () => {
    // End when all trials have been shown
    if (availableTrials.length === 0) {
        //console.log("No more trials")
        displayModal();
        return;
    }

    // Increment trial counter and update display
    trialCounter++;
    trialCounterText.innerText = trialCounter + "/" + MAX_TRIALS;

    // Update display with current description
    currentTrial = availableTrials[0];
    console.log(currentTrial);
    description.innerText = currentTrial.description;

    // Update with correct audio files for each trial
    document.getElementById("trainingSoundA").setAttribute("src", currentTrial.soundASource);
    document.getElementById("trainingSoundB").setAttribute("src", currentTrial.soundBSource);

    // Set sliders to starting positions for each trial: values of Sound A
    document.getElementById("specSlider").setAttribute("value", currentTrial.spectrumValue);
    document.getElementById("brigSlider").setAttribute("value", currentTrial.brightnessValue);
    document.getElementById("artiSlider").setAttribute("value", currentTrial.articulationValue);
    document.getElementById("enveSlider").setAttribute("value", currentTrial.envelopeValue);

    // Add event listeners for answer selection
    let nextCard = document.getElementById("next-card");  

    nextCard.addEventListener("click", () => {
         // If not accepting answers, return
        if(!acceptingAnswers) {
            //console.log("not accepting answers");
            return;
        }
            
        // Set acceptingAnswers to false to prevent double skip
        acceptingAnswers = false;

        // Update clicked div with colour for feedback 
        let classToApply = "correct";
            
        // Apply the appropriate class
        nextCard.classList.add(classToApply);

        console.log(nextCard.classList);

        // After time period, remove the correct/incorrect class and get the next question
        setTimeout(() => {
            nextCard.classList.remove(classToApply);
            getNewTrial();
            acceptingAnswers = true;
        }, 1000);
    });
    availableTrials.shift();
};

hideModal = () => {
    const modal = document.getElementById("taskCompleteModal");
    modal.style.display = "none"
}

//Shows task complete modal 
displayModal = () => {
    const modal = document.getElementById("taskCompleteModal");
    const modalBody = document.getElementById("modal-body");
    modalBody.innerHTML = `
                            <p>Click</p>
                            <div class="nextButton">
                                <a class="nextText" onclick="hideModal()" href="/testing1" data-link>Next</a>
                            </div>
                            <p>to continue...</p>
                        `
    modal.style.display = "block"
}

startTraining();