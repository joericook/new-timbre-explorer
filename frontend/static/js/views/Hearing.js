import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Hearing Test");
    }

    async getHtml() {
        return `
            <div class="infoContainer">
                <h1>Hearing Test</h1>
                <br>
                <p>
                    Before completing the study, please complete this brief speech-in-noise hearing test.
                </p>
                <p align="center">
                    <iframe
                        title="hear-it Hearing Test"
                        frameborder="0"
                        seamless=""
                        width="600vw"
                        height="680vw"
                        src="https://hearing-test.hear-it.org/">
                    </iframe>
                </p>
                <p>
                    When you have successfully completed the test, enter your percentage score in the box and then click <strong>Next</strong> to continue.
                </p>
                <br>
                <div class="nextButton">
                    <a class="nextText" href="/headphones" data-link>Next<a/>
                </div>
            </div>  
        `;
    }
}