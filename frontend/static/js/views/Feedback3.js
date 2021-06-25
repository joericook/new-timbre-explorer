import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Feedback3");
    }

    async getHtml() {
        return `
            <div class="infoContainer">
                <h1>Task 3 Feedback</h1>
                <br>
                <p>
                    Before continuing, please answer the following questions about the task you just completed:
                </p>
                <br>
                <form id="feedback3Form">
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
                    <br>
                    <p>
                        The following questions concern the Timbre Explorer Interface as a whole:
                    </p>
                    <br>
                    <div class="roundedBox">
                        <p>
                            For each of the following, read the description and rate how well the description is demonstrated by the Timbre Explorer. Rate
                            each concept from 1-5, with 1 being not at all and 5 being that the concept is very well demonstrated.
                            <br>
                            Optionally, explain how the Timbre Explorer helped to improve your understanding:
                        </p>
                        <br>
                        <label>
                            <strong>Timbre (sound aspect)</strong> - Timbre is a multidimensional aspect of sound that accounts for non-pitch and non-loudness 
                            differences between two sounds.
                        </label>
                        <ul class="likert">
                            <li>
                                <input type="radio" name="timbreLearn" value="1" required>
                                <label>1</label>
                            </li>
                            <li>
                                <input type="radio" name="timbreLearn" value="2" required>
                                <label>2</label>
                            </li>
                            <li>
                                <input type="radio" name="timbreLearn" value="3" required>
                                <label>3</label>
                            </li>
                            <li>
                                <input type="radio" name="timbreLearn" value="4" required>
                                <label>4</label>
                            </li>
                            <li>
                                <input type="radio" name="timbreLearn" value="5" required>
                                <label>5</label>
                            </li>
                            <br><br>
                            <label for="timbreLearnText" class="form-extra-label">Your explanation here: </label>
                            <input id="timbreLearnText" type="text" name="timbreLearnText" class="form-extra-text">
                        </ul>
                                                
                        <label>
                            <strong>The process of sound synthesis</strong> - There are many different techniques used to synthesize instruments. Frequency filters 
                            and amplitude-time envelopes are common effects used in this process to create a desired sound, often applied to a base 
                            waveform generated by a mathematical function or algorithm. 
                        </label>
                        <ul class="likert">
                            <li>
                                <input type="radio" name="synthLearn" value="1" required>
                                <label>1</label>
                            </li>
                            <li>
                                <input type="radio" name="synthLearn" value="2" required>
                                <label>2</label>
                            </li>
                            <li>
                                <input type="radio" name="synthLearn" value="3" required>
                                <label>3</label>
                            </li>
                            <li>
                                <input type="radio" name="synthLearn" value="4" required>
                                <label>4</label>
                            </li>
                            <li>
                                <input type="radio" name="synthLearn" value="5" required>
                                <label>5</label>
                            </li>
                            <br><br>
                            <label for="synthLearnText" class="form-extra-label">Your explanation here: </label>
                            <input id="synthLearnText" type="text" name="synthLearnText" class="form-extra-text">
                        </ul>

                        <label>
                            <strong>Frequency filters</strong> - Frequency filters modify the amplitude of different frequency components of a single signal. Most 
                            commonly, they are used to categorically remove either a signal’s high frequency or low-frequency components.       
                        </label>
                        <ul class="likert">
                            <li>
                                <input type="radio" name="filterLearn" value="1" required>
                                <label>1</label>
                            </li>
                            <li>
                                <input type="radio" name="filterLearn" value="2" required>
                                <label>2</label>
                            </li>
                            <li>
                                <input type="radio" name="filterLearn" value="3" required>
                                <label>3</label>
                            </li>
                            <li>
                                <input type="radio" name="filterLearn" value="4" required>
                                <label>4</label>
                            </li>
                            <li>
                                <input type="radio" name="filterLearn" value="5" required>
                                <label>5</label>
                            </li>
                            <br><br>
                            <label for="filterLearnText" class="form-extra-label">Your explanation here: </label>
                            <input id="filterLearnText" type="text" name="filterLearnText" class="form-extra-text">
                        </ul>

                        <label>
                            <strong>The frequency domain / Fourier transforms</strong> - The frequency domain is a way of analyzing signals, where instead of looking 
                            at how their amplitude changes over time, it looks at what frequency components make up the signal. The Frequency domain is 
                            typically calculated by applying the Fourier Transform to the signal’s time domain information.     
                        </label>
                        <ul class="likert">
                            <li>
                                <input type="radio" name="freqLearn" value="1" required>
                                <label>1</label>
                            </li>
                            <li>
                                <input type="radio" name="freqLearn" value="2" required>
                                <label>2</label>
                            </li>
                            <li>
                                <input type="radio" name="freqLearn" value="3" required>
                                <label>3</label>
                            </li>
                            <li>
                                <input type="radio" name="freqLearn" value="4" required>
                                <label>4</label>
                            </li>
                            <li>
                                <input type="radio" name="freqLearn" value="5" required>
                                <label>5</label>
                            </li>
                            <br><br>
                            <label for="freqLearnText" class="form-extra-label">Your explanation here: </label>
                            <input id="freqLearnText" type="text" name="freqLearnText" class="form-extra-text">
                        </ul>
                            
                    </div>

                    <button type="submit">Submit</button>
                         
                    <br><br>
                    <div class="nextButton">
                        <a class="nextText" href="/conclusion" data-link>Next<a/>
                    </div>

                </form>
            </div>
        `;
    }
}