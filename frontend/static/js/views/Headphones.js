import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Headphones");
    }

    async getHtml() {
        return `
            <div class="infoContainer">
                <h1></h1>
                <br><br><br><br><br>
                <p style="text-align: center">
                    This study will test your perception of timbre and will therefore require you to wear headphones throughout.
                    <br><br>
                    To check that headphones are being worn, we ask that you take <strong>two</strong> brief headphone tests.
                    To begin each test, please click the button below and follow the instructions in the window that appears.
                    <br><br>
                    When both tests have been completed you will be able to click <strong>Next</strong> to continue.
                </p>
                <a href="/hearing" data-link>Next</a>
                <br><br>
                <div style="margin: 0;
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);">
                    <button id="hugginsTestButton" onclick="doHugginsTest()" style="height:5vh; width:10vw; margin: 0 auto;">Begin Test 1</button>
                    <button id="beatTestButton" onclick="doBeatTest()" style="height:5vh; width:10vw; margin: 0 auto; display:none;">Begin Test 2</button>
                    <div class="nextButton">
                        <a id="afterHeadphonesNext" style="display:none" class="nextText" href="/hearing" data-link>Next</a>
                    </div>
                </div>
            </div>
        `;
    }
}