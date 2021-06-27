import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Conclusion");
    }

    async getHtml() {
        return /*html*/`
            <div class="infoContainer">
                <h2>Thank you for your Participation!</h2>
                <p>
                    This study is now concluded. <br> Before you close this page, Do you have any suggestions for a combination of settings that resemble the timbre
                    of a real-world instrument? If so, please provide the Timbre Explorer settings in the following format: s1, b2, a1, e1; s2, b2, a2, e2...etc. 
                </p>
                <br>
                <form id="conclusionForm">
                    <label for="presetSuggestions">Your suggestions here: </label>
                    <input id="presetSuggestions" type="text" name="presetSuggestions" class="form-extra-text" required>
                    <br><br>
                    <div class="submit-row">
                        <!-- Prevent default behaviour and save to Data object -->
                        <button onclick="event.preventDefault(); savePresets();" id="conclusionSubmit" class="submit-button">Submit</button>
                        <div class="submit-warning" id="conclusionWarning">
                            <p style="margin: 0.3em 0.5em 0 0.5em;">Enter some preset suggestions before submitting...</p>
                        </div>
                    </div>
                </form>
            </div>
        `;
    }
}