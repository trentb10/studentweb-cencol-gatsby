import React from 'react';
import Helmet from 'react-helmet';
import { withPrefix, Link } from 'gatsby';
import { siteMetadata } from '../../../../gatsby-config';

import Layout from '../../../components/layout';

// Image imports

import thumbnailtrentbog from "../../../images/works/personal-works/trentb-on-gatsby/thumbnail.png";
import tbogIosevka from '../../../images/works/personal-works/trentb-on-gatsby/tbog-iosevka.png';
import tbogDetermineSkillMethod from '../../../images/works/personal-works/trentb-on-gatsby/tbog-determineskillmethod.png';
import tbogDetermineSkillMethodCall from '../../../images/works/personal-works/trentb-on-gatsby/tbog-determineskillmethodcall.png';
import tbogDetermineSkillValues from '../../../images/works/personal-works/trentb-on-gatsby/tbog-determineskillvalues.png';
import tbogAssignmentNavbar from '../../../images/works/personal-works/trentb-on-gatsby/tbog-assignmentnavbar.png';
import tbogSkillboxSandbox from '../../../images/works/personal-works/trentb-on-gatsby/tbog-skillboxsandbox.gif';
import tbogSkillboxSketch from '../../../images/works/personal-works/trentb-on-gatsby/tbog-skillboxsketchfull.jpg';
import tbogAboutMeBoxSketch from '../../../images/works/personal-works/trentb-on-gatsby/tbog-aboutmeboxsketch.jpg';

import HeaderImage1 from '../../../images/headers/header-1.png';
import HeaderImage2 from '../../../images/headers/header-2.png';
import HeaderImage3 from '../../../images/headers/header-3.png';
import HeaderImage4 from '../../../images/headers/header-4.png';
import HeaderImage5 from '../../../images/headers/header-5.png';

// Image styling

let imageResize = {
  "width": "550px",
  "height": "auto"
}

export default function TrentBOnGatsby() {
  return (
    <Layout title="Trent B on Gatsby!">
      <Helmet>
        <title>Trent B on Gatsby! - {siteMetadata.title}</title>
      </Helmet>

      <p>
        <div>
          <img src={thumbnailtrentbog} />
        </div>
      </p>

      <p>
        <i>Trent B on Gatsby!</i> is my personal website made using GatsbyJS!
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

      <h3>The fonts</h3>

      <p>
        Since version 1.1 of the website, I changed around some of the fonts. Here 
        is a list of what I currently use:
        <ul>
          <li>
            <a
              href="https://fonts.google.com/specimen/M+PLUS+1">
              M Plus 1
            </a>
            : Currently used for the navigation bar and headers. The alternate font
            is set to Arial and Helvetica.
          </li>
          <li>
            <a
              href="https://fonts.google.com/specimen/Barlow">
              Assistant
            </a>
            : Currently used for the content body. The alternate font is set to 
            Trebuchet MS and Arial.
          </li>
          <li>
            <a
              href="https://github.com/be5invis/Iosevka">
              Iosevka
            </a>
            : A custom-built Iosevka made via Node.js. For this website, it's being 
            used for content headers. For this website, it is currently used for 
            <code>inline code displays</code>. The alternate font is Consolas.
          </li>
        </ul>
      </p>

      <p>
        <div>
          <img src={tbogIosevka} />
        </div>
        <div class="figure-caption">
          My customized version of Iosevka.
        </div>
      </p>

      <p>
        Here are the other fonts I have used for the website:
        <ul>
          <li>
            <a 
              href="https://fonts.google.com/specimen/Overpass">
              Overpass
            </a>
            : Based on the Highway Gothic font, I've used it for Cities Skylines
            and started to like it so much that I began using it as my system 
            default font. For the website, it was used for the navigation 
            bar and the content body.
          </li>
          <li>
            <a
              href="https://fonts.google.com/specimen/Share+Tech+Mono">
              Share Tech Mono
            </a>
            : This is one of my favourite monospaced fonts! I've used it as my 
            default font in my IDEs for quite a long time, and it's currently my 
            default font for my Command Prompt, Powershell, and Terminal. It's 
            the same font used for the terminals in Fallout 4, one of my favourite 
            single player video games. For this website, it was used for 
            <code>inline code displays</code>.
          </li>
        </ul>
      </p>

      <h3>The navigation bar</h3>

      <p>
        The navigation bar is one of my favourite features of the website! At 
        first I experimented with a navbar for <a href="https://trentb10.github.io/studentweb-cencol-github-pages/comp213-002/assignment3/assignment3.html">
          Assignment 3
        </a> for COMP213. A couple of its CSS attributes are <code>position: sticky</code> and <code>top: 0</code>, 
        so once the user scrolls down the page and passes the default position 
        of the navbar, it will stick to the top of the window screen. This 
        navbar navigates for that page specifically, including a link that 
        jumps back to the top (it just routes to <code>#</code>) and a link 
        that goes back to the index.
      </p>

      <p>
        <div>
          <img src={tbogAssignmentNavbar} />
        </div>
        <div class="figure-caption">
          The navbar I made for COMP213 Assignment 3 would stick to the top as 
          you scroll down past the navbar's original position.
        </div>
      </p>

      <p>
        I eventually implemented a navbar for the index too (when my site was 
        still hosted on studentweb cencol) and it worked well for the most part. 
        I used a seperate HTML file for the navbar code and then used JQuery to 
        insert it into the pages I wanted. However, it wouldn't work as well 
        when I was planning to publish this site on GitHub Pages and nest pages 
        in folders. I guess it would be fine if I kept everything on one page 
        and the navbar would just navigate to headers on different parts of the 
        site, but the way I wanted to structure the folders and files means I 
        would have to copy and paste code, which just doens't make sense at all.
      </p>

      <p>
        The navbar is one of the reasons why I chose to use GatsbyJS, since I 
        can use the navbar as a component. The navbar component is inserted into 
        the main layout component, which means every page I create for this site 
        will always have the navbar! No copy and paste required.
      </p>

      <p>
        It's been awhile since I created the navbar so I can't remember exactly 
        which tutorial I followed to create it, but it's probably a combination
        of the navbar tutorials from W3Schools and CSS-Tricks.
      </p>

      <h3>The skillbox</h3>

      <p>
        The skillbox is tricky to implement and often recommended against because 
        you can't really gouge how skilled you are at something based on <i>percentages</i>, 
        and it makes sense too: How do you be 100% skilled 
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
        <div>
          <img src={tbogSkillboxSketch} />
        </div>
        <div class="figure-caption">
          My sketches for the skillbox, which includes a neat version that allows 
          me to see how it would visually look and a crude version that shows 
          which elements would be used as a <code>div</code> and how they would 
          be arranged using <code>flexbox</code>.
        </div>
      </p>

      <p>
        Once I was satisfied with my sketches, the next step was to code up a 
        draft in a separate, sandbox environment using just HTML, CSS, and JS. 
        It was easy to code because I had already laid everything out on paper, 
        and the collapsible code was the same code I used for 
        the <i>Assignments</i> page, which was used from a W3Schools tutorial.
      </p>

      <p>
        <div>
          <img src={tbogSkillboxSandbox} style={imageResize} />
        </div>
        <div class="figure-caption">
          The skillbox I built in a sandbox environment.
        </div>
      </p>

      <p>
        Although I was able to implement the custom skillbox for my website 
        within the GatsbyJS environment, I had one glaring issue I had: The 
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
        <div>
          <img src={tbogDetermineSkillValues} />
        </div>
        <div class="figure-caption">
          I can easily determine values for my skills by passing it into a 
          method.
        </div>
      </p>
      
      <p>
        <div>
          <img src={tbogDetermineSkillMethod} />
        </div>
        <div class="figure-caption">
          The method "fills in the boxes" like so.
        </div>
      </p>

      <p>
        <div>
          <img src={tbogDetermineSkillMethodCall} />
        </div>
        <div class="figure-caption">
          And then I call the method when coding in the collapsibles for the 
          skillbox.
        </div>
      </p>

      <h3>The About Me box</h3>

      <p>
        The About Me box is featured in the <Link to="/about-me">About Me</Link> page
        and it's a simple box that shows my name, links, and my avatar.
      </p>

      <p>
        Just as I did with the Skillbox, I did a quick sketch of how I wanted 
        the About Me box to visually look:
      </p>

      <p>
        <div>
          <img src={tbogAboutMeBoxSketch} />
        </div>
        <div class="figure-caption">
          My sketch for the About Me box.
        </div>
      </p>

      <h3>Header Images</h3>

      <p>
        I couldn't really settle on one header image so I decided to use multiple 
        images instead! There are a total of five images that are randomly selected
        upon page load.
      </p>

      <p>
        <img src={HeaderImage1} style={imageResize} /> <br />
        <img src={HeaderImage2} style={imageResize} /> <br />
        <img src={HeaderImage3} style={imageResize} /> <br />
        <img src={HeaderImage4} style={imageResize} /> <br />
        <img src={HeaderImage5} style={imageResize} /> <br />
      </p>

      <h3>Plugins</h3>

      <p>
        Aside from the pre-requisites installed at GatsbyJS project creation, the 
        following additonal plugins were also used to make this website:

        <ul>
          <li>
            <a 
              href="https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-sass"
            >gatsby-plugin-sass</a> and <a href="https://github.com/sass/sass">sass</a>
          </li>
          <li>
            <a
              href="https://github.com/glennflanagan/react-collapsible"
            >react-collapsible</a>
          </li>
          <li>
            <a 
              href="https://github.com/nfl/react-helmet"
            >react-helmet</a>
          </li>
        </ul>
      </p>

    </Layout>
  );
}