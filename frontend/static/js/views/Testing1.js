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
                        <audio id="soundATest1" controls src='' type="audio/wav"></audio>
                    </div>
                    <div class="sound-holder">
                        <p class="prefix">B</p>
                        <audio id="soundBTest1" controls src='' type="audio/wav"></audio>
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
                        <p class="answer-prefix">A</p>
                        <p class="answer-text" data-answer="a"><mark class="red">Spectrum:</mark> Increase</p>  
                    </div>
                    <div class="answer-container card">
                        <p class="answer-prefix">B</p>
                        <p class="answer-text" data-answer="b"><mark class="red">Spectrum:</mark> Decrease</p>  
                    </div>
                </div>
                <div class="row"> 
                    <div class="answer-container card">
                        <p class="answer-prefix">C</p>
                        <p class="answer-text" data-answer="c"><mark class="yellow">Brightness:</mark> Increase</p>  
                    </div>  
                    <div class="answer-container card">
                        <p class="answer-prefix">D</p>
                        <p class="answer-text" data-answer="d"><mark class="yellow">Brightness:</mark> Decrease</p>  
                    </div>
                </div>
                <div class="row"> 
                    <div class="answer-container card">
                        <p class="answer-prefix">E</p>
                        <p class="answer-text" data-answer="e"><mark class="green">Articulation:</mark> Increase</p>  
                    </div>  
                    <div class="answer-container card">
                        <p class="answer-prefix">F</p>
                        <p class="answer-text" data-answer="f"><mark class="green">Articulation:</mark> Decrease</p>  
                    </div>
                </div>
                <div class="row">
                    <div class="answer-container card">
                        <p class="answer-prefix">G</p>
                        <p class="answer-text" data-answer="g"><mark class="blue">Envelope:</mark> Increase</p>  
                    </div>  
                    <div class="answer-container card">
                        <p class="answer-prefix">H</p>
                        <p class="answer-text" data-answer="h"><mark class="blue">Envelope:</mark> Decrease</p>  
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