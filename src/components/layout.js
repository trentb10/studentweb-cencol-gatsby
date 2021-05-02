import React from 'react';

import Navi from './navi';
import HeaderTitle from './header-title';
import HeaderImage from './header-image';
import Footer from './footer';

import style from '../styles/trentb10-style.css';

import image from '../images/logo.gif';

export default function Layout ({ children }) {
    return (
        <div>
            <Navi />
            <HeaderImage image = {image} />

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