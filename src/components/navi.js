import React from 'react';
import { Link } from 'gatsby';

export default function Header() {
    return (
        <nav class="mainNavi">
            <ul class="ulNavi">
                <li class="title">Trent B's Dream World!</li>
                <li><Link to="/"><div class="item">Home</div></Link></li>
                <li><Link to="/about-me"><div class="item">About Me</div></Link></li>
                <li class="dropdown">
                    <Link to="/assignments"><div class="mainNavi dropbtn">Assignments</div></Link>
                    <div class="dropdown-content">
                        <Link to="/assignments/cencol"><div>Centennial College</div></Link>
                        <Link to="/assignments/uoft"><div>University of Toronto</div></Link>
                    </div>
                </li>
                <li class="dropdown">
                    <Link to="/works"><div class="dropbtn">Works</div></Link>
                    <div class="dropdown-content">
                        <Link to=""><div>24Our Music</div></Link>
                        <Link to=""><div>Amp the Sound</div></Link>
                        <Link to=""><div>Dollar Gamers</div></Link>
                        <Link to=""><div>Feed My Curiosity</div></Link>
                        <Link to=""><div>Personal Works</div></Link>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

/**
 * 
 * trentb10 (ﾉ◕ヮ◕)ﾉ*:・ﾟ✧
 * 
 */