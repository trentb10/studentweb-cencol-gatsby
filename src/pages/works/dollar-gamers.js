import React from 'react';
import Helmet from 'react-helmet';
import { withPrefix, Link } from 'gatsby';
import { siteMetadata } from '../../../gatsby-config';

import Layout from '../../components/layout';

// Image Imports

// Image Styling

export default function DollarGamers() {
  return (
    <Layout title="Dollar Gamers">
      <Helmet>
        <title>Dollar Gamers - {siteMetadata.title}</title>
      </Helmet>

      <p>
        Dollar Gamers was another magazine company started by my friend and 
        business parter and myself.
      </p>

      <p>
        Just like what I did with 24Our Music and Amp the Sound, I wrote review 
        and write-up articles, but this time it was on independent video games 
        that were cheap. 
      </p>
    </Layout>
  );
}