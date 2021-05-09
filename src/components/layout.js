import React from 'react';

import Navi from './navi';
import HeaderTitle from './header-title';
import HeaderImage from './header-image';
import Footer from './footer';

import style from '../styles/trentb10-style.css';
import '@fontsource/pt-sans';

import HeaderImage1 from '../images/headers/header-1.png';
import HeaderImage2 from '../images/headers/header-2.png';
import HeaderImage3 from '../images/headers/header-3.png';
import HeaderImage4 from '../images/headers/header-4.png';
import HeaderImage5 from '../images/headers/header-5.png';

export default function Layout ({ title, children }) {
    let image = randomizeImage();
    
    return (
        <div>
            <HeaderImage image = {image} />
            <Navi />
            <HeaderTitle title = {title} />

            <div class="content-body">
                { children }
            </div>

            <Footer />
        </div>
    );
}

function randomizeImage() {
    let number = Math.floor(Math.random() * 5) + 1;
    let image;

    switch (number) {
        case 1:
            image = HeaderImage1;
            break;
        case 2:
            image = HeaderImage2;
            break;
        case 3:
            image = HeaderImage3;
            break;
        case 4:
            image = HeaderImage4;
            break;
        case 5:
            image = HeaderImage5;
            break;
    }

    return image;
}

/**
 * 
 * trentb10 (ﾉ◕ヮ◕)ﾉ*:・ﾟ✧
 * 
 */