import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Background");
    }

    async getHtml() {
        return /*html*/`
            <div class="infoContainer">
                <h1>User Background</h1>
                <br>
                <p>
                    Before we begin, please answer the following questions about yourself:
                </p>
                <br>
                <form id="backgroundForm">
                    <div class="roundedBox">
                        <p>1) What is your age in years?:</p> 
                        <input type="number" id="ageInput" name="age" required>
                        <br><br>
                        <p>2) What is your gender?:</p>
                        <div>
                            <input type="radio" id="genderChoice1" name="gender" value="male" required>
                            <label for="genderChoice1">Male</label>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="radio" id="genderChoice2" name="gender" value="female" required>
                            <label for="genderChoice2">Female</label>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="radio" id="genderChoice3" name="gender" value="non-binary" required>
                            <label for="genderChoice3">Non-binary</label>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="radio" id="genderChoice4" name="gender" value="prefer not to disclose" required>
                            <label for="genderChoice4">Prefer not to disclose</label>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="radio" id="genderChoice5" name="gender" value="prefer to self-describe" required>
                            <label for="genderChoice5">Prefer to self-describe:</label>
                            <input type="text" id="self-describedGender" name="otherGender">
                        </div>
                        <br>
                        <p>3) In what country did you spend the formative years of your childhood and youth?:</p>
                        <input type="text" id="countryInput1" name="countryBorn" required>
                        <br><br>
                        <p>4) What is your current country of residency?:</p>
                        <input type="text" id="countryInput2" name="countryCurrent" required>
                        <br><br>
                        <p>5) Which title best describes you?:</p>
                        <div>
                            <input type="radio" id="musicianTitleChoice1" name="musicianTitle" value="Non-musician" required>
                            <label for="musicianTitleChoice1">Non-musician</label>
                            <br><br>
                            <input type="radio" id="musicianTitleChoice2" name="musicianTitle" value="Music-loving non-musician" required>
                            <label for="musicianTitleChoice2">Music-loving non-musician</label>
                            <br><br>
                            <input type="radio" id="musicianTitleChoice3" name="musicianTitle" value="Amateur musician" required>
                            <label for="musicianTitleChoice3">Amateur musician</label>
                            <br><br>
                            <input type="radio" id="musicianTitleChoice4" name="musicianTitle" value="Serious amateur musician" required>
                            <label for="musicianTitleChoice4">Serious amateur musician</label>
                            <br><br>
                            <input type="radio" id="musicianTitleChoice5" name="musicianTitle" value="Semi-professional musician" required>
                            <label for="musicianTitleChoice5">Semi-professional musician</label>
                            <br><br>
                            <input type="radio" id="musicianTitleChoice6" name="musicianTitle" value="Professional musician" required>
                            <label for="musicianTitleChoice6">Professional musician</label>
                        </div>
                    </div>

                    <br><br>
                    <div class="roundedBox">
                        <p>
                            For the following, rate your familiarity with these concepts from 1-5, with 1 being never heard of it/no 
                            experience and 5 being that you have extensive knowledge of the topic, for example if you work with it on a daily 
                            basis, or have formally studied it:
                        </p>

                        <label>6) Playing the piano/keyboards</label>
                        <ul class="likert">
                            <li>
                                <input type="radio" name="pianoKnowledge" value="1" required>
                                <label>1</label>
                            </li>
                            <li>
                                <input type="radio" name="pianoKnowledge" value="2" required>
                                <label>2</label>
                            </li>
                            <li>
                                <input type="radio" name="pianoKnowledge" value="3" required>
                                <label>3</label>
                            </li>
                            <li>
                                <input type="radio" name="pianoKnowledge" value="4" required>
                                <label>4</label>
                            </li>
                            <li>
                                <input type="radio" name="pianoKnowledge" value="5" required>
                                <label>5</label>
                            </li>
                        </ul>

                        <label>7) Timbre (tone/sound quality)</label>
                        <ul class="likert">
                            <li>
                                <input type="radio" name="timbreKnowledge" value="1" required>
                                <label>1</label>
                            </li>
                            <li>
                                <input type="radio" name="timbreKnowledge" value="2" required>
                                <label>2</label>
                            </li>
                            <li>
                                <input type="radio" name="timbreKnowledge" value="3" required>
                                <label>3</label>
                            </li>
                            <li>
                                <input type="radio" name="timbreKnowledge" value="4" required>
                                <label>4</label>
                            </li>
                            <li>
                                <input type="radio" name="timbreKnowledge" value="5" required>
                                <label>5</label>
                            </li>
                        </ul>

                        <label>8) The process of sound synthesis</label>
                        <ul class="likert">
                            <li>
                                <input type="radio" name="synthKnowledge" value="1" required>
                                <label>1</label>
                            </li>
                            <li>
                                <input type="radio" name="synthKnowledge" value="2" required>
                                <label>2</label>
                            </li>
                            <li>
                                <input type="radio" name="synthKnowledge" value="3" required>
                                <label>3</label>
                            </li>
                            <li>
                                <input type="radio" name="synthKnowledge" value="4" required>
                                <label>4</label>
                            </li>
                            <li>
                                <input type="radio" name="synthKnowledge" value="5" required>
                                <label>5</label>
                            </li>
                        </ul>

                        <label>9) Frequency filters</label>
                        <ul class="likert">
                            <li>
                                <input type="radio" name="filterKnowledge" value="1" required>
                                <label>1</label>
                            </li>
                            <li>
                                <input type="radio" name="filterKnowledge" value="2" required>
                                <label>2</label>
                            </li>
                            <li>
                                <input type="radio" name="filterKnowledge" value="3" required>
                                <label>3</label>
                            </li>
                            <li>
                                <input type="radio" name="filterKnowledge" value="4" required>
                                <label>4</label>
                            </li>
                            <li>
                                <input type="radio" name="filterKnowledge" value="5" required>
                                <label>5</label>
                            </li>
                        </ul>

                        <label>10) The frequency domain / Fourier transform</label>
                        <ul class="likert">
                            <li>
                                <input type="radio" name="freqKnowledge" value="1" required>
                                <label>1</label>
                            </li>
                            <li>
                                <input type="radio" name="freqKnowledge" value="2" required>
                                <label>2</label>
                            </li>
                            <li>
                                <input type="radio" name="freqKnowledge" value="3" required>
                                <label>3</label>
                            </li>
                            <li>
                                <input type="radio" name="freqKnowledge" value="4" required>
                                <label>4</label>
                            </li>
                            <li>
                                <input type="radio" name="freqKnowledge" value="5" required>
                                <label>5</label>
                            </li>
                        </ul>
                    </div>
                    <br><br>
                    <button onclick="event.preventDefault(); saveBackgroundForm()">Submit</button>
                </form>  
                <br><br>
                <div class="nextButton">
                    <a id="backgroundNext" class="nextText" style="display: none" href="/walkthrough" data-link>Next</a>
                </div>
            </div>
        `;
    }
}