import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Conclusion");
    }

    async getHtml() {
        return `
            <div class="infoContainer">
                <h2>Thank you for your Participation!</h2>
                <p>
                    This study is now concluded. <br> Before you close this page, Do you have any suggestions for a combination of settings that resemble the timbre
                    of a real-world instrument? If so, please provide the Timbre Explorer settings in the following format: s1, b2, a1, e1; s2, b2, a2, e2...etc. 
                </p>
                <br>
                <form id="conclusionForm">
                    <label for="presetSuggestions">Your suggestions here: </label>
                    <input id="presetSuggestions" type="text" name="presetSuggestions" class="form-extra-text">
                    <button type="submit">Submit</button>
                </form>
            </div>
        `;
    }
}