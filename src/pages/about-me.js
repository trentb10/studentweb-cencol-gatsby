import React from 'react';
import Collapsible from 'react-collapsible';
import Helmet from 'react-helmet';
import { withPrefix, Link } from 'gatsby';
import { siteMetadata } from '../../gatsby-config';

import Layout from '../components/layout';

import avatar from '../images/avatar.gif';

let experienceHeader = {
  display: "flex",
  "justify-content": "space-between"
}

let experienceTitle = {
  "text-align": "left",
  "margin-right": "20px"
}

let experienceDate = {
  "text-align": "left",
  "margin-left": "20px"
}

export default function AboutMe() {
  // Range is between 1 - 4
  let office = determineSkill("MS Office", 4);
  let drive = determineSkill("Google Drive", 4);
  let wp = determineSkill("WordPress", 4);
  let html = determineSkill("HTML5", 3);
  let css = determineSkill("CSS", 3);
  let js = determineSkill("JavaScript", 3);
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
          <img style={{borderRadius: "24px"}} src={avatar}></img>
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
            href="https://www.linkedin.com/in/trentb-minia/"
            target="_blank">
            LinkedIn
          </a>
          </div>
        </div>
      </div>

      {/* <div class="tagline">
      </div> */}

      <h2>Nice to meet you!</h2>

      <p>
        Hi! My name is Trent. I'm a recent graduate of Centennial College with 
        an Advanced Diploma in Software Engineering Technology with Honours! I'm 
        also a graduate of the University of Toronto, majoring in Media Studies 
        and minoring in English and Psychology. Currently, I'm a writer for the 
        YouTube channel <a 
          href="https://www.youtube.com/c/FeedMyCuriosityChannel"
          target="_blank">Feed My Curiosity
        </a>.
      </p>

      <p>
        Here's a summary about who I am and my skills:
      </p>

      <ul>
        <li>Passion for programming and writing</li>
        <li>Proficient with HTML, CSS, JavaScript, Java, and C#</li>
        <li>
          Proficient in Microsoft Office, Google Drive, and other related office
          suite products
        </li>
        <li>Proficient in WordPress and other blog-publishing websites</li>
        <li>Proficient with troubleshooting computer-related issues</li>
        <li>I work well independently and with a team!</li>
      </ul>

      <h2>Education</h2>
      
      <p>
        <div style={experienceHeader}>
          <h3 style={experienceTitle}>Centennial College</h3>
          <h3 style={experienceDate}>(Graduated Apr. 2021)</h3>
        </div>
        <ul>
          <li>
            Advanced Diploma in Software Engineering Technology with Honours 
            (3.9 GPA)
          </li>
        </ul>
      </p>

      <p>
        <div style={experienceHeader}>
          <h3 style={experienceTitle}>University of Toronto Scarborough</h3>
          <h3 style={experienceDate}>(Graduated Dec. 2018)</h3>
        </div>
        <ul>
          <li>
            Honours Bachelor of Arts in Media Studies, English, Psychology
          </li>
        </ul>
      </p>
{/* 
      <p>
        <div style={experienceHeader}>
          <h3 style={experienceTitle}>
            Saint John Paul II Catholic Secondary School
          </h3>
          <h3 style={experienceDate}>
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
      </p> */}
      
      <h2>Work Experience</h2>

      <p>
        <div style={experienceHeader}>
          <h3 style={experienceTitle}>Writer</h3>
          <h3 style={experienceDate}>(Jul. 2018 - present)</h3>
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
        <div style={experienceHeader}>
          <h3 style={experienceTitle}>Writer</h3>
          <h3 style={experienceDate}>(May 2019 - Aug. 2019)</h3>
        </div>
        Dollar Gamers
        <ul>
          <li>
            Wrote articles and reviews for cheap indie games
          </li>
          <li>
            Uploaded articles to the website, as well as proofread, edited, and 
            designed articles uploaded by others via WordPress
          </li>
        </ul>
      </p>
      
      <p>
        <div style={experienceHeader}>
          <h3 style={experienceTitle}>Writer</h3>
          <h3 style={experienceDate}>(Dec. 2017 - Mar. 2018)</h3>
        </div>
        Amp the Sound
        <ul>
          <li>
            Wrote articles and reviews for music
          </li>
          <li>
            Uploaded articles to the website, as well as proofread, edited, and 
            designed articles uploaded by others via WordPress
          </li>
          <li>
            Designed the logo (Check it out <Link to="../works/amp-the-sound">here</Link>!)
          </li>
        </ul>
      </p>

      <p>
        <div style={experienceHeader}>
          <h3 style={experienceTitle}>Writer</h3>
          <h3 style={experienceDate}>(May 2014 - July 2017)</h3>
        </div>
        24Our Music
        <ul>
          <li>
            Wrote articles and reviews for music
          </li>
          <li>
            Uploaded articles to the website, as well as proofread, edited, and 
            designed articles uploaded by others via WordPress
          </li>
        </ul>
      </p>

      <h2>My list of Technologies</h2>

      <p>
        Here is an in-depth list of different technologies I have used before:
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
            Proficient!
          </div>
          <div class="skillbox-skill-legend-label">
            Very proficient!
          </div>
        </div>
        <Collapsible 
          trigger={office}
        >
          <div class="skillbox-skill-info">
            <p>
              I have used Microsoft Office extensively over the course of my 
              post-secondary career, especially Word for writing academic essays 
              and documentation, Excel for spreadsheet tasks, and PowerPoint for 
              class presentations.
            </p>
          </div>
        </Collapsible>
        <Collapsible
          trigger={drive}
        >
          <div class="skillbox-skill-info">
            I have used Google Drive extensively over the course of my 
            post-secondary career and it's a number one choice of mine due to 
            its ability to easily collaborate with others! I used Docs for all 
            word-processing assignments; Sheets for spreadsheet tasks and for 
            keeping track of project progress and schedules; and Slides for 
            class presentations. Docs is also my current choice for writing 
            scripts for Feed My Curiosity, and we make extensive use of the 
            review and editing feature.
          </div>
        </Collapsible>
        <Collapsible
          trigger={wp}
        >
          <div class="skillbox-skill-info">
            <p>
              I have used WordPress to upload, proofread, edit, and design 
              articles for 24Our Music, Amp the Sound, and Dollar Gamers. Part 
              of my work experience involving HTML also comes from using WordPress,
              in which I would use <code>iFrame</code> embeds to insert media 
              into articles.
            </p>
          </div>
        </Collapsible>
        <Collapsible
          trigger={html}
        >
          <div class="skillbox-skill-info">
            <p>
              In high school, I have used Dreamweaver to build a website for an
              assignment!
            </p>
            <p>
              I also used Sublime Text 3, Visual Studio Code, and Expression 
              Web to build a variety of websites for assignments during my time 
              at Centennial College. VS Code is currently my preferred text 
              editor, which I'm using to build this website!
            </p>
          </div>
        </Collapsible>
        <Collapsible
          trigger={css}
        >
          <div class="skillbox-skill-info">
            <p>
              I've also used CSS as part of building websites during my time at
              Centennial College. As part of building this website, I've used 
              a plugin called <a href="https://www.npmjs.com/package/react-collapsible">react-collapsible</a>,
              which uses SASS for styling. SASS is what I currently use for this 
              website, and it's what I currently prefer over CSS!
            </p>
          </div>
        </Collapsible>
        <Collapsible
          trigger={js}
        >
          <div class="skillbox-skill-info">
            <p>
              I've used JavaScript for client-side web development, as well as 
              for Node.js development at Centennial College. Currently, I'm using 
              Node.js for a couple of personal projects: 
              A <Link to="/works/personal-works/t-bot">Discord moderation bot</Link> and
              my <Link to="/works/personal-works/trentb-on-gatsby">personal website</Link>!
            </p>
          </div>
        </Collapsible>
        <Collapsible
          trigger={java}
        >
          <div class="skillbox-skill-info">
            <p>
              I have been learning Java applications since high school and is
              one of the first programming languages I've ever learned. I've 
              developed a variety of console applications, and at Centennial 
              College I've also used Java to develop Android applications and 
              web applications using Spring MVC and Spring Boot.
            </p>
          </div>
        </Collapsible>
        <Collapsible
          trigger={csharp}
        >
          <div class="skillbox-skill-info">
            <p>
              I have built a variety of applications using C# during my time at 
              Centennial College, including console applications, windows forms,
              WPF forms, and web applications. I've also used C# in Unity for 
              COMP397 Web Game Programming, in which my group and I  
              developed <i>Robo Escape</i> for our term project. You may check 
              it out <a 
                href="https://github.com/trentb10/COMP397-W2021-Group14-Assignment1-Part3-BUILD" 
                target="_blank"
              >here</a> and <a 
                href="https://github.com/trentb10/COMP397-W2021-Group14-Final" 
                target="_blank"
              >here</a>!
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
        </Collapsible>
        <Collapsible
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
              I had an opportunity to learn Python in a course called COMP301 
              Unix Linux Operating Systems at Centennial College, in which I 
              developed and ran console applications in Ubuntu. I also used 
              Python in a course for COMP309 Data Warehouse & Mining. 
            </p>
            <p>
              I'm looking forward for more learning opportunities with Python, 
              as I've enrolled myself in the <i>Automate the Boring Stuff with 
              Python Programming</i> course on Udemy!
            </p>
          </div>
        </Collapsible>
        <div class="skillbox-skill-legend-container">
          <div class="skillbox-skill-hint">
            Click on a programming language to see what I have to say about it!
          </div>
        </div>
      </div>

      <h2>Excited to Work Together!</h2>

      <p>
        I am up for the challenge and am willing to do what it takes to get the 
        job done. Contact me on  
        my <a href="https://www.linkedin.com/in/trentb-minia/">LinkedIn</a> and 
        let's work together!
      </p>

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
