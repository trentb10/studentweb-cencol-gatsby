import React from 'react';
import Helmet from 'react-helmet';
import { withPrefix, Link } from 'gatsby';
import { siteMetadata } from '../../../gatsby-config';
import Collapsible from 'react-collapsible';

import Layout from '../../components/layout';

export default function PersonalWorks() {
  return (
    <Layout title="Personal Works">
      <Helmet>
        <title>Personal Works - {siteMetadata.title}</title>
      </Helmet>

      <p>
        Here's all of the personal works and projects I have undertaken! 
      </p>

      <h2>Select a project:</h2>

      <div class="personal-work-container">
        <div class="personal-work-screenshot">
        </div>
        <div class="personal-work-info-container">
          <div class="personal-work-info-title">
            Trent B's Dream World!
          </div>
          <span class="personal-work-info-divider" />
        </div>
      </div>

    </Layout>
  );
}