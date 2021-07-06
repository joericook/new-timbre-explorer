import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Feedback2");
    }

    async getHtml() {
        return /*html*/`
            <div class="infoContainer">
                <h1>Task 2 Feedback</h1>
                <br>
                <p>
                    Before continuing, please answer the following questions about the task you just completed:
                </p>
                <br>
                <form id="feedback2Form">
                    <div class="roundedBox">
                        <label><strong>How challenging was it for you to do this task?:</strong></label>
                        <ul class="likert">
                            <li>
                                <input type="radio" id="task2DifficultyChoice1" name="task2Difficulity" value="1" required>
                                <label for="task2DifficultyChoice1">Very Easy</label>
                            </li>
                            <li>
                                <input type="radio" id="task2DifficultyChoice2" name="task2Difficulity" value="2" required>
                                <label for="task2DifficultyChoice2">Easy</label>
                            </li>
                            <li>
                                <input type="radio" id="task2DifficultyChoice3" name="task2Difficulity" value="3" required>
                                <label for="task2DifficultyChoice3">Neutral</label>
                            </li>
                            <li>
                                <input type="radio" id="task2DifficultyChoice4" name="task2Difficulity" value="4" required>
                                <label for="task2DifficultyChoice4">Challenging</label>
                            </li>
                            <li>
                                <input type="radio" id="task2DifficultyChoice5" name="task2Difficulity" value="5" required>
                                <label for="task2DifficultyChoice5">Very Challenging</label>
                            </li>
                        </ul>

                        <label><strong>How much did you enjoy the task you just completed?:</strong></label>
                        <ul class="likert">
                            <li class="options-4">
                                <input type="radio" id="task2EnjoymentChoice1" name="task2Enjoyment" value="1" required>
                                <label for="task2EnjoymentChoice1">Not at all</label>
                            </li>
                            <li class="options-4">
                                <input type="radio" id="task2EnjoymentChoice2" name="task2Enjoyment" value="2" required>
                                <label for="task2EnjoymentChoice2">Slightly</label>
                            </li>
                            <li class="options-4">
                                <input type="radio" id="task2EnjoymentChoice3" name="task2Enjoyment" value="3" required>
                                <label for="task2EnjoymentChoice3">Moderately</label>
                            </li>
                            <li class="options-4">
                                <input type="radio" id="task2EnjoymentChoice4" name="task2Enjoyment" value="4" required>
                                <label for="task2EnjoymentChoice4">Very Much</label>
                            </li>
                        </ul>
                    </div>
                    <br>
                    <div class="submit-row">
                        <!-- Prevent default behaviour and save to Data object -->
                        <button onclick="event.preventDefault(); saveForm('feedback2');" id="feedback2Submit" class="submit-button">Submit</button>
                        <div class="submit-warning" id="feedback2Warning">
                            <p style="margin: 0.3em 0.5em 0 0.5em;">All questions must be answered before continuing...</p>
                        </div>
                    </div>
                </form>  
                <div class="nextButton">
                    <a id="feedback2Next" class="nextText" style="display: none" href="/testing3" data-link>Next</a>
                </div>
            </div>
        `;
    }
}