import React from 'react';
import Collapsible from 'react-collapsible';
import Helmet from 'react-helmet';
import { withPrefix, Link } from 'gatsby';
import { siteMetadata } from '../../gatsby-config';

import Layout from '../components/layout';

export default function AboutMe() {    
    let html = determineSkill("HTML5", 3);
    let css = determineSkill("CSS", 3);
    let js = determineSkill("JavaScript", 3)
    let java = determineSkill("Java", 3);
    let csharp = determineSkill("C#", 2);
    let python = determineSkill("Python", 1);


    let lessthan3 = "<3";

    return (
        <Layout title="About Me!">
            <Helmet>
                <title>About Me! - {siteMetadata.title}</title>
            </Helmet>

            <h2>How proficient am I with different languages?</h2>

            <div class="skillbox-container">
                <Collapsible
                    trigger={html}
                >
                    <div class="skillbox-skill-info">
                        <p>
                            The earliest exposure I had to HTML was building web pages through web
                            development tools. In high school, I built a web site using Dreamweaver!
                            I wish I had saved this site, but it was on a flash drive that became 
                            corrupted 😭. All I can tell you about that site was that it was about 
                            Katy Perry...
                        </p>
                        <p>
                            The first time I built a web site using a text editor was for Centennial 
                            College, when I wrote HTML code for COMP213 Assignment 1 in Sublime Text!
                            I'm pretty comfortable writing HTML in text editors, as I'm doing so 
                            right now for this web site in VS Code!
                        </p>
                    </div>
                </Collapsible>
                <Collapsible
                    trigger={css}
                >
                    <div class="skillbox-skill-info">
                        <p>
                            I can't remember whether I used CSS with that Katy Perry website I made 
                            for high school. Although COMP213 Assignment 1 didn't use CSS and was
                            just styled using the style attribute, I did learn to use CSS afterward,
                            and I re-coded Assignment 1 to use styles from a CSS file.
                        </p>
                        <p>
                            I consider writing CSS to be such a pleasing task. It's very laid-back 
                            for me because I like to put so much care into how a web page 
                            aesthetically looks. I like to play around with different attributes and
                            values until I get a specific element to look exactly the way I want,
                            and that it blends in very well with the rest of the website.
                        </p>
                    </div>
                </Collapsible>
                <Collapsible
                    trigger={js}
                >
                    <div class="skillbox-skill-info">
                        <p>
                            I didn't learn JavaScript until my second term at Centennial College,
                            but it has quickly become one of my favourite languages, along with HTML,
                            CSS, and Java. I am comfortable programming in JS for client-side web 
                            development as well as for non-browser applications. During my last term
                            at Centennial College, I have programmed in Node.js to build applications
                            using the Express.js framework and the React library.
                        </p>
                        <p>
                            Currently, I am writing a Discord bot using the Discord.js library. I 
                            am also using Gatsby to build this web site!
                        </p>
                    </div>
                </Collapsible>
                <Collapsible
                    trigger={java}
                >
                    <div class="skillbox-skill-info">
                        <p>
                            Java is the first programming language I have academically learned, and 
                            that makes it the first object-oriented language I have learned. Throughout
                            high-school and my third term at Centennial College, I have programmed
                            Java console applications. In the following terms, I used Java to build 
                            Android applications in Android Studio as well as web applications using 
                            Spring MVC and Spring Boot. 
                        </p>
                    </div>
                </Collapsible>
                <Collapsible
                    trigger={csharp}
                >
                    <div class="skillbox-skill-info">
                        <p>
                            C# was the language I've learned and used for the majority of my academic 
                            career at Centennial College. I have built a lot of console applications
                            as well as a few web applications that use the .net core framework.
                        </p>
                    </div>
                </Collapsible>
                <Collapsible
                    trigger={python}
                >
                    <div class="skillbox-skill-info">
                        <p>
                            I was fortunate to have learned Python in a course at Centennial College
                            that wasn't actually dedicated to Python. It was a course on Linux systems
                            and I didn't learn Python until the second half of the course. The most
                            I did was basic console applications. Although I don't have enough 
                            experience with Python as much as I like, I aim to find more learning
                            opportunities so I can practice Python as much as I can and become 
                            proficient with it!
                        </p>
                    </div>
                </Collapsible>
            </div>



        </Layout>
    );
}

function determineSkill(skillName, rating) {
    let meter = [];
    for (let i = 1; i <= rating; i++) {
        meter.push(<div className='skillbox-skill-meter-pt'></div>)
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
