/**
 * 
 * Made with love and care by trentb10 (ﾉ◕ヮ◕)ﾉ*:・ﾟ✧
 * 
 * This page was first created as part as Assignment 1 for COMP213 | 190117
 * 
 */

import React from 'react';
import Helmet from 'react-helmet';
import { siteMetadata } from '../../gatsby-config';

import Layout from '../components/layout';

export default function Home() {
	return (
		<Layout title="Trent B on Gatsby!">
			<Helmet>
				<title>{siteMetadata.title}</title>
			</Helmet>

			<h2>Welcome to my home page!</h2>
					
			<p>
				I am a graduate from Centennial College with an Advanced Diploma 
				in Software Engineering Technology and from the University of 
				Toronto with an Honours Bachelor of Arts, majoring in Media 
				Studies and minoring in English and Psychology.
			</p>

			<p>
				The home page you are looking at right now was built as part 
				as <a 
					href="https://trentb10.github.io/studentweb-cencol-github-pages/comp213-002/assignment1/assignment1.html"
					target="_blank"
				>Assignment 1</a> for COMP213 at Centennial College, and it was 
				hosted on <a href="http://studentweb.cencol.ca/">studentweb.cencol.ca</a>.
			</p>
	
			<p>
				Please get started by using the navbar at the top!
			</p>
		</Layout>
	);
}

/**
 * 
 * trentb10 (ﾉ◕ヮ◕)ﾉ*:・ﾟ✧
 * 
 */