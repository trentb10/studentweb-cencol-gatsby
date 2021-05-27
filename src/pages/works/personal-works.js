import React from 'react';
import Helmet from 'react-helmet';
import { withPrefix, Link } from 'gatsby';
import { siteMetadata } from '../../gatsby-config';
import Collapsible from 'react-collapsible';

import Layout from '../components/Layout';

export default function PersonalWorks() {
  return (
    <Layout title="Personal Works">
      <Helmet>
        <title>Personal Works - {siteMetadata.title}</title>
      </Helmet>
    </Layout>

    
  );
}