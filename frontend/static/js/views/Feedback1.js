import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Feedback1");
    }

    async getHtml() {
        return /*html*/`
            <div class="infoContainer">
                <h1>Task 1 Feedback</h1>
                <br>
                <p>
                    Before continuing, please answer the following questions about the task you just completed:
                </p>
                <br>
                <form id="feedback1Form">
                    <div class="roundedBox">
                        <label><strong>How challenging was it for you to do this task?:</strong></label>
                        <ul class="likert">
                            <li>
                                <input type="radio" name="task1Difficulity" value="1" required>
                                <label>Very Easy</label>
                            </li>
                            <li>
                                <input type="radio" name="task1Difficulity" value="2" required>
                                <label>Easy</label>
                            </li>
                            <li>
                                <input type="radio" name="task1Difficulity" value="3" required>
                                <label>Neutral</label>
                            </li>
                            <li>
                                <input type="radio" name="task1Difficulity" value="4" required>
                                <label>Challenging</label>
                            </li>
                            <li>
                                <input type="radio" name="task1Difficulity" value="5" required>
                                <label>Very Challenging</label>
                            </li>
                        </ul>

                        <label><strong>How much did you enjoy the task you just completed?:</strong></label>
                        <ul class="likert">
                            <li class="options-4">
                                <input type="radio" name="task1Enjoyment" value="1" required>
                                <label>Not at all</label>
                            </li>
                            <li class="options-4">
                                <input type="radio" name="task1Enjoyment" value="2" required>
                                <label>Slightly</label>
                            </li>
                            <li class="options-4">
                                <input type="radio" name="task1Enjoyment" value="3" required>
                                <label>Moderately</label>
                            </li>
                            <li class="options-4">
                                <input type="radio" name="task1Enjoyment" value="4" required>
                                <label>Very Much</label>
                            </li>
                        </ul>
                    </div>
                    <br>
                    <div class="submit-row">
                        <!-- Prevent default behaviour and save to Data object -->
                        <button onclick="event.preventDefault(); saveForm('feedback1');" id="feedback1Submit" class="submit-button">Submit</button>
                        <div class="submit-warning" id="feedback1Warning">
                            <p style="margin: 0.3em 0.5em 0 0.5em;">All questions must be answered before continuing...</p>
                        </div>
                    </div>
                </form>  
                <div class="nextButton">
                    <a id="feedback1Next" class="nextText" style="display: none" href="/training2" data-link>Next</a>
                </div>
            </div>
        `;
    }
}