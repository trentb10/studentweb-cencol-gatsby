import React from 'react';
import Collapsible from 'react-collapsible';
import Helmet from 'react-helmet';
import { withPrefix, Link } from 'gatsby';
import { siteMetadata } from '../../gatsby-config';

import Layout from '../components/layout';

import avatar from '../images/avatar.gif';

let experienceTitle = {
  display: "flex",
  "justify-content": "space-between"
}

export default function AboutMe() {    
  let html = determineSkill("HTML5", 3);
  let css = determineSkill("CSS", 3);
  let js = determineSkill("JavaScript", 3)
  let java = determineSkill("Java", 3);
  let csharp = determineSkill("C#", 3);
  let vb = determineSkill("VB", 2);
  let actionscript = determineSkill("ActionScript", 2);
  let python = determineSkill("Python", 1);

  

  return (
    <Layout title="About Me!">
      <Helmet>
        <title>About Me! - {siteMetadata.title}</title>
      </Helmet>

      <div class="profilebox-container">
        <div class="profilebox-pfp">
          <img src={avatar}></img>
        </div>
        <div class="profilebox-info">
          <div class="profilebox-name">
            Trent B Minia
          </div>
          <div>
            Toronto, Ontario
          </div>
          <br/>
          <div>
            <a
              href="https://github.com/trentb10"
              target="_blank">
              GitHub
            </a>
            &nbsp;|&nbsp;
          <a
            href=""
            target="_blank">
            LinkedIn
          </a>
          </div>
        </div>
      </div>

      <div class="tagline">
        Writing code to make a difference on the WWW,<br/>
        one line at a time.
      </div>

      <h2>Nice to meet you!</h2>

      <p>
        Hi! My name is Trent B Minia, and I'm a recent graduate from Centennial
        College with an Advanced Diploma in Software Engineering Technology.
      </p>

      <p>
        Here's a summary about who I am, my skills, and my experiences:
      </p>

      <ul>
        <li>Passion for programming, especially for the web</li>
        <li>Familiar with HTML, CSS, JavaScript, Java, and C#</li>
        <li>Good with troubleshooting computer-related issues</li>
        <li>
          Proficient in Microsoft Office, Google Drive, and other related office
          suite products
        </li>
        <li>Proficient in WordPress and other blog-publishing websites</li>
        <li>
          Experience with music and video editing for education, as well as 
          graphic design for work
        </li>
        <li>Works well independently or with a team!</li>
      </ul>

      <h2>Education</h2>

      <p>
        Here is an overview of my education:
      </p>

      <p>
        <div style={experienceTitle}>
          <h3>Centennial College</h3>
          <h3>(Jan. 2019 - Apr. 2021)</h3>
        </div>
        <ul>
          <li>Advanced Diploma in Software Engineering Technology</li>
        </ul>
      </p>

      <p>
        <div style={experienceTitle}>
          <h3>University of Toronto Scarborough</h3>
          <h3>(Sept. 2014 - Dec. 2018)</h3>
        </div>
        <ul>
          <li>
            Honours Bachelor of Arts in Media Studies, English, Psychology
          </li>
        </ul>
      </p>

      <p>
        <div style={experienceTitle}>
          <h3>
            Saint John Paul II Catholic Secondary School
          </h3>
          <h3>
            (Sept. 2009 - June 2013)
          </h3>
        </div>
        <ul>
          <li>
            Received an academic award for Outstanding Accomplishment and 
            Excellence in Grade 11 Information & Communication Technology
          </li>
          <li>
            Received a graduation certificate for fulfilling requirements for the 
            Focus on Information Technology (FIT) program
          </li>
        </ul>
      </p>
      
      <h2>Work</h2>

      <p>
        Here is an overview of my work experience:
      </p>

      <p>
        <div style={experienceTitle}>
          <h3>Writer &mdash; YouTube Video Scripts</h3>
          <h3>(2018 - present)</h3>
        </div>
        Feed My Curiosity
        <ul>
          <li>
            Writing video scripts covering a variety of topics including
            technology, history, nature, space, food, and more.
          </li>
        </ul>
      </p>

      <p>
        <div style={experienceTitle}>
          <h3>Writer &mdash; Review and Write-Up Articles</h3>
          <h3>(2019)</h3>
        </div>
        Dollar Gamers
        <ul>
          <li>
            Wrote articles and reviews for cheap indie games
          </li>
          <li>
            Handled the social media accounts
          </li>
          <li>
            Uploaded articles to the website via WordPress
          </li>
        </ul>
      </p>
      
      <p>
        <div style={experienceTitle}>
          <h3>Writer &mdash; Review & Write-Up Articles</h3>
          <h3>(Dec 2017 - Mar. 2018)</h3>
        </div>
        Amp the Sound
        <ul>
          <li>
            Wrote articles and reviews for albums, sometimes at the request from
            artists themselves, paid or free
          </li>
          <li>
            Handled the social media accounts (Facebook, Twitter)
          </li>
          <li>
            Uploaded articles to the website via WordPress
          </li>
          <li>
            Designed the logo (Check it out here!)
          </li>
        </ul>
      </p>

      <p>
        <div style={experienceTitle}>
          <h3>Writer &mdash; Review & Write-Up Articles</h3>
          <h3>(May 2014 - Jul. 2017)</h3>
        </div>
        24Our Music
        <ul>
          <li>
            Wrote articles and reviews for albums, sometimes at the request from
            artists themselves, paid or free
          </li>
          <li>
            Handled the social media accounts (Facebook, Twitter)
          </li>
          <li>
            Uploaded articles to the website via WordPress
          </li>
        </ul>
      </p>

      <p>
        Now that I've given an overview of my experiences, I will go into further
        detail about myself, including which programming languages, frameworks/
        libraries, and IDEs and office suites I'm proficient in!
      </p>

      <p>
        To measure my proficiency, I used a skillbox with my own defined scale:
      </p>

      <p>
        1 - Willing to Learn More! I've used it for a little bit and I can do
        some basic stuff with it, but I'm not as proficient and comfortable 
        with it as the others as much as I like. I'm willing to devote some 
        time and learn more about it so I can become more proficient and familiar 
        with it!
      </p>

      <p>
        2 - Familiar! I've used it and had some practice with it, allowing me to
        build some small/medium projects. In some cases I haven't used it in a 
        long time, or I still think there's more to learn, but a little refresher 
        or a review will help me become more proficient with it.
      </p>

      <p>
        3 - Fairly Proficient! I've used it for a good amount of time and I've 
        built a number of projects with it. With a given language/framework, I 
        can visualize/sketch out a task and have an idea of how I want to 
        approach the task before I go and write out the code.
      </p>

      <p>
        4 - Very Proficient! I'm so good with it I can use it with my eyes closed!
      </p>

      <h2>My Proficiencies in Programming Languages</h2>

      <p>
        Here is an in-depth list of languages I have used before.
      </p>

      <div class="skillbox-container">
        <div class="skillbox-skill-legend-container">
          <div class="skillbox-skill-header">
            &nbsp;
          </div>
          <div class="skillbox-skill-legend-label">
            Willing to learn more!
          </div>
          <div class="skillbox-skill-legend-label">
            Familiar!
          </div>
          <div class="skillbox-skill-legend-label">
            Fairly proficient!
          </div>
          <div class="skillbox-skill-legend-label">
            Very proficient!
          </div>
        </div>
        <Collapsible
          trigger={html}
        >
          <div class="skillbox-skill-info">
            <p>
              The earliest exposure I had to HTML was building web pages through 
              web development tools. In high school, I built a web site using Dreamweaver!
              I wish I had saved this site, but it was on a flash drive that became 
              corrupted 😭. All I can tell you about that site was that it was about 
              Katy Perry...
            </p>
            <p>
              The first time I built a web site using a text editor was for Centennial 
              College, when I wrote HTML code for COMP213 Assignment 1 in Sublime 
              Text! I'm pretty comfortable writing HTML in text editors, as I'm 
              doing so right now for this web site in VS Code!
            </p>
          </div>
        </Collapsible>
        <Collapsible
          trigger={css}
        >
          <div class="skillbox-skill-info">
            <p>
              I can't remember whether I used CSS with that Katy Perry website I 
              made for high school. Although COMP213 Assignment 1 didn't use CSS 
              and was just styled using the style attribute, I did learn to use 
              CSS afterward, and I re-coded Assignment 1 to use styles from a CSS 
              file.
            </p>
            <p>
              Out of all the parts regarding web design, I consider writing CSS 
              to be the most fun. I enjoy adding attributes to elements and classes 
              and watching the web site "come alive."
            </p>
            <p>
              Something I've had to build from scratch using CSS is this skill box, 
              for example. I didn't really like most of the examples on the web 
              because they didn't really fit what I was looking for in a skill box. 
              I didn't want to use progress bars with percentages because I don't 
              think that's an appropriate way to gouge how good a programmer is 
              with a language. I wanted a skill box with my own scale defined, 
              and I wanted to make it possible for the user to click on a skill 
              so the description container is expanded and the user can read 
              a little more of what I have to say about it. For this, I've used 
              a <a href="https://www.npmjs.com/package/react-collapsible">React
              plugin</a> for collapsibles, the same plugin I used for the <Link
              to="/assignments">Assignments</Link> page as well.
            </p>
            <p>
              Once I sketched out how I wanted my skill box to look like, I began 
              building it from scratch with CSS. You can see my sketches in the 
              Works &#62; Personal Works section!
            </p>
          </div>
        </Collapsible>
        <Collapsible
          trigger={js}
        >
          <div class="skillbox-skill-info">
            <p>
              I didn't learn JavaScript until my second term at Centennial College,
              but it has quickly become one of my favourite languages, along with 
              HTML, CSS, and Java. I am comfortable programming in JS for client-side 
              web development as well as for non-browser applications. During my 
              last term at Centennial College, I have programmed in Node.js to build 
              applications using the Express.js framework and the React library.
            </p>
            <p>
              My current JavaScript projects include a Discord bot using the Discord.js 
              library, as well as this website using Gatsby!
            </p>
          </div>
        </Collapsible>
        <Collapsible
          trigger={java}
        >
          <div class="skillbox-skill-info">
            <p>
              I have been learning and developing Java applications since high school.
              throughout high-school and my third term at Centennial College, I 
              have programmed Java console applications. In the following terms, 
              I used Java to build Android applications in Android Studio as well 
              as web applications using Spring MVC and Spring Boot. 
            </p>
          </div>
        </Collapsible>
        <Collapsible
          trigger={csharp}
        >
          <div class="skillbox-skill-info">
            <p>
              C# was the language I've learned and used for the majority of my academic 
              career at Centennial College. Among the kinds of applications I have
              developed using C# include console applications, windows forms, WPF 
              forms, and web applications. I've also used C# in Unity for COMP397 
              Web Game Programming, in which my group and I developed <i>Robo 
              Escape</i> for our term project. You may check it out <a 
                href="https://github.com/trentb10/COMP397-W2021-Group14-Assignment1-Part3-BUILD" 
                target="_blank"
              >here</a> and <a 
                href="https://github.com/trentb10/COMP397-W2021-Group14-Final" 
                target="_blank"
              >here!</a>
            </p>
          </div>
        </Collapsible>
        <Collapsible
          trigger={vb}
        >
          <div class="skillbox-skill-info">
            <p>
              Visual Basic .NET is another programming language I have learned in
              high school! Some of the applications I remember developing include
              a simple calculator and a BMI calculator. Although it's been roughly
              ten years since I've used VB, I would appreciate any opportunity to 
              develop in VB again!
            </p>
          </div>
        </Collapsible><Collapsible
          trigger={actionscript}
        >
          <div class="skillbox-skill-info">
            <p>
              I have used ActionScript to make some Flash games during my last 
              semester in high school. Although there aren't opportunities to 
              use ActionScript today, I just wanted to point out that I've used 
              it at some point!
            </p>
          </div>
        </Collapsible>
        <Collapsible
          trigger={python}
        >
          <div class="skillbox-skill-info">
            <p>
              I was fortunate to have learned Python in a course at Centennial College
              that wasn't actually dedicated to Python. It was a course on Linux 
              systems and I didn't learn Python until the second half of the course.
            </p>
            <p>    
              The most I did with Python was write basic console applications, as 
              well as running and modifying code for lab assignments for COMP309 
              Data Warehouse & Mining. 
            </p>
            <p>    
              Although I don't have much experience with Python as I'd like to, 
              I aim to find more learning opportunities so I can practice Python 
              as much as I can and become proficient with it! I've recently enrolled
              myself into <i>Automate the Boring Stuff with Python Programming</i>
              on Udemy!
            </p>
          </div>
        </Collapsible>
        <div class="skillbox-skill-legend-container">
          <div class="skillbox-skill-hint">
            Click on a programming language to see what I have to say about it!
          </div>
        </div>
      </div>
    </Layout>
  );
}

function determineSkill(skillName, rating) {
  let meter = [];
  for (let i = 1; i <= rating; i++) {
    meter.push(<div className='skillbox-skill-meter-pt'></div>)
  }

  let fill = 4 - rating;

  if (fill > 0) {
    for (let i = 1; i <= fill; i++) {
      meter.push(<div className='skillbox-skill-meter-empty'></div>)
    }
  }

  return (
    <div class="skillbox-skill-container">
      <div class="skillbox-skill-header">
        {skillName}
      </div>
      {meter}
    </div>
  );
}
