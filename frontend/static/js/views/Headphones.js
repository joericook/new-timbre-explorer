import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Headphones");
    }

    async getHtml() {
        return `
            <div class="infoContainer">
                <h1>Headphone screening</h1> 
                <p>
                    To determine whether participants are wearing headphones (desirable) or listening via loudspeakers (undesirable), two quick headphone screening 3-AFC tests will be administered.
                </p>
                <br>
                <button onclick="doTheTest()">Begin Test</button>
                <br>
                <a href="/training1" data-link>Next</a>
            </div>
        `;
    }
}