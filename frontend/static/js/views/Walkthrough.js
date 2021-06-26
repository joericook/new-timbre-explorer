import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Walkthrough");
    }

    async getHtml() {
        return /*html*/`
            <div class="infoContainer">
                <h1>Control Walkthrough</h1>
                <p>
                    This walkthrough will guide you through the basic controls of the Timbre Explorer.
                </p>
                <h2>Keyboard Controls</h2>
                <p>
                    To trigger notes, use the bottom 2 rows of the keyboard, the ones starting with ASDF and ZXC. As seen on the right, these rows form a piano 
                    roll, with each key triggering the corresponding note when pressed/held. For example, the “Z” key triggers a C note, with the “,” key 
                    triggering the C an octave up. The “A”, “F”, “K” and apostrophe/quotation marks do not trigger notes, representing the space between black keys 
                    on the piano. You can play up to 4 notes at the same time. 
                    <br><br>
                    If the notes being played are too loud or too quiet, their volume can be adjusted using the range slider element on the right, labeled 
                    “Volume”. Click and drag the slider until the volume is as desired.
                    <br><br>
                    To change which octave the piano roll plays, use the left and right arrow keys. 
                    <br><br>
                    Before moving on the next section, press any key to start the Web-Audio processing engine. (this should turn on the (red) graph on the top left).     
                </p>
                <h2>Timbre Controls</h2>
                <p>
                    To control the timbre dimensions, use the 4 (colored) range sliders at the top of the screen, which can be clicked and dragged to be changed.  
                    <br><br>
                    We will now go through each dimension to hear its effect on the final sound. First reset the dimensions using the “Submit” button on the bottom 
                    left (the drop-down menu above it should say “Reset”). The timbre sliders should all return to their center positions. 
                    <br><br>
                    For the <mark class="red">spectrum</mark> dimension, hold down any key that triggers a note. You should hear a continuous note. While still holding down the key, use 
                    your mouse to move the spectrum slider. You should now hear the sound changing as the slider is moved. Move the slider to its lowest and then 
                    its highest position to roughly familiarize yourself with what this dimension is capable of. When finished, release the held key and reset the 
                    dimensions again (Use “Reset” preset and click the “Submit” button, bottom left). 
                    <br><br>
                    For the <mark class="yellow">brightness</mark> dimension, repeat the same process, but this time use the Brightness slider, the second slider from the left. (Hold down a 
                    note key and move the brightness slider to observe its full range of effects. Reset when done). 
                    <br><br>
                    Now for the <mark class="green">articulation</mark>, we will do something slightly different. To observe its effects you will need to continuously press and release a note 
                    key. While you do this, use the mouse to change the Articulation range slider, the third from the left. Each time you press the note key, the 
                    sound should be slightly different depending on the position of the slider. To fully hear the effect you may need to briefly hold the key before 
                    releasing it. As before, reset when you are finished. 
                    <br><br>
                    For the <mark class="blue">envelope</mark>, the process is the same as the articulation. Continuously press and release a key while changing the envelope slider, the last 
                    slider from the left (slider on the far right). Again, you may need to briefly hold the key each time before releasing, in order to hear the full 
                    effect of this dimension. Reset when you are finished. 
                    <br><br><br>
                    And with that walk-through completed you should now be able to use the Timbre Explorer and continue with the rest of the study. 
                </p>
                <br>
                <div class="nextButton">
                    <a class="nextText" href="/training1" data-link>Next</a>
                </div>
            </div>
        `;
    }
}