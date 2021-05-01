/**
 * 
 * Made with love and care by trentb10 (ﾉ◕ヮ◕)ﾉ*:・ﾟ✧
 * 
 * Last modified 210428
 * 
 * This page was first created as part as Assignment 1 for COMP213 | 190117
 * 
 */

import React from 'react';

import Navi from '../components/navi';
import HeaderTitle from '../components/header-title';
import HeaderImage from '../components/header-image';
import Footer from '../components/footer';

import style from '../styles/trentb10-style.css';

import image from '../images/logo.gif';

export default function Home() {
	return (
		<div>
			<Navi />

			<HeaderImage image = {image} />
			<HeaderTitle title = "Trent B's Dream World" />

			<div class="content-body">
				<h2>Welcome to my home page!</h2>
					
				<p>
					I am a graduate from Centennial College with an Advanced Diploma 
					in Software Engineering Technology and from the University of 
					Toronto with an Honours Bachelor of Arts, majoring in Media 
					Studies and minoring in English and Psychology.
				</p>

				<p>
					The home page you are looking at right now was built as part 
					as an assignment for COMP213 at Centennial College, and it was 
					hosted on <a href="http://studentweb.cencol.ca/">studentweb.cencol.ca</a>. 
					I have now expanded it into my own little site to host some 
					of my past works and assignments I did as a student at Centennial 
					and UofT; a writer with 24OurMusic, Amp the Sound, and Feed My 
					Curiosity, which I am currently writing scripts for; and of 
					course, my resume!
				</p>

				<p>
					This page is looking bland right now, but I hope to dress it 
					up with stuffs like a navigation bar to make this feel more like home.
				</p>
			</div>

			<Footer />
		</div>
	);
}

/**
 * 
 * trentb10 (ﾉ◕ヮ◕)ﾉ*:・ﾟ✧
 * 
 */