import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Consent Download");
    }

    async getHtml() {
        return `
        <div class="infoContainer">
            <h1>Consent Form Download</h1> 
            <p>
               Consent download page
            </p>
            <br>
            <a href="/soundcheck" data-link>Next<a/>
        </div>
        `;
    }
}