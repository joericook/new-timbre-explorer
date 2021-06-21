import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Feedback2");
    }

    async getHtml() {
        return `
            <div class="infoContainer">
                <h1>Task 2 Feedback</h1>
                <br>
                <p>
                    Before continuing, please answer the following questions about the task you just completed:
                </p>
                <br>
                <form id="feedback2Form">
                    <div class="roundedBox">
                        <label>How challenging was it for you to do this task?:</label>
                        <ul class="likert">
                            <li>
                                <input type="radio" name="task2Difficulity" value="1" required>
                                <label>Very Easy</label>
                            </li>
                            <li>
                                <input type="radio" name="task2Difficulity" value="2" required>
                                <label>Easy</label>
                            </li>
                            <li>
                                <input type="radio" name="task2Difficulity" value="3" required>
                                <label>Neutral</label>
                            </li>
                            <li>
                                <input type="radio" name="task2Difficulity" value="4" required>
                                <label>Challenging</label>
                            </li>
                            <li>
                                <input type="radio" name="task2Difficulity" value="5" required>
                                <label>Very Challenging</label>
                            </li>
                        </ul>

                        <label>How much did you enjoy the task you just completed?:</label>
                        <ul class="likert">
                            <li>
                                <input type="radio" name="task2Enjoyment" value="1" required>
                                <label>Not at all</label>
                            </li>
                            <li>
                                <input type="radio" name="task2Enjoyment" value="2" required>
                                <label>Slightly</label>
                            </li>
                            <li>
                                <input type="radio" name="task2Enjoyment" value="3" required>
                                <label>Somewhat</label>
                            </li>
                            <li>
                                <input type="radio" name="task2Enjoyment" value="4" required>
                                <label>Moderately</label>
                            </li>
                            <li>
                                <input type="radio" name="task2Enjoyment" value="5" required>
                                <label>Very Much</label>
                            </li>
                        </ul>
                    </div>
                    <button type="submit">Submit</button>
                </form>  
                <br><br>
                <div class="nextButton">
                    <a class="nextText" href="/testing3" data-link>Next<a/>
                </div>
            </div>
        `;
    }
}