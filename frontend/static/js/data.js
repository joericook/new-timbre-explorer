let hearingData;
let backgroundData;
let feedback1Data;
let feedback2Data;
let feedback3Data;
let conclusionData;

let training1Data;
let training2Data;

let testing1Data;
let testing2Data;
let testing3Data;


// If form is valid, save to pages data object, show next button, hide and disable submit button
// If invalid, display warning 
function saveForm(page) {
    let form = document.getElementById(`${page}Form`);
    let isValidForm = form.checkValidity();
    //console.log("Form Validity: ", isValidForm);
    if (isValidForm === false) {
        $( `#${page}Warning` ).fadeTo(300, 1);
    }
    else {
        if (document.getElementById(`${page}Warning`).style.opacity == 1) {
            $( `#${page}Warning` ).fadeTo(300, 0);
        }
        //$( `#${page}Submit` ).fadeTo(300, 0);
        document.getElementById(`${page}Submit`).disabled = true;
        if (page === "hearing") {
            hearingData = Object.fromEntries(new FormData(form).entries());
            hearingData = {"hearing": hearingData};
            //console.log("hearingData: ", hearingData);
        }
        else if (page === "background") {
            backgroundData = Object.fromEntries(new FormData(form).entries());
            backgroundData = {"background": backgroundData};
            //console.log("backgroundData: ", backgroundData);
        }
        else if (page === "feedback1") {
            $( `#${page}NextTaskInfo` ).fadeTo(300, 1);
            feedback1Data = Object.fromEntries(new FormData(form).entries());
            feedback1Data = {"feedback1": feedback1Data};
            //console.log("feedback1Data: ", feedback1Data);
        }
        else if (page === "feedback2") {
            $( `#${page}NextTaskInfo` ).fadeTo(300, 1);
            feedback2Data = Object.fromEntries(new FormData(form).entries());
            feedback2Data = {"feedback2": feedback2Data};
            //console.log("feedback2Data: ", feedback2Data);
        }   
        else if (page === "feedback3") {
            feedback3Data = Object.fromEntries(new FormData(form).entries());
            feedback3Data = {"feedback3": feedback3Data};
            //console.log("feedback3Data: ", feedback3Data);
        }
        document.getElementById(`${page}Next`).style.display = "block";
    } 
}



// Saves preset suggestions to DB, separately from user data
function saveConclusion() {
    let form = document.getElementById("conclusionForm");
    let isValidForm = form.checkValidity();
    //console.log("Form Validity: ", isValidForm);
    if (isValidForm === false) {
        $( "#conclusionWarning" ).fadeTo(300, 1);
    }
    else {
        if (document.getElementById("conclusionWarning").style.opacity == 1) {
            $( "#conclusionWarning" ).fadeTo(300, 0);
        }
        document.getElementById("conclusionSubmit").disabled = true;
        conclusionData = Object.fromEntries(new FormData(form).entries());
        //console.log("conclusionData: ", conclusionData);

        const response = conclusionData;

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
        };
        fetch("/api/store-response", requestOptions).then( () => {
            console.log("presets/email saved to DB");
        });
    } 
}

// Wrap up all data objects and save to DB
function sendData() {
    let userData = {...hearingData,
                   ...backgroundData,
                   ...feedback1Data,
                   ...feedback2Data,
                   ...feedback3Data,
                   ...conclusionData,
                   ...training1Data,
                   ...training2Data,
                   ...testing1Data,
                   ...testing2Data,
                   ...testing3Data}
    //console.log(userData);

    const response = {userData}

    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(response),
    };
    fetch("/api/store-response", requestOptions).then( () => {
        console.log("user data saved to DB");
        console.log(process.env.MONGODB_URI);
    });
}