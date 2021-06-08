import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("SoundCheck");
    }

    async getHtml() {
        return `
            <div class="infoContainer">
                <h1>Sound Check</h1> 
                <br>
                <p>
                    To set your volume to the optimum level, please put on your headphones and follow these instructions.
                    <br><br>
                    Begin by setting your volume level to 0. Then play the white noise clip below and gradually increase to a level
                    that is as high as possible without becoming uncomfortable.
                </p>
                <audio controls>
                    <source src='static/stimuli_HugginsPitch/HugginsPitch_calibration.flac' type="audio/flac">
                </audio>
                <p>
                    When you are satified with the volume level, click <strong>Next</strong> to progress to a headphone screening test.
                </p>
                <br>
                <div class="nextButton">
                    <a class="nextText" href="/hearing" data-link>Next<a/>
                </div>
            </div>
        `;
    }
}