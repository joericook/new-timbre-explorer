import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Info");
    }

    async getHtml() {
        return /*html*/`
            <div class="infoContainer">
                <h1>Participant Information</h1> 
                <br>
                <p>
                    Please read the following information carefully before proceeding to the study. 
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
                <h3>Invitation</h3>
                <p>
                    You are being invited to participate in a research study. Before you decide whether or not you wish 
                    to participate in this study, it is important for you to understand why the research is being done and 
                    what it will involve. Please take time to read the following information carefully and discuss it with 
                    others if you wish. Ask us questions if there is anything that is not clear or if you would like more 
                    information. 
                </p>
                <h3>What is the purpose of the study and what would taking part involve?</h3>
                <p>
                    The Timbre Explorer is a prototype digital sound synthesis system and interface designed to demonstrate 
                    perceptual dimensions of sound. It was created at QMUL’s Centre for Digital Music by Mr Lam as part of a 
                    masters project supervised by Dr Saitis. 
                    <br><br>
                    The purpose of this study is to evaluate the Timbre Explorer. The results will be helpful for the development 
                    of a web application for the education and study of how we perceive tones and sounds. 
                    <br><br>
                    The study is designed as a game. You will be presented with a digital synthesis interface and a series of “levels” 
                    wherein you will be tasked with identifying the perceptual dimension or dimensions along which two given sounds 
                    differ. Completing a level will generate a running score that will help track your progress. As you progress from 
                    one level to the next, tasks will become more challenging. 
                    <br><br>
                    Prior to the first level, you will be prompted to fill in a short questionnaire about your familiarity and 
                    experience with some concepts related to the study as well as very general personal data about your age, gender, 
                    country of formative years and country of residence, and the device that you are using. 
                    <br><br>
                    It will take a bit less than an hour to complete this study. The study will be conducted entirely online, and you 
                    will only have to participate once. Your replies to the survey questions and your interaction with the interface 
                    will be recorded for analysis. All data will be submitted at the end of the study. 
                </p>
                <h3>Why am I being invited?</h3>
                <p>
                    You are being invited to participate in this research study because you are over the age of 18 and have normal or 
                    corrected-to-normal vision and hearing. You should not take part in this study if you are under the age of 16 and 
                    if you are not able to perceive objects on a computer screen, listen to sound with headphones or through loudspeakers 
                    or if you can only access the study through a phone or tablet.       
                </p>
                <h3>Do I have to take part?</h3>
                <p>
                    This participant information sheet has been written to help you decide if you would like to take part. It is up to you 
                    whether you wish to take part. If you do decide to take part you will be free to withdraw at any time without needing to 
                    provide a reason, and with no penalties or detrimental effects.      
                </p>
                <h3>What are the possible benefits of taking part? </h3>
                <p>
                    Taking part in the study will support our research that aims to further our understanding of how humans perceive tones 
                    and sounds, and how we can build a sound synthesiser that will make it easier for everyone to learn about these and 
                    related concepts. At the same time, taking part in the study will help increase your understanding of the fundamental blocks 
                    of human auditory and musical perception, for instance, why a guitar sounds like a guitar.           
                </p>
                <h3>What are the possible disadvantages and risks of taking part?</h3>
                <p>
                    Keep in mind that this study involves sound. Sounds might be louder than expected and could potentially startle you or in 
                    a very unlikely scenario cause harm to your hearing. Please make sure that the volume of your headphones or speakers is on 
                    a low level before starting this study.        
                </p>
                <h3>Expenses and payments</h3>
                <p>
                    Upon completion of the study, you will enter a draw for a limited number of gift certificates each worth £20. To facilitate 
                    this, we will ask for your email address. However, we will store it separately from your personal data and responses 
                    collected during the study and delete it once the draw is done.     
                </p>
                <h3>What information about me will you be collecting?</h3>
                <p>
                    Data about your age, gender, country of formative years and country of residence occupation, your experience with music and your 
                    experience with the synthesiser and games interface will be collected through surveys, and very general information about your 
                    browser and device will be extracted automatically. In addition, the position of your mouse and mouse events (click and release) 
                    and the width and height of your browser window during the interaction with the interface will be recorded. None of the collected 
                    data will enable the researchers to identify you.     
                </p>
                <h3>How will my data be stored and who will have access to it?</h3>
                <p>
                    Your data information will be treated as strictly confidential and handled in accordance with the provisions of the Data Protection 
                    Act 2018 and comply with the data processing and storage policies of Queen Mary University of London. During the project, your data 
                    will be stored in fully anonymised format in a secure, GDPR compliant cloud database-as-server (e.g., MongoDB Atlas) and periodically 
                    backed up on encrypted and password protected at the School of Electronic Engineering and Computer Science of QMUL, and only the 
                    researchers and principal investigator of the study will be able to access it.        
                </p>
                <h3>When and how will my data be destroyed?</h3>
                <p>
                    When data collection is complete, the cloud databases will be moved offline permanently and deleted from the cloud. We will adopt 
                    best practices in sustainable research data management: all study code, data, and related documentation will be all open source and 
                    shared freely under an LGPL license (free to use or adapt with attribution) via the widely used repository GitHub for maximum 
                    accessibility, and also through the https://code.soundsoftware.ac.uk repository for sound and music research in the UK, hosted 
                    by the Centre for Digital Music (C4DM) at QMUL. Research data will also be transferred to the Queen Mary Research Online repository 
                    for long term open access and sharing.       
                </p>
                <h3>How will my data be used and shared?</h3>
                <p>
                    Your data will be used to prepare scientific reports of the study (journal publications, conference talks) or as teaching material. 
                    Your data will be saved entirely anonymised and it will not be possible to link the data to a particular person.       
                </p>
                <h3>Under what legal basis are you collecting this information?</h3>
                <p>
                    Queen Mary University of London processes personal data for research purposes in accordance with the lawful basis of ‘public task’.  
                    <br><br>
                    Please read Queen Mary’s privacy notice for research participants containing <strong>important information about your personal data and 
                    your rights</strong> in this respect.  
                    <br><br> 
                    <strong>If you have any questions</strong> relating to data protection, please contact Queen Mary’s Data Protection Officer, Queens’ 
                    Building, Mile End Road, London, E1 4NS or data-protection@qmul.ac.uk or 020 7882 7596.       
                </p>
                <h3>What will happen if I want to withdraw from this study?</h3>
                <p>
                    You can withdraw from this study at any time without providing a reason. Withdrawing will have no disadvantage for you, and you will hear 
                    no more about this study. Your data will only be submitted if you complete the study. If you wish to withdraw after you have completed the 
                    study, you need only contact the experimenters (see below) with the date of your participation and all data from that date will be removed.       
                </p>
                <h3>What should I do if I have any concerns about this study?</h3>
                <p>
                    If you have any concerns about the manner in which the study was conducted, in the first instance, please contact the researcher 
                    responsible for the study Dr Charalampos Saitis: c.saitis@qmul.ac.uk.   
                    <br><br> 
                    If you have a complaint which you feel you cannot discuss with the researchers then you should contact the Research Ethics Facilitators by 
                    e-mail: research-ethics@qmul.ac.uk.  
                    <br><br> 
                    When contacting the Research Ethics Facilitators, please provide details of the study title, description of the study and QMERC reference 
                    number (where possible), the researcher(s) involved, and details of the complaint you wish to make. 
                </p>
                <h3>Who can I contact if I have any questions about this study?</h3>
                <p>
                    Joseph Rome Innes Cook: j.r.i.cook@se20.qmul.ac.uk 
                </p>
                <br>
                <div class="nextButton">
                    <a class="nextText" href="/consent" data-link>Next</a>
                </div>
            </div>    
        `;
    }
}