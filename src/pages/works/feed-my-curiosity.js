import React from 'react';
import Helmet from 'react-helmet';
import { withPrefix, Link } from 'gatsby';
import { siteMetadata } from '../../../gatsby-config';

import Layout from '../../components/layout';

// Image Imports

import fmcTwitterAv from '../../images/works/feed-my-curiosity/fmc-twitter-av.jpg';
import fmcYouTubeLayout from '../../images/works/feed-my-curiosity/fmc-youtube-layout.png';

// Image Styling

export default function FeedMyCuriosity() {
  return (
    <Layout title="Feed My Curiosity">
      <Helmet>
        <title>Feed My Curiosity - {siteMetadata.title}</title>
      </Helmet>

      <p>
        <div>
          <img src={fmcYouTubeLayout} />
        </div>
        <div class="figure-caption">
          The YouTube page for Feed My Curiosity!
        </div>
      </p>

      <p>
        Feed My Curiosity is my current venture as a writer!
      </p>

      <p>
        Started with my friend/business partrner who I also worked with for 
        24OurMusic, Amp the Sound, and Dollar Gamers, Feed My Curiosity is a 
        YouTube channel that features educational content that spans across 
        a variety of different topics, such as nature, history, technology, 
        people, science, and more!
      </p>

      <p>
        After we performed brainstorming as a team and picked out a topic we like 
        to do, as a scriptwriter, I begin to do research on the topic, put 
        together my sources, and write the script in Google Docs based on my 
        findings.
      </p>

      <p>
        After my script has been edited, I go over the suggested edits and make the
        necessary changes. Once I'm overall satisfied with the script, it's then 
        sent to our voice-over guy for recording. My friend does the post-
        production and uploads the video to the YouTube channel.
      </p>

      <p>
        I have written the scripts for most of the videos on our channel, but we 
        had other authors write scripts for us as well!
      </p>

      <p>
        Here is a sample of our work, and a video I've written the script for:
      </p>

      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/6nCApjz0Cdc" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>

      <p>
        Please check out more of our stuff by visiting our <a 
          href="https://www.youtube.com/channel/UCsW7wxIr1vVKrDy82Gtir1g"
        >
          YouTube Page
        </a>!
      </p>
    </Layout>
  );
}