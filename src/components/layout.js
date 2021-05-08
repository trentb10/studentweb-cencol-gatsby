import React from 'react';

import Navi from './navi';
import HeaderTitle from './header-title';
import HeaderImage from './header-image';
import Footer from './footer';

import style from '../styles/trentb10-style.css';

import HeaderImage1 from '../images/header-1.png';
import HeaderImage2 from '../images/header-2.png';
import HeaderImage3 from '../images/header-3.png';
import HeaderImage4 from '../images/header-4.png';
import HeaderImage5 from '../images/header-5.png';
import HeaderImage6 from '../images/header-6.png';

export default function Layout ({ title, children }) {
    let image = randomizeImage();
    
    return (
        <div>
            <Navi />
            <HeaderTitle title = {title} />
            <HeaderImage image = {image} />

            <div class="content-body">
                { children }
            </div>

            <Footer />
        </div>
    );
}

function randomizeImage() {
    let number = Math.floor(Math.random() * 6) + 1;
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
        case 6:
            image = HeaderImage6;
            break;
    }

    return image;
}

/**
 * 
 * trentb10 (ﾉ◕ヮ◕)ﾉ*:・ﾟ✧
 * 
 */