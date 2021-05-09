import React from 'react';
import Helmet from 'react-helmet';
import { siteMetadata } from '../../gatsby-config';

import Layout from '../components/layout';

export default function AboutMe() {
    return (
        <Layout title="About Me!">
            <Helmet>
                <title>About Me! - {siteMetadata.title}</title>

                
            </Helmet>
        </Layout>
    );
}