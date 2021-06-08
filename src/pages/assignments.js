import React from 'react';
import Helmet from 'react-helmet';
import { withPrefix, Link } from 'gatsby';
import { siteMetadata } from '../../gatsby-config';
import Collapsible from 'react-collapsible';

import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout title="Assignments">
      <Helmet>
        <title>Assignments - {siteMetadata.title}</title>
      </Helmet>

      <p>
        Here's a collection of some of the assignments I have completed 
        over the course of my post-secondary career. 
      </p>

      <h2>Select an institution:</h2>
            
      <Collapsible
        classParentString="collapsible-main-container"
        triggerClassName="collapsible-title cencol"
        triggerOpenedClassName="collapsible-title cencol"
        trigger="Centennial College">
        <Collapsible
          triggerClassName="collapsible-nested-header"
          triggerOpenedClassName="collapsible-nested-header"
          trigger="COMP100 Programming I"
        >
          <a 
            href="https://github.com/trentb10/COMP100-2019"
            target="_blank"
          >               
            <div class="collapsible-content">
              View GitHub Repository
            </div>
          </a>
        </Collapsible>
                
        <Collapsible
          triggerClassName="collapsible-nested-header"
          triggerOpenedClassName="collapsible-nested-header"
          trigger="COMP123 Programming II"
        >
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
                
        </Collapsible>

        <Collapsible
          triggerClassName="collapsible-nested-header"
          triggerOpenedClassName="collapsible-nested-header"
          trigger="COMP125 Client-Side Development"
        >
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
        </Collapsible>

        <Collapsible
          triggerClassName="collapsible-nested-header"
          triggerOpenedClassName="collapsible-nested-header"
          trigger="COMP213 Web Interface Design"
        >
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
        </Collapsible>

        <Collapsible
          triggerClassName="collapsible-nested-header"
          triggerOpenedClassName="collapsible-nested-header"
          trigger="COMP228 Java Programming"
        >
          <a 
            href="https://github.com/trentb10/COMP228-F2019"
            target="_blank"
          >
            <div class="collapsible-content">
              View GitHub Repository
            </div>
          </a>
        </Collapsible>

        <Collapsible
          triggerClassName="collapsible-nested-header"
          triggerOpenedClassName="collapsible-nested-header"
          trigger="COMP308 Emerging Technologies"
        >
          <div class="collapsible-content">
            Coming soon!
          </div>
        </Collapsible>

        <Collapsible
          triggerClassName="collapsible-nested-header"
          triggerOpenedClassName="collapsible-nested-header"
          trigger="COMP397 Web Game Programming"
        >
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
        </Collapsible>
      </Collapsible>

      <Collapsible
        classParentString="collapsible-main-container"
        triggerClassName="collapsible-title uoft"
        triggerOpenedClassName="collapsible-title uoft"
        trigger="University of Toronto">
        <Collapsible
          triggerClassName="collapsible-nested-header"
          triggerOpenedClassName="collapsible-nested-header"
          trigger="ENGD97 Stranger Than Fiction"
        >
          <a><Link to="/assignments/uoft/life-after-grad">
            <div class="collapsible-content">
              <i>Life After Grad</i> (2018) - Term Documentary Project
            </div></Link>
          </a>
        </Collapsible>
      </Collapsible>

    </Layout>
  );
}

/**
 * 
 * trentb10 (ﾉ◕ヮ◕)ﾉ*:・ﾟ✧
 * 
 */