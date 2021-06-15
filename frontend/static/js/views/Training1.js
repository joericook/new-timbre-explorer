import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Training1");
    }

    async getHtml() {
        return `
            <div class="infoContainer">
                <div class="instruction-holder">
                    <p>Use the corresponding slider to move timbrally from Sound A to Sound B. As you adjust each slider, play the Timbre Explorer and listen 
                    to the effect it has on the timbre of the sound. When you are done, click below to move on.</p>
                </div>
            
                <div class="description-holder">
                    <h2 id="description">Sounds A and B differ along the Spectrum dimension. Sound B has a much higher Spectrum value.</h2>
                </div>
            
                <div id="intro">
                    <div class="sound-holder">
                        <p class="prefix">A</p>
                        <audio id="trainingSoundA" controls src='' type="audio/flac"></audio>
                    </div>
                    <div class="sound-holder">
                        <p class="prefix">B</p>
                        <audio id="trainingSoundB" controls src='' type="audio/flac"></audio>
                    </div>
                    <div class="counter">
                        <p class="prefix">Trial No.</p>
                        <h1 id="trialCounter">1/3</h1>  
                    </div>
                </div>
            
                <div class="row">
                    <div class="next-trial-container card" id="next-card">
                        <p id="next-trial-text">Next Trial</p>  
                    </div>
                </div>
            </div>
        `;
    }
}