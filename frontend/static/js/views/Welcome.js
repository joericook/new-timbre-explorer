import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Welcome");
    }

    async getHtml() {
        return `
            <div class="infoContainer">
                <h1>Welcome to the Timbre Explorer study</h1> 
                <p>
                    Thank you for showing interest in this study!
                    <br><br>
                    Please be aware that you should complete this study on a laptop or desktop computer and not on a mobile device like a tablet or phone. 
                    If possible, use the integrated trackpad of your laptop or a computer mouse rather than a touchscreen or other specialised control devices. 
                    <br><br>
                    This study involves sound. Please make sure that you can listen to audio either through headphones or speakers. Also, for your own safety, start with a low volume level.
                </p>
                <br>
                <a href="/info" data-link>Next<a/>
            </div>
        `;
    }
}