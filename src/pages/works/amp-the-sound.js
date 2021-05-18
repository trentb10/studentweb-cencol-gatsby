import React from 'react';
import Collapsible from 'react-collapsible';
import Helmet from 'react-helmet';
import { withPrefix, Link } from 'gatsby';
import { siteMetadata } from '../../../gatsby-config';

import Layout from '../../components/layout';

// Image imports

import atsSketch1 from '../../images/works/amp-the-sound/sketch-1.jpg';
import atsSketch2 from '../../images/works/amp-the-sound/sketch-2.jpg';
import atsSketch3 from '../../images/works/amp-the-sound/ampthesounds.png';
import atsSketch4 from '../../images/works/amp-the-sound/ampthesounds2.png';
import atsFinal1 from '../../images/works/amp-the-sound/900x150ampthesoundfinal-full_colour.png';
import atsFinal2 from '../../images/works/amp-the-sound/900x150ampthesoundfinal-full_dark1.png';
import atsFinal3 from '../../images/works/amp-the-sound/900x150ampthesoundfinal-full_lite1.png';
import atsFinal4 from '../../images/works/amp-the-sound/900x600ampthesoundfinal-ats_colour.png';
import atsFinal5 from '../../images/works/amp-the-sound/650x650ampthesoundfinal-a-icon_colour1.png';

// Image styling

let imageResize = {
  "width": "250px",
  "height": "auto"
}

export default function AmpTheSound() {
  return (
    <Layout title="Amp the Sound">
      <Helmet>
        <title>Amp the Sound - {siteMetadata.title}</title>
      </Helmet>

      <p>
        A few months after I stopped writing for 24Our Music, my business 
        partner/friend and I attempted to start another online music magazine
        company called <i>Amp the Sound</i>. It was very similar to 24Our 
        Music where we would write reviews and write-ups for artists. Sometimes 
        artists/their record labels would submit a request to have their music 
        reviewed or have a write-up for, whether it was paid or for free.
      </p>

      <p>
        Because we were a startup, I had the opportunity to design the logo (see 
        Figure 1):
      </p>

      <p>
        <div>
          <img src={atsSketch1} />
        </div>
        <div class="figure-caption">Figure 1: Logo sketches for Amp the Sound.</div>
      </p>

      <p>
        I envisioned the logo to be sleek yet simple. I also wanted to do 
        something cool with the A in the first logo, in which the circle for the 
        letter would be represented by a volume knob with a fade effect to 
        visualize "turning up the volume." In the second logo, I used the volume 
        knob for the O. The volume knob was inspired by the icon for 
        L&uacute;cio's "Amp it Up!" ability in OW.
      </p>

      <p>
        I played around with the use of the volume knob being represented in the
        "a", as seen in Figure 2:
      </p>

      <p>
        <div>
          <img src={atsSketch2} />
        </div>
        <div class="figure-caption">
          Figure 2: Logo sketches experimenting with the use of the volume knob 
          in the letter A.
        </div>
      </p>

      <p>
        For the first two A's, I experimented with how the fade effect for the 
        volume knob would look. For the third A, I experimented with the other 
        version of the letter, depending on whether I used a font that used that 
        A.
      </p>

      <p>
        Multiple drafts of the logo were done digitally in Adobe Photoshop CS6, 
        with different colour schemes (see Figure 3) and with the volume knob 
        symbol and effect (see Figure 4):
      </p>

      <p>
        <div>
          <img src={atsSketch3} />
        </div>
        <div class="figure-caption">
          Figure 3: Digital sketches of the logo with different colour schemes.
        </div>
      </p>

      <p>
        <div>
          <img src={atsSketch4} />
        </div>
        <div class="figure-caption">
          Figure 4: Digital sketches of the logo with more colour schemes and 
          the volume knob.
        </div>
      </p>

      <p>
        The colour schemes I experimented with were Purle and Light Purple on
        White and Black respectively; a Neon Pink on White and Black; a Light 
        Purple on White with the volume knob; and a Light Neon Pink on White and
        Black. 
      </p>

      <p>
        I can't exactly remember why I didn't include the "fade effect" in the 
        digital drafts, but I think I didn't like how it turned out. Without the
        fade effect, the logo looks clean.
      </p>

      <p>
        After consultations with my business partners for the magazine, the 
        final versions of the logos were released (see Figures 5, 6, 7, 8, and 
        9).
      </p>

      <p>
        <div>
          <img src={atsFinal1} />
        </div>
        <div class="figure-caption">
          Figure 5: The final logo for Amp the Sound, full text, purple on 
          transparent.
        </div>
      </p>

      <p>
        <div>
          <img src={atsFinal2} />
        </div>
        <div class="figure-caption">
          Figure 6: The final logo for Amp the Sound, full text, dark on 
          transparent.
        </div>
      </p>
      
      <p>
        <div>
          <img src={atsFinal3} />
        </div>
        <div class="figure-caption">
          Figure 7: The final logo for Amp the Sound, full text, lite on 
          transparent.
        </div>
      </p>

      <p>
        <div>
          <img style={imageResize} src={atsFinal4} />
        </div>
        <div class="figure-caption">
          Figure 8: The final logo for Amp the Sound, in "ATS" form, purple on 
          transparent.
        </div>
      </p>

      <p>
        <div>
          <img style={imageResize} src={atsFinal5} />
        </div>
        <div class="figure-caption">
          Figure 9: The final logo for Amp the Sound, in its icon form, purple 
          on transparent.
        </div>
      </p>
      
      <p>
        I really liked how the volume knob turned out in the final version. 
        Instead of going for a fade effect, I decided to make the knob a solid 
        colour, and then added a level indicator on the outside, using the same 
        colour as the knob. The volume knob pointer is set on full volume to 
        show that the "sound" has been amped and we have made your music heard 
        by reviewing/writing a write-up article for your music and having the 
        article featured on our front page. For the dark and lite versions, 
        the knob and indicator colours are transparent with the background, so 
        the knob can be seen.
      </p>

      <p>
        In the short form and icon versions of the logo, the volume knob is used 
        for both A's.
      </p>
    </Layout>
  );
}