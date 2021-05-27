import React from 'react';
import Helmet from 'react-helmet';
import { withPrefix, Link } from 'gatsby';
import { siteMetadata } from '../../../../gatsby-config';

import Layout from '../../../components/layout';

// Image imports

import thumbnailDreamWorld from "../../../images/works/personal-works/trentb-dream-world/thumbnail.png";

export default function TrentBDreamWorld() {
  return (
    <Layout title="Trent B's Dream World!">
      <Helmet>
        <title>Trent B's Dream World! - {siteMetadata.title}</title>
      </Helmet>

      <p>
        <div>
          <img src={thumbnailDreamWorld} />
        </div>
      </p>

      <p>
        <i>Trent B's Dream World!</i> is my personal website made using GatsbyJS!
      </p>
    </Layout>
  );
}