import React from 'react';
import Helmet from 'react-helmet';
import { withPrefix, Link } from 'gatsby';
import { siteMetadata } from '../../../gatsby-config';
import Collapsible from 'react-collapsible';

import Layout from '../../components/layout';

// Images

import thumbnailTbot from "../../images/works/personal-works/t-bot/thumbnail.png";
import thumbnailTbog from "../../images/works/personal-works/trentb-on-gatsby/thumbnail.png";

export default function PersonalWorks() {
  return (
    <Layout title="Personal Works">
      <Helmet>
        <title>Personal Works - {siteMetadata.title}</title>
      </Helmet>

      <p>
        Here's all of the personal works and projects I have undertaken! 
      </p>

      <h2>Select a project:</h2>
      <Link to="t-bot">
        <div class="personal-work-container">
          <div class="personal-work-thumbnail">
            <img src={thumbnailTbot} />
          </div>
          <div class="personal-work-info-container">
            <div class="personal-work-info-title">
              T-Bot Guild Moderation
            </div>
            <span class="personal-work-info-divider" />
            <div class="personal-work-info-desc">
              A Discord guild moderation bot I am currently making!
            </div>
          </div>
        </div>
      </Link>
      
      <Link to="trentb-on-gatsby">
        <div class="personal-work-container">
          <div class="personal-work-thumbnail">
            <img src={thumbnailTbog} />
          </div>
          <div class="personal-work-info-container">
            <div class="personal-work-info-title">
              Trent B on Gatsby!
            </div>
            <span class="personal-work-info-divider" />
            <div class="personal-work-info-desc">
              My personal website made using GatsbyJS!
            </div>
          </div>
        </div>
      </Link>

    </Layout>
  );
}