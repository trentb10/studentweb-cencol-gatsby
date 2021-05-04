import React from 'react';
import Helmet from 'react-helmet';
import { withPrefix, Link } from 'gatsby';
import Layout from '../components/layout';

export default function Home() {
    return (
        <Layout title="Assignments">
            <Helmet>
                <title>trentb10 on Gatsby - Assignments</title>
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
                        COMP213 Web Interface Design
                    </div>
                    <a href="https://trentb10.github.io/studentweb-cencol-github-pages/comp213-002/assignment1/assignment1.html">               
                        <div class="collapsible-content">
                            Assignment 1
                        </div>
                    </a>
                    <a href="https://trentb10.github.io/studentweb-cencol-github-pages/comp213-002/assignment2/assignment2.html">
                        <div class="collapsible-content">
                            Assignment 2
                        </div>
                    </a>
                    <a href="https://trentb10.github.io/studentweb-cencol-github-pages/comp213-002/assignment3/assignment3.html">
                        <div class="collapsible-content">
                            Assignment 3
                        </div>
                    </a>
                    <a href="https://trentb10.github.io/studentweb-cencol-github-pages/comp213-002/assignment4/assignment4.html">
                        <div class="collapsible-content">
                            Assignment 4
                        </div>
                    </a>
                    <a href="https://trentb10.github.io/studentweb-cencol-github-pages/comp213-002/termproject/home.html">
                        <div class="collapsible-content">
                            Term Project
                        </div>
                    </a>
                    <div class="collapsible-header">
                        COMP125 Client-Side Development
                    </div>
                    <a href="https://trentb10.github.io/studentweb-cencol-github-pages/comp125-001/assignment1/assignment1.html">               
                        <div class="collapsible-content">
                            Assignment 1
                        </div>
                    </a>
                    <a href="https://trentb10.github.io/studentweb-cencol-github-pages/comp125-001/assignment2/assignment2.html">               
                        <div class="collapsible-content">
                            Assignment 2
                        </div>
                    </a>
                    <a href="https://trentb10.github.io/studentweb-cencol-github-pages/comp125-001/assignment3/assignment3.html">               
                        <div class="collapsible-content">
                            Assignment 3
                        </div>
                    </a>
                    <a href="https://trentb10.github.io/studentweb-cencol-github-pages/comp125-001/assignment4/Membership.html">               
                        <div class="collapsible-content">
                            Assignment 4
                        </div>
                    </a>
                    <a href="https://trentb10.github.io/studentweb-cencol-github-pages/comp125-001/assignment5/assignment5.html">               
                        <div class="collapsible-content">
                            Assignment 5
                        </div>
                    </a>
                    <a href="https://trentb10.github.io/studentweb-cencol-github-pages/comp125-001/assignment6/assignment6.html">               
                        <div class="collapsible-content">
                            Assignment 6
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