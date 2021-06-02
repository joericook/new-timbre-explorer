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
                <p>
                    Before completing the study, a brief hearing test must first be taken.
                </p>
                <iframe
                    title="hear-it Hearing Test"
                    frameborder="0"
                    seamless=""
                    width="600vw"
                    height="680vw"
                    src="https://hearing-test.hear-it.org/">
                </iframe>
                <p>
                    When you have successfully completed the test, click <strong>Next</strong> to continue.
                </p>
                <br>
                <a href="/headphones" data-link>Next<a/>
            </div>  
        `;
    }
}