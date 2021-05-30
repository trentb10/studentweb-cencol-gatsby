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
        One thing I wanted to achieve for my website was reusable components 
        like the navigation bar and the footer. I was somewhat able to achieve 
        this using seperate HTML pages and JQuery but on the long run it didn't 
        really make much sense to use when I was nesting web-pages inside 
        folders and I would have to unecessarily re-use code. 
      </p>

      <p>
        So I figured the best way to make my site was to use some sort of 
        library framework.
      </p>

      <p>
        
      </p>
    </Layout>
  );
}