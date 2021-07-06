// Questions in JSON format
let descriptionsTrain2 = [
    {
        "id":"2_1",
        "description":"1) Sounds A and B differ along the Spectrum and Brightness dimensions. Sound B has a much higher Spectrum value and a much lower Brightness value",
        "soundASource": "static/stimuli_HugginsPitch/HugginsPitch_calibration.flac",
        "soundBSource": "",
        "spectrumValue": "28",
        "brightnessValue": "228",
        "articulationValue": "128",
        "envelopeValue": "128",
        "sliderToMove": ["specSlider", "brigSlider"],
        "correctValue": ["128", "128"]
    },  
    {
        "id":"2_2",
        "description":"2) Sounds A and B differ along the Brightness and Envelope dimensions. Sound B has a slightly higher Brightness value and a much higher Envelope value.",
        "soundASource": "",
        "soundBSource": "static/stimuli_HugginsPitch/HugginsPitch_calibration.flac",
        "spectrumValue": "128",
        "brightnessValue": "78",
        "articulationValue": "128",
        "envelopeValue": "28",
        "sliderToMove": ["brigSlider", "enveSlider"],
        "correctValue": ["128", "128"]
    },  
    {
        "id":"2_3",
        "description":"3) Sounds A and B differ along the Articulation and Envelope dimensions. Sound B has a much lower Articulation value and slightly lower Envelope value.",
        "soundASource": "",
        "soundBSource": "",
        "spectrumValue": "128",
        "brightnessValue": "128",
        "articulationValue": "228",
        "envelopeValue": "178",
        "sliderToMove": ["artiSlider", "enveSlider"],
        "correctValue": ["128", "128"]
    } 
]

// Declare variables
const descriptionTrain2 = document.getElementById("descriptionTrain2");
//const answers = Array.from(document.getElementsByClassName("answer-text"));
const trialCounterTextTrain2 = document.getElementById("trialCounterTextTrain2");

let trialCounterTrain2;
const MAX_TRIALS_TRAIN2 = 3;
let acceptingAnswersTrain2;

train2Start = Date.now();

let trialSliderToMoveTrain2 = [];
let initialValuesTrain2 = [0, 0];

startTraining1 = () => {
    trialCounterTrain2 = 0;
    console.log(descriptionsTrain2);
    acceptingAnswersTrain2 = true;

    availableTrialsTrain2 = getRandomTrialsTrain2(descriptionsTrain2, MAX_TRIALS_TRAIN2);
    console.log(availableTrialsTrain2);

    getNewTrialTrain2();
}

// Shuffles available trials into a random order
const getRandomTrialsTrain2 = (arr, n) => {
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

const getNewTrialTrain2 = () => {
    // End when all trials have been shown
    if (availableTrialsTrain2.length === 0) {
        //console.log("No more trials")
        training2Data = Object.assign({ "overallTrain2": {"timeTrain2": ((Date.now() - train2Start) / 1000)} }, training2Data);
        training2Data = {"training2": training2Data};
        console.log(training2Data);

        displayModalTrain2();
        return;
    }

    // Increment trial counter and update display
    trialCounterTrain2++;
    trialCounterTextTrain2.innerText = trialCounterTrain2 + "/" + MAX_TRIALS_TRAIN2;

    // Update display with current description
    currentTrialTrain2 = availableTrialsTrain2[0];
    descriptionTrain2.innerText = currentTrialTrain2.description;

    // Update with correct audio files for each trial
    document.getElementById("soundATrain2").setAttribute("src", currentTrialTrain2.soundASource);
    document.getElementById("soundBTrain2").setAttribute("src", currentTrialTrain2.soundBSource);

    //console.log("current trial: " + currentTrialTrain2.spectrumValue, currentTrialTrain2.brightnessValue, currentTrialTrain2.articulationValue, currentTrialTrain2.envelopeValue);
    // Set sliders to starting positions for each trial: values of Sound A
    document.getElementById("specSlider").value = currentTrialTrain2.spectrumValue;
    document.getElementById("brigSlider").value = currentTrialTrain2.brightnessValue;
    document.getElementById("artiSlider").value = currentTrialTrain2.articulationValue;
    document.getElementById("enveSlider").value = currentTrialTrain2.envelopeValue;

    // These setAttributes are necessary to trigger the mutation observers in TimbreXWeb.js
    document.getElementById("specSlider").setAttribute("value", currentTrialTrain2.spectrumValue);
    document.getElementById("brigSlider").setAttribute("value", currentTrialTrain2.brightnessValue);
    document.getElementById("artiSlider").setAttribute("value", currentTrialTrain2.articulationValue);
    document.getElementById("enveSlider").setAttribute("value", currentTrialTrain2.envelopeValue);

    trialStart = Date.now();

    for (let i = 0; i < 2; i++) {
        trialSliderToMoveTrain2[i] = currentTrialTrain2.sliderToMove[i];

        //console.log(trialSliderToMoveTrain2[i]);

        if (trialSliderToMoveTrain2[i] == "specSlider") {
            initialValuesTrain2[i] = currentTrialTrain2.spectrumValue;
        }
        else if (trialSliderToMoveTrain2[i] == "brigSlider") {
            initialValuesTrain2[i] = currentTrialTrain2.brightnessValue;
        }
        else if (trialSliderToMoveTrain2[i] == "artiSlider") {
            initialValuesTrain2[i] = currentTrialTrain2.articulationValue;
        }
        else if (trialSliderToMoveTrain2[i] == "enveSlider") {
            initialValuesTrain2[i] = currentTrialTrain2.envelopeValue;
        }
    }

    //console.log("sliders to move: ", trialSliderToMoveTrain2);
    //console.log("initial values: ", initialValuesTrain2);

    // Add event listeners for answer selection
    let nextCardTrain2 = document.getElementById("nextCardTrain2");  

    nextCardTrain2.addEventListener("click", () => {
        // If not accepting answers, return
        if(!acceptingAnswersTrain2) {
            //console.log("not accepting answers");
            return;
        }
        // Checks if the trial's sliders have been moved; if they haven't, alert user and return
        else if (initialValuesTrain2[0] == document.getElementById(trialSliderToMoveTrain2[0]).value || 
                 initialValuesTrain2[1] == document.getElementById(trialSliderToMoveTrain2[1]).value) {
            //console.log("slider must be moved");
            $( "div.warning" ).fadeIn( 300 );
            return;
        }
          
        // Fade out the warning div when slider has been moved
        let warningDivTrain2 = document.getElementById("warningTrain2");
        if (warningDivTrain2.style.display == "block") {
            $( "div.warning" ).fadeOut( 300 );
        } 

        // Set acceptingAnswers to false to prevent double skip
        acceptingAnswersTrain2 = false;

        // Update clicked div with colour for feedback 
        let classToApplyTrain2 = "correct";
            
        // Apply the appropriate class
        nextCardTrain2.classList.add(classToApplyTrain2);

        trialSlider = [];
        userValue = [];

        for (let i = 0; i < 2; i++) {
            if (currentTrialTrain2.sliderToMove[i] === "specSlider") {
                trialSlider[i] = "spectrum";
                userValue[i] = document.getElementById("specSlider").value;
            }
            else if (currentTrialTrain2.sliderToMove[i] === "brigSlider") {
                trialSlider[i] = "brightness";
                userValue[i] = document.getElementById("brigSlider").value;
            }
            else if (currentTrialTrain2.sliderToMove[i] === "artiSlider") {
                trialSlider[i] = "articulation";
                userValue[i] = document.getElementById("artiSlider").value;
            }
            else if (currentTrialTrain2.sliderToMove[i] === "enveSlider") {
                trialSlider[i] = "envelope";
                userValue[i] = document.getElementById("enveSlider").value;
            }
        }

        // After time period, remove the correct/incorrect class and get the next question
        setTimeout(() => {
            nextCardTrain2.classList.remove(classToApplyTrain2);

            // Element-wise subtraction for accuracy of each slider moved
            acc = [];
            for(var i = 0; i < 2; i++) {
                acc.push(userValue[i] - currentTrialTrain2.correctValue[i]);
            }

            // Append trial data to object
            // Trial no.: sliders; correct values; user's values; accuracy (how close user values are to correct values); 
            training2Data = Object.assign({ [currentTrialTrain2.id]: {"slider": trialSlider, "correctValue": currentTrialTrain2.correctValue, 
                                            "userValue": userValue, "accuracy": (acc), "time": ((Date.now() - trialStart) / 1000)} }, training2Data);
            //console.log(training2Data);

            getNewTrialTrain2();
            acceptingAnswersTrain2 = true;
        }, 1000);
    });
    availableTrialsTrain2.shift();
};

hideModal = () => {
    const modal = document.getElementById("taskCompleteModal");
    modal.style.display = "none"
}

//Shows task complete modal 
displayModalTrain2 = () => {
    const modal = document.getElementById("taskCompleteModal");
    const modalBody = document.getElementById("modal-body");
    modalBody.innerHTML = /*html*/`
                            <p>
                                In the next task, you will presented with a single sound at a time. Each sound will be <strong>high</strong> or <strong>low</strong> in 2 of the Timbre Explorer
                                dimensions, and in the middle for the other 2 dimensions.<br><br>
                                Listen to each sound and <strong>identify which Timbre Explorer dimensions are high and/or low</strong>.<br><br>
                                For each sound you will have <strong>3</strong> attempts to find the correct answer. Click next when you are ready to begin... 
                            </p>
                            <div class="nextButton">
                                <a class="nextText" onclick="hideModal()" href="/testing2" data-link>Next</a>
                            </div>
                        `
    modal.style.display = "block"
}

startTraining1();