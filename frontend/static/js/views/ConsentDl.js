import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Consent Download");
    }

    async getHtml() {
        return /*html*/`
        <div class="infoContainer">
            <h1>Consent Form Download</h1>
            <br>
            <p>
                You can download a copy of this consent form by clicking the following link: 
                <a href="static/images/timbre_explorer_consent_form.pdf" download>
                    Download Consent Form
                </a>
            </p>
            <br>
            <div class="nextButton">
                <a class="nextText" href="/headphones" data-link>Next</a>
            </div>
        </div>
        `;
    }
}