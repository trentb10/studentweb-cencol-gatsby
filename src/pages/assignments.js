import React from 'react';
import Helmet from 'react-helmet';
import { withPrefix, Link } from 'gatsby';
import { siteMetadata } from '../../gatsby-config';

import Layout from '../components/layout';

export default function Home() {
    return (
        <Layout title="Assignments">
            <Helmet>
                <title>Assignments - {siteMetadata.title}</title>
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
                    <div class="collapsible-header">
                        COMP100 Programming I
                    </div> 
                    <a 
                        href="https://github.com/trentb10/COMP100-2019"
                        target="_blank"
                    >               
                        <div class="collapsible-content">
                            View GitHub Repository
                        </div>
                    </a>

                    <div class="collapsible-header">
                        COMP123 Programming II
                    </div>
                    <a
                        href="https://github.com/trentb10/COMP123-2019-Assignment04"
                        target="_blank"
                    >
                        <div class="collapsible-content">
                            Assignment 4 - BMI Calculator
                        </div>
                    </a>
                    <a
                        href="https://github.com/trentb10/COMP123-2019-Assignment05"
                        target="_blank"
                    >
                        <div class="collapsible-content">
                            Assignment 5 - Dollar Computers
                        </div>
                    </a>

                    <div class="collapsible-header">
                        COMP125 Client-Side Development
                    </div>
                    <a 
                        href="https://trentb10.github.io/studentweb-cencol-github-pages/comp125-001/assignment1/assignment1.html" 
                        target="_blank"
                    >               
                        <div class="collapsible-content">
                            Assignment 1
                        </div>
                    </a>
                    <a 
                        href="https://trentb10.github.io/studentweb-cencol-github-pages/comp125-001/assignment2/assignment2.html" 
                        target="_blank"
                    >               
                        <div class="collapsible-content">
                            Assignment 2
                        </div>
                    </a>
                    <a 
                        href="https://trentb10.github.io/studentweb-cencol-github-pages/comp125-001/assignment3/assignment3.html" 
                        target="_blank"
                    >               
                        <div class="collapsible-content">
                            Assignment 3
                        </div>
                    </a>
                    <a 
                        href="https://trentb10.github.io/studentweb-cencol-github-pages/comp125-001/assignment4/Membership.html" 
                        target="_blank"
                    >               
                        <div class="collapsible-content">
                            Assignment 4
                        </div>
                    </a>
                    <a 
                        href="https://trentb10.github.io/studentweb-cencol-github-pages/comp125-001/assignment5/assignment5.html" 
                        target="_blank"
                    >               
                        <div class="collapsible-content">
                            Assignment 5
                        </div>
                    </a>
                    <a 
                        href="https://trentb10.github.io/studentweb-cencol-github-pages/comp125-001/assignment6/assignment6.html" 
                        target="_blank"
                    >               
                        <div class="collapsible-content">
                            Assignment 6
                        </div>
                    </a>

                    <div class="collapsible-header">
                        COMP213 Web Interface Design
                    </div>
                    <a 
                        href="https://trentb10.github.io/studentweb-cencol-github-pages/comp213-002/assignment1/assignment1.html" 
                        target="_blank"
                    >               
                        <div class="collapsible-content">
                            Assignment 1
                        </div>
                    </a>
                    <a 
                        href="https://trentb10.github.io/studentweb-cencol-github-pages/comp213-002/assignment2/assignment2.html" 
                        target="_blank"
                    >
                        <div class="collapsible-content">
                            Assignment 2
                        </div>
                    </a>
                    <a 
                        href="https://trentb10.github.io/studentweb-cencol-github-pages/comp213-002/assignment3/assignment3.html" 
                        target="_blank"
                    >
                        <div class="collapsible-content">
                            Assignment 3
                        </div>
                    </a>
                    <a 
                        href="https://trentb10.github.io/studentweb-cencol-github-pages/comp213-002/assignment4/assignment4.html" 
                        target="_blank"
                    >
                        <div class="collapsible-content">
                            Assignment 4
                        </div>
                    </a>
                    <a 
                        href="https://trentb10.github.io/studentweb-cencol-github-pages/comp213-002/termproject/home.html" 
                        target="_blank"
                    >
                        <div class="collapsible-content">
                            Term Project
                        </div>
                    </a>

                    <div class="collapsible-header">
                        COMP228 Java Programming
                    </div>
                    <a 
                        href="https://github.com/trentb10/COMP100-2019"
                        target="_blank"
                    >               
                        <div class="collapsible-content">
                            View GitHub Repository
                        </div>
                    </a>

                    <div class="collapsible-header">
                        COMP308 Emerging Technologies
                    </div>

                    <div class="collapsible-header">
                        COMP397 Web Game Programming
                    </div>
                    <a 
                        href="https://github.com/trentb10/COMP397-W2021-Group14-Assignment1-Part3-BUILD" 
                        target="_blank"
                    >
                        <div class="collapsible-content">
                            Assignment 1 Part 3 - Robo Escape - Build
                        </div>
                    </a>
                    <a 
                        href="https://github.com/trentb10/COMP397-W2021-Group14-Final" 
                        target="_blank"
                    >
                        <div class="collapsible-content">
                            Assignment 2 Part 3/Final - Robo Escape
                        </div>
                    </a>
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
                    <a><Link to="/assignments/uoft/life-after-grad">
                        <div class="collapsible-content">
                            <i>Life After Grad</i> (2018) - Term Documentary Project
                        </div></Link>
                    </a>
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