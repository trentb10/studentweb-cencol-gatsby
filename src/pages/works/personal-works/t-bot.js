import React from 'react';
import Helmet from 'react-helmet';
import { withPrefix, Link } from 'gatsby';
import { siteMetadata } from '../../../../gatsby-config';

import Layout from '../../../components/layout';

// Image imports

import thumbnailTbot from "../../../images/works/personal-works/t-bot/thumbnail.png";
import tBotKick from "../../../images/works/personal-works/t-bot/tbotkick.png";
import tBotSay1 from "../../../images/works/personal-works/t-bot/tbotsay1.png";
import tBotSay2 from "../../../images/works/personal-works/t-bot/tbotsay2.png";
import tBotSay3 from "../../../images/works/personal-works/t-bot/tbotsay3.png";
import tBotSay4 from "../../../images/works/personal-works/t-bot/tbotsay4.png";
import tBotHelp from "../../../images/works/personal-works/t-bot/tbothelp.png";
import tBotPing from "../../../images/works/personal-works/t-bot/tbotping.png";
import tBotUserInfo from "../../../images/works/personal-works/t-bot/tbotuserinfo.png";
import tBotUlt from "../../../images/works/personal-works/t-bot/tbotult.png";

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

      <h2>Features</h2>

      <p>
        Here are some of the features I've been able to add to t-bot so far:
      </p>

      <h3>Basic Moderation</h3>

      <p>
        T-Bot supports the following basic moderation functions:
      </p>

      <p>
        <b>Kick</b>: A moderator/administrator can kick a user from a guild. A 
        reason can also be provided but is not required.
      </p>

      <p>
        <div>
          <img src={tBotKick} />
        </div>
        <div class="figure-caption">
          Once a moderator/administrator sends the command to kick a user, action 
          will be taken and the corresponding user will be kicked from the server.
          An embed is posted by the bot. This embed is also DM'd to the kicked 
          user.
        </div>
      </p>

      <p>
        The following moderation functions are still being implemented:
      </p>

      <p>
        <ul>
          <li>Ban</li>
          <li>Multi-Ban</li>
          <li>Mute</li>
        </ul>
      </p>

      <h3>Say</h3>

      <p>
        Using the <code>t-say &lt;message&gt;</code> command, you can have the 
        bot repeat a message in the given argument:
      </p>

      <p>
        <div>
          <img src={tBotSay1} />
        </div>
      </p>
      <p>
        <div>
          <img src={tBotSay2} />
        </div>
      </p>

      <p>
        Posting the message into other channels is also possible by using 
        <code>t-say &lt;channel&gt; &lt;message&gt;</code>:
      </p>

      <p>
        <div>
          <img src={tBotSay3} />
        </div>
      </p>
      <p>
        <div>
          <img src={tBotSay4} />
        </div>
      </p>

      <h3>Help</h3>

      <p>
        If anyone in the guild needs any assistance with any of the commands 
        from the bot, they can issue the <code>t-help &lt;command&gt;</code> command:
      </p>

      <p>
        <div>
          <img src={tBotHelp} />
        </div>
      </p>

      <h3>Ping</h3>

      <p>
        A simple command used to test connectivity with the bot and its server:
      </p>

      <p>
        <div>
          <img src={tBotPing} />
        </div>
      </p>

      <h3>Userinfo</h3>

      <p>
        (Partially implemented) By looking up a user's ID or tag (not yet 
        implemented) they can look up information regarding the user. Once 
        fully implemented, an embed will be the posted by the bot that shows 
        information related to the user like their profile picture, their guild 
        join date, their account creation date, and more.
      </p>

      <p>
        <div>
          <img src={tBotUserInfo} />
        </div>
      </p>

      <h3>Shenanigans</h3>

      <p>
        I've included some novelty commands just for some general fun with the 
        bot!
      </p>

      <p>
        <div>
          <img src={tBotUlt} />
        </div>
      </p>

      <h3>Aliases</h3>

      <p>
        Some commands also have a corresponding short-hand version for faster 
        productivity with the bot!
      </p>

    </Layout>
  );
}