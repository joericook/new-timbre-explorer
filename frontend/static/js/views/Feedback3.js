import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Feedback3");
    }

    async getHtml() {
        return /*html*/`
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
                                <input type="radio" id="task3DifficultyChoice1" name="task3Difficulity" value="1" required>
                                <label for="task3DifficultyChoice1">Very Easy</label>
                            </li>
                            <li>
                                <input type="radio" id="task3DifficultyChoice2" name="task3Difficulity" value="2" required>
                                <label for="task3DifficultyChoice2">Easy</label>
                            </li>
                            <li>
                                <input type="radio" id="task3DifficultyChoice3" name="task3Difficulity" value="3" required>
                                <label for="task3DifficultyChoice3">Neutral</label>
                            </li>
                            <li>
                                <input type="radio" id="task3DifficultyChoice4" name="task3Difficulity" value="4" required>
                                <label for="task3DifficultyChoice4">Challenging</label>
                            </li>
                            <li>
                                <input type="radio" id="task3DifficultyChoice5" name="task3Difficulity" value="5" required>
                                <label for="task3DifficultyChoice5">Very Challenging</label>
                            </li>
                        </ul>

                        <label>How much did you enjoy the task you just completed?:</label>
                        <ul class="likert">
                            <li>
                                <input type="radio" id="task3EnjoymentChoice1" name="task3Enjoyment" value="1" required>
                                <label for="task3EnjoymentChoice1">Not at all</label>
                            </li>
                            <li>
                                <input type="radio" id="task3EnjoymentChoice2" name="task3Enjoyment" value="2" required>
                                <label for="task3EnjoymentChoice2">Slightly</label>
                            </li>
                            <li>
                                <input type="radio" id="task3EnjoymentChoice3" name="task3Enjoyment" value="3" required>
                                <label for="task3EnjoymentChoice3">Somewhat</label>
                            </li>
                            <li>
                                <input type="radio" id="task3EnjoymentChoice4" name="task3Enjoyment" value="4" required>
                                <label for="task3EnjoymentChoice4">Moderately</label>
                            </li>
                            <li>
                                <input type="radio" id="task3EnjoymentChoice5" name="task3Enjoyment" value="5" required>
                                <label for="task3EnjoymentChoice5">Very Much</label>
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
                                <input type="radio" id="timbreLearnChoice1" name="timbreLearn" value="1" required>
                                <label for="timbreLearnChoice1">1</label>
                            </li>
                            <li>
                                <input type="radio" id="timbreLearnChoice2" name="timbreLearn" value="2" required>
                                <label for="timbreLearnChoice2">2</label>
                            </li>
                            <li>
                                <input type="radio" id="timbreLearnChoice3" name="timbreLearn" value="3" required>
                                <label for="timbreLearnChoice3">3</label>
                            </li>
                            <li>
                                <input type="radio" id="timbreLearnChoice4" name="timbreLearn" value="4" required>
                                <label for="timbreLearnChoice4">4</label>
                            </li>
                            <li>
                                <input type="radio" id="timbreLearnChoice5" name="timbreLearn" value="5" required>
                                <label for="timbreLearnChoice5">5</label>
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
                                <input type="radio" id="synthLearnChoice1" name="synthLearn" value="1" required>
                                <label for="synthLearnChoice1">1</label>
                            </li>
                            <li>
                                <input type="radio" id="synthLearnChoice2" name="synthLearn" value="2" required>
                                <label for="synthLearnChoice2">2</label>
                            </li>
                            <li>
                                <input type="radio" id="synthLearnChoice3" name="synthLearn" value="3" required>
                                <label for="synthLearnChoice3">3</label>
                            </li>
                            <li>
                                <input type="radio" id="synthLearnChoice4" name="synthLearn" value="4" required>
                                <label for="synthLearnChoice4">4</label>
                            </li>
                            <li>
                                <input type="radio" id="synthLearnChoice5" name="synthLearn" value="5" required>
                                <label for="synthLearnChoice5">5</label>
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
                                <input type="radio" id="filterLearnChoice1" name="filterLearn" value="1" required>
                                <label for="filterLearnChoice1">1</label>
                            </li>
                            <li>
                                <input type="radio" id="filterLearnChoice2" name="filterLearn" value="2" required>
                                <label for="filterLearnChoice2">2</label>
                            </li>
                            <li>
                                <input type="radio" id="filterLearnChoice3" name="filterLearn" value="3" required>
                                <label for="filterLearnChoice3">3</label>
                            </li>
                            <li>
                                <input type="radio" id="filterLearnChoice4" name="filterLearn" value="4" required>
                                <label for="filterLearnChoice4">4</label>
                            </li>
                            <li>
                                <input type="radio" id="filterLearnChoice5" name="filterLearn" value="5" required>
                                <label for="filterLearnChoice5">5</label>
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
                                <input type="radio" id="freqLearnChoice1" name="freqLearn" value="1" required>
                                <label for="freqLearnChoice1">1</label>
                            </li>
                            <li>
                                <input type="radio" id="freqLearnChoice2" name="freqLearn" value="2" required>
                                <label for="freqLearnChoice2">2</label>
                            </li>
                            <li>
                                <input type="radio" id="freqLearnChoice3" name="freqLearn" value="3" required>
                                <label for="freqLearnChoice3">3</label>
                            </li>
                            <li>
                                <input type="radio" id="freqLearnChoice4" name="freqLearn" value="4" required>
                                <label for="freqLearnChoice4">4</label>
                            </li>
                            <li>
                                <input type="radio" id="freqLearnChoice5" name="freqLearn" value="5" required>
                                <label for="freqLearnChoice5">5</label>
                            </li>
                            <br><br>
                            <label for="freqLearnText" class="form-extra-label">Your explanation here: </label>
                            <input id="freqLearnText" type="text" name="freqLearnText" class="form-extra-text">
                        </ul>
                            
                    </div>
                    <br>
                    <div class="submit-row">
                        <!-- Prevent default behaviour and save to Data object -->
                        <button onclick="event.preventDefault(); saveForm('feedback3');" id="feedback3Submit" class="submit-button">Submit</button>
                        <div class="submit-warning" id="feedback3Warning">
                            <p style="margin: 0.3em 0.5em 0 0.5em;">All questions must be answered before continuing...</p>
                        </div>
                    </div>
                </form>  
                <div class="nextButton">
                    <a onclick="sendData()" id="feedback3Next" class="nextText" style="display: none" href="/conclusion" data-link>Next</a>
                </div>
            </div>
        `;
    }
}