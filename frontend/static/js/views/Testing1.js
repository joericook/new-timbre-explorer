import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Testing1");
    }

    async getHtml() {
        return `
            <div class="infoContainer">
            <div id="intro">
            <div class="counter">
              <p class="prefix">Question</p>
              <h1 id="counter">1/3</h1>  
            </div>
            <div class="score">
              <p class="prefix">Score</p>
              <h1 id="score">0</h1>  
            </div>  
          </div>
    
          <div class="question-holder">
              <h1 id="question">Answer the following question:</h1>  
          </div>
    
              <div class="answer-container card">
                <p class="answer-prefix">A</p>
                <p class="answer-text" data-answer="a">Answer A</p>  
              </div>  
              <div class="answer-container card">
                <p class="answer-prefix">B</p>
                <p class="answer-text" data-answer="b">Answer B</p>  
              </div>        
              <div class="answer-container card">
                <p class="answer-prefix">C</p>
                <p class="answer-text" data-answer="c">Answer C</p>  
              </div>  
              <div class="answer-container card">
                <p class="answer-prefix">D</p>
                <p class="answer-text" data-answer="d">Answer D</p>  
              </div>  
              <div class="answer-container card">
                <p class="answer-prefix">E</p>
                <p class="answer-text" data-answer="e">Answer E</p>  
              </div>  
              <div class="answer-container card">
                <p class="answer-prefix">F</p>
                <p class="answer-text" data-answer="f">Answer F</p>  
              </div>  
              <div class="answer-container card">
                <p class="answer-prefix">G</p>
                <p class="answer-text" data-answer="g">Answer G</p>  
              </div>  
              <div class="answer-container card">
                <p class="answer-prefix">H</p>
                <p class="answer-text" data-answer="h">Answer H</p>  
              </div>  
              <div class="answer-container card">
                <p class="answer-prefix">I</p>
                <p class="answer-text" data-answer="i">Answer I</p>  
              </div>  
            </div>
        `;
    }
}