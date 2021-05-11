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
                            I am very proficient in HTML. I've built static web pages using HTML
                            ever since I was in high school. My first web site project was built
                            using HTML and Dreamweaver! I wish I had saved this site, but it was
                            on a flash drive with all of my other high school assignments that 
                            became corrupted 😭. All I can tell you about that site was that it
                            was about Katy Perry...
                        </p>
                        <p>
                            I believe the first time I built a website without using a web 
                            development tool was for Centennial College, when I wrote the code for 
                            COMP213 Assignment 1 in Sublime Text 3! Although it initially felt
                            daunting to build a website without any of the usual tools I'd use in
                            Dreamweaver and FrontPage, I was able to learn a lot about the different
                            kinds of HTML tags used to create elements on a page. 
                        </p>
                        <p>
                            I am most comfortable writing HTML in text editors. Currently, I write
                            HTML in Visual Studio Code, as I'm doing right now with this website!
                        </p>
                    </div>
                </Collapsible>
                <Collapsible
                    trigger={css}
                >
                    <div class="skillbox-skill-info">
                        <p>
                            As my learning and experience grew with HTML, so did with CSS, too. I 
                            can't remember whether I used CSS with that Katy Perry website I made 
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
                            CSS, and Java. I improved my JS proficiency during my last term, when
                            I began learning about node.js and building apps using Express.js and
                            React.js.
                        </p>
                        <p>
                            Currently, I am writing a Discord bot using the Discord.js library. I 
                            am also using Gatsby to build this web site, which uses JS!
                        </p>
                    </div>
                </Collapsible>
                <Collapsible
                    trigger={java}
                >
                    <div class="skillbox-skill-info">
                        <p>
                            Java is the first programming language I have academically learned, and 
                            that makes it the first object-oriented language I have learned.
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
                            Wish I learned more about py in cencol :(
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
