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

      <h2>How it started</h2>

      <p>
        My personal website had originally started off as a webpage 
        for <a 
					href="https://trentb10.github.io/studentweb-cencol-github-pages/comp213-002/assignment1/assignment1.html"
					target="_blank"
				>Assignment 1</a> in COMP213 Web Interface Design at Centennial College 
        using plain static HTML. We had to update the page regularly to add links 
        to other assignments we did in the course, as well as for COMP125
        Client-Side Development, and I eventually just made it into a personal 
        website. I overhauled the CSS to style the website to my tastes and kept 
        it mostly consistent for most of my assignments, except for a few in which 
        I wanted to achieve a different look to match the assignment requirements.
      </p>

      <h2>
        Why did I choose GatsbyJS?
      </h2>

      <p>
        The original plan was to build the website using plain static HTML5 and 
        CSS just as I did with my studentweb cencol website. One of the things I 
        wanted to do for my website was to use reusable components like the 
        navigation bar and the footer being used for every page. I was somewhat 
        able to achieve this using seperate HTML pages and JQuery but on the long 
        run it didn't really make much sense to use when I was nesting web-pages 
        inside folders and I would have to unecessarily re-use code. 
      </p>

      <p>
        So I figured the best way to achieve the way I wanted to build my site 
        was to use some sort of library framework.
      </p>

      <p>
        One of the libraries I have considered using was React since I have used
        it in COMP308 Emerging Technologies. Although it would accomplish what 
        I would want to do, I wasn't sure if it was appropriate to use given that 
        my personal site is just a small site and React is good for larger 
        projects. Other frameworks I have considered include Spring Boot and 
        ASP.NET since I've also used these in COMP303 Java EE Development and 
        COMP229 Web Application Development respectively, as well as Vue.js, 
        AngularJS, and Express.js.
      </p>
    </Layout>
  );
}