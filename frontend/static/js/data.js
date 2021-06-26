let backgroundData;

function saveBackgroundForm() {
    let form = document.getElementById("backgroundForm");
    let isValidForm = form.checkValidity();
    console.log(isValidForm);
    if (isValidForm === false) {
        // alert invalid
    }
    else {
        backgroundData = Object.fromEntries(new FormData(form).entries());
        console.log(backgroundData);
        document.getElementById("backgroundNext").style.display = "block";
    } 
}