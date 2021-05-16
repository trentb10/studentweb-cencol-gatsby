import React from 'react';
import Collapsible from 'react-collapsible';
import Helmet from 'react-helmet';
import { withPrefix, Link } from 'gatsby';
import { siteMetadata } from '../../../gatsby-config';

import Layout from '../../components/layout';

// Image imports

import atsSketch1 from '../../images/works/amp-the-sound/sketch-1.jpg';

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
        reviewed or have a write-up for, whether it was paid or for free
      </p>

      <p>
        Because we were a startup, I had the opportunity to design the logo:
      </p>

      <p>
        <div>
          <img src={atsSketch1} />
        </div>
      </p>
    </Layout>
  );
}