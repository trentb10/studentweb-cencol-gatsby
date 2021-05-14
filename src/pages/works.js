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

      <div class="collapsible-main-container collapsible-title">
        24Our Music
      </div>
      <div class="collapsible-main-container collapsible-title">
        Amp the Sound
      </div>
      <div class="collapsible-main-container collapsible-title">
        Dollar Gamers
      </div>
      <div class="collapsible-main-container collapsible-title">
        Feed My Curiosity
      </div>
      <Collapsible 
        classParentString="collapsible-main-container"
        triggerClassName="collapsible-title"
        triggerOpenedClassName="collapsible-title"
        trigger="Personal Projects"
      >
        <div class="collapsible-content">
          T-Bot Guild Moderation
        </div>
        <div class="collapsible-content">
          Trent B's Dream World!
        </div>
      </Collapsible>
            
    </Layout>
  );
}