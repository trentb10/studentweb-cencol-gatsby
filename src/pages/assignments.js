import React from 'react';
import Helmet from 'react-helmet';
import { withPrefix, Link } from 'gatsby';
import Layout from '../components/layout';

export default function Home() {
    return (
        <Layout title="Assignments">
            <Helmet>
                <script src={withPrefix('collapsible-script.js')} type="text/javascript" />
            </Helmet>

            <p>
                Here's a collection of some of the assignments I have completed 
                over the course of my post-secondary career. 
            </p>

            <h2>Select an institution:</h2>

            <div class="collapsible">
                University of Toronto
            </div>
            <div class="collapsible-content-container">
                <div class="collapsible-content">
                    My lovely documentary will show up here!
                </div>
                <div class="collapsible-content">
                    And maybe an essay that I'm not ashamed of, if I had one.
                </div>
            </div>

        </Layout>
    );
}

/**
 * 
 * trentb10 (ﾉ◕ヮ◕)ﾉ*:・ﾟ✧
 * 
 */