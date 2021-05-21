import React from 'react';
import Helmet from 'react-helmet';
import { withPrefix, Link } from 'gatsby';
import { siteMetadata } from '../../../gatsby-config';

import Layout from '../../components/layout';

// Image Imports

// Image Styling

export default function FeedMyCuriosity() {
  return (
    <Layout title="Feed My Curiosity">
      <Helmet>
        <title>Feed My Curiosity - {siteMetadata.title}</title>
      </Helmet>

      <p>
        My current venture!
      </p>
    </Layout>
  );
}