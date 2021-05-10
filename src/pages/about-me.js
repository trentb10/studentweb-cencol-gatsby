import React from 'react';
import Helmet from 'react-helmet';
import { withPrefix, Link } from 'gatsby';
import { siteMetadata } from '../../gatsby-config';

import Layout from '../components/layout';

export default function AboutMe() {
    return (
        <Layout title="About Me!">
            <Helmet>
                <title>About Me! - {siteMetadata.title}</title>
                <script src={withPrefix('skillbox-script.js')} type="text/javascript" />
            </Helmet>

            <h2>What languages do I have experience with?</h2>

            <div class="skillbox-container">
                <div class="skillbox-skill-container">
                    <div class="skillbox-skill-header">
                        HTML5
                    </div>
                    <div class="skillbox-skill-meter-pt"></div>
                    <div class="skillbox-skill-meter-pt"></div>
                    <div class="skillbox-skill-meter-pt"></div>
                    <div class="skillbox-skill-meter-pt"></div>
                </div>
                <div class="skillbox-skill-info">
                    <p>
                        HTML5: 4/4!
                    </p>
                    <p>
                        Yeah, I like HTML!
                    </p>
                </div>
                <div class="skillbox-skill-container">
                    <div class="skillbox-skill-header">
                        CSS
                    </div>
                    <div class="skillbox-skill-meter-pt"></div>
                    <div class="skillbox-skill-meter-pt"></div>
                    <div class="skillbox-skill-meter-pt"></div>
                    <div class="skillbox-skill-meter-pt"></div>
                </div>
                <div class="skillbox-skill-info">
                    <p>
                        CSS info
                    </p>
                </div>
                <div class="skillbox-skill-container">
                    <div class="skillbox-skill-header">
                        JavaScript
                    </div>
                    <div class="skillbox-skill-meter-pt"></div>
                    <div class="skillbox-skill-meter-pt"></div>
                    <div class="skillbox-skill-meter-pt"></div>
                </div>
                <div class="skillbox-skill-info">
                    <p>
                        JS info
                    </p>
                </div>
                <div class="skillbox-skill-container">
                    <div class="skillbox-skill-header">
                        C#
                    </div>
                    <div class="skillbox-skill-meter-pt"></div>
                    <div class="skillbox-skill-meter-pt"></div>
                    <div class="skillbox-skill-meter-pt"></div>
                </div>
                <div class="skillbox-skill-info">
                    <p>
                        C# info
                    </p>
                </div>
                <div class="skillbox-skill-container">
                    <div class="skillbox-skill-header">
                        Python
                    </div>
                    <div class="skillbox-skill-meter-pt"></div>
                </div>
                <div class="skillbox-skill-info">
                    <p>
                        Py info
                    </p>
                </div>
            </div>
        </Layout>
    );
}