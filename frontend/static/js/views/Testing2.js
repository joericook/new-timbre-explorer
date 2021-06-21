import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Testing2");
    }

    async getHtml() {
        return `
            <div class="infoContainer">

                

            </div>
        `;
    }
}