// Questions in JSON format
let descriptionsTrain1 = [
    {
        "id":1,
        "description":"1) Sounds A and B differ along the Spectrum dimension. Sound B has a much higher Spectrum value.",
        "soundASource": "static/stimuli_HugginsPitch/HugginsPitch_calibration.flac",
        "soundBSource": "",
        "spectrumValue": "28",
        "brightnessValue": "128",
        "articulationValue": "128",
        "envelopeValue": "128",
        "sliderToMove": "specSlider"
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
        "sliderToMove": "brigSlider"
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
        "sliderToMove": "artiSlider"
    } 
]

// Declare variables
const descriptionTrain1 = document.getElementById("descriptionTrain1");
//const answers = Array.from(document.getElementsByClassName("answer-text"));
const trialCounterTextTrain1 = document.getElementById("trialCounterTextTrain1");

let trialCounterTrain1;
const MAX_TRIALS_TRAIN1 = 3;
let acceptingAnswersTrain1;

let trialSliderToMoveTrain1;
let initialValueTrain1;

startTraining1 = () => {
    trialCounterTrain1 = 0;
    console.log(descriptionsTrain1);
    acceptingAnswersTrain1 = true;

    availableTrialsTrain1 = getRandomTrialsTrain1(descriptionsTrain1, MAX_TRIALS_TRAIN1);
    console.log(availableTrialsTrain1);

    getNewTrialTrain1();
}

// Shuffles available trials into a random order
const getRandomTrialsTrain1 = (arr, n) => {
    let len = arr.length;
    if (n > len) {
        throw new RangeError(
            "getRandomTrials: more elements taken than available"
        );
    }

    // Shuffles the order of the trials
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    // Return randomised array of questions
    return (selected = shuffled.slice(0, n));
}

const getNewTrialTrain1 = () => {
    // End when all trials have been shown
    if (availableTrialsTrain1.length === 0) {
        //console.log("No more trials")
        displayModalTrain1();
        return;
    }

    // Increment trial counter and update display
    trialCounterTrain1++;
    trialCounterTextTrain1.innerText = trialCounterTrain1 + "/" + MAX_TRIALS_TRAIN1;

    // Update display with current description
    currentTrialTrain1 = availableTrialsTrain1[0];
    descriptionTrain1.innerText = currentTrialTrain1.description;

    // Update with correct audio files for each trial
    document.getElementById("soundATrain1").setAttribute("src", currentTrialTrain1.soundASource);
    document.getElementById("soundBTrain1").setAttribute("src", currentTrialTrain1.soundBSource);

    console.log("current trial: " + currentTrialTrain1.spectrumValue, currentTrialTrain1.brightnessValue, currentTrialTrain1.articulationValue, currentTrialTrain1.envelopeValue);
    // Set sliders to starting positions for each trial: values of Sound A
    document.getElementById("specSlider").value = currentTrialTrain1.spectrumValue;
    document.getElementById("brigSlider").value = currentTrialTrain1.brightnessValue;
    document.getElementById("artiSlider").value = currentTrialTrain1.articulationValue;
    document.getElementById("enveSlider").value = currentTrialTrain1.envelopeValue;

    // These setAttributes are necessary to trigger the mutation observers in TimbreXWeb.js
    document.getElementById("specSlider").setAttribute("value", currentTrialTrain1.spectrumValue);
    document.getElementById("brigSlider").setAttribute("value", currentTrialTrain1.brightnessValue);
    document.getElementById("artiSlider").setAttribute("value", currentTrialTrain1.articulationValue);
    document.getElementById("enveSlider").setAttribute("value", currentTrialTrain1.envelopeValue);

    // Get the initial value of the slider that must be moved
    trialSliderToMoveTrain1 = currentTrialTrain1.sliderToMove;

    if (trialSliderToMoveTrain1 == "specSlider") {
        initialValueTrain1 = currentTrialTrain1.spectrumValue;
    }
    else if (trialSliderToMoveTrain1 == "brigSlider") {
        initialValueTrain1 = currentTrialTrain1.brightnessValue;
    }
    else if (trialSliderToMoveTrain1 == "artiSlider") {
        initialValueTrain1 = currentTrialTrain1.articulationValue;
    }
    else if (trialSliderToMoveTrain1 == "enveSlider") {
        initialValueTrain1 = currentTrialTrain1.envelopeValue;
    }

    console.log("initial value: ", initialValueTrain1);

    // Add event listeners for answer selection
    let nextCardTrain1 = document.getElementById("nextCardTrain1");  

    nextCardTrain1.addEventListener("click", () => {
        //console.log("current value: ", document.getElementById(trialSliderToMove).value);
         // If not accepting answers, return
        if(!acceptingAnswersTrain1) {
            //console.log("not accepting answers");
            return;
        }
        // Checks if the trial's slider has been moved; if it hasn't, alert user and return
        else if (initialValueTrain1 == document.getElementById(trialSliderToMoveTrain1).value) {
            //console.log("slider must be moved");
            $( "div.warning" ).fadeIn( 300 );
            return;
        }
          
        // Fade out the warning div when slider has been moved
        let warningDivTrain1 = document.getElementById("warningTrain1");
        if (warningDivTrain1.style.display == "block") {
            $( "div.warning" ).fadeOut( 300 );
        } 

        // Set acceptingAnswers to false to prevent double skip
        acceptingAnswersTrain1 = false;

        // Update clicked div with colour for feedback 
        let classToApplyTrain1 = "correct";
            
        // Apply the appropriate class
        nextCardTrain1.classList.add(classToApplyTrain1);

        // After time period, remove the correct/incorrect class and get the next question
        setTimeout(() => {
            nextCardTrain1.classList.remove(classToApplyTrain1);
            getNewTrialTrain1();
            acceptingAnswersTrain1 = true;
        }, 1000);
    });
    availableTrialsTrain1.shift();
};

hideModal = () => {
    const modal = document.getElementById("taskCompleteModal");
    modal.style.display = "none"
}

//Shows task complete modal 
displayModalTrain1 = () => {
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

startTraining1();