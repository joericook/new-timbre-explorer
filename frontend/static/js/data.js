let hearingData;
let backgroundData;
let feedback1Data;
let feedback2Data;
let feedback3Data;
let conclusionData;

let testing1Data;
let testing2Data;
let testing3Data;

// If form is valid, save to background data object, show next button, hide and disable submit button
// If invalid, display warning 
//function saveBackgroundForm() {
//    let form = document.getElementById("backgroundForm");
//    let isValidForm = form.checkValidity();
//    console.log("Form Validity: ", isValidForm);
//    if (isValidForm === false) {
//        $( "#backgroundWarning" ).fadeTo(300, 1);
//    }
//    else {
//        if (document.getElementById("backgroundWarning").style.opacity == 1) {
//            $( "#backgroundWarning" ).fadeTo(300, 0);
//        }
//        //$( "#backgroundSubmit" ).fadeTo(300, 0);
//        document.getElementById("backgroundSubmit").disabled = true;
//        backgroundData = Object.fromEntries(new FormData(form).entries());
//        console.log(backgroundData);
//        document.getElementById("backgroundNext").style.display = "block";
//    } 
//}

// If form is valid, save to pages data object, show next button, hide and disable submit button
// If invalid, display warning 
function saveForm(page) {
    let form = document.getElementById(`${page}Form`);
    let isValidForm = form.checkValidity();
    console.log("Form Validity: ", isValidForm);
    if (isValidForm === false) {
        $( `#${page}Warning` ).fadeTo(300, 1);
    }
    else {
        if (document.getElementById(`${page}Warning`).style.opacity == 1) {
            $( `#${page}Warning` ).fadeTo(300, 0);
        }
        //$( `#${page}Submit` ).fadeTo(300, 0);
        document.getElementById(`${page}Submit`).disabled = true;
        document.getElementById(`${page}Next`).style.display = "block";
        if (page === "hearing") {
            hearingData = Object.fromEntries(new FormData(form).entries());
            console.log("hearingData: ", hearingData);
        }
        else if (page === "background") {
            backgroundData = Object.fromEntries(new FormData(form).entries());
            console.log("backgroundData: ", backgroundData);
        }
        else if (page === "feedback1") {
            feedback1Data = Object.fromEntries(new FormData(form).entries());
            console.log("feedback1Data: ", feedback1Data);
        }
        else if (page === "feedback2") {
            feedback2Data = Object.fromEntries(new FormData(form).entries());
            console.log("feedback2Data: ", feedback2Data);
        }   
        else if (page === "feedback3") {
            feedback3Data = Object.fromEntries(new FormData(form).entries());
            console.log("feedback3Data: ", feedback3Data);
        }   
    } 
}



// Saves preset suggestions to DB, separately from user data
function savePresets() {
    let form = document.getElementById("conclusionForm");
    let isValidForm = form.checkValidity();
    console.log("Form Validity: ", isValidForm);
    if (isValidForm === false) {
        $( "#conclusionWarning" ).fadeTo(300, 1);
    }
    else {
        if (document.getElementById("conclusionWarning").style.opacity == 1) {
            $( "#conclusionWarning" ).fadeTo(300, 0);
        }
        document.getElementById("conclusionSubmit").disabled = true;
        conclusionData = Object.fromEntries(new FormData(form).entries());
        console.log("conclusionData: ", conclusionData);

        const response = conclusionData;

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
        };
        fetch("/api/store-response", requestOptions).then( () => {
            console.log("presets saved to DB");
        });
    } 
}