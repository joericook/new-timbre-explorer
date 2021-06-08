import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Testing1");
    }

    async getHtml() {
        return `
            <div class="infoContainer">
                <h1>Testing 1</h1> 
                <p>
                    Here's some filler text
                </p>
                <br>
                <div class="nextButton">
                    <a class="nextText" href="/training2" data-link>Next<a/>
                </div>
            </div>
        `;
    }
}