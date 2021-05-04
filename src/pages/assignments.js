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

            <div class="collapsible-main-container">
                <div class="collapsible-title cencol">
                    Centennial College
                </div>
                <div class="collapsible-content-container">
                </div>
            </div>

            <br />

            <div class="collapsible-main-container">
                <div class="collapsible-title uoft">
                    University of Toronto
                </div>
                <div class="collapsible-content-container">
                    <div class="collapsible-header">
                        ENGD94 Stranger Than Fiction
                    </div>
                    <div class="collapsible-content">
                        Our lovely documentary will appear here!
                    </div>
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