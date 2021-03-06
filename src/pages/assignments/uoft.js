import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import { siteMetadata } from '../../../gatsby-config';

import Layout from '../../components/layout';

export default function UofT() {
  return (
    <Layout title="Assignments from University of Toronto">
      <Helmet>
        <title>UofT Assignments - {siteMetadata.title}</title>
      </Helmet>
      <p>
        Here are some select assignments I have completed from the University 
        of Toronto:
      </p>

      <h2>ENGD94 Stranger than Fiction</h2>
            
      <li>
        <Link to="/assignments/uoft/life-after-grad">
          <i>Life After Grad</i> (2018) - Term Documentary Project
        </Link>
      </li>

    </Layout>
  );
}

/**
 * 
 * trentb10 (ﾉ◕ヮ◕)ﾉ*:・ﾟ✧
 * 
 */