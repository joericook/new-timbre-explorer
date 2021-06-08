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
                <br>
                <p>
                    To determine whether participants are wearing headphones (desirable) or listening via loudspeakers (undesirable), two quick headphone screening 3-AFC tests will be administered.
                </p>
                <a href="/background" data-link>Next</a>
                <br><br>
                <div style="margin: 0;
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);">
                    <button id="headphoneTestButton" onclick="doTheTest()" style="height:5vh; width:10vw; margin: 0 auto;">Begin Test</button>
                    <div class="nextButton">
                        <a id="afterHeadphonesNext" style="display:none" class="nextText" href="/background" data-link>Next</a>
                    </div>
                </div>
            </div>
        `;
    }
}