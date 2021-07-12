import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Hearing Test");
    }

    async getHtml() {
        return /*html*/`
            <div class="infoContainer">
                <h1>Hearing Test</h1>
                <br>
                <p>
                    Before completing the study, please complete this brief speech-in-noise hearing test.
                </p>
                <p style="text-align:center">
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
                    When you have successfully completed the test, select your percentage score from the dropdown 
                    menu below and then click <strong>Submit</strong> before continuing.
                </p>
                <form id="hearingForm">
                    <label for="hearingTestScoreInput">Enter your hearing test score (%):</label>
                    <select name="hearingTestScore" id="hearingTestScoreInput" required>
                        <option hidden disabled selected value> -- select an option -- </option>
                        <option value="<70">Under 70%</option>
                        <option value="70-79">70-79%</option>
                        <option value="80-89">80-89%</option>
                        <option value=">90">90% or Higher</option>
                    </select>
                    <br><br>
                    <div class="submit-row">
                        <!-- Prevent default behaviour and save to Data object -->
                        <button onclick="event.preventDefault(); saveForm('hearing');" id="hearingSubmit" class="submit-button">Submit</button>
                        <div class="submit-warning" id="hearingWarning">
                            <p style="margin: 0.3em 0.5em 0 0.5em;">Enter your hearing test score before continuing...</p>
                        </div>
                    </div>
                </form>  
                <div class="nextButton">
                    <a id="hearingNext" class="nextText" style="display: none" href="/background" data-link>Next</a>
                </div>
            </div>  
        `;
    }
}