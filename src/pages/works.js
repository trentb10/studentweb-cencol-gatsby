import React from 'react';
import Helmet from 'react-helmet';
import { withPrefix, Link } from 'gatsby';
import { siteMetadata, siteMetaData } from '../../gatsby-config';
import Collapsible from 'react-collapsible';

import Layout from '../components/layout'

export default function Works() {
  return (
    <Layout title="Works">
      <Helmet>
        <title>Assignments - {siteMetadata.title}</title>
      </Helmet>

      <p>
        Here's a collection of some works I have completed.
      </p>

      <h2>Select a sub-section:</h2>

      <a><Link to ="/works/24our-music">
        <div class="non-collapsible-title t24ourmusic">
          24Our Music
        </div>
      </Link></a>
      <a><Link to="/works/amp-the-sound">
        <div class="non-collapsible-title amp-the-sound">
          Amp the Sound
        </div>
      </Link></a>
      <a><Link to="/works/dollar-gamers">
      <div class="non-collapsible-title dollargamers">
        Dollar Gamers
      </div>
      </Link></a>
      <a><Link to="/works/feed-my-curiosity">
      <div class="non-collapsible-title feedmycuriosity">
        Feed My Curiosity
      </div>
      </Link></a>
      <Collapsible 
        classParentString="collapsible-main-container"
        triggerClassName="collapsible-title"
        triggerOpenedClassName="collapsible-title"
        trigger="Personal Projects"
      >
        <Link to="personal-works/t-bot">
          <div class="collapsible-content">
            T-Bot Guild Moderation
          </div>
        </Link>
        <Link to="personal-works/trentb-dream-world">
          <div class="collapsible-content">
            Trent B's Dream World!
          </div>
        </Link>
      </Collapsible>
            
    </Layout>
  );
}