import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Consent");
    }

    async getHtml() {
        return /*html*/`
            <div class="infoContainer">
                <h1 class="pageTitle">Consent</h1>
                <br>
                <p>
                    Please confirm the following and click <strong>Next</strong> when you are ready for some checks. 
                </p>
                <h3>Study Title</h3>
                <p>
                    The Timbre Explorer: Test your perception of tones and sounds  
                </p>
                <h3>Researchers</h3>
                <p>
                    Joseph Rome Innes Cook and Joshua Ryan Lam supervised by Dr Charalampos Saitis  
                </p>
                <h3>Queen Mary Ethics of Research Committee reference number: </h3>
                <p>
                    QMERC20.316
                </p>
                <p style="text-align:center">*  *  *</p>
                <p>
                    Thank you for your interest in this research.  
                    <br>
                    Should you wish to participate in the study, <strong>please consider the following statements.</strong> 
                    <br>
                    Before submitting the consent form, you should <strong>ensure that you agree with all of the following statements</strong>.  
                    <br>
                    By doing so <strong>you confirm that you are willing to participate in this research</strong>, however you are reminded that 
                    <strong>you are free to withdraw your participation</strong> at any time.       
                </p>
                <ul>
                    <li>I confirm that I have read the <strong>Participant Information Sheet</strong> for the above study; or it has been read to me. I have had 
                    the opportunity to consider the information, ask questions and have had these answered satisfactorily. </li>
                    <br>
                    <li>I understand that <strong>my participation is voluntary</strong> and that <strong>I am free to stop taking part in the study at any time</strong> without 
                    giving any reason and without my rights being affected. </li>
                    <br>
                    <li>I understand that <strong>my data will be accessed by the researchers</strong>. </li>
                    <br>
                    <li>I understand that <strong>my data will be securely stored</strong> in GDPR compliant cloud and physical servers in London, UK and in 
                    accordance with the data protection guidelines of the Queen Mary University of London in fully anonymised form.</li>
                    <br>
                    <li>I understand that <strong>I can access the information I have provided and request destruction of that information</strong> at any time 
                    after I complete the study. </li>
                    <br>
                    <li>I understand that the <strong>researchers will not identify me in any publications</strong> and other study outputs using personal information
                    obtained from this study. </li>
                    <br>
                    <li>I understand that the <strong>information collected about me will be used to support other research</strong> in the future, and it <strong>may be 
                    shared in anonymised form</strong> with other researchers. </li>
                    <br>
                    <li><strong>I agree to take part</strong> in the above study. </li>
                </ul>
                <p>
                    Participants should read <a href="http://www.arcs.qmul.ac.uk/media/arcs/policyzone/Privacy-Notice-for-Research-Participants.pdf" target="_blank" rel="noopener noreferrer">Queen Mary’s privacy notice</a> 
                    for research participants which contains <strong>important information about your personal data and your rights</strong> in this respect.  
                    <br><br>
                    If you have any <strong>questions relating to data protection</strong>, please contact Data Protection Officer, Queens’ Building, Mile End Road, 
                    London, E1 4NS or data-protection@qmul.ac.uk or 020 7882 7596. 
                    <br><br>
                    By clicking <strong>Next</strong> I confirm that I understand the points mentioned above and that I agree with them. 
                </p>
                <br>
                <div class="nextButton">
                    <a class="nextText" href="/consentdl" data-link>Next</a>
                </div>
            </div>
        `;
    }
}