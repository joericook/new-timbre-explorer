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
                    When you have successfully completed the test, select your percentage score from the dropdown menu below and then click <strong>Next</strong> to continue.
                </p>
                <label for="hearingTestScoreInput">Enter your hearing test score (%):</label>
                <select name="hearingTestScore" id="hearingTestScoreInput" required>
                    <option hidden disabled selected value> -- select an option -- </option>
                    <option value="<70">Under 70%</option>
                    <option value="70-79">70-79%</option>
                    <option value="80-89">80-89%</option>
                    <option value=">90">90% or Higher</option>
                </select>
                <br><br>
                <div class="nextButton">
                    <a class="nextText" href="/background" data-link>Next<a/>
                </div>
            </div>  
        `;
    }
}