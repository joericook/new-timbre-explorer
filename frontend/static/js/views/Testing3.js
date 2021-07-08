import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Testing3");
    }

    async getHtml() {
        return /*html*/`
            <div class="infoContainer">

                <div class="question-holder">
                    <h1 id="questionTest3">Answer the following question:</h1>  
                </div>
  
        
  
                <div class="intro">
                    <div class="sound-holder">
                        <p class="prefix">A</p>
                        <audio id="soundATest3" controls src='' type="audio/wav"></audio>
                    </div>
                    <div class="sound-holder">
                        <p class="prefix">B</p>
                        <audio id="soundBTest3" controls src='' type="audio/wav"></audio>
                    </div>
                    <div class="counter">
                        <p class="prefix">Question</p>
                        <h1 id="counterTextTest3">1/3</h1>  
                    </div>
                    <div class="score">
                        <p class="prefix">Score</p>
                        <h1 id="scoreTest3">0</h1>  
                    </div>  
                </div>
  
                <div class="row">
                    <div class="answer-container card">
                        <p class="test3-answer-prefix">A</p>
                        <p class="answer-text" data-answer="a">Answer A</p>  
                    </div>
                    <div class="answer-container card">
                        <p class="test3-answer-prefix">B</p>
                        <p class="answer-text" data-answer="b">Answer B</p>  
                    </div>
                </div>
                <div class="row"> 
                    <div class="answer-container card">
                        <p class="test3-answer-prefix">C</p>
                        <p class="answer-text" data-answer="c">Answer C</p>  
                    </div>  
                    <div class="answer-container card">
                        <p class="test3-answer-prefix">D</p>
                        <p class="answer-text" data-answer="d">Answer D</p>  
                    </div>
                </div>
                <div class="row"> 
                    <div class="answer-container card">
                        <p class="test3-answer-prefix">E</p>
                        <p class="answer-text" data-answer="e">Answer E</p>  
                    </div>  
                    <div class="answer-container card">
                        <p class="test3-answer-prefix">F</p>
                        <p class="answer-text" data-answer="f">Answer F</p>  
                    </div>
                </div>    
                
            </div>
        `;
    }
}