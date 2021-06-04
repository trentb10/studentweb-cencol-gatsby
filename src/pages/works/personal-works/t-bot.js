import React from 'react';
import Helmet from 'react-helmet';
import { withPrefix, Link } from 'gatsby';
import { siteMetadata } from '../../../../gatsby-config';

import Layout from '../../../components/layout';

// Image imports

import thumbnailTbot from "../../../images/works/personal-works/t-bot/thumbnail.png";

export default function TBot() {
  return (
    <Layout title="T-Bot Guild Moderation">
      <Helmet>
        <title>T-Bot Guild Moderation - {siteMetadata.title}</title>
      </Helmet>

      <p>
        <div>
          <img src={thumbnailTbot} />
        </div>
      </p>

      <p>
        T-Bot Guild Moderation is a Discord bot I am currently making!
      </p>

      <p>
        Although there are other bots out there that provide moderation tools 
        such as Dyno, Mee6, and Auttaja, I decided to make my own moderation 
        bot anyways to practice my JavaScript skills! T-Bot is written using 
        Discord.js.
      </p>
    </Layout>
  );
}