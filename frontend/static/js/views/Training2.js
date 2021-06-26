import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Training2");
    }

    async getHtml() {
        return /*html*/`
            <div class="infoContainer">
                <div class="instruction-holder">
                    <p>Use the corresponding sliders to move timbrally from Sound A to Sound B. As you adjust each slider, play the Timbre Explorer and listen 
                    to the effect it has on the timbre of the sound. When you are done, click below to move on.</p>
                </div>
            
                <div class="description-holder">
                    <h2 id="descriptionTrain2">Placeholder text to be overwritten</h2>
                </div>
            
                <div class="intro">
                    <div class="sound-holder">
                        <p class="prefix">A</p>
                        <audio id="soundATrain2" controls src='' type="audio/flac"></audio>
                    </div>
                    <div class="sound-holder">
                        <p class="prefix">B</p>
                        <audio id="soundBTrain2" controls src='' type="audio/flac"></audio>
                    </div>
                    <div class="counter">
                        <p class="prefix">Trial No.</p>
                        <h1 id="trialCounterTextTrain2">1/3</h1>  
                    </div>
                </div>
            
                <div class="row">
                    <div class="next-trial-container card" id="nextCardTrain2">
                        <p id="nextTrialTextTrain2">Next Trial</p>  
                    </div>
                </div>
                <div class="row">
                    <div class="warning" id="warningTrain2">
                        <p style="margin: 0.3em 0.5em 0 0.5em">Try moving <strong>both</strong> sliders to match Sound B before moving on...</p>
                    </div>
                </div>
            </div>
        `;
    }
}