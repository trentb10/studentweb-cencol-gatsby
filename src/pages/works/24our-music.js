import React from 'react';
import Helmet from 'react-helmet';
import { withPrefix, Link } from 'gatsby';
import { siteMetadata } from '../../../gatsby-config';

import Layout from '../../components/layout';

// Image imports

import tfourmusic1 from '../../images/works/24ourmusic/24ourmusic-magazine-1.png'
import tfourmusic2 from '../../images/works/24ourmusic/24ourmusic-magazine-2.png'

// Image styling

let imageResize = {
  "width": "400px",
  "height": "auto"
}

export default function Twenty4OurMusic() {
  return (
    <Layout title="24Our Music">
      <Helmet>
        <title>24Our Music - {siteMetadata.title}</title>
      </Helmet>

      <p>
        For three years I was a writer for 24Our Music. It was my first job and 
        work experience.
      </p>

      <p>
        Initially, my responsibilities were writing reviews and write-ups on 
        an artist's single/album release or the artist themselves. In a review, 
        we would listen to the material and give ratings across a set of 
        categories such as Production & Mastering, Engagement, or Production to
        name a few. In a write-up, we would write an article on the material 
        without a rating. At first I uploaded document files and sent them to 
        the copy-editors/my boss, but eventually my boss made the process faster
        by giving WordPress accounts to all of the writers, and we would create 
        posts directly on the WordPress site and save them as Pending Review.
      </p>

      <p>
        Usually the artist would complete a form on the website where they would 
        tell us whether they wanted a review or a write-up, fill in information 
        about the material they wanted to be reviewed, as well as upload any 
        files such as album covers we may publish on the website as well as a 
        press kit.
      </p>
      
      <p>
        Eventually, my responsibilities at 24Our Music grew. I began to oversee
        the social media accounts for the magazine because I had an interest in
        social media at the time (and it complemented my Media Studies degree at
        UofT). When a new article was uploaded to the website, I would create a 
        Facebook post and a Twitter linking the article, but it had to be done 
        a certain way. My boss and I noticed that there would be more engagement 
        on both sites if images were uploaded, so I would upload an image 
        relevant to the artist while linking the article.
      </p>

      <p>
        I also took on a webmaster role in which I was granted more privileges 
        on the WordPress site and I was able to edit any post a writer had
        uploaded as Pending Review. I helped out by inserting images and embeds 
        into the posts, whether they were YouTube videos, Bandcamp songs, and 
        other media embeds of the sort. Sometimes this would involve modifying 
        the post's HTML code because I would have to insert and edit iframe 
        tags. I also had to make sure paragraphs were properly formatted, and I 
        had to revise and edit the articles for any grammar or spelling mistakes.
      </p>

      <p>
        You can check out my article drafts below! Please note that because they 
        are indeed <i>drafts</i>, they are not fully representative of what was 
        actually published on the website as they were fully revised and edited
        on WordPress before officially being published.
      </p>

      <p>
        When my boss and I had left 24Our Music, my boss had saved all of my 
        posts from the website and sent them to me. The key for me is 
        <i>finding</i> where I've saved it, and hopefully I can share the final 
        copies of my articles instead of the drafts!
      </p>

      <p>
        <div>
          <img src={tfourmusic1} />
        </div>
        <div class="figure-caption">
          One of the publications for 24Our Music, with myself listed as a 
          Staff Writer.
        </div>
      </p>

      <p>
        <div>
          <img src={tfourmusic2} />
        </div>
        <div class="figure-caption">
          One of my articles published for the same issue as seen above! I was 
          particularly proud of this article, and the song I wrote on is one 
          of my favourites, which I still listen to today!
        </div>
      </p>

      <p>
        <form action="https://issuu.com/24ourmusic/docs" target="_blank">
          <input type="submit" value="View all 24Our Music Issues" />
        </form>
      </p>
    </Layout>
  );
}