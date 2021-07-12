// Questions in JSON format
let descriptionsTrain2 = [
    {
        "id":"2-1_1",
        "description":"Sounds A and B differ along the Spectrum and Brightness dimensions. Sound B has a higher Spectrum value and a higher Brightness value",
        "soundASource": "static/TE_sounds/task2.1_sounds/2.1_1a.wav",
        "soundBSource": "static/TE_sounds/task2.1_sounds/2.1_1b.wav",
        "spectrumValue": "25",
        "brightnessValue": "105",
        "articulationValue": "215",
        "envelopeValue": "201",
        "sliderToMove": ["specSlider", "brigSlider"],
        "correctValue": ["175", "255"]
    },  
    {
        "id":"2-1_2",
        "description":"Sounds A and B differ along the Spectrum and Brightness dimensions. Sound B has a higher Spectrum value and a lower Brightness value.",
        "soundASource": "static/TE_sounds/task2.1_sounds/2.1_2a.wav",
        "soundBSource": "static/TE_sounds/task2.1_sounds/2.1_2b.wav",
        "spectrumValue": "150",
        "brightnessValue": "150",
        "articulationValue": "152",
        "envelopeValue": "164",
        "sliderToMove": ["specSlider", "brigSlider"],
        "correctValue": ["200", "0"]
    },  
    {
        "id":"2-1_3",
        "description":"Sounds A and B differ along the Spectrum and Brightness dimensions. Sound B has a lower Spectrum value and higher Brightness value.",
        "soundASource": "static/TE_sounds/task2.1_sounds/2.1_3a.wav",
        "soundBSource": "static/TE_sounds/task2.1_sounds/2.1_3b.wav",
        "spectrumValue": "225",
        "brightnessValue": "50",
        "articulationValue": "208",
        "envelopeValue": "175",
        "sliderToMove": ["specSlider", "brigSlider"],
        "correctValue": ["75", "200"]
    },
    {
        "id":"2-1_4",
        "description":"Sounds A and B differ along the Spectrum and Brightness dimensions. Sound B has a lower Spectrum value and lower Brightness value.",
        "soundASource": "static/TE_sounds/task2.1_sounds/2.1_4a.wav",
        "soundBSource": "static/TE_sounds/task2.1_sounds/2.1_4b.wav",
        "spectrumValue": "200",
        "brightnessValue": "200",
        "articulationValue": "108",
        "envelopeValue": "190",
        "sliderToMove": ["specSlider", "brigSlider"],
        "correctValue": ["50", "50"]
    },
    {
        "id":"2-1_5",
        "description":"Sounds A and B differ along the Spectrum and Articulation dimensions. Sound B has a higher Spectrum value and a higher Articulation value",
        "soundASource": "static/TE_sounds/task2.1_sounds/2.1_5a.wav",
        "soundBSource": "static/TE_sounds/task2.1_sounds/2.1_5b.wav",
        "spectrumValue": "75",
        "brightnessValue": "238",
        "articulationValue": "105",
        "envelopeValue": "75",
        "sliderToMove": ["specSlider", "artiSlider"],
        "correctValue": ["255", "255"]
    },  
    {
        "id":"2-1_6",
        "description":"Sounds A and B differ along the Spectrum and Articulation dimensions. Sound B has a higher Spectrum value and a lower Articulation value.",
        "soundASource": "static/TE_sounds/task2.1_sounds/2.1_6a.wav",
        "soundBSource": "static/TE_sounds/task2.1_sounds/2.1_6b.wav",
        "spectrumValue": "0",
        "brightnessValue": "2",
        "articulationValue": "200",
        "envelopeValue": "244",
        "sliderToMove": ["specSlider", "artiSlider"],
        "correctValue": ["150", "50"]
    },  
    {
        "id":"2-1_7",
        "description":"Sounds A and B differ along the Spectrum and Articulation dimensions. Sound B has a lower Spectrum value and higher Articulation value.",
        "soundASource": "static/TE_sounds/task2.1_sounds/2.1_7a.wav",
        "soundBSource": "static/TE_sounds/task2.1_sounds/2.1_7b.wav",
        "spectrumValue": "150",
        "brightnessValue": "55",
        "articulationValue": "50",
        "envelopeValue": "176",
        "sliderToMove": ["specSlider", "artiSlider"],
        "correctValue": ["0", "200"]
    },
    {
        "id":"2-1_8",
        "description":"Sounds A and B differ along the Spectrum and Articulation dimensions. Sound B has a lower Spectrum value and lower Articulation value.",
        "soundASource": "static/TE_sounds/task2.1_sounds/2.1_8a.wav",
        "soundBSource": "static/TE_sounds/task2.1_sounds/2.1_8b.wav",
        "spectrumValue": "175",
        "brightnessValue": "181",
        "articulationValue": "200",
        "envelopeValue": "82",
        "sliderToMove": ["specSlider", "artiSlider"],
        "correctValue": ["25", "50"]
    },
    {
        "id":"2-1_9",
        "description":"Sounds A and B differ along the Spectrum and Envelope dimensions. Sound B has a higher Spectrum value and a higher Envelope value",
        "soundASource": "static/TE_sounds/task2.1_sounds/2.1_9a.wav",
        "soundBSource": "static/TE_sounds/task2.1_sounds/2.1_9b.wav",
        "spectrumValue": "105",
        "brightnessValue": "142",
        "articulationValue": "134",
        "envelopeValue": "25",
        "sliderToMove": ["specSlider", "enveSlider"],
        "correctValue": ["255", "175"]
    },  
    {
        "id":"2-1_10",
        "description":"Sounds A and B differ along the Spectrum and Envelope dimensions. Sound B has a higher Spectrum value and a lower Envelope value.",
        "soundASource": "static/TE_sounds/task2.1_sounds/2.1_10a.wav",
        "soundBSource": "static/TE_sounds/task2.1_sounds/2.1_10b.wav",
        "spectrumValue": "50",
        "brightnessValue": "62",
        "articulationValue": "36",
        "envelopeValue": "225",
        "sliderToMove": ["specSlider", "enveSlider"],
        "correctValue": ["200", "75"]
    },  
    {
        "id":"2-1_11",
        "description":"Sounds A and B differ along the Spectrum and Envelope dimensions. Sound B has a lower Spectrum value and higher Envelope value.",
        "soundASource": "static/TE_sounds/task2.1_sounds/2.1_11a.wav",
        "soundBSource": "static/TE_sounds/task2.1_sounds/2.1_11b.wav",
        "spectrumValue": "255",
        "brightnessValue": "67",
        "articulationValue": "239",
        "envelopeValue": "75",
        "sliderToMove": ["specSlider", "enveSlider"],
        "correctValue": ["105", "225"]
    },
    {
        "id":"2-1_12",
        "description":"Sounds A and B differ along the Spectrum and Envelope dimensions. Sound B has a lower Spectrum value and lower Envelope value.",
        "soundASource": "static/TE_sounds/task2.1_sounds/2.1_12a.wav",
        "soundBSource": "static/TE_sounds/task2.1_sounds/2.1_12b.wav",
        "spectrumValue": "200",
        "brightnessValue": "102",
        "articulationValue": "32",
        "envelopeValue": "255",
        "sliderToMove": ["specSlider", "enveSlider"],
        "correctValue": ["50", "105"]
    },
    {
        "id":"2-1_13",
        "description":"Sounds A and B differ along the Brightness and Articulation dimensions. Sound B has a higher Brightness value and a higher Articulation value",
        "soundASource": "static/TE_sounds/task2.1_sounds/2.1_13a.wav",
        "soundBSource": "static/TE_sounds/task2.1_sounds/2.1_13b.wav",
        "spectrumValue": "138",
        "brightnessValue": "75",
        "articulationValue": "0",
        "envelopeValue": "89",
        "sliderToMove": ["brigSlider", "artiSlider"],
        "correctValue": ["225", "150"]
    },  
    {
        "id":"2-1_14",
        "description":"Sounds A and B differ along the Brightness and Articulation dimensions. Sound B has a higher Brightness value and a lower Articulation value.",
        "soundASource": "static/TE_sounds/task2.1_sounds/2.1_14a.wav",
        "soundBSource": "static/TE_sounds/task2.1_sounds/2.1_14b.wav",
        "spectrumValue": "48",
        "brightnessValue": "25",
        "articulationValue": "150",
        "envelopeValue": "226",
        "sliderToMove": ["brigSlider", "artiSlider"],
        "correctValue": ["175", "0"]
    },  
    {
        "id":"2-1_15",
        "description":"Sounds A and B differ along the Brightness and Articulation dimensions. Sound B has a lower Brightness value and higher Articulation value.",
        "soundASource": "static/TE_sounds/task2.1_sounds/2.1_15a.wav",
        "soundBSource": "static/TE_sounds/task2.1_sounds/2.1_15b.wav",
        "spectrumValue": "196",
        "brightnessValue": "175",
        "articulationValue": "50",
        "envelopeValue": "119",
        "sliderToMove": ["brigSlider", "artiSlider"],
        "correctValue": ["25", "200"]
    },
    {
        "id":"2-1_16",
        "description":"Sounds A and B differ along the Brightness and Articulation dimensions. Sound B has a lower Brightness value and lower Articulation value.",
        "soundASource": "static/TE_sounds/task2.1_sounds/2.1_16a.wav",
        "soundBSource": "static/TE_sounds/task2.1_sounds/2.1_16b.wav",
        "spectrumValue": "88",
        "brightnessValue": "200",
        "articulationValue": "225",
        "envelopeValue": "2",
        "sliderToMove": ["brigSlider", "artiSlider"],
        "correctValue": ["50", "75"]
    },
    {
        "id":"2-1_17",
        "description":"Sounds A and B differ along the Brightness and Envelope dimensions. Sound B has a higher Brightness value and a higher Envelope value",
        "soundASource": "static/TE_sounds/task2.1_sounds/2.1_17a.wav",
        "soundBSource": "static/TE_sounds/task2.1_sounds/2.1_17b.wav",
        "spectrumValue": "132",
        "brightnessValue": "50",
        "articulationValue": "123",
        "envelopeValue": "50",
        "sliderToMove": ["brigSlider", "enveSlider"],
        "correctValue": ["200", "200"]
    },  
    {
        "id":"2-1_18",
        "description":"Sounds A and B differ along the Brightness and Envelope dimensions. Sound B has a higher Brightness value and a lower Envelope value.",
        "soundASource": "static/TE_sounds/task2.1_sounds/2.1_18a.wav",
        "soundBSource": "static/TE_sounds/task2.1_sounds/2.1_18b.wav",
        "spectrumValue": "119",
        "brightnessValue": "0",
        "articulationValue": "162",
        "envelopeValue": "175",
        "sliderToMove": ["brigSlider", "enveSlider"],
        "correctValue": ["150", "25"]
    },  
    {
        "id":"2-1_19",
        "description":"Sounds A and B differ along the Brightness and Envelope dimensions. Sound B has a lower Brightness value and higher Envelope value.",
        "soundASource": "static/TE_sounds/task2.1_sounds/2.1_19a.wav",
        "soundBSource": "static/TE_sounds/task2.1_sounds/2.1_19b.wav",
        "spectrumValue": "207",
        "brightnessValue": "225",
        "articulationValue": "202",
        "envelopeValue": "0",
        "sliderToMove": ["brigSlider", "enveSlider"],
        "correctValue": ["75", "150"]
    },
    {
        "id":"2-1_20",
        "description":"Sounds A and B differ along the Brightness and Envelope dimensions. Sound B has a lower Brightness value and lower Envelope value.",
        "soundASource": "static/TE_sounds/task2.1_sounds/2.1_20a.wav",
        "soundBSource": "static/TE_sounds/task2.1_sounds/2.1_20b.wav",
        "spectrumValue": "119",
        "brightnessValue": "255",
        "articulationValue": "136",
        "envelopeValue": "150",
        "sliderToMove": ["brigSlider", "enveSlider"],
        "correctValue": ["105", "0"]
    },
    {
        "id":"2-1_21",
        "description":"Sounds A and B differ along the Articulation and Envelope dimensions. Sound B has a higher Articulation value and a higher Envelope value",
        "soundASource": "static/TE_sounds/task2.1_sounds/2.1_21a.wav",
        "soundBSource": "static/TE_sounds/task2.1_sounds/2.1_21b.wav",
        "spectrumValue": "76",
        "brightnessValue": "180",
        "articulationValue": "75",
        "envelopeValue": "50",
        "sliderToMove": ["artiSlider", "enveSlider"],
        "correctValue": ["225", "200"]
    },  
    {
        "id":"2-1_22",
        "description":"Sounds A and B differ along the Articulation and Envelope dimensions. Sound B has a higher Articulation value and a lower Envelope value.",
        "soundASource": "static/TE_sounds/task2.1_sounds/2.1_22a.wav",
        "soundBSource": "static/TE_sounds/task2.1_sounds/2.1_22b.wav",
        "spectrumValue": "178",
        "brightnessValue": "49",
        "articulationValue": "25",
        "envelopeValue": "200",
        "sliderToMove": ["artiSlider", "enveSlider"],
        "correctValue": ["175", "50"]
    },  
    {
        "id":"2-1_23",
        "description":"Sounds A and B differ along the Articulation and Envelope dimensions. Sound B has a lower Articulation value and higher Envelope value.",
        "soundASource": "static/TE_sounds/task2.1_sounds/2.1_23a.wav",
        "soundBSource": "static/TE_sounds/task2.1_sounds/2.1_23b.wav",
        "spectrumValue": "178",
        "brightnessValue": "91",
        "articulationValue": "255",
        "envelopeValue": "105",
        "sliderToMove": ["artiSlider", "enveSlider"],
        "correctValue": ["105", "255"]
    },
    {
        "id":"2-1_24",
        "description":"Sounds A and B differ along the Articulation and Envelope dimensions. Sound B has a lower Articulation value and lower Envelope value.",
        "soundASource": "static/TE_sounds/task2.1_sounds/2.1_24a.wav",
        "soundBSource": "static/TE_sounds/task2.1_sounds/2.1_24b.wav",
        "spectrumValue": "220",
        "brightnessValue": "17",
        "articulationValue": "175",
        "envelopeValue": "200",
        "sliderToMove": ["artiSlider", "enveSlider"],
        "correctValue": ["25", "50"]
    }
]

// Declare variables
const descriptionTrain2 = document.getElementById("descriptionTrain2");
//const answers = Array.from(document.getElementsByClassName("answer-text"));
const trialCounterTextTrain2 = document.getElementById("trialCounterTextTrain2");

let trialCounterTrain2;
const MAX_TRIALS_TRAIN2 = 12;
let acceptingAnswersTrain2;

train2Start = Date.now();

let trialSliderToMoveTrain2 = [];
let initialValuesTrain2 = [0, 0];

startTraining1 = () => {
    trialCounterTrain2 = 0;
    //console.log(descriptionsTrain2);
    acceptingAnswersTrain2 = true;

    availableTrialsTrain2 = getRandomTrialsTrain2(descriptionsTrain2, MAX_TRIALS_TRAIN2);
    //console.log(availableTrialsTrain2);

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
        //console.log(training2Data);

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