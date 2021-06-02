import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Training1");
    }

    async getHtml() {
        return `
            <h1>Training 1</h1> 
            <p>
                Here's some filler text
            </p>
        `;
    }
}