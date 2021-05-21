import React from 'react';
import Helmet from 'react-helmet';
import { withPrefix, Link } from 'gatsby';
import { siteMetadata } from '../../../gatsby-config';

import Layout from '../../components/layout';

// Image Imports

import dgLogo from '../../images/works/dollar-gamers/dg-logo.png';

// Image Styling

export default function DollarGamers() {
  return (
    <Layout title="Dollar Gamers">
      <Helmet>
        <title>Dollar Gamers - {siteMetadata.title}</title>
      </Helmet>
      
      <p>
        <div>
          <img src={dgLogo} />
        </div>
        <div class="figure-caption">
          The logo for Dollar Gamers.
        </div>
      </p>

      <p>
        Dollar Gamers was another online magazine company started by my 
        friend/business partner and myself.
      </p>

      <p>
        Just like what I did with 24Our Music and Amp the Sound, I wrote review 
        and write-up articles, but this time it was on independent video games 
        that were cheap. 
      </p>

      <p>
        As we were starting up, we were focused on publishing as many articles 
        as we can, so I was able to choose most of the games that looked 
        interesting enough for me to review. If there were any games that 
        interested my friend, I would review those too!
      </p>

      <p>
        I also oversaw the site's social media accounts, especially  
        the <a href="https://twitter.com/TheDollarGamers">Twitter account</a>!
      </p>

      <p>
        You may also check out my drafts here! Keep in mind that because they 
        are drafts, they are not representative of the final published work and 
        they were edited on WordPress before being officially published.
      </p>

      <p>
        Although Dollar Gamers is technically still active, my friend and I have
        put more focus towards Feed My Curiosity!
      </p>
    </Layout>
  );
}