import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Testing2");
    }

    async getHtml() {
        return `
            <div class="infoContainer">

                <div class="question-holder">
                    <h1 id="questionTest2">Answer the following question:</h1>  
                </div>

        

                <div class="intro">
                    <div class="sound-holder" style="margin: 0 16vw">
                        <p class="prefix">Play Sound</p>
                        <audio id="soundTest2" controls src='' type="audio/flac"></audio>
                    </div>
                    <div class="counter">
                        <p class="prefix">Question</p>
                        <h1 id="counterTextTest2">1/3</h1>  
                    </div>
                    <div class="score">
                        <p class="prefix">Score</p>
                        <h1 id="scoreTest2">0</h1>  
                    </div>  
                </div>

                <div class="bingo-row">
                <div class="bingo-answer-container card">
                    <p class="bingo-answer-prefix">A</p>
                    <p class="bingo-answer-text" data-answer="a"><mark class="red">Spectrum:</mark><br>High<br><mark class="yellow">Brightness:</mark><br>High</p>  
                </div>
                <div class="bingo-answer-container card">
                    <p class="bingo-answer-prefix">B</p>
                    <p class="bingo-answer-text" data-answer="b"><mark class="red">Spectrum:</mark><br>High<br><mark class="yellow">Brightness:</mark><br>Low</p>  
                </div>
                <div class="bingo-answer-container card">
                    <p class="bingo-answer-prefix">C</p>
                    <p class="bingo-answer-text" data-answer="c"><mark class="red">Spectrum:</mark><br>Low<br><mark class="yellow">Brightness:</mark><br>High</p>  
                </div>  
                <div class="bingo-answer-container card">
                    <p class="bingo-answer-prefix">D</p>
                    <p class="bingo-answer-text" data-answer="d"><mark class="red">Spectrum:</mark><br>Low<br><mark class="yellow">Brightness:</mark><br>Low</p>  
                </div>
                <div class="bingo-answer-container card">
                    <p class="bingo-answer-prefix">E</p>
                    <p class="bingo-answer-text" data-answer="e"><mark class="red">Spectrum:</mark><br>High<br><mark class="green">Articulation:</mark><br>High</p>  
                </div>  
                </div>

                <div class="bingo-row"> 
                <div class="bingo-answer-container card">
                    <p class="bingo-answer-prefix">F</p>
                    <p class="bingo-answer-text" data-answer="f"><mark class="red">Spectrum:</mark><br>High<br><mark class="green">Articulation:</mark><br>Low</p>  
                </div>
                <div class="bingo-answer-container card">
                    <p class="bingo-answer-prefix">G</p>
                    <p class="bingo-answer-text" data-answer="g"><mark class="red">Spectrum:</mark><br>Low<br><mark class="green">Articulation:</mark><br>High</p>  
                </div>  
                <div class="bingo-answer-container card">
                    <p class="bingo-answer-prefix">H</p>
                    <p class="bingo-answer-text" data-answer="h"><mark class="red">Spectrum:</mark><br>Low<br><mark class="green">Articulation:</mark><br>Low</p>  
                </div>
                <div class="bingo-answer-container card">
                    <p class="bingo-answer-prefix">I</p>
                    <p class="bingo-answer-text" data-answer="i"><mark class="red">Spectrum:</mark><br>High<br><mark class="blue">Envelope:</mark><br>High</p>  
                </div>
                <div class="bingo-answer-container card">
                    <p class="bingo-answer-prefix">J</p>
                    <p class="bingo-answer-text" data-answer="j"><mark class="red">Spectrum:</mark><br>High<br><mark class="blue">Envelope:</mark><br>Low</p>  
                </div>
                </div>

                <div class="bingo-row">   
                <div class="bingo-answer-container card">
                    <p class="bingo-answer-prefix">K</p>
                    <p class="bingo-answer-text" data-answer="k"><mark class="red">Spectrum:</mark><br>Low<br><mark class="blue">Envelope:</mark><br>High</p>  
                </div>
                <div class="bingo-answer-container card">
                    <p class="bingo-answer-prefix">L</p>
                    <p class="bingo-answer-text" data-answer="l"><mark class="red">Spectrum:</mark><br>Low<br><mark class="blue">Envelope:</mark><br>Low</p>  
                </div>  
                <div class="bingo-answer-container">
                    
                    <p style="padding: 3em 1em;
                            width: 100%;
                            text-align: center;
                            margin: 0;"><strong>FREE SPACE</strong></p>  
                </div>
                <div class="bingo-answer-container card">
                    <p class="bingo-answer-prefix">M</p>
                    <p class="bingo-answer-text" data-answer="m"><mark class="yellow">Brightness:</mark><br>High<br><mark class="green">Articulation:</mark><br>High</p>  
                </div>
                <div class="bingo-answer-container card">
                    <p class="bingo-answer-prefix">N</p>
                    <p class="bingo-answer-text" data-answer="n"><mark class="yellow">Brightness:</mark><br>High<br><mark class="green">Articulation:</mark><br>Low</p>  
                </div>      
                </div>

                <div class="bingo-row">
                <div class="bingo-answer-container card">
                    <p class="bingo-answer-prefix">O</p>
                    <p class="bingo-answer-text" data-answer="o"><mark class="yellow">Brightness:</mark><br>Low<br><mark class="green">Articulation:</mark><br>High</p>  
                </div>
                <div class="bingo-answer-container card">
                    <p class="bingo-answer-prefix">P</p>
                    <p class="bingo-answer-text" data-answer="p"><mark class="yellow">Brightness:</mark><br>Low<br><mark class="green">Articulation:</mark><br>Low</p>  
                </div>  
                <div class="bingo-answer-container card">
                    <p class="bingo-answer-prefix">Q</p>
                    <p class="bingo-answer-text" data-answer="q"><mark class="yellow">Brightness:</mark><br>High<br><mark class="blue">Envelope:</mark><br>High</p>  
                </div>
                <div class="bingo-answer-container card">
                    <p class="bingo-answer-prefix">R</p>
                    <p class="bingo-answer-text" data-answer="r"><mark class="yellow">Brightness:</mark><br>High<br><mark class="blue">Envelope:</mark><br>Low</p>  
                </div>
                <div class="bingo-answer-container card">
                    <p class="bingo-answer-prefix">S</p>
                    <p class="bingo-answer-text" data-answer="s"><mark class="yellow">Brightness:</mark><br>Low<br><mark class="blue">Envelope:</mark><br>High</p>  
                </div>  
                </div>

                <div class="bingo-row">
                <div class="bingo-answer-container card">
                    <p class="bingo-answer-prefix">T</p>
                    <p class="bingo-answer-text" data-answer="t"><mark class="yellow">Brightness:</mark><br>Low<br><mark class="blue">Envelope:</mark><br>Low</p>  
                </div>
                <div class="bingo-answer-container card">
                    <p class="bingo-answer-prefix">U</p>
                    <p class="bingo-answer-text" data-answer="u"><mark class="green">Articulation:</mark><br>High<br><mark class="blue">Envelope:</mark><br>High</p>  
                </div>  
                <div class="bingo-answer-container card">
                    <p class="bingo-answer-prefix">V</p>
                    <p class="bingo-answer-text" data-answer="v"><mark class="green">Articulation:</mark><br>High<br><mark class="blue">Envelope:</mark><br>Low</p>  
                </div>
                <div class="bingo-answer-container card">
                    <p class="bingo-answer-prefix">W</p>
                    <p class="bingo-answer-text" data-answer="w"><mark class="green">Articulation:</mark><br>Low<br><mark class="blue">Envelope:</mark><br>High</p>  
                </div>
                <div class="bingo-answer-container card">
                    <p class="bingo-answer-prefix">X</p>
                    <p class="bingo-answer-text" data-answer="x"><mark class="green">Articulation:</mark><br>Low<br><mark class="blue">Envelope:</mark><br>Low</p>  
                </div>  
            </div>
        `;
    }
}