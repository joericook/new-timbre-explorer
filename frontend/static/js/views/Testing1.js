import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Testing1");
    }

    async getHtml() {
        return `
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
                        <p class="answer-text" data-answer="a">Answer A</p>  
                    </div>
                    <div class="answer-container card">
                        <p class="answer-prefix red">B</p>
                        <p class="answer-text" data-answer="b">Answer B</p>  
                    </div>
                </div>
                <div class="row"> 
                    <div class="answer-container card">
                        <p class="answer-prefix yellow">C</p>
                        <p class="answer-text" data-answer="c">Answer C</p>  
                    </div>  
                    <div class="answer-container card">
                        <p class="answer-prefix yellow">D</p>
                        <p class="answer-text" data-answer="d">Answer D</p>  
                    </div>
                </div>
                <div class="row"> 
                    <div class="answer-container card">
                        <p class="answer-prefix green">E</p>
                        <p class="answer-text" data-answer="e">Answer E</p>  
                    </div>  
                    <div class="answer-container card">
                        <p class="answer-prefix green">F</p>
                        <p class="answer-text" data-answer="f">Answer F</p>  
                    </div>
                </div>
                <div class="row">
                    <div class="answer-container card">
                        <p class="answer-prefix blue">G</p>
                        <p class="answer-text" data-answer="g">Answer G</p>  
                    </div>  
                    <div class="answer-container card">
                        <p class="answer-prefix blue">H</p>
                        <p class="answer-text" data-answer="h">Answer H</p>  
                    </div>
                </div>
                <div class="row">
                    <div class="answer-container card">
                        <p class="answer-prefix">I</p>
                        <p class="answer-text" data-answer="i">Answer I</p>  
                    </div>
                </div>
            </div>
        `;
    }
}