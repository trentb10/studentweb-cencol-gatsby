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
        CSS just as I did with my studentweb cencol website, and publish it on 
        GitHub Pages. One of the things I wanted to do for my website was to use 
        reusable components like the navigation bar and the footer being used for 
        every page. I was somewhat able to achieve this using seperate HTML pages 
        and JQuery but on the long run it didn't really make much sense to use 
        when I was nesting web-pages inside folders and I would have to 
        unecessarily re-type code. 
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
        AngularJS, Express.js, GatsbyJS, and Riot.js.
      </p>

      <p>
        After reading up on GatsbyJS and trying out the tutorial, I ended up 
        liking it a lot and decided that I'd use it for my website. I also found 
        that users on StackOverflow and Reddit would agree that GatsbyJS is the 
        best for building small static websites and is based on React. Deciding 
        on using GatsbyJS over other frameworks I've already learned gave me an 
        opportunity to learn GatsbyJS, and it's now one of my favourites 😊.
      </p>

      <p>
        I'm really impressed with how easy it is to make components and re-use 
        them without writing the same code over again. The main layout page, the 
        navigation bar, and the footer are re-used exactly the way I imagined it 
        to be! And I can easily define the page title in the Layout tag and refer 
        to the site title variable in the config file. EZ 👏
      </p>

      <h2>A closer look at the features...</h2>

      <p>
        Here's a closer look at some of the features my website has.
      </p>

      <h3>The skillbox</h3>

      <p>
        The skillbox is tricky to implement and often recommended against because 
        you can't really gouge how skilled you are at something based on 
        <i>percentages</i>, and it makes sense too: How do you be 100% skilled 
        in JavaScript, and how would that percentage change if you suddenly learn 
        a bunch of new things with JS?
      </p> 

      <p>
        I decided to include a skillbox because I thought it would be a great 
        opportunity to exercise what I already know with CSS. However, I didn't 
        really like any of the examples I found online because they all used 
        percentages. Since I didn't find anything with a scale that I like, I 
        decided the best approach was to build my own custom skill-box.
      </p>

      <p>
        Sometimes, I like to sketch how things would look like before I go and 
        implement it with code, so I tried to sketch the skillbox I was imagining:
      </p>

      <p>
        placeholder image goes here
      </p>

      <p>
        Since I sketched it out, I was able to see which ones would be divs and 
        how it would be styled using <code>flexbox</code>.
      </p>

      <p>
        Once I was satisfied with my sketches, the next step was to code up a 
        draft in a separate, sandbox environment using just HTML, CSS, and JS. 
        It was easy to code because I had already laid everything out on paper, 
        and the collapsible code was the same code I used for 
        the <i>Assignments</i> page, which was used from a W3Schools tutorial.
      </p>

      <p>
        placeholder image goes here
      </p>

      <p>
        I was able to implement the custom skillbox for my website within the 
        GatsbyJS environment, but there was one glaring issue I had: The 
        collapsible code used for the skillbox is the same as the collapsible 
        code for the <i>Assignments</i> page. Although it would be much better 
        for both the Assignment collapsibles and the skillbox to use the same JS
        script file, it just wasn't possible with how GatsbyJS handles static 
        vanilla JS files. Collapsibles break when using the skillbox, and then 
        accessing the <i>Assignments</i> page and using the collapsibles.
      </p>

      <p>
        I was able to solve this issue by using a <a href="https://www.npmjs.com/package/react-collapsible">
          React plugin
        </a>, which is another great advantage of using GatsbyJS. Both the 
        skillbox and the collapsibles in the <i>Assignments</i> and <i>Works</i> page 
        uses the collapsible plugin, and after reading the documentation for the 
        plugin, I was able to get collapsibles to look the way I wanted to!
      </p>

      <p>
        Thanks to the way <code>.js</code> files in GatsbyJS work, I can build 
        the skillbox and define the scores very easily without repeating too 
        much code:
      </p>

      <p>
        Placeholder image
      </p>
      
    </Layout>
  );
}