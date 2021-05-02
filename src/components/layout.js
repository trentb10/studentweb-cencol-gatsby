import React from 'react';

import Navi from './navi';
import HeaderTitle from './header-title';
import HeaderImage from './header-image';
import Footer from './footer';

import style from '../styles/trentb10-style.css';

import image from '../images/logo.gif';

export default function Layout ({ title, children }) {
    return (
        <div>
            <Navi />
            <HeaderImage image = {image} />
            <HeaderTitle title = {title} />

            <div class="content-body">
                { children }
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