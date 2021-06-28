import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Testing1");
    }

    async getHtml() {
        return /*html*/`
            <div class="infoContainer">

                <div class="question-holder">
                    <h1 id="questionTest1">Answer the following question:</h1>  
                </div>

                

                <div class="intro">
                    <div class="sound-holder">
                        <p class="prefix">A</p>
                        <audio id="soundATest1" controls src='' type="audio/flac"></audio>
                    </div>
                    <div class="sound-holder">
                        <p class="prefix">B</p>
                        <audio id="soundBTest1" controls src='' type="audio/flac"></audio>
                    </div>
                    <div class="counter">
                        <p class="prefix">Question</p>
                        <h1 id="counterTextTest1">1/3</h1>  
                    </div>
                    <div class="score">
                        <p class="prefix">Score</p>
                        <h1 id="scoreTest1">0</h1>  
                    </div>  
                </div>
    
                <div class="row">
                    <div class="answer-container card">
                        <p class="answer-prefix red">A</p>
                        <p class="answer-text" data-answer="a">Spectrum / Increase</p>  
                    </div>
                    <div class="answer-container card">
                        <p class="answer-prefix red">B</p>
                        <p class="answer-text" data-answer="b">Spectrum / Decrease</p>  
                    </div>
                </div>
                <div class="row"> 
                    <div class="answer-container card">
                        <p class="answer-prefix yellow">C</p>
                        <p class="answer-text" data-answer="c">Brightness / Increase</p>  
                    </div>  
                    <div class="answer-container card">
                        <p class="answer-prefix yellow">D</p>
                        <p class="answer-text" data-answer="d">Brightness / Decrease</p>  
                    </div>
                </div>
                <div class="row"> 
                    <div class="answer-container card">
                        <p class="answer-prefix green">E</p>
                        <p class="answer-text" data-answer="e">Articulation / Increase</p>  
                    </div>  
                    <div class="answer-container card">
                        <p class="answer-prefix green">F</p>
                        <p class="answer-text" data-answer="f">Articulation / Decrease</p>  
                    </div>
                </div>
                <div class="row">
                    <div class="answer-container card">
                        <p class="answer-prefix blue">G</p>
                        <p class="answer-text" data-answer="g">Envelope / Increase</p>  
                    </div>  
                    <div class="answer-container card">
                        <p class="answer-prefix blue">H</p>
                        <p class="answer-text" data-answer="h">Envelope / Decrease</p>  
                    </div>
                </div>
                <div class="row">
                    <div class="answer-container card">
                        <p class="answer-prefix">I</p>
                        <p class="answer-text" data-answer="i">No Change</p>  
                    </div>
                </div>
            </div>
        `;
    }
}