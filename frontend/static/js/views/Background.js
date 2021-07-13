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
                    Before we begin, please answer the following questions about yourself:<br>
                </p>
                <br>
                <form id="backgroundForm">
                    <div class="roundedBox">
                        <p><strong>1) What is your age in years?:</strong></p> 
                        <input type="number" id="ageInput" name="age" required>
                        <br><br>
                        <p><strong>2) What is your gender?:</strong></p>
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
                            <input type="text" id="self-describedGender" name="otherGender" style="width:7vw">
                        </div>
                        <br>
                        <p><strong>3) In what country did you spend the formative years of your childhood and youth?:</strong></p>
                        <input type="text" id="countryInput1" name="countryBorn" required>
                        <br><br>
                        <p><strong>4) What is your current country of residency?:</strong></p>
                        <input type="text" id="countryInput2" name="countryCurrent" required>
                        <br><br>
                        <p><strong>5) Do you knowingly have any hearing loss or impairment?:</strong></p>
                        <div>
                            <input type="radio" id="hearingLossChoice1" name="hearingLoss" value="none" required>
                            <label for="hearingLossChoice1">No</label>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="radio" id="hearingLossChoice2" name="hearingLoss" value="minor" required>
                            <label for="hearingLossChoice2">Yes, minor hearing loss or tinnitus</label>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="radio" id="hearingLossChoice3" name="hearingLoss" value="major" required>
                            <label for="hearingLossChoice3">Yes, major hearing loss or impairment</label>
                            <br><br>
                        </div>
                        <p><strong>6) Which title best describes you?:</strong></p>
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
                        <br><br>
                    </div>

                    <br><br>
                    <div class="roundedBox">
                        <p>
                            For the following, rate your familiarity with these concepts from 1-4, with 1 being never heard of it/not at all familiar
                             and 4 being that you are extremely familiar with the concept, for example if you work with it on a daily 
                            basis, or have formally studied it:
                        </p>

                        <label><strong>7) Playing the piano/keyboards</strong></label>
                        <ul class="likert">
                            <li class="options-4">
                                <input type="radio" id="pianoKnowledgeChoice1" name="pianoKnowledge" value="1" required>
                                <label for="pianoKnowledgeChoice1">1: Never heard of it / not at all familiar</label>
                            </li>
                            <li class="options-4">
                                <input type="radio" id="pianoKnowledgeChoice2" name="pianoKnowledge" value="2" required>
                                <label for="pianoKnowledgeChoice2">2: Heard of it / some familiarity</label>
                            </li>
                            <li class="options-4">
                                <input type="radio" id="pianoKnowledgeChoice3" name="pianoKnowledge" value="3" required>
                                <label for="pianoKnowledgeChoice3">3: Familiar (e.g., formally studied it at some point)</label>
                            </li>
                            <li class="options-4">
                                <input type="radio" id="pianoKnowledgeChoice4" name="pianoKnowledge" value="4" required>
                                <label  for="pianoKnowledgeChoice4">4: Extremely familiar (e.g., extensively studied it and/or use it on a daily basis)</label>
                            </li>
                        </ul>

                        <label><strong>8) Timbre (tone/sound quality)</strong></label>
                        <ul class="likert">
                            <li class="options-4">
                                <input type="radio" id="timbreKnowledgeChoice1" name="timbreKnowledge" value="1" required>
                                <label for="timbreKnowledgeChoice1">1: Never heard of it / not at all familiar</label>
                            </li>
                            <li class="options-4">
                                <input type="radio" id="timbreKnowledgeChoice2" name="timbreKnowledge" value="2" required>
                                <label for="timbreKnowledgeChoice2">2: Heard of it / some familiarity</label>
                            </li>
                            <li class="options-4">
                                <input type="radio" id="timbreKnowledgeChoice3" name="timbreKnowledge" value="3" required>
                                <label for="timbreKnowledgeChoice3">3: Familiar (e.g., formally studied it at some point)</label>
                            </li>
                            <li class="options-4">
                                <input type="radio" id="timbreKnowledgeChoice4" name="timbreKnowledge" value="4" required>
                                <label for="timbreKnowledgeChoice4">4: Extremely familiar (e.g., extensively studied it and/or use it on a daily basis)</label>
                            </li>
                        </ul>

                        <label><strong>9) The process of sound synthesis</strong></label>
                        <ul class="likert">
                            <li class="options-4">
                                <input type="radio" id="synthKnowledgeChoice1" name="synthKnowledge" value="1" required>
                                <label for="synthKnowledgeChoice1">1: Never heard of it / not at all familiar</label>
                            </li>
                            <li class="options-4">
                                <input type="radio" id="synthKnowledgeChoice2" name="synthKnowledge" value="2" required>
                                <label for="synthKnowledgeChoice2">2: Heard of it / some familiarity</label>
                            </li>
                            <li class="options-4">
                                <input type="radio" id="synthKnowledgeChoice3" name="synthKnowledge" value="3" required>
                                <label for="synthKnowledgeChoice3">3: Familiar (e.g., formally studied it at some point)</label>
                            </li>
                            <li class="options-4">
                                <input type="radio" id="synthKnowledgeChoice4" name="synthKnowledge" value="4" required>
                                <label for="synthKnowledgeChoice4">4: Extremely familiar (e.g., extensively studied it and/or use it on a daily basis)</label>
                            </li>
                        </ul>

                        <label><strong>10) Frequency filters</strong></label>
                        <ul class="likert">
                            <li class="options-4">
                                <input type="radio" id="filterKnowledgeChoice1" name="filterKnowledge" value="1" required>
                                <label for="filterKnowledgeChoice1">1: Never heard of it / not at all familiar</label>
                            </li>
                            <li class="options-4">
                                <input type="radio" id="filterKnowledgeChoice2" name="filterKnowledge" value="2" required>
                                <label for="filterKnowledgeChoice2">2: Heard of it / some familiarity</label>
                            </li>
                            <li class="options-4">
                                <input type="radio" id="filterKnowledgeChoice3" name="filterKnowledge" value="3" required>
                                <label for="filterKnowledgeChoice3">3: Familiar (e.g., formally studied it at some point)</label>
                            </li>
                            <li class="options-4">
                                <input type="radio" id="filterKnowledgeChoice4" name="filterKnowledge" value="4" required>
                                <label for="filterKnowledgeChoice4">4: Extremely familiar (e.g., extensively studied it and/or use it on a daily basis)</label>
                            </li>
                        </ul>

                        <label><strong>11) The frequency domain / Fourier transform</strong></label>
                        <ul class="likert">
                            <li class="options-4">
                                <input type="radio" id="freqKnowledgeChoice1" name="freqKnowledge" value="1" required>
                                <label for="freqKnowledgeChoice1">1: Never heard of it / not at all familiar</label>
                            </li>
                            <li class="options-4">
                                <input type="radio" id="freqKnowledgeChoice2" name="freqKnowledge" value="2" required>
                                <label for="freqKnowledgeChoice2">2: Heard of it / some familiarity</label>
                            </li>
                            <li class="options-4">
                                <input type="radio" id="freqKnowledgeChoice3" name="freqKnowledge" value="3" required>
                                <label for="freqKnowledgeChoice3">3: Familiar (e.g., formally studied it at some point)</label>
                            </li>
                            <li class="options-4">
                                <input type="radio" id="freqKnowledgeChoice4" name="freqKnowledge" value="4" required>
                                <label for="freqKnowledgeChoice4">4: Extremely familiar (e.g., extensively studied it and/or use it on a daily basis)</label>
                            </li>
                        </ul>
                    </div>
                    <br>
                    <div class="submit-row">
                        <!-- Prevent default behaviour and save to Data object -->
                        <button onclick="event.preventDefault(); saveForm('background')" id="backgroundSubmit" class="submit-button">Submit</button>
                        <div class="submit-warning" id="backgroundWarning">
                            <p style="margin: 0.3em 0.5em 0 0.5em;">All questions must be answered before continuing...</p>
                        </div>
                    </div>
                </form>  
                <div class="nextButton">
                    <a id="backgroundNext" class="nextText" style="display: none" href="/walkthrough" data-link>Next</a>
                </div>
            </div>
        `;
    }
}