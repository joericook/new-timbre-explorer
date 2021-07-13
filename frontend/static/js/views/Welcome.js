import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Welcome");
    }

    async getHtml() {
        return /*html*/`
            <div class="infoContainer">
                <h1 class="pageTitle">Welcome to the Timbre Explorer Study</h1>
                <br>
                <p>
                    Thank you for showing interest in this study!
                    <br><br>
                    Please be aware that you should complete this study on a laptop or desktop computer and not on a mobile device like a tablet or phone. 
                    If possible, use the integrated trackpad of your laptop or a computer mouse rather than a touchscreen or other specialised control devices.
                    <br><br> 
                    It is strongly recommended that you use <strong>Google Chrome</strong> for this study and avoid refreshing or leaving the page, as doing so will lose your progress.
                    <br><br>
                    This study involves sound. Please make sure that you can listen to audio either through headphones or speakers. Also, for your own safety, start with a low volume level.
                </p>
                <br>
                <div class="nextButton">
                    <a class="nextText" href="/info" data-link>Next</a>
                </div>
            </div>
        `;
    }
}