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
                    We will now go through each dimension to hear its effect on the final sound. You can also see the effect that each slider has on the sound by observing the 
                    black graph on the right (the result of a Fourier Transform on the sound). 
                    <br>
                    First reset the dimensions using the “Submit” button on the bottom 
                    left (the drop-down menu above it should say “Reset”). The timbre sliders should all return to their center positions. 
                    <br><br>

                    For the <mark class="red">Spectrum</mark> dimension, hold down any key that triggers a note. You should hear a continuous note. While still holding down the key, use 
                    your mouse to move the spectrum slider. You should now hear the sound changing as the slider is moved. Move the slider to its lowest and then 
                    its highest position to roughly familiarize yourself with what this dimension is capable of. 
                    <br><br>
                    Perceptually, the sound is more <b>hollow</b> for lower spectrum values, but becomes more <b>full</b> as the spectrum value increases from left to right.
                    From a technical standpoint, the spectrum dimension controls the base wave-shape of the sound. This dimension provides the foundational sound of the timbre explorer 
                    which is further shaped by the other three dimensions.
                    <br>
                    When finished, release the held key and reset the dimensions again (Use “Reset” preset and click the “Submit” button, bottom right). 
                    <br><br>

                    For the <mark class="yellow-bright">Brightness</mark> dimension, repeat the same process, but this time use the Brightness slider. Hold down a note key and move the
                    brightness slider to observe its full range of effects. Reset when you are done. 
                    <br><br>
                    Perceptually, sounds with a low brightness are <b>dull</b> sounding, and as you increase the brightness from left to right, you'll hear the sound become more and more <b>bright</b>, 
                    up to a point where it begins to sound thin and tinny. From a technical standpoint, the brightness is a frequency filter. In the middle of the brightness range, the filter
                    is off and no effect is applied. Below this neutral range, the filter is a low-pass filter, which blocks high-frequencies and allows low-frequencies to "pass", and above 
                    the neutral range, the filter is a high-pass filter, which blocks low-frequencies and allow high-frequencies to pass.    
                    <br><br>

                    Now for the <mark class="green">Articulation</mark>, we will do something slightly different. To observe its effects you will need to continuously press and release a note 
                    key. While you do this, use the mouse to change the articulation range slider. Each time you press the note key, the sound should be slightly different depending on the 
                    position of the slider. To fully hear the effect you may need to briefly hold the key before releasing it. As before, reset when you are finished.
                    <br><br>
                    This slider begins to introduce time variance to the timbre. Perceptually, the best way to describe the effect is through onomatopoeias. As in the brightness dimension, we 
                    have a neutral setting in the middle of the articulation range. At low articualtion values, the sound is an increasingly pronounced <b>"BWAA"</b> sound. At high articulation values, 
                    the sound becomes more of a <b>"NYUU"</b> sound. This sound is also caused by a filter but, unlike the brightness filter, this one has a cut-off value that moves over time.
                    <br><br>

                    For the <mark class="blue">Envelope</mark>, the process is the same as the articulation. Continuously press and release a key while changing the envelope slider. Again, you 
                    may need to briefly hold the key each time before releasing, in order to hear the full effect of this dimension.
                    <br><br>
                    This dimension which controls how the overall amplitude of the sound changes over time. Perceptually, this dimension is primarily about the onset of the sound, the way the sound 
                    changes at the start. Sounds with a low envelope value have more <b>sudden</b> onsets, as would be heard in percussive sounds like drums, xylophones etc. Sounds with a high envelope value 
                    have more <b>gradual</b> onsets, as would be heard in bowed string instruments or wind instruments. At extreme ends of the range, sounds also have a longer "release". This is the time that
                    it takes for the sound's amplitude to return to zero.
                    <br><br> 

                    <p style="text-align:center">*  *  *</p>
                    <br>
                    With the walk-through completed you should now be able to use the Timbre Explorer and continue to the first task of the study.
                    <br><br>
                    In the first task you will be presented with 2 sounds: A and B. The Timbre Explorer parameters will be set to those of sound A.
                    Listen to both sounds and <strong>move the indicated slider</strong> to move from sound A to sound B.<br><br>
                    For each pair of sounds, when you think the timbre explorer settings <strong>match sound B</strong>, you should continue to the next pair. 
                    Click next when you are ready to begin... 
                </p>
                <br>
                <div class="nextButton">
                    <a class="nextText" href="/training1" data-link>Next</a>
                </div>
            </div>
        `;
    }
}